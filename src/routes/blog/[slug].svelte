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
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .content :global(h2) {
    font-size: 1.4em;
    font-weight: 500;
  }
  .content :global(pre) {
    background-color: #f9f9f9;
    box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
    padding: 0.5em;
    border-radius: 2px;
    overflow-x: auto;
  }
  .content :global(pre) :global(code) {
    background-color: transparent;
    padding: 0;
  }
  .content :global(ul) {
    line-height: 1.5;
  }
  .content :global(li) {
    margin: 0 0 0.5em 0;
  }
  .blog-header {
    margin-bottom: 20px;
  }
  .categories {
    margin-top: 0.5em;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .category {
    margin-left: 0.6em;
    color: #ffd3a9;
  }
  .summary {
    font-size: 1.1em;
  }
</style>

<svelte:head>
  <title>Lukas bloggt - {post.title}</title>
  <meta name="description" content={post.title} />
</svelte:head>
<div class="content">
  <div class="blog-header">
    <h1>{post.title}</h1>
    <div class="summary">~ {post.summary} ~</div>
    <div class="categories">
      {post.localeDate}
      {#each post.categories as category}
        <div class="category">--{category}</div>
      {/each}
    </div>
  </div>

  {@html post.html}
</div>
