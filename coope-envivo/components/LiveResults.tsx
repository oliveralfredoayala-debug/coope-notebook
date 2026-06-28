"use client";

import { useEffect, useMemo, useState } from "react";
import {
  collection,
  onSnapshot,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Activity, LiveResponse } from "@/lib/types";

interface Props {
  roomId: string;
  activity: Activity;
  visible: boolean;
}

export function LiveResults({ roomId, activity, visible }: Props) {
  const [responses, setResponses] = useState<LiveResponse[]>([]);

  useEffect(() => {
    return onSnapshot(
      collection(
        db,
        "rooms",
        roomId,
        "activities",
        activity.id,
        "responses",
      ),
      (snapshot) => {
        setResponses(
          snapshot.docs.map((responseDocument) => ({
            ...(responseDocument.data() as LiveResponse),
          })),
        );
      },
    );
  }, [activity.id, roomId]);

  const approvedResponses = useMemo(() => {
    return responses.filter((response) => response.isApproved !== false);
  }, [responses]);

  const counts = useMemo(() => {
    const result = new Map<string, number>();

    for (const response of approvedResponses) {
      const values = Array.isArray(response.value)
        ? response.value
        : [String(response.value)];

      for (const value of values) {
        result.set(value, (result.get(value) || 0) + 1);
      }
    }

    return [...result.entries()].sort((a, b) => b[1] - a[1]);
  }, [approvedResponses]);

  if (!visible) {
    return (
      <section className="card">
        <h2>{responses.length} respuestas recibidas</h2>
        <p className="muted">
          Los resultados están ocultos hasta que el facilitador los muestre.
        </p>
      </section>
    );
  }

  if (activity.type === "open" || activity.type === "word") {
    return (
      <section className="grid three">
        {approvedResponses.map((response, index) => (
          <article className="card" key={`${response.uid}-${index}`}>
            <p>{String(response.value)}</p>
            <small className="muted">{response.displayName}</small>
          </article>
        ))}
      </section>
    );
  }

  const max = Math.max(1, ...counts.map(([, count]) => count));

  return (
    <section className="card stack">
      <h2>{approvedResponses.length} respuestas</h2>
      {counts.map(([label, count]) => (
        <div className="result-row" key={label}>
          <strong>{label}</strong>
          <div className="result-bar" aria-hidden="true">
            <span style={{ width: `${(count / max) * 100}%` }} />
          </div>
          <span>{count}</span>
        </div>
      ))}
    </section>
  );
}
