<script lang="ts">
  let name = 'Project name';
  let description =
    'Short description of the project. Just a couple of sentences will do.';
  let screenshot = '/favicon.png';
  let sourceCode = '/';
  let livePreview: string;
  export { name, description, screenshot, sourceCode, livePreview };

  const alt = 'A screenshot of the project.';
</script>

<section class="card">
  <div
    class="position-relative overflow-hidden card-img-top bg-primary text-light flex-center"
  >
    <img class="position-absolute top-0 w-100 " src={screenshot} {alt} />
    <div class="position-absolute h-100 w-100 " id="overlay" />
  </div>

  <div class="card-body text-lowercase border-primary border-stylized">
    <h4 class="card-title font-heading text-primary fw-bold ">{name}</h4>
    <p class="card-text">{description}</p>
  </div>

  <div
    class="card-footer hstack justify-content-end text-primary gap-4 fs-5 border-primary border-stylized"
  >
    <a class="bi bi-code-square" href={sourceCode}>
      <span class="visually-hidden">Link to source code</span>
    </a>
    {#if livePreview}
      <a class="bi bi-box-arrow-up-right" href={livePreview}>
        <span class="visually-hidden">Link to live preview</span>
      </a>
    {/if}
  </div>
</section>

<style>
  .card-img-top {
    aspect-ratio: 18 / 9;
  }

  #overlay {
    --overlay-color-rgb: var(--bs-primary-rgb);
    --overlay-opacity: calc(100% / 3);
    background-color: rgba(var(--overlay-color-rgb), var(--overlay-opacity));
  }

  .card {
    border: none;
  }
  .card-body {
    border-bottom: none;
  }
  .card-footer {
    background-color: unset;
  }
</style>
