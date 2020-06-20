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
    font-size: 1.3em;
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

  .answer {
    color: #7c7c7c;
    margin-left: auto;
    margin-right: auto;
    text-align: left;
    font-size: 1.1em;
  }

  .welcome-text {
    font-size: 1.1em;
  }

  h3 {
    margin-top: 0.8em;
    margin-bottom: 0.8em;
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
    <figure>
      <figcaption>
        <div class="tags">
          Full Stack Softwareentwickler | Schwarztrinker | Kraftsportjünger |
          Realist | Bierliebhaber | Grillsportanhänger | Feuerwehrmann
        </div>
      </figcaption>
    </figure>

    <img alt="my beautiful face" src="me.jpg" />

    <div class="welcome-text">
      Grüß dich! Ich bin Lukas und das ist meine Webseite.
    </div>

    <h3>Wer bist du?</h3>
    <div class="answer">
      Ich bin leidenschaftlicher Softwareentwickler, programmiere beruflich und
      ab und zu sitze ich auch an einem kleinen privaten Projekt. Ich mag
      schwarzen Kaffee, stehe auf die harte Realität und weiß ein mit Liebe
      gebrautes Bier zu einem adäquaten Stück Fleisch zu schätzen.
    </div>

    <h3>Was programmiert man so?</h3>
    <div class="answer">
      <p>
        Beruflich bin ich meistens im .NET Umfeld mit C# zugange. Privat
        probiere ich auch gerne mal irgendwas von den zahllosen neuen Sachen,
        die jeden Tag rauskommen. Meistens hat es komischerweise mit Javascript
        zu tun, obwohl ich dafür keine besondere Leidenschaft hege. Von Zeit zu
        Zeit mache ich mir aber auch gerne die Hände an einer neuen Sprache
        dreckig.
      </p>
      <p>
        Schau dir mein Githubprofil an, dort findest du ein paar der Projekte,
        die ich in meiner Freitzeit so zusammenklimpere.
      </p>
    </div>

    <h3>Und nun?</h3>
    <div class="answer">
      Schau in meinem Blog vorbei, dort gibts auch Sachen für Leute, die keine
      Ahnung von Softwareentwicklung haben. Technisches Verständnis, eine
      Vorliebe für verschachtelte Sätze und eine Präferenz für schwarzen Humor
      könnten Besuchern an der ein oder anderen Stelle helfen, die Webseite
      nicht direkt zu schließen.
    </div>
  </div>
</div>
