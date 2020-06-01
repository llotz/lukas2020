<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  export let posts;
</script>

<style>
  .entry-title {
    font-size: 1.3em;
    color: #ff774a;
  }
  .entry-preview {
    margin-bottom: 30px;
  }
  a {
    text-decoration: none;
    display: block;
  }
</style>

<svelte:head>
  <title>Blog</title>
</svelte:head>

{#each posts as post}
  <div class="entry-preview">
    <a rel="prefetch" href="blog/{post.slug}">
      <div class="entry-date">{post.localeDate}</div>
      <div class="entry-title">{post.title}</div>
      <div class="entry-summary">{post.summary}</div>
    </a>
  </div>
{/each}
