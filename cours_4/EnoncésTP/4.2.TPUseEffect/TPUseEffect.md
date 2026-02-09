

# TP useEffect 

# Rappels importants sur `useEffect`

> **N’utilisez `useEffect` que pour synchroniser React avec un système externe.**
>
> Si une logique peut être exprimée uniquement avec :
>
> * des props
> * du state
> * et le rendu React
>
> alors `useEffect` n’est probablement pas nécessaire.

Corollaires utiles :

* `useEffect` **ne sert pas à calculer l’état**
* `useEffect` **ne remplace pas `useState`**
* Un effet doit avoir une **raison externe d’exister**

---

# TP 1 – Synchroniser l’état React avec `localStorage`

**Dossier :** `use-effect-local-storage`

## Objectif pédagogique

Le but de cet exercice est de comprendre que `useEffect` permet de **synchroniser l’état React avec un système externe persistant**, ici le `localStorage` du navigateur.


## Énoncé

Une application React vous est fournie. Elle affiche un interrupteur (toggle) permettant d’activer ou de désactiver une option utilisateur (par exemple : « Mode avancé »).

Votre objectif est de rendre cette préférence persistante entre deux rechargements de la page, en utilisant l’API `localStorage`.

## Partie 1 – Écriture dans `localStorage`

### Travail demandé

1. Créer un état `enabled` (booléen) représentant l’état de l’option.
2. Initialiser l’état à `false`.
3. Mettre en place un hook `useEffect` qui :

   * Écrit la valeur de `enabled` dans le `localStorage`.
   * Met à jour la valeur stockée **à chaque changement de l’état**.
4. Utiliser une clé explicite dans le `localStorage` (par exemple : `feature_enabled`).

### Contraintes techniques

* Le hook `useEffect` doit dépendre **uniquement** de l’état `enabled`.
* L’effet ne doit pas être exécuté inutilement.
* Aucune fonction de nettoyage (clean up) ne doit être implémentée.

### Résultat attendu

* À chaque interaction avec le toggle :

  * L’état React est mis à jour.
  * La nouvelle valeur est enregistrée dans le `localStorage`.

## Partie 2 – Lecture depuis `localStorage` au montage

### Travail demandé

1. Ajouter un second hook `useEffect` permettant de :

   * Lire la valeur stockée dans le `localStorage` lors du montage du composant.
   * Initialiser l’état `enabled` avec cette valeur si elle existe.
2. Si aucune valeur n’est présente dans le `localStorage`, l’état doit rester à sa valeur par défaut (`false`).

### Contraintes techniques

* Ce hook `useEffect` doit utiliser un **tableau de dépendances vide**.
* L’effet doit être exécuté **une seule fois**, au montage du composant.
* Aucune fonction de nettoyage ne doit être implémentée.

### Résultat attendu

* Après un rechargement de la page :

  * L’état du toggle reflète la valeur précédemment enregistrée.
  * L’interface utilisateur est cohérente avec la préférence persistée.

---

# TP 2 – Effet exécuté au montage : lecture d’une API navigateur

**Dossier :** `use-effect-mount`

## Objectif pédagogique

Le but de ce TP est de comprendre :

* le moment d’exécution d’un effet,
* le rôle du tableau de dépendances vide,
* la synchronisation de React avec une API externe.

## Énoncé

Dans cet exercice, vous devez afficher la largeur actuelle de la fenêtre du navigateur.

Cette information provient d’une API externe (`window.innerWidth`) et doit être lue **au moment où le composant est monté**.

Votre objectif est d’utiliser le hook `useEffect` pour synchroniser l’état React avec cette API du navigateur.

## Travail demandé

1. Créer un état `windowWidth` initialisé à une valeur neutre (par exemple `0`).
2. Mettre en place un hook `useEffect` qui :

   * Lit la valeur de `window.innerWidth`.
   * Met à jour l’état `windowWidth`.
   * Ne s’exécute **qu’une seule fois**, au montage du composant.
3. Afficher la largeur de la fenêtre dans l’interface utilisateur.

## Contraintes techniques

* Le hook `useEffect` doit utiliser un **tableau de dépendances vide**.
* Aucune gestion du redimensionnement n’est demandée dans cet exercice.
* Aucune fonction de nettoyage (clean up) ne doit être implémentée.

## Résultat attendu

* Au chargement de l’application :

  * La largeur de la fenêtre est correctement affichée.
* Le composant ne relit pas la valeur lors des rendus suivants.

---

# TP 3 – Comprendre et maîtriser les dépendances de `useEffect`

**Dossier :** `use-effect-dependencies`

## Objectif pédagogique

Dans ce TP vous découvrirez le rôle du tableau de dépendances et apprendrez à contrôler précisément **quand** un effet doit être exécuté.

## Énoncé

Une application React vous est fournie. Elle contient un champ de saisie permettant de saisir un texte de recherche.

Votre objectif est de déclencher un effet uniquement lorsque la valeur saisie change, et d’observer le lien entre dépendances et exécution des effets.

## Travail demandé

1. Créer un état `search` correspondant à la valeur du champ de saisie.
2. Créer un état `searchCount` représentant le nombre de fois où une recherche a été déclenchée.
3. Mettre en place un hook `useEffect` qui :

   * Est déclenché **uniquement lorsque `search` change**.
   * Incrémente la valeur de `searchCount` à chaque déclenchement.
4. Afficher la valeur de `searchCount` dans l’interface utilisateur.

## Contraintes techniques

* Le hook `useEffect` doit utiliser un tableau de dépendances.
* Le tableau de dépendances doit être **minimal et pertinent**.
* Aucune fonction de nettoyage (clean up) ne doit être implémentée.

## Résultat attendu

* Chaque modification du champ de saisie déclenche l’effet.
* Le compteur `searchCount` s’incrémente uniquement lorsque `search` change.
* Aucune exécution inutile de l’effet n’est observée.

---

# TP 4 – Fonction de nettoyage (Clean Up) avec `useEffect`

**Dossier :** `use-effect-cleanup`

## Objectif pédagogique

Le but de ce TP est de comprendre le cycle de vie d’un effet et l’importance de la fonction de nettoyage pour éviter les effets indésirables (fuites mémoire, abonnements multiples).

## Énoncé

Dans cet exercice, vous allez mettre en place un écouteur d’événement sur le navigateur afin de détecter les redimensionnements de la fenêtre.

Votre objectif est d’utiliser correctement la fonction de nettoyage (`clean up`) du hook `useEffect`.

## Travail demandé

1. Créer un état `windowWidth` représentant la largeur actuelle de la fenêtre.
2. Ajouter un écouteur sur l’événement `resize` du navigateur.
3. Mettre à jour l’état `windowWidth` à chaque redimensionnement.
4. Implémenter une fonction de nettoyage permettant de :

   * Supprimer l’écouteur d’événement lorsque le composant est démonté.

## Contraintes techniques

* Le hook `useEffect` doit utiliser un tableau de dépendances adapté.
* Une fonction de nettoyage doit impérativement être retournée par `useEffect`.
* Aucun écouteur ne doit rester actif après le démontage du composant.

## Résultat attendu

* La largeur de la fenêtre est mise à jour dynamiquement lors du redimensionnement.
* Aucun comportement inattendu (écouteurs multiples, fuites mémoire) n’est observé.
* Le code respecte les bonnes pratiques liées aux effets React.