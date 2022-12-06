# Exercice 1 : inclure Vue.js dans un site web

Ce premier exercice propose d'afficher le formulaire d'inscription HTML, d'expliquer comment y inclure la bibliothèque [Vue.js](https://vuejs.org/) et de réaliser un affichage dynamique en utilisant la notation moustache `{{ }}`.

> Pour ce premier exercice, toutes les réponses aux questions seront données ce qui ne sera pas le cas pour les prochains exercices. 

## But

* Inclure le lien CDN de [Vue.js](https://vuejs.org/).
* Créer un objet [Vue.js](https://vuejs.org/) et l'attacher à un élément HTML.
* Utiliser une interpolation de texte avec la notation moustache `{{ }}`.

## Étapes à suivre

* Depuis le répertoire _workspace_, ouvrir le fichier _index.html_ dans un navigateur web et examiner le rendu du formulaire d'inscription.

Ce formulaire d'inscription affiche trois zones distinctes, à savoir : la zone d'erreur, la zone de saisie et la zone de récapitulatif de l'inscription. Quand nous aurons inclus et configuré [Vue.js](https://vuejs.org/), les zones d'erreur et de récapitulatif de l'inscription s'afficheront sous certaines conditions. Par ailleurs, l'apparence graphique est réalisée par la bibliothèque CSS [Bootstrap](https://getbootstrap.com/).

* Démarrer l'éditeur de code [Visual Studio Code](https://code.visualstudio.com/) et éditer le contenu du fichier _index.html_. Vous remarquerez le code HTML et les classes et sélecteurs CSS spécifiques à [Bootstrap](https://getbootstrap.com/) (exemple : `class="row g-3"`).

* Pour ajouter une dépendance vers la bibliothèque [Vue.js](https://vuejs.org/), ajouter en dernière instruction de la balise `<body>` le lien suivant : https://unpkg.com/vue@3.

> Ce lien fournit la dernière version courante de [Vue.js](https://vuejs.org/) (si vous desirez utiliser une version spécifique, veuillez vous rendre sur le site de [jsdelivr](https://www.jsdelivr.com/package/npm/vue)).

```html
<body>
    <script src="https://unpkg.com/vue@3"></script>
    <div class="container" style="max-width: 960px;">
        ...
    </div>
</body>
```

* Afin de dissocier les codes spécifiques de la présentation (HTML) et du comportement (JavaScript), créer un nouveau fichier appelé _index.js_ au même niveau que le fichier _index.html_. Ce fichier contiendra tous les codes JavaScript pour [Vue.js](https://vuejs.org/).

* Créer un fichier _index.js_ avec le code donné ci-dessous pour créer un objet `createApp`.

```JavaScript
const { createApp, ref } = Vue

createApp({
    setup() {
        const title = ref('#MaConf2020')

        return { title }
    }
}).mount('#app');
```

Cet extrait de code contient trois informations.

1. L'importation de la fonction `createApp` depuis l'objet `Vue`.
2. Le contenu de la fonction `createApp` où seront déclarées les propriétés réactives (`title`) et les fonctions à appeler depuis le formulaire d'inscription.
3. L'élément HTML (`app`) sur lequel l'instance [Vue.js](https://vuejs.org/) peut s'attacher. Dans ce cas, l'objet `Vue` s'attend à trouver un élément avec l'identifiant (`id`) à `app`.

* Modifier le code du fichier _index.html_ afin d'ajouter l'identifiant `app` pour attacher l'objet `Vue`.

```html
...
<body>
    <script src="https://unpkg.com/vue@3"></script>
    <div id="app" class="container">
        ...
    </div>
</body>
```

* Afin d'assurer la dépendance du fichier _index.js_ vers le fichier _index.html_, ajouter le code suivant en dernière instruction de la balise `<body>`.

```html
...
<body>
    <script src="https://unpkg.com/vue@3"></script>
    <div id="app" class="container" style="max-width: 960px;">
        ...
    </div>
    <script src="index.js"></script>
</body>
```

* Afficher la page HTML _index.html_ depuis la navigateur en s'assurant que l'outil **Console** ne contient pas d'erreur.

Nous souhaitons maintenant afficher le titre de la conférence dont la valeur est donnée par la propriété `title`. 

* Depuis le fichier _index.html_, compléter le contenu de la balise `<h1>` en utilisant une interpolation de texte via la notation moustache `{{ }}`.

```html
...
<body>
    <div id="app" class="container" style="max-width: 960px;">
        <h2>Inscription pour </h2>
        ...
    </div>
    ...
</body>
```

Le rendu va consister à utiliser la moustache pour injecter la valeur de la propriété `title`.