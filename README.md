# AngerWeb - Service de Conception Web à Angers

Site web professionnel pour le service de conception web AngerWeb, basé à Angers, France.

## Technologies Utilisées

- HTML5
- CSS3 (LESS)
- JavaScript
- 11ty (Eleventy)
- Netlify (Hébergement)

## Prérequis

- Node.js (v14 ou supérieur)
- npm (v6 ou supérieur)

## Installation

1. Cloner le dépôt :
```bash
git clone https://github.com/votre-username/angerweb.git
cd angerweb
```

2. Installer les dépendances :
```bash
npm install
```

3. Démarrer le serveur de développement :
```bash
npm start
```

Le site sera accessible à l'adresse `http://localhost:8080`

## Structure du Projet

```
angerweb/
├── src/
│   ├── _includes/     # Composants réutilisables
│   ├── _layouts/      # Templates de mise en page
│   ├── assets/        # Images et autres ressources
│   ├── css/          # Fichiers LESS
│   ├── js/           # Fichiers JavaScript
│   └── *.njk         # Pages du site
├── _site/            # Site généré (ignoré par git)
├── .eleventy.js      # Configuration 11ty
├── package.json      # Dépendances et scripts
└── README.md         # Documentation
```

## Commandes Disponibles

- `npm start` : Démarre le serveur de développement
- `npm run build` : Génère le site pour la production
- `npm run watch:less` : Surveille les changements dans les fichiers LESS

## Déploiement

Le site est configuré pour être déployé sur Netlify. Chaque push sur la branche principale déclenchera un déploiement automatique.

## Maintenance

### Mise à Jour des Dépendances

```bash
npm update
```

### Ajout de Nouvelles Pages

1. Créer un nouveau fichier `.njk` dans le dossier `src/`
2. Utiliser le layout de base :
```njk
---
layout: base.njk
title: Titre de la Page
description: Description de la page
---
```

### Modification du Style

Les styles sont écrits en LESS et se trouvent dans le dossier `src/css/`. Le fichier principal est `style.less`.

## Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Créer une Pull Request

## Licence

ISC

## Contact

Aymen Kouskoussi
Email: contact@angerweb.fr 