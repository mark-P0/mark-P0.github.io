<script lang="ts">
  import { onMount } from 'svelte';
  import ProjectCard from './ProjectCard.svelte';

  let ProjectList: HTMLElement;

  onMount(async () => {
    /*  I don't know why a regular top `import` does not work,
     *  but an `import()` call does...
     */
    const firebase = await import('../firebase.js');
    const projects = await firebase.getProjects();

    ProjectList.replaceChildren();
    for (const project of Object.values(projects)) {
      new ProjectCard({ target: ProjectList, props: project as any });
    }
  });
</script>

<div class="d-grid gap-4" bind:this={ProjectList}>
  {#each Array.from({ length: 6 }) as _}
    <ProjectCard />
  {/each}
</div>

<style>
  .d-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
  }
</style>
