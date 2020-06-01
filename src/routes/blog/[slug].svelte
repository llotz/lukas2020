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
</style>

<svelte:head>
  <title>Lukas bloggt - {post.title}</title>
  <meta name="author" content="Lukas Lotz" />
  <meta name="description" content={post.title} />
  <meta
    name="keywords"
    content="Programmieren, Techblog, Programmierer, persönliches zeug"
    lang="de" />
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
</svelte:head>

<div class="blog-header">
  <h1>{post.title}</h1>
  {post.localeDate}
</div>

<div class="content">
  {@html post.html}
</div>
