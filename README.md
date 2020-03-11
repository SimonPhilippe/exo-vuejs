# **vuejs-menu-ex**

### Installation du projet
```
npm install
```

### Compiler & recharger ( pour le développement )
```
npm run serve
```

# **Consignes**

De manière globale, le projet doit visuellement se rapprocher au maximum des visuels présentés dans `annexe_vuejs_exo.jpg`.

## Partie I - **Router & navigation**

1. Installer le projet en local
2. Créer un fichier `router.js` dans le projet.

Pour aider à sa création, le composant `Nav.vue` comprend déjà des paths associés aux vues déjà existantes.

3. Intégrer un navigation drawer issu de Vuetify *(cf. annexe)* dans le composant Nav.vue.
4. Le navigation drawer devra se situer **sur la droite de l'écran** et se déployer au clic sur le burger menu déjà présent dans le template.
5. Le navigation drawer devra se ranger lorsqu'un clic a lieu en dehors de sa zone.

## Partie II - **Nouveau composant**

1. Créer un nouveau composant : `Article.vue`

Le template du composant doit imiter au mieux de ce qui est présenté sur les visuels dans `annexe_vuejs_exo.jpg`.

Le composant doit présenter dynamiquement le titre, l'url de l'image et le texte d'un article *(en fonction des infos présentes dans les vues)*.

2. Intégrer le composant `Article` dans les vues `Home.vue` et `Product_II.vue`.

Pour chaque vue, le nombre d'articles doit être dynamique, au cas où le nombre d'articles sur une vue change.


## Partie III - **Formulaire & listes**

Dans le composant `Page_manager.vue` :

1. Pour chaque liste présente dans les datas *(product1 & product2)*, afficher les articles correspondants *(cf. annexe)*.
2. L'icône mdi-picture ne doit s'afficher que si l'article comprend bien une image/une URL.
3. Faire en sorte qu'au clic sur la croix rouge, l'élément concerné soit retiré de la liste.
4. Faire en sorte qu'au clic sur le bouton + du formulaire, un article s'ajoute à l'une des deux listes *(grâce au select)* avec les informations correspondantes.

## Partie IV - **CSS & finitions**

1. Les liens ne doivent pas être soulignés
2. Le responsive doit être pris en compte *(cf. annexe)*.
3. Les `h1` de chaque page doivent tenir en une ligne, même au format mobile.
4. Il ne doit pas être possible de scroll sur l'axe X sur les pages du projet *(pas d'ascenceur latéral)*.
