<script>
  export let post;
</script>

<style>
  .entry-title {
    font-size: 1.3em;
    color: #ff774a;
    text-transform: uppercase;
  }
  .entry-preview {
    margin-bottom: 30px;
  }
  .entry-no {
    color: #ff774a;
    margin: 0.1em 0.3em 0.1em 0;
    font-size: 2.7em;
  }
  a {
    text-decoration: none;
    display: block;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;
    border-left: 10px solid transparent;
    padding-left: 10px;
    color: #adadad;
    display: flex;
    flex-direction: row;
  }
  a:hover {
    border-left: 10px solid #ff774a;
  }
  .above {
    display: flex;
    flex-direction: row;
  }
  .read-time {
    margin-left: 0.5em;
  }
  .entry-date {
    margin-right: 0.5em;
  }
</style>

<div class="entry-preview">
  <a rel="prefetch" href="blog/{post.slug}">
    <div class="entry-no">#{post.id}</div>
    <div class="entry-right">
      <div class="above">
        <div class="entry-date">{post.localeDate}</div>
        |
        <div class="read-time">{post.minRead} min</div>
      </div>

      <div class="entry-title">{post.title}</div>
      <div class="entry-summary">{post.summary}</div>
    </div>
  </a>
</div>
