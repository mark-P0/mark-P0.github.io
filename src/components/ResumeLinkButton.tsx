import { createEffect, createSignal } from "solid-js";
import { getResume } from "../firebase/storage.ts";

export function ResumeLinkButton() {
  const [href, setHref] = createSignal("#");
  createEffect(async function initializeHref() {
    const url = await getResume();
    setHref(url);
  });

  return (
    <a
      href={href()}
      target="_blank"
      class="bg-primary text-white px-4 py-2 rounded-full font-title font-bold text-xl"
    >
      Resumé
    </a>
  );
}
