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
  import BlogPostPreview from "../../components/BlogPostPreview.svelte";
</script>

<style>

</style>

<svelte:head>
  <title>Lukas bloggt</title>
  <meta name="description" content="Lukas' Blog" />
</svelte:head>

<div class="content">
  {#each posts as post}
    <BlogPostPreview {post} />
  {/each}

</div>
