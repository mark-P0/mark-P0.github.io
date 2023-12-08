import { BsCircleFill } from "solid-icons/bs";
import { Show, createEffect, createSignal } from "solid-js";

async function sleep(secs: number) {
  return new Promise((resolve) => setTimeout(resolve, secs * 1000));
}

export function HeaderPortrait() {
  const [src, setSrc] = createSignal<string | null>(null);
  createEffect(() => {
    (async () => {
      await sleep(1);
      setSrc("");
    })();
  });

  return (
    <div class="w-full aspect-[3/4] bg-primary/50 grid place-items-center">
      <Show
        when={src() !== null}
        fallback={<BsCircleFill class="w-12 h-12 animate-ping" />}
      >
        <div></div>
      </Show>
    </div>
  );
}
