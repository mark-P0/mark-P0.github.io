import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { PORTRAIT_FILENAME, RESUME_FILENAME } from "../strings.ts";
import { app } from "./app.ts";

const storage = getStorage(app);

export async function getResume(): Promise<string> {
  const resumeRef = ref(storage, RESUME_FILENAME);
  return await getDownloadURL(resumeRef);
}

export async function getPortrait(): Promise<string> {
  const portraitRef = ref(storage, PORTRAIT_FILENAME);
  return await getDownloadURL(portraitRef);
}
