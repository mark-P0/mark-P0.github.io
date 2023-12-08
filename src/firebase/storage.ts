import { getDownloadURL, getStorage, ref } from "firebase/storage";
import { app } from "./app.ts";
import { RESUME_FILENAME, decrypt } from "../strings.ts";

const storage = getStorage(app);

export async function getResume() {
  const resumeRef = ref(storage, decrypt(RESUME_FILENAME));
  const url = await getDownloadURL(resumeRef);
  return url;
}
