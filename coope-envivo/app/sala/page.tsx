"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/Header";
import { normalizeRoomCode } from "@/lib/room-code";

export default function JoinPage() {
  const [code, setCode] = useState("");
  const router = useRouter();

  function enterRoom() {
    const normalized = normalizeRoomCode(code);
    if (normalized) router.push(`/sala/${normalized}`);
  }

  return (
    <>
      <Header />
      <main className="shell section">
        <section className="card stack" style={{ maxWidth: 620 }}>
          <span className="pill">Participantes</span>
          <h1>Entrar a una sala</h1>
          <div className="field">
            <label htmlFor="code">Código</label>
            <input
              id="code"
              inputMode="text"
              autoCapitalize="characters"
              value={code}
              onChange={(event) => setCode(normalizeRoomCode(event.target.value))}
              onKeyDown={(event) => {
                if (event.key === "Enter") enterRoom();
              }}
              placeholder="ABC123"
            />
          </div>
          <button className="btn primary" onClick={enterRoom}>
            Continuar
          </button>
        </section>
      </main>
    </>
  );
}
