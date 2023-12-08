import { Show, createSignal } from "solid-js";
import { LoadingIndicator } from "./LoadingIndicator.tsx";

export function ProjectList() {
  const [projects, setProjects] = createSignal<unknown[] | null>(null);

  const Fallback = (
    <div class="grid place-items-center">
      <LoadingIndicator />
    </div>
  );
  return (
    <Show when={projects() !== null} fallback={Fallback}>
      <div>project list</div>
    </Show>
  );
}
