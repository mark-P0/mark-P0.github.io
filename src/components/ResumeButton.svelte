<script lang="ts">
  import strings, { decrypt } from '../strings';

  let Button: HTMLButtonElement;
  let InvisibleAnchor: HTMLAnchorElement;

  async function onClick() {
    const firebase = await import('../firebase.js');
    const { data, filename } = await firebase.getTopLevelData('resume');

    InvisibleAnchor.href = data;
    InvisibleAnchor.download = filename;
    Button.onclick = InvisibleAnchor.click.bind(InvisibleAnchor);
    Button.click();
  }
</script>

<button
  bind:this={Button}
  class="btn bg-primary text-white rounded-pill px-3 fs-5 font-heading fw-bold text-lowercase"
  on:click|once={onClick}
>
  <!-- The following invisible link will have its attributes changed -->
  <a bind:this={InvisibleAnchor} class="d-none" href="/" download="...">
    Link to a file
  </a>

  {decrypt(strings.HEADER_RESUME)}
</button>
