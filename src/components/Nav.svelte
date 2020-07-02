<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  @media (max-width: 800px) {
    ul {
      display: flex;
      justify-content: flex-end;
    }
  }

  /* clearfix */
  ul::after {
    content: "";
    display: block;
    clear: both;
  }

  li {
    display: block;
    float: left;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  [aria-current]::after {
    position: absolute;
    content: "";
    width: calc(100% - 1em);
    height: 2px;
    background-color: #ff3e00;
    display: block;
    bottom: -1px;
  }

  a {
    color: #adadad;
    text-decoration: none;
    padding: 1em 0.5em;
    display: block;
  }
  a:hover {
    color: #ffffff;
  }
</style>

<nav>
  <ul>
    <li>
      <a aria-current={segment === undefined ? 'page' : undefined} href=".">
        start
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'links' ? 'page' : undefined}
        href="links">
        links
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'setup' ? 'page' : undefined}
        href="setup">
        setup
      </a>
    </li>
    <li>
      <a
        rel="prefetch"
        aria-current={segment === 'blog' ? 'page' : undefined}
        href="blog">
        blog
      </a>
    </li>

  </ul>
</nav>
