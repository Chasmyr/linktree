# linktree — etwahl

Site "link-in-bio" statique (HTML/CSS/JS, sans build, sans framework).

## Structure

```
index.html         squelette de la page
css/styles.css      tous les styles visuels
js/config.js         CONTENU du site — c'est le fichier à éditer
js/app.js             moteur qui construit la page à partir de config.js
uploads/               images (photo de fond, etc.)
legacy/                 ancien export (outil propriétaire, conservé pour référence, plus utilisé)
```

## Modifier le contenu

Tout se passe dans [js/config.js](js/config.js).

- **Changer un texte / lien existant** : modifie directement les objets (`actu`,
  `streamingLinks`, `contactLinks`, `credits`, `profile`).
- **Ajouter un lien de streaming** : ajoute une ligne à `streamingLinks`, ex.
  `{ name: "Spotify", icon: "SP", url: "https://..." }`.
- **Ajouter un crédit** : ajoute une ligne à `credits`.
- **Annoncer une date de concert** : passe `actu.hasDate` à `true` et remplis
  les champs de `actu.withDate`.

## Ajouter ou enlever une section

Le tableau `sections` en bas de `config.js` définit quelles sections
s'affichent, dans quel ordre :

- **Enlever une section** : mets `enabled: false` (ou supprime le bloc).
- **Réordonner** : change l'ordre des blocs dans le tableau.
- **Ajouter une section "liens"** (comme Streaming/Contact) : duplique un bloc
  `{ id, type: "links", title, links }` avec un nouvel `id`.
- **Ajouter une section "crédits"** : duplique le bloc `credits`.

### Ajouter un nouveau type de section

Si aucun type existant (`actu`, `links`, `credits`) ne convient :

1. Dans [js/app.js](js/app.js), ajoute une fonction dans l'objet `renderers`
   (ex. `renderers.gallery = (section) => { ... }`).
2. Ajoute un bloc correspondant `{ id, type: "gallery", ... }` dans
   `sections` côté `config.js`.
3. Ajoute le CSS nécessaire dans `css/styles.css`.

## Développer en local

Aucune installation nécessaire — c'est du HTML/CSS/JS pur. Sers le dossier
avec n'importe quel serveur statique, par exemple :

```
npx serve .
```

(Ouvrir `index.html` directement dans le navigateur ne fonctionne pas à
cause des imports ES modules, qui nécessitent `http://`.)

## Déployer sur Vercel

Aucune configuration nécessaire — c'est un site statique.

1. Pousse le repo sur GitHub.
2. Sur [vercel.com](https://vercel.com), "Add New Project" → importe le repo.
3. Laisse les réglages par défaut (aucun *build command*, *output directory* =
   racine) et déploie.

Ou en local avec la CLI Vercel :

```
npx vercel
```
