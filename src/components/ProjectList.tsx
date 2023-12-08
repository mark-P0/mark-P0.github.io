import { Show, createEffect, createSignal } from "solid-js";
import { getProjects, type Project } from "../firebase/rtdb.ts";
import { LoadingIndicator } from "./LoadingIndicator.tsx";

export function ProjectList() {
  const [projects, setProjects] = createSignal<Project[] | null>(null);
  createEffect(() => {
    async function initializeProjects() {
      const projects = await getProjects();
      setProjects(projects);
    }
    initializeProjects();
  });

  const Fallback = (
    <div class="grid place-items-center">
      <LoadingIndicator />
    </div>
  );
  return (
    <Show when={projects() !== null} fallback={Fallback}>
      <div>{JSON.stringify(projects())}</div>
    </Show>
  );
}
