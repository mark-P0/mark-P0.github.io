import { BsCircleFill } from "solid-icons/bs";
import { Show, createEffect, createSignal } from "solid-js";
import { getPortrait } from "../firebase/storage.ts";
import { NAME } from "../strings.ts";

export function HeaderPortrait() {
  const [src, setSrc] = createSignal<string | null>(null);
  createEffect(() => {
    async function initializeSrc() {
      const src = await getPortrait();
      setSrc(src);
    }
    initializeSrc();
  });

  return (
    <Show
      when={src() !== null}
      fallback={<BsCircleFill class="w-12 h-12 animate-ping" />}
    >
      <img src={src()!} alt={NAME} class="w-full h-full" />
    </Show>
  );
}
