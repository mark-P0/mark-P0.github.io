<script lang="ts">
  let name: string = 'Project name';
  let description: string =
    'Short description of the project. Just a couple of sentences will do.';
  let screenshot: string = '/favicon.png';
  let livePreview: string = '/';
  let sourceCode: string = '/';
  export { name, description, screenshot, livePreview, sourceCode };

  const alt = 'A screenshot of the project.';
</script>

<section class="card shadow">
  <div
    class="position-relative overflow-hidden card-img-top bg-primary text-light flex-center"
  >
    <img class="position-absolute w-100 top-0" src={screenshot} {alt} />
    <div class="position-absolute w-100 h-100" id="overlay" />
  </div>

  <div class="card-body text-lowercase">
    <h4 class="card-title font-heading text-primary fw-bold">{name}</h4>
    <p class="card-text">{description}</p>
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
</style>
