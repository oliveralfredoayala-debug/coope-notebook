"use client";

import { use, useEffect, useMemo, useState } from "react";
import {
  collection,
  doc,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { ensureAnonymousUser } from "@/lib/auth";
import { db } from "@/lib/firebase";
import { findRoomByCode } from "@/lib/rooms";
import type { Activity, Room } from "@/lib/types";
import { LiveResults } from "@/components/LiveResults";

interface PageProps {
  params: Promise<{ code: string }>;
}

export default function ProjectorPage({ params }: PageProps) {
  const { code } = use(params);
  const [room, setRoom] = useState<Room | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [message, setMessage] = useState("Conectando…");
  const roomUrl = useMemo(() => {
    const base =
      process.env.NEXT_PUBLIC_APP_URL ||
      (typeof window !== "undefined" ? window.location.origin : "");
    return `${base}/sala/${code.toUpperCase()}`;
  }, [code]);

  useEffect(() => {
    let roomUnsubscribe: (() => void) | undefined;
    let activityUnsubscribe: (() => void) | undefined;

    async function connect() {
      await ensureAnonymousUser();
      const found = await findRoomByCode(code);

      if (!found) {
        setMessage("No encontramos la sala.");
        return;
      }

      setRoom(found);
      setMessage("");

      roomUnsubscribe = onSnapshot(doc(db, "rooms", found.id), (snapshot) => {
        if (!snapshot.exists()) return;
        setRoom({
          id: snapshot.id,
          ...(snapshot.data() as Omit<Room, "id">),
        });
      });

      activityUnsubscribe = onSnapshot(
        query(
          collection(db, "rooms", found.id, "activities"),
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
    }

    connect();

    return () => {
      roomUnsubscribe?.();
      activityUnsubscribe?.();
    };
  }, [code]);

  const active = activities.find(
    (activity) => activity.id === room?.activeActivityId,
  );

  return (
    <main className="shell section stack">
      <div className="row">
        <div className="brand">
          Coope<strong>EnVivo</strong>
        </div>
        <div className="spacer" />
        <span className="room-code" style={{ fontSize: "2rem" }}>
          {code.toUpperCase()}
        </span>
      </div>

      {message ? <div className="notice">{message}</div> : null}

      {room && !active ? (
        <section className="grid two hero-split" style={{ alignItems: "center", gap: "2rem", marginTop: "2rem" }}>
          <div className="stack" style={{ gap: "1.5rem" }}>
            <span className="pill">{room.title}</span>
            <h1 style={{ fontSize: "3rem", margin: 0, lineHeight: 1.2 }}>Unirse al taller</h1>
            <p className="muted" style={{ fontSize: "1.5rem", margin: 0 }}>
              1. Escanea el código QR con tu celular.
            </p>
            <p className="muted" style={{ fontSize: "1.5rem", margin: 0 }}>
              2. O ingresa a: <strong style={{ color: "var(--color-primary, #2e7d32)" }}>{roomUrl.split("/sala/")[0]}</strong>
            </p>
            <p className="muted" style={{ fontSize: "1.5rem", margin: 0 }}>
              3. Escribe el código: <strong style={{ fontSize: "1.8rem", color: "var(--color-text, #111)" }}>{code.toUpperCase()}</strong>
            </p>
          </div>
          <div className="card" style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "2rem", background: "white", borderRadius: "12px", width: "fit-content", margin: "0 auto", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(roomUrl)}`}
              alt={`QR Code to join room ${code}`}
              style={{ width: "250px", height: "250px" }}
            />
            <span className="muted" style={{ marginTop: "1rem", fontSize: "1rem" }}>Esperando que comience la actividad...</span>
          </div>
        </section>
      ) : null}

      {room && active ? (
        <>
          <section className="hero">
            <span className="pill">{room.title}</span>
            <h1>{active.prompt}</h1>
          </section>
          <LiveResults
            roomId={room.id}
            activity={active}
            visible={room.showResults}
          />
        </>
      ) : null}
    </main>
  );
}
