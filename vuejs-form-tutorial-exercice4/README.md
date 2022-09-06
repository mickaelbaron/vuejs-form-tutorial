# Exercice 4 : réaliser des rendus conditionnels

Ce quatrième exercice s'intéresse à réaliser des rendus conditionnels permettant de rendre visible ou pas des parties de l'interface graphique. Ces rendus conditionnels seront réalisés via les directives `v-if` et `v-show`.

## But

* Utiliser la directive `v-show`.
* Utiliser la directive `v-if`.
* Comprendre la différence d'utilisation entre les directives `v-show` et `v-if`.

## Étapes à suivre

Nous allons vouloir afficher la zone d'erreurs, celle qui liste les champs de saisie qui ne sont pas renseignés, seulement si la propriété `errors` n'est pas vide (dimension du tableau).

* Éditer le fichier _index.html_ pour ajouter la directive `v-show` au niveau de la zone d'erreurs.

```html
<div class="card mb-3" v-show="errors.length">
    <div class="card-header">
        Corrigez les erreurs suivantes
    </div>
    <div class="card-body">
        <ul>
            <li v-for="error in errors">{{ error }}</li>
        </ul>
    </div>
</div>```

L'expression contenue dans la directive retourne vraie quand la taille du tableau n'est pas vide. Quoi qu'il en soit, le rendu de l'élément `<div>` est réalisé, mais sera masqué par une permutation CSS. Nous allons examiner cela par une petite expérimentation.

* Faites en sorte de remplir tous les champs de saisie afin de ne pas avoir d'erreur et afficher ensuite le contenu HTML de la page pour examiner le rendu obtenu.

```html
<div class="card mb-3" style="display: none;">
    <div class="card-header">Corrigez les erreurs suivantes</div>
    <div class="card-body">
        <ul></ul>
    </div>
</div>
```

* Réaliser l'opération inverse en faisant en sorte d'obtenir au moins une erreur et afficher ensuite le contenu HTML de la page pour examiner le rendu obtenu.

```html
<div class="card mb-3" style="">
    <div class="card-header"> Corrigez les erreurs suivantes </div>
    <div class="card-body">
        <ul>
            <li>Formule d'inscription obligatoire</li>
            <li>Moyen d'hébergement obligatoire</li>
        </ul>
    </div>
</div>
```

Vous constatez clairement que l'attribut `style` qui pilote le style CSS est modifié en fonction de la valeur de l'expression.

Nous allons maintenant afficher la zone de récapitulatif de l'inscription en utilisant cette fois la directive `v-if`. Contrairement à la directive `v-show`, `v-if` bloque le rendu si l'expression est évaluée à faux.

* Éditer le fichier _index.html_ pour ajouter la directive `v-if` au niveau de la zone de récapitulatif de l'inscription. L'expression s'appuiera sur la propriété `validated`.

```html
<div class="card mt-3" v-if="validated">
    <div class="card-header">
        Récapitulatif de l'inscription
    </div>
    <div class="card-body">
        <p>Bonjour, vous 
            avez procédé à une inscription pour la conférence.</p>
        <p>Le détail de votre enregistrement est le suivant : </p>
        <ul>
            <li>EUR</li>

            <li>EUR</li>
        </ul>
        <p>Le montant total est de EUR.</p>

        <p>Un email vous sera envoyé prochainement à cette adresse pour la mise en paiement de
            votre inscription. Merci de consulter votre messagerie et de procéder au réglement de votre
            inscription.
        </p>
        <p>En vous remerciant de votre inscription, à très bientôt à la conférence.</p>

        <button type="button" v-on:click="confirm" class="m-1 btn btn-primary">Confirmer</button>
        <button type="button" v-on:click="validated = false" class="btn btn-primary">Modifier les
            données</button>
    </div>
</div>
```

* Faire en sorte d'avoir au moins un message d'erreur et d'afficher le contenu HTML de la page pour examiner l'absence de rendu obtenu de la zone de récapitulatif de l'inscription.

Vous aurez surement constaté que le code précédent n'est pas complet, il manque de nombreuses moustaches `{{ }}` pour afficher les valeurs des propriétés. Nous ne pouvions pas le réaliser plus tôt, car il ne fallait pas que le rendu de la zone de récapitulatif de l'inscription soit réalisé. En effet, de nombreuses propriétés ne sont pas encore valuées, par exemple pour `registration.lodging` et `registration.fees` qui peuvent être `null`.

* En considérant le rendu présenté sur la figure suivante, compléter le code du fichier _index.html_ en utilisant exclusivement des interpolations de texte via la notation moustache `{{ }}`.

![Zone de récapitulatif de l'inscription](./images/exercice4_summary_zone.png "Zone de récapitulatif de l'inscription")