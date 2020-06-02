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
    margin: 20px;
  }

  .center {
    text-align: center;
  }
  
  @media(min-width:800px){
     .tags {
      font-size: 1.4em  
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
  <meta
    name="description"
    content="Ich bin Lukas, ein Fullstack Softwareentwickler!" />
</svelte:head>

<div class="content">
  <div class="center">
    <div class="tags">
      Full Stack Softwareentwickler | Kaffeetrinker | Kraftsportjünger | Wissenschaftsverfechter |
      Bierliebhaber | Grillsportanhänger | Feuerwehrmann
    </div>

    <img alt="my beautiful face" src="me.jpg" />
    <figure>
      <figcaption>
        Grüß dich! Ich bin Lukas und hier entsteht meine Webseite.
      </figcaption>
    </figure>
    <p>
      Ich bin Softwareentwickler aus Leidenschaft. Solang es hier noch keine
      Infos über mich gibt, schau im
      <a href="/blog">blog</a>
      vorbei oder zieh dir
      <a href="https://www.xing.com/profile/Lukas_Lotz/cv">mein xing-profil</a>
      rein.
    </p>
  </div>
</div>
