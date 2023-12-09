import { FiCode, FiExternalLink } from "solid-icons/fi";
import { For, Show, createEffect, createSignal } from "solid-js";
import { getProjects, type Project } from "../firebase/rtdb.ts";
import { LoadingIndicator } from "./LoadingIndicator.tsx";

export function ProjectCard(p: { project: Project }) {
  return (
    <figure class="group h-full rounded-lg overflow-hidden grid grid-rows-[auto_1fr] shadow-lg">
      <div class="relative overflow-hidden aspect-[21/9]">
        <img
          src={p.project.screenshot}
          alt={`A screenshot of the app ${p.project.name}`}
          class="absolute top-0"
        />
        <div class="absolute w-full h-full bg-primary/75 group-hover:bg-transparent duration-500"></div>
      </div>

      <figcaption class="flex flex-col bg-white border-primary border-2 border-t-0 border-l-0 rounded-lg rounded-tr-none p-5">
        <h2 class="mb-2 font-title font-extrabold text-3xl">
          {p.project.name}
        </h2>

        <p class="mb-6">{p.project.description}</p>

        <ul class="-mr-2 -mb-2 mt-auto flex flex-row-reverse">
          <Show when={p.project.livePreview !== undefined}>
            <li>
              <a
                href={p.project.livePreview}
                target="_blank"
                class="block p-2 rounded transition hover:bg-primary hover:text-white active:scale-90"
              >
                <FiExternalLink class="w-6 h-6" />
              </a>
            </li>
          </Show>
          <li>
            <a
              href={p.project.sourceCode}
              target="_blank"
              class="block p-2 rounded transition hover:bg-primary hover:text-white active:scale-90"
            >
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

  const last6Projects = () => projects()?.slice(-6).reverse() ?? null;

  const Fallback = (
    <div class="grid place-items-center">
      <LoadingIndicator />
    </div>
  );
  return (
    <Show when={last6Projects() !== null} fallback={Fallback}>
      <ul class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <For each={last6Projects()}>
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
