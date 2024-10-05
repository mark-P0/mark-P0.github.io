import { Show, createEffect, createSignal } from "solid-js";
import { getPortrait } from "../../firebase/storage.ts";
import { NAME } from "../../strings.ts";
import { LoadingIndicator } from "./LoadingIndicator.tsx";

export function Portrait() {
  const [src, setSrc] = createSignal<string | null>(null);
  createEffect(() => {
    async function initializeSrc() {
      const src = await getPortrait();
      setSrc(src);
    }
    initializeSrc();
  });

  return (
    <Show when={src() !== null} fallback={<LoadingIndicator />}>
      <img src={src()!} alt={NAME} class="w-full h-full" />
    </Show>
  );
}
