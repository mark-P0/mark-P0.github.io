import { FiCode, FiExternalLink } from "solid-icons/fi";
import { For, Show, createEffect, createSignal } from "solid-js";
import { getProjects, type Project } from "../firebase/rtdb.ts";
import { LoadingIndicator } from "./LoadingIndicator.tsx";

export function ProjectCard(p: { project: Project }) {
  return (
    <figure class="h-full rounded-lg overflow-hidden grid grid-rows-[auto_1fr] shadow-lg">
      <div class="relative overflow-hidden aspect-[21/9]">
        <img
          src={p.project.screenshot}
          alt={`A screenshot of the app ${p.project.name}`}
          class="absolute top-0"
        />
        <div class="absolute w-full h-full bg-primary/25"></div>
      </div>

      <figcaption class="flex flex-col bg-white border-primary border-2 border-t-0 border-l-0 rounded-lg rounded-tr-none p-4">
        <h2 class="mb-2 font-title font-extrabold text-3xl">
          {p.project.name}
        </h2>

        <p class="mb-6">{p.project.description}</p>

        <ul class="mt-auto flex flex-row-reverse gap-4">
          <Show when={p.project.livePreview !== undefined}>
            <li>
              <a href={p.project.livePreview} target="_blank">
                <FiExternalLink class="w-6 h-6" />
              </a>
            </li>
          </Show>
          <li>
            <a href={p.project.sourceCode} target="_blank">
              <FiCode class="w-6 h-6" />
            </a>
          </li>
        </ul>
      </figcaption>
    </figure>
  );
}

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
      <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <For each={projects()}>
          {(project) => (
            <li>
              <ProjectCard project={project} />
            </li>
          )}
        </For>
      </ul>
    </Show>
  );
}
