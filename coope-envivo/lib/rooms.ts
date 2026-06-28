import {
  collection,
  doc,
  getDocs,
  limit,
  query,
  serverTimestamp,
  setDoc,
  where,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { normalizeRoomCode } from "@/lib/room-code";
import type { Room } from "@/lib/types";

export async function findRoomByCode(code: string): Promise<Room | null> {
  const normalized = normalizeRoomCode(code);
  const roomQuery = query(
    collection(db, "rooms"),
    where("publicJoin", "==", true),
    where("code", "==", normalized),
    limit(1),
  );

  const snapshot = await getDocs(roomQuery);
  if (snapshot.empty) return null;

  const roomDocument = snapshot.docs[0];
  return {
    id: roomDocument.id,
    ...(roomDocument.data() as Omit<Room, "id">),
  };
}

export async function registerParticipant(
  roomId: string,
  uid: string,
  displayName: string,
): Promise<void> {
  await setDoc(
    doc(db, "rooms", roomId, "participants", uid),
    {
      uid,
      displayName: displayName.trim().slice(0, 40),
      joinedAt: serverTimestamp(),
      lastSeenAt: serverTimestamp(),
    },
    { merge: true },
  );
}
