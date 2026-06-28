"use client";

import { useMemo, useState } from "react";
import {
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import type { Activity, LiveResponse } from "@/lib/types";

interface Props {
  roomId: string;
  activity: Activity;
  uid: string;
  displayName: string;
}

export function ParticipantActivity({
  roomId,
  activity,
  uid,
  displayName,
}: Props) {
  const [singleValue, setSingleValue] = useState("");
  const [multipleValue, setMultipleValue] = useState<string[]>([]);
  const [textValue, setTextValue] = useState("");
  const [scaleValue, setScaleValue] = useState(3);
  const [message, setMessage] = useState("");

  const value = useMemo<LiveResponse["value"]>(() => {
    if (activity.type === "multiple") return multipleValue;
    if (activity.type === "scale") return scaleValue;
    if (activity.type === "single") return singleValue;
    return textValue.trim();
  }, [activity.type, multipleValue, scaleValue, singleValue, textValue]);

  async function submit() {
    if (
      value === "" ||
      (Array.isArray(value) && value.length === 0)
    ) {
      setMessage("Elegí o escribí una respuesta.");
      return;
    }

    await setDoc(
      doc(
        db,
        "rooms",
        roomId,
        "activities",
        activity.id,
        "responses",
        uid,
      ),
      {
        uid,
        activityId: activity.id,
        displayName,
        value,
        isApproved: !(activity.type === "open" || activity.type === "word"),
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      },
      { merge: true },
    );

    setMessage("Respuesta enviada. Podés cambiarla mientras siga abierta.");
  }

  return (
    <section className="card stack">
      <span className="pill">Actividad en vivo</span>
      <h1>{activity.title}</h1>
      <p>{activity.prompt}</p>

      {activity.type === "single" ? (
        <div className="stack">
          {activity.options.map((option) => (
            <label className="option" key={option}>
              <input
                type="radio"
                name="single-response"
                value={option}
                checked={singleValue === option}
                onChange={() => setSingleValue(option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      ) : null}

      {activity.type === "multiple" ? (
        <div className="stack">
          {activity.options.map((option) => (
            <label className="option" key={option}>
              <input
                type="checkbox"
                checked={multipleValue.includes(option)}
                onChange={(event) => {
                  setMultipleValue((current) =>
                    event.target.checked
                      ? [...current, option]
                      : current.filter((item) => item !== option),
                  );
                }}
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      ) : null}

      {activity.type === "scale" ? (
        <div className="field">
          <label htmlFor="scale">
            Valor: <strong>{scaleValue}</strong>
          </label>
          <input
            id="scale"
            type="range"
            min={activity.scaleMin || 1}
            max={activity.scaleMax || 5}
            value={scaleValue}
            onChange={(event) => setScaleValue(Number(event.target.value))}
          />
        </div>
      ) : null}

      {activity.type === "word" || activity.type === "open" ? (
        <div className="field">
          <label htmlFor="textResponse">
            {activity.type === "word" ? "Una palabra o frase breve" : "Respuesta"}
          </label>
          <textarea
            id="textResponse"
            maxLength={activity.type === "word" ? 60 : 500}
            value={textValue}
            onChange={(event) => setTextValue(event.target.value)}
          />
        </div>
      ) : null}

      <button className="btn primary" onClick={submit}>
        Enviar respuesta
      </button>
      {message ? <p className="muted">{message}</p> : null}
    </section>
  );
}
