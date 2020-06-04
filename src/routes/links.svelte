<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`links.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { content: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let content;
</script>

<style>
  .content {
    animation: smooth-fade-in 0.5s;
  }
</style>

<svelte:head>
  <title>Lukas' Links</title>
  <meta name="description" content="Nützliche Links" />
</svelte:head>
<div class="content">
  <figure>
    <figcaption>
      Hier kommt ne Linksammlung über Sachen hin, die ich nützlich finde oder
      für die Nachwelt festhalten will.
    </figcaption>
  </figure>
  <p>Ist noch bisschen leer hier aber ich arbeite dran.</p>
  <div class="links">
    {@html content}
  </div>
</div>
