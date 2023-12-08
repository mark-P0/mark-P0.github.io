import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { app } from "./app.ts";
import { PORTRAIT_FILENAME, RESUME_FILENAME, decrypt } from "../strings.ts";

const storage = getStorage(app);

export async function getResume() {
  const resumeRef = ref(storage, decrypt(RESUME_FILENAME));
  const url = await getDownloadURL(resumeRef);
  return url;
}

export async function getPortrait() {
  const portraitRef = ref(storage, decrypt(PORTRAIT_FILENAME));
  const url = await getDownloadURL(portraitRef);
  return url;
}
