<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
</script>

<style>
  hr {
    width: 90%;
    text-align: center;
    background-color: #222;
  }
  .categories {
    margin-top: 0.5em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .category {
    margin-left: 0.6em;
    color: #ff774a;
  }
  .summary {
    font-size: 1.05em;
    font-style: oblique;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
  <meta name="description" content={post.title} />
</svelte:head>
<div class="content">
  <div class="blog-header">
    <h1>{post.title}</h1>
    <div class="summary">{post.summary}</div>
    <div class="categories">
      {post.localeDate}
      {#each post.categories as category}
        <div class="category">--{category}</div>
      {/each}
    </div>
  </div>
  <hr />
  {@html post.html}
</div>
