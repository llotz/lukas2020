<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/cat.json`).catch(err =>
      this.error(404, err)
    );
    const data = await res.json();

    if (res.status == 200) {
      return { categories: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let categories;
</script>

<style>
  .heading {
    font-size: 1.1em;
    margin-bottom: 1em;
  }
  .sub-heading {
    margin-bottom: 1em;
  }
</style>

<div class="heading">Kategorien</div>
<div class="sub-heading">Eine Übersicht der wichtigsten Kategorien</div>

<ul>
  {#each categories as category}
    <li>
      <a href="blog/cat/{category.name}">{category.name}</a>
      - {category.description}
    </li>
  {/each}
</ul>
