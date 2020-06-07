<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>
  main {
    position: relative;
    max-width: 56em;
    padding: 2em;
    margin: 0 auto;
    box-sizing: border-box;
  }
  footer {
    border-top: 1px solid #ff3e001a;
    text-align: center;
    margin-top: 2em;
  }
  .footer-content {
    margin: 1em;
  }
  .footer-content a {
    color: #adadad;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>

<footer>
  <div class="footer-content">
    <a class="test" href="imprint">Impressum & Datenschutz</a>
  </div>
</footer>
