# Test Technique IRIS – Développeur Frontend 2025

## Description

Ce dépôt contient la réalisation du test technique IRIS. Le projet consiste en l’intégration d’une maquette de site touristique avec WordPress, incluant des composants dynamiques et un thème personnalisé.

Le travail a été réalisé en deux étapes :

1. **Version 8h** : initialisation de WordPress, création du thème, intégration de la maquette Figma en HTML/CSS/JS/TypeScript avec Vite.
2. **Version complète** : ajout de composants interactifs (carousels, cards dynamiques, tabs), effets hover/active, adaptation au thème WordPress et déploiement.

## Stack technique

- WordPress (CMS)
- PHP (CPT et intégration)
- HTML / CSS / Tailwind
- TypeScript 
- Vite


## Fonctionnalités

- Custom Post Type **“Activités”** : Titre, Contenu, Image mise en avant, Prix, Commune, Durée
- Slider pour les activités sur la home page
- Tabs pour la section **“Nos bases d’activités”**
- Menu burger responsive
- Effets hover et transitions sur les éléments interactifs
- Site responsive desktop & mobile

## Déploiement

Le site est déployé sur l’environnement fourni par IRIS :

- **Site public** : [https://techtest.preprod7.irislab.top/](https://techtest.preprod7.irislab.top/)
- **Admin WordPress** : [https://techtest.preprod7.irislab.top/wp-admin](https://techtest.preprod7.irislab.top/wp-admin) (identifiants fournis pour le test)

## Notes

- La première version a été réalisée en 8h et fournit un rendu statique fidèle à la maquette.
- La version complète montre les fonctionnalités dynamiques et l’adaptation à WordPress, réalisée avec un peu plus de temps et l’aide de ChatGPT pour l’intégration.

## Instructions locales

1. Cloner le dépôt.
2. Installer WordPress et configurer le thème personnalisé.
3. Importer les assets (`dist/assets`) générés par Vite.
4. Activer le thème et vérifier les CPT **“Activités”**.

## Branches

- `main` : version statique initiale réalisée en 8h.
- `final` : version complète avec intégration dynamique et adaptation à WordPress.