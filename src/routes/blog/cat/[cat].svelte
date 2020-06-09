<script context="module">
  export async function preload({ params, query }) {
    const { cat } = params;
    const res = await this.fetch(`../blog.json?cat=${cat}`).catch(err =>
      this.error(404, err)
    );
    const data = await res.json();

    if (res.status == 200) {
      return { posts: data, cat };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let posts;
  export let cat;
  import BlogPostPreview from "../../../components/BlogPostPreview.svelte";
</script>

<style>
  .category-header {
    margin: 0 0 1em 1em;
  }
  .highlight-category {
    display: inline;
    color: #ff774a;
  }
</style>

<svelte:head>
  <title>Lukas bloggt über {cat}</title>
  <meta name="description" content="Lukas' Blog" />
</svelte:head>

<div class="content">
  <div class="category-header">
    Einträge der Kategorie
    <div class="highlight-category">{cat}</div>
  </div>
  {#each posts as post}
    <BlogPostPreview {post} />
  {/each}

</div>
