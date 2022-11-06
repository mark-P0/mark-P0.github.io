<script lang="ts">
  import { onMount } from 'svelte';
  import ProjectCard from './ProjectCard.svelte';

  let ProjectList: HTMLElement;
  let Spinner: HTMLElement;

  const MAX_PROJECT_CT = 6;

  onMount(async () => {
    /*  I don't know why a regular top `import` does not work,
     *  but an `import()` call does...
     */
    const firebase = await import('../firebase.js');
    const projects = await firebase.getProjects();

    Spinner.remove();
    ProjectList.replaceChildren();
    for (const project of Object.values(projects).slice(0, MAX_PROJECT_CT)) {
      new ProjectCard({ target: ProjectList, props: project as any });
    }
  });
</script>

<div bind:this={ProjectList} class="position-relative flex-grow-1 d-grid gap-4">
  <div
    bind:this={Spinner}
    class="position-absolute top-50 start-50 translate-middle spinner-grow text-primary"
    role="status"
  >
    <span class="visually-hidden">Loading...</span>
  </div>

  <!-- Will be populated via JS -->
</div>

<style>
  .d-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-rows: 1fr;
  }

  .spinner-grow {
    --size: 5rem;
    width: var(--size);
    height: var(--size);
  }
</style>
