import { child, get, getDatabase, ref } from "firebase/database";
import { app } from "./app.ts";

const db = getDatabase(app);

export type Project = {
  description: string;
  livePreview?: string;
  name: string;
  screenshot: string;
  sourceCode: string;
  tags?: string[];
};

export async function getProjects(): Promise<Project[]> {
  const dbRef = ref(db);
  const snapshot = await get(child(dbRef, "projects"));
  if (!snapshot.exists()) {
    console.warn("Project data does not exist!");
    return [];
  }

  return Object.values(snapshot.val());
}
