"use client";

import { useEffect, useMemo, useState } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from "firebase/auth";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { auth, db } from "@/lib/firebase";
import { createRoomCode } from "@/lib/room-code";
import type { Activity, ActivityType, LiveResponse, Participant, Room } from "@/lib/types";
import { Header } from "@/components/Header";
import { LiveResults } from "@/components/LiveResults";

const EMPTY_ACTIVITY = {
  title: "",
  prompt: "",
  type: "single" as ActivityType,
  options: "",
};

export default function FacilitatorPage() {
  const [user, setUser] = useState<User | null>(null);
  const [authReady, setAuthReady] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [room, setRoom] = useState<Room | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [responses, setResponses] = useState<LiveResponse[]>([]);
  const [participants, setParticipants] = useState<Participant[]>([]);
  const [roomTitle, setRoomTitle] = useState("Taller en vivo");
  const [draft, setDraft] = useState(EMPTY_ACTIVITY);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthReady(true);
    });
  }, []);

  useEffect(() => {
    if (!room?.id) return;

    const activityQuery = query(
      collection(db, "rooms", room.id, "activities"),
      orderBy("order", "asc"),
    );

    return onSnapshot(activityQuery, (snapshot) => {
      setActivities(
        snapshot.docs.map((activityDocument) => ({
          id: activityDocument.id,
          ...(activityDocument.data() as Omit<Activity, "id">),
        })),
      );
    });
  }, [room?.id]);

  // Escuchar respuestas de la actividad activa
  useEffect(() => {
    if (!room?.id || !room.activeActivityId) {
      setResponses([]);
      return;
    }

    const responsesQuery = collection(
      db,
      "rooms",
      room.id,
      "activities",
      room.activeActivityId,
      "responses"
    );

    return onSnapshot(responsesQuery, (snapshot) => {
      setResponses(
        snapshot.docs.map((doc) => ({
          ...(doc.data() as LiveResponse),
        }))
      );
    });
  }, [room?.id, room?.activeActivityId]);

  // Escuchar todos los participantes de la sala para la presencia
  useEffect(() => {
    if (!room?.id) {
      setParticipants([]);
      return;
    }

    const participantsQuery = collection(db, "rooms", room.id, "participants");

    return onSnapshot(participantsQuery, (snapshot) => {
      setParticipants(
        snapshot.docs.map((doc) => ({
          ...(doc.data() as Participant),
        }))
      );
    });
  }, [room?.id]);

  // Cantidad total de participantes registrados en la sala
  const activeParticipantsCount = useMemo(() => {
    return participants.length;
  }, [participants]);

  // Encontrar la actividad activa actual
  const activeActivity = useMemo(() => {
    return activities.find((item) => item.id === room?.activeActivityId) || null;
  }, [activities, room?.activeActivityId]);

  async function approveResponse(responseUid: string, approve: boolean) {
    if (!room?.id || !room.activeActivityId) return;
    await updateDoc(
      doc(
        db,
        "rooms",
        room.id,
        "activities",
        room.activeActivityId,
        "responses",
        responseUid
      ),
      { isApproved: approve }
    );
  }

  async function deleteResponse(responseUid: string) {
    if (!room?.id || !room.activeActivityId) return;
    await deleteDoc(
      doc(
        db,
        "rooms",
        room.id,
        "activities",
        room.activeActivityId,
        "responses",
        responseUid
      )
    );
  }

  async function downloadResultsCSV() {
    if (!room?.id) return;
    setBusy(true);
    try {
      let csvContent = "\uFEFFActividad,Tipo de Pregunta,Participante,Respuesta,Fecha\n";
      
      for (const act of activities) {
        const respSnapshot = await getDocs(
          collection(db, "rooms", room.id, "activities", act.id, "responses")
        );
        
        respSnapshot.forEach((docSnap) => {
          const data = docSnap.data();
          const pName = data.displayName || "Anónimo";
          const pValue = Array.isArray(data.value)
            ? data.value.join(" | ")
            : String(data.value);
          const dateStr = data.createdAt ? new Date(data.createdAt.toMillis()).toLocaleString() : "";
          
          // Escape strings for CSV
          const escapedAct = `"${act.title.replace(/"/g, '""')}: ${act.prompt.replace(/"/g, '""')}"`;
          const escapedType = `"${act.type}"`;
          const escapedName = `"${pName.replace(/"/g, '""')}"`;
          const escapedVal = `"${pValue.replace(/"/g, '""')}"`;
          
          csvContent += `${escapedAct},${escapedType},${escapedName},${escapedVal},${dateStr}\n`;
        });
      }
      
      // Trigger download
      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.setAttribute("href", url);
      link.setAttribute("download", `resultados_${room.code}_${room.title.replace(/\s+/g, "_")}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error exporting CSV:", error);
      alert("No se pudieron descargar los resultados.");
    } finally {
      setBusy(false);
    }
  }

  const roomUrl = useMemo(() => {
    if (!room) return "";
    const base =
      process.env.NEXT_PUBLIC_APP_URL ||
      (typeof window !== "undefined" ? window.location.origin : "");
    return `${base}/sala/${room.code}`;
  }, [room]);

  async function handleLogin(mode: "login" | "create") {
    setAuthError("");
    setBusy(true);
    try {
      if (mode === "create") {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : "No se pudo iniciar sesión.");
    } finally {
      setBusy(false);
    }
  }

  async function createRoom() {
    if (!user) return;
    setBusy(true);

    try {
      const roomReference = doc(collection(db, "rooms"));
      const code = createRoomCode();

      const newRoom: Omit<Room, "id"> = {
        code,
        title: roomTitle.trim() || "Taller en vivo",
        ownerUid: user.uid,
        publicJoin: true,
        activeActivityId: null,
        showResults: false,
        status: "live",
        createdAt: serverTimestamp() as Room["createdAt"],
        updatedAt: serverTimestamp() as Room["updatedAt"],
      };

      await setDoc(roomReference, newRoom);
      setRoom({ id: roomReference.id, ...newRoom });
    } finally {
      setBusy(false);
    }
  }

  async function addActivity() {
    if (!room || !draft.prompt.trim()) return;

    const options = draft.options
      .split("\n")
      .map((option) => option.trim())
      .filter(Boolean);

    await addDoc(collection(db, "rooms", room.id, "activities"), {
      title: draft.title.trim() || "Actividad",
      prompt: draft.prompt.trim(),
      type: draft.type,
      options,
      scaleMin: 1,
      scaleMax: 5,
      status: "draft",
      order: activities.length + 1,
      createdAt: serverTimestamp(),
    });

    setDraft(EMPTY_ACTIVITY);
  }

  async function activateActivity(activityId: string) {
    if (!room) return;

    await updateDoc(doc(db, "rooms", room.id), {
      activeActivityId: activityId,
      showResults: false,
      updatedAt: serverTimestamp(),
    });

    for (const activity of activities) {
      await updateDoc(
        doc(db, "rooms", room.id, "activities", activity.id),
        { status: activity.id === activityId ? "open" : "closed" },
      );
    }

    setRoom({
      ...room,
      activeActivityId: activityId,
      showResults: false,
    });
  }

  async function toggleResults() {
    if (!room) return;
    const next = !room.showResults;
    await updateDoc(doc(db, "rooms", room.id), {
      showResults: next,
      updatedAt: serverTimestamp(),
    });
    setRoom({ ...room, showResults: next });
  }

  if (!authReady) {
    return <main className="shell section">Cargando…</main>;
  }

  if (!user) {
    return (
      <>
        <Header />
        <main className="shell section">
          <div className="card stack" style={{ maxWidth: 560 }}>
            <h1>Acceso del facilitador</h1>
            <p className="muted">
              Usa correo y contraseña. Activa este método en Firebase Authentication.
            </p>
            <div className="field">
              <label htmlFor="email">Correo</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="field">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                type="password"
                minLength={6}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            {authError ? <p className="error">{authError}</p> : null}
            <div className="row">
              <button
                className="btn primary"
                disabled={busy}
                onClick={() => handleLogin("login")}
              >
                Entrar
              </button>
              <button
                className="btn"
                disabled={busy}
                onClick={() => handleLogin("create")}
              >
                Crear cuenta
              </button>
            </div>
          </div>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="shell section stack">
        <div className="row">
          <div>
            <span className="pill">Facilitador</span>
            <h1>Panel de sala</h1>
          </div>
          <div className="spacer" />
          <button className="btn" onClick={() => signOut(auth)}>
            Cerrar sesión
          </button>
        </div>

        {!room ? (
          <section className="card stack">
            <h2>Crear una sala</h2>
            <div className="field">
              <label htmlFor="roomTitle">Nombre del taller</label>
              <input
                id="roomTitle"
                value={roomTitle}
                onChange={(event) => setRoomTitle(event.target.value)}
              />
            </div>
            <button className="btn primary" disabled={busy} onClick={createRoom}>
              Crear sala en vivo
            </button>
          </section>
        ) : (
          <>
            <section className="grid two">
              <div className="card" style={{ display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                <div className="stack" style={{ flex: 1 }}>
                  <span className="pill">Código de sala</span>
                  <div className="room-code">{room.code}</div>
                  <p className="muted" style={{ wordBreak: "break-all" }}>{roomUrl}</p>
                  <div className="row" style={{ marginTop: "1rem" }}>
                    <button
                      className="btn"
                      onClick={() => navigator.clipboard.writeText(roomUrl)}
                    >
                      Copiar enlace
                    </button>
                    <a
                      className="btn"
                      href={`/proyector/${room.code}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Abrir proyector
                    </a>
                    <button
                      className="btn"
                      disabled={busy}
                      onClick={downloadResultsCSV}
                    >
                      Descargar CSV
                    </button>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "0.5rem", background: "white", borderRadius: "8px", border: "1px solid #ddd", width: "110px", height: "110px", alignSelf: "center" }}>
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${encodeURIComponent(roomUrl)}`}
                    alt="Room QR Code"
                    style={{ width: "100px", height: "100px" }}
                  />
                </div>
              </div>
              <div className="card stack">
                <h2>Control en vivo</h2>
                <p>
                  Actividad activa:{" "}
                  <strong>
                    {activities.find((item) => item.id === room.activeActivityId)
                      ?.title || "Ninguna"}
                  </strong>
                </p>
                <button className="btn amber" onClick={toggleResults}>
                  {room.showResults ? "Ocultar resultados" : "Mostrar resultados"}
                </button>
              </div>
            </section>

            {room.activeActivityId ? (
              <section className="card stack" style={{ marginTop: "1.5rem" }}>
                <div className="row" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <span className="pill">Monitoreo en vivo</span>
                    <h2>
                      Respuestas Recibidas: {responses.length}
                    </h2>
                  </div>
                  <div className="card" style={{ padding: "0.5rem 1rem", margin: 0, backgroundColor: "rgba(0,0,0,0.05)" }}>
                    Conectados: <strong>{activeParticipantsCount}</strong>
                  </div>
                </div>

                {activeActivity && (activeActivity.type === "open" || activeActivity.type === "word") ? (
                  <div className="stack" style={{ gap: "1rem", marginTop: "1rem" }}>
                    <h3>Moderación de Respuestas ({activeActivity.title})</h3>
                    {responses.length === 0 ? (
                      <p className="muted">Esperando respuestas de los participantes...</p>
                    ) : (
                      <div className="grid two" style={{ gap: "1rem" }}>
                        {responses.map((resp) => (
                          <div
                            key={resp.uid}
                            className="card"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              justifyContent: "space-between",
                              borderLeft: `4px solid ${
                                resp.isApproved ? "var(--color-primary, #2e7d32)" : "#ff9800"
                              }`,
                              padding: "1rem",
                              borderRadius: "6px",
                              backgroundColor: "var(--color-bg-card, #ffffff)",
                              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                            }}
                          >
                            <div>
                              <p style={{ fontSize: "1.1rem", margin: "0 0 0.5rem 0", fontWeight: 500 }}>
                                "{String(resp.value)}"
                              </p>
                              <small className="muted">Por: {resp.displayName}</small>
                            </div>
                            <div className="row" style={{ marginTop: "1rem", display: "flex", gap: "0.5rem" }}>
                              {!resp.isApproved ? (
                                <button
                                  className="btn primary small"
                                  style={{ padding: "0.3rem 0.8rem", fontSize: "0.9rem" }}
                                  onClick={() => approveResponse(resp.uid, true)}
                                >
                                  Aprobar
                                </button>
                              ) : (
                                <button
                                  className="btn small"
                                  style={{ padding: "0.3rem 0.8rem", fontSize: "0.9rem" }}
                                  onClick={() => approveResponse(resp.uid, false)}
                                >
                                  Ocultar
                                </button>
                              )}
                              <button
                                className="btn danger small"
                                style={{
                                  padding: "0.3rem 0.8rem",
                                  fontSize: "0.9rem",
                                  backgroundColor: "#d32f2f",
                                  color: "white",
                                  border: "none",
                                  borderRadius: "4px",
                                }}
                                onClick={() => deleteResponse(resp.uid)}
                              >
                                Eliminar
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ) : activeActivity ? (
                  <div style={{ marginTop: "1.5rem" }}>
                    <h3>Vista Previa de Resultados ({activeActivity.title})</h3>
                    <div className="card" style={{ padding: "1rem", marginTop: "0.5rem" }}>
                      <LiveResults
                        roomId={room.id}
                        activity={activeActivity}
                        visible={true}
                      />
                    </div>
                  </div>
                ) : null}
              </section>
            ) : null}

            <section className="grid two">
              <div className="card stack">
                <h2>Nueva actividad</h2>
                <div className="field">
                  <label htmlFor="activityTitle">Título</label>
                  <input
                    id="activityTitle"
                    value={draft.title}
                    onChange={(event) =>
                      setDraft({ ...draft, title: event.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <label htmlFor="activityPrompt">Pregunta</label>
                  <textarea
                    id="activityPrompt"
                    value={draft.prompt}
                    onChange={(event) =>
                      setDraft({ ...draft, prompt: event.target.value })
                    }
                  />
                </div>
                <div className="field">
                  <label htmlFor="activityType">Tipo</label>
                  <select
                    id="activityType"
                    value={draft.type}
                    onChange={(event) =>
                      setDraft({
                        ...draft,
                        type: event.target.value as ActivityType,
                      })
                    }
                  >
                    <option value="single">Opción única</option>
                    <option value="multiple">Selección múltiple</option>
                    <option value="scale">Escala 1–5</option>
                    <option value="word">Palabra breve</option>
                    <option value="open">Respuesta abierta</option>
                  </select>
                </div>
                {draft.type === "single" || draft.type === "multiple" ? (
                  <div className="field">
                    <label htmlFor="activityOptions">
                      Opciones, una por línea
                    </label>
                    <textarea
                      id="activityOptions"
                      value={draft.options}
                      onChange={(event) =>
                        setDraft({ ...draft, options: event.target.value })
                      }
                    />
                  </div>
                ) : null}
                <button className="btn primary" onClick={addActivity}>
                  Agregar actividad
                </button>
              </div>

              <div className="card stack">
                <h2>Actividades</h2>
                {activities.length === 0 ? (
                  <p className="muted">Todavía no hay actividades.</p>
                ) : (
                  activities.map((activity) => (
                    <article className="card" key={activity.id}>
                      <span className="pill">{activity.type}</span>
                      <h3>{activity.title}</h3>
                      <p>{activity.prompt}</p>
                      <button
                        className={
                          activity.id === room.activeActivityId
                            ? "btn amber"
                            : "btn primary"
                        }
                        onClick={() => activateActivity(activity.id)}
                      >
                        {activity.id === room.activeActivityId
                          ? "Actividad activa"
                          : "Abrir actividad"}
                      </button>
                    </article>
                  ))
                )}
              </div>
            </section>
          </>
        )}
      </main>
    </>
  );
}
