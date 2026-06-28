import type { Timestamp } from "firebase/firestore";

export type ActivityType = "single" | "multiple" | "scale" | "word" | "open";

export interface Room {
  id: string;
  code: string;
  title: string;
  ownerUid: string;
  publicJoin: boolean;
  activeActivityId: string | null;
  showResults: boolean;
  status: "draft" | "live" | "closed";
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}

export interface Activity {
  id: string;
  title: string;
  prompt: string;
  type: ActivityType;
  options: string[];
  scaleMin?: number;
  scaleMax?: number;
  status: "draft" | "open" | "closed";
  order: number;
  createdAt?: Timestamp;
}

export interface Participant {
  uid: string;
  displayName: string;
  joinedAt?: Timestamp;
  lastSeenAt?: Timestamp;
}

export interface LiveResponse {
  uid: string;
  activityId: string;
  displayName: string;
  value: string | string[] | number;
  isApproved?: boolean;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
}
