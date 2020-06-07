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
  .description {
    font-size: 1.1em;
    margin-bottom: 2em;
  }
</style>

<svelte:head>
  <title>Lukas' Links</title>
  <meta name="description" content="Nützliche Links" />
</svelte:head>
<div class="content">
  <figure>
    <figcaption>
      <div class="description">
        Hier gibts Links, die ich nützlich finde oder einfach für die Nachwelt
        festhalten will.
      </div>
    </figcaption>
  </figure>
  <div class="links">
    {@html content}
  </div>
</div>
