---
id: 0
title: 'Neuer Blog'
summary: 'Ich habe mich der neuen Art des Bloggens hingegeben'
date: 2020-06-01
---

So. Wie man sieht, ist das hier mein neuer blog. Ich habe mich dazu hinreißen lassen, mich der "neuen Art des Bloggens" hinzugeben. Mittlerweile bloggt man offensichtlich nicht mehr über ein Backend sondern man checkt Markdownfiles in ein Github Repository ein und eine CI/CD Pipeline sorgt dafür, dass eine statische Webseite erstellt wird.

Ich habe die Seite hier mit [Svelte](https://svelte.dev/) und [Sapper](https://sapper.svelte.dev/) erstellt. [Hier geht's zum github repo dieser Seite.](https://github.com/llotz/lukas2020)

Nachdem ich mich ein bisschen reinfuchsen musste, war das Verständnis fürs Routing und den Weg der Daten klar. Svelte ist eine übersichtliche Templating Engine und die Webseite wird vor dem Produktiveinsatz in einen HTML5 Cocktail kompiliert. Das bedeutet, man bekommt eine schöne schmale Seite ohne Abhängigkeiten zu Frameworks. Nun habe ich eine sehr kompakte Seite (60kb), die stark optimiert ist. Das Ergebnis davon kann man sich hier auf [gtmetrix](https://gtmetrix.com/reports/lukaslotz.de/KYe93JMu) anschauen.

Gehostet habe ich das ganze dann kostenlos inklusive CI/CD Pipeline auf [netlify](https://netlify.com). Es hat ganze 3 Minuten gedauert, die Pipeline einzurichten.

Hier sieht man dann den Statusbadge: [![Netlify Status](https://api.netlify.com/api/v1/badges/4fad94f6-d4ee-4ed9-bc97-a549de08d994/deploy-status)](https://app.netlify.com/sites/determined-albattani-7c4378/deploys)
