<script lang="ts">
  import { onMount, SvelteComponent, ComponentProps } from 'svelte';
  import ProjectCard from './ProjectCard.svelte';
  import LoadingIndicator from './LoadingIndicator.svelte';

  let projectData: ComponentProps<ProjectCard>[];

  const MAX_PROJECT_CT = 6;

  onMount(async () => {
    /**
     * I don't know why a regular top `import` does not work,
     * but an `import()` call does...
     */
    const firebase = await import('../firebase.js');
    const projects = await firebase.read('projects');
    projectData = Object.values(projects)
      .slice(-MAX_PROJECT_CT)
      .reverse() as any;
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
    grid-template-rows: repeat(2, 1fr);
    grid-auto-rows: 1fr;

    grid-template-columns: repeat(var(--col-ct), 1fr);
  }

  /* Phones */
  @media only screen and (min-width: 0px) {
    .d-grid {
      --col-ct: 1;
    }
  }
  /* Tablets */
  @media only screen and (min-width: 576px) {
    .d-grid {
      --col-ct: 2;
    }
  }
  /* Desktops */
  @media only screen and (min-width: 992px) {
    .d-grid {
      --col-ct: 3;
    }
  }
</style>
