<style>
  h1,
  figure {
    text-align: center;
    margin: 0 auto;
    margin: 1em auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    border-radius: 50%;
    max-width: 150px;
    margin: 20px;
  }

  .center {
    text-align: center;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>Lukas Lotz</title>
  <meta http-equiv="expires" content="0" />
  <meta name="author" content="Lukas Lotz" />
  <meta name="description" content="Meine Webseite" />
  <meta
    name="keywords"
    content="Programmierer, Softwareentwickler, Software Engineer, Lukas Lotz,
    Homepage, Webseite"
    lang="de" />
  <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
</svelte:head>

<div class="center">

  <h1>Fetzt!</h1>

  <figure>
    <figcaption>
      Grüß dich! Ich bin Lukas und hier entsteht meine Webseite.
    </figcaption>
  </figure>

  <img alt="my beautiful face" src="me.jpg" />

  <p>
    Ich bin Softwareentwickler aus Leidenschaft. Solang es hier noch keine Infos
    über mich gibt, schau im
    <a href="/blog">blog</a>
    vorbei oder zieh dir
    <a href="https://www.xing.com/profile/Lukas_Lotz/cv">mein xing-profil</a>
    rein.
  </p>
</div>
