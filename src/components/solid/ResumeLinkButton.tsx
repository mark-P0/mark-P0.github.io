import { createEffect, createSignal } from "solid-js";
import { getResume } from "../../firebase/storage.ts";

export function ResumeLinkButton() {
  const [href, setHref] = createSignal("/");
  createEffect(() => {
    async function initializeHref() {
      const url = await getResume();
      setHref(url);
    }
    initializeHref();
  });

  return (
    <a
      href={href()}
      target="_blank"
      class="font-title font-bold text-xl rounded p-2 py-3 group/resume transition hover:bg-primary active:scale-90"
    >
      <span class="bg-primary text-white rounded p-2 py-1 transition group-hover/resume:bg-white group-hover/resume:text-primary">
        Resumé
      </span>
    </a>
  );
}
