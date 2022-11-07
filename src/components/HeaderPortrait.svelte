<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import LoadingIndicator from './LoadingIndicator.svelte';

  let src: string;
  const transitionParameters = {
    duration: 500,
  };

  onMount(async () => {
    const firebase = await import('../firebase.js');
    const portraitImgData = await firebase.getTopLevelData('portrait');

    src = portraitImgData;
  });
</script>

<div class="position-relative header-portrait">
  <div
    class="position-absolute w-100 h-100 opacity-50 rounded bg-primary text-light flex-center"
  />
  {#if src}
    <img
      transition:fade={transitionParameters}
      class="position-absolute rounded img-fluid"
      {src}
      alt="A person"
    />
  {:else}
    <LoadingIndicator />
  {/if}
</div>

<style>
  .header-portrait {
    flex-grow: 0;
    flex-shrink: 0;
    aspect-ratio: 3 / 4;

    grid-area: portrait;
  }
  @media only screen and (min-width: 992px) {
    .header-portrait {
      align-self: end;
    }
  }
</style>
