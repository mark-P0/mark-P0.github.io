<script lang="ts">
  import { onMount, SvelteComponent, ComponentProps } from 'svelte';
  import ProjectCard from './ProjectCard.svelte';
  import LoadingIndicator from './LoadingIndicator.svelte';

  let projectData: ComponentProps<ProjectCard>[];

  const MAX_PROJECT_CT = 6;

  onMount(async () => {
    /*  I don't know why a regular top `import` does not work,
     *  but an `import()` call does...
     */
    const firebase = await import('../firebase.js');
    const projects = await firebase.getTopLevelData('projects');
    projectData = Object.values(projects).slice(0, MAX_PROJECT_CT) as any;
  });
</script>

<div class="position-relative flex-grow-1 d-grid gap-4">
  {#if projectData}
    {#each projectData as project, index}
      <ProjectCard {...project} {index} />
    {/each}
  {:else}
    <LoadingIndicator />
  {/if}
</div>

<style>
  .d-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-auto-rows: 1fr;
  }
</style>
