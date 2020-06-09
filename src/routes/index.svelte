<script>
  import SocialBadges from "../components/SocialBadges.svelte";
</script>

<style>
  figure {
    text-align: center;
    margin: 0 auto;
    margin: 1em auto;
  }

  .tags {
    font-size: 1.2em;
    display: block;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    border-radius: 50%;
    max-width: 150px;
    max-height: 150px;
    width: 150px;
    height: 150px;
    margin: 20px;
  }

  .center {
    text-align: center;
  }

  @media (min-width: 800px) {
    .tags {
      font-size: 1.4em;
    }
  }

  @keyframes headline {
    0% {
      letter-spacing: 20px;
    }
  }
</style>

<svelte:head>
  <title>Lukas Lotz</title>
  <meta name="description" content="Ich bin Lukas, das ist meine Seite!" />
</svelte:head>

<div class="content">
  <div class="center">
    <SocialBadges />
    <div class="tags">
      Full Stack Softwareentwickler | Schwarztrinker | Kraftsportjünger | Realist
      | Bierliebhaber | Grillsportanhänger | Feuerwehrmann
    </div>

    <img alt="my beautiful face" src="me.jpg" />
    <figure>
      <figcaption>
        Grüß dich! Ich bin Lukas und das ist meine Webseite.
      </figcaption>
    </figure>
    <p>Hier kommt zeitnah etwas Inhalt.</p>
  </div>
</div>
