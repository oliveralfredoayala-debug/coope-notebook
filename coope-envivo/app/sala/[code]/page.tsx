"use client";

import { use, useEffect, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { ensureAnonymousUser } from "@/lib/auth";
import { db } from "@/lib/firebase";
import { findRoomByCode, registerParticipant } from "@/lib/rooms";
import type { Activity, Room } from "@/lib/types";
import { ParticipantActivity } from "@/components/ParticipantActivity";

interface PageProps {
  params: Promise<{ code: string }>;
}

export default function RoomPage({ params }: PageProps) {
  const { code } = use(params);
  const [room, setRoom] = useState<Room | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [uid, setUid] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [joined, setJoined] = useState(false);
  const [message, setMessage] = useState("Buscando sala…");

  useEffect(() => {
    let roomUnsubscribe: (() => void) | undefined;
    let activityUnsubscribe: (() => void) | undefined;

    async function connect() {
      try {
        const user = await ensureAnonymousUser();
        setUid(user.uid);

        const foundRoom = await findRoomByCode(code);
        if (!foundRoom) {
          setMessage("No encontramos una sala activa con ese código.");
          return;
        }

        setRoom(foundRoom);
        setMessage("");

        roomUnsubscribe = onSnapshot(
          doc(db, "rooms", foundRoom.id),
          (snapshot) => {
            if (!snapshot.exists()) return;
            setRoom({
              id: snapshot.id,
              ...(snapshot.data() as Omit<Room, "id">),
            });
          },
        );

        activityUnsubscribe = onSnapshot(
          query(
            collection(db, "rooms", foundRoom.id, "activities"),
            orderBy("order", "asc"),
          ),
          (snapshot) => {
            setActivities(
              snapshot.docs.map((activityDocument) => ({
                id: activityDocument.id,
                ...(activityDocument.data() as Omit<Activity, "id">),
              })),
            );
          },
        );
      } catch (error) {
        setMessage(
          error instanceof Error
            ? error.message
            : "No se pudo conectar con la sala.",
        );
      }
    }

    connect();

    return () => {
      roomUnsubscribe?.();
      activityUnsubscribe?.();
    };
  }, [code]);

  // Recargar displayName de LocalStorage si ya había ingresado
  useEffect(() => {
    if (!room?.id || !uid) return;

    const storedName = localStorage.getItem("coope-envivo:displayName");
    const hasJoined = localStorage.getItem(`coope-envivo:joined:${code}`);

    if (storedName && hasJoined === "true") {
      setDisplayName(storedName);
      setJoined(true);
      registerParticipant(room.id, uid, storedName).catch(console.error);
    }
  }, [room?.id, uid, code]);



  async function join() {
    if (!room || !uid || !displayName.trim()) return;
    await registerParticipant(room.id, uid, displayName);
    localStorage.setItem("coope-envivo:displayName", displayName);
    localStorage.setItem(`coope-envivo:joined:${code}`, "true");
    setJoined(true);
  }

  const activeActivity = activities.find(
    (activity) => activity.id === room?.activeActivityId,
  );

  return (
    <main className="shell section stack">
      <div className="row">
        <div className="brand">
          Coope<strong>EnVivo</strong>
        </div>
        <span className="pill">Sala {code.toUpperCase()}</span>
      </div>

      {message ? <div className="notice">{message}</div> : null}

      {room && !joined ? (
        <section className="card stack" style={{ maxWidth: 640 }}>
          <h1>{room.title}</h1>
          <p className="muted">
            Escribí un nombre o el número de tu equipo.
          </p>
          <div className="field">
            <label htmlFor="displayName">Nombre visible</label>
            <input
              id="displayName"
              maxLength={40}
              value={displayName}
              onChange={(event) => setDisplayName(event.target.value)}
              placeholder="Equipo 4"
            />
          </div>
          <button
            className="btn primary"
            disabled={!displayName.trim()}
            onClick={join}
          >
            Entrar
          </button>
        </section>
      ) : null}

      {room && joined && !activeActivity ? (
        <section className="card">
          <span className="pill">Conectado</span>
          <h1>Esperando la siguiente actividad</h1>
          <p className="muted">
            La pantalla cambiará automáticamente cuando el facilitador abra una
            pregunta.
          </p>
        </section>
      ) : null}

      {room && joined && activeActivity ? (
        <ParticipantActivity
          roomId={room.id}
          activity={activeActivity}
          uid={uid}
          displayName={displayName}
        />
      ) : null}
    </main>
  );
}
