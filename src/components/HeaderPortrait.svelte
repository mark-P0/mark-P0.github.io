<script lang="ts">
  import { onMount } from 'svelte';
  import { fade } from 'svelte/transition';
  import LoadingIndicator from './LoadingIndicator.svelte';
  import { decrypt, NAME } from '../strings.js';

  /** https://stackoverflow.com/a/61226119 */
  function blobToBase64(blob: Blob): Promise<string> {
    const reader = new FileReader();
    reader.readAsDataURL(blob);
    return new Promise<string>((resolve) => {
      reader.onloadend = () => resolve(reader.result as string);
    });
  }

  let src: string;
  const transitionParameters = {
    duration: 500,
  };

  onMount(async () => {
    const firebase = await import('../firebase.js');
    const blob = await firebase.getStorageBlob('portrait.jpg');
    const portraitImgData = await blobToBase64(blob);
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
      class="position-absolute rounded img-fluid w-100"
      {src}
      alt={decrypt(NAME)}
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
