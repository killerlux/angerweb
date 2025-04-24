# Assets Directory

Ce dossier contient toutes les ressources statiques du site (images, icônes, etc.).

## Structure des Dossiers

```
assets/
├── portfolio/     # Images des projets du portfolio
├── icons/         # Icônes et logos
└── images/        # Images générales du site
```

## Images Requises

### Portfolio
- `portfolio/restaurant.jpg` - Image du site web de restaurant
- `portfolio/coiffeur.jpg` - Image du site web de coiffure
- `portfolio/artisan.jpg` - Image du site web d'artisan

### Général
- `angers-city.jpg` - Image de la ville d'Angers
- `aymen-profile.jpg` - Photo de profil d'Aymen Kouskoussi
- `favicon.ico` - Icône du site

## Recommandations pour les Images

1. **Format** : Utilisez des images au format WebP avec fallback JPG/PNG
2. **Taille** : Optimisez les images pour le web (compression)
3. **Dimensions** :
   - Images de portfolio : 1200x800px
   - Photo de profil : 400x400px
   - Images générales : 1920x1080px max

## Optimisation

Pour optimiser les images :

1. Utilisez des outils comme :
   - [TinyPNG](https://tinypng.com/)
   - [Squoosh](https://squoosh.app/)
   - [ImageOptim](https://imageoptim.com/)

2. Créez des versions WebP :
   - [Convertio](https://convertio.co/)
   - [CloudConvert](https://cloudconvert.com/)

## Ajout de Nouvelles Images

1. Placez l'image dans le dossier approprié
2. Optimisez l'image selon les recommandations ci-dessus
3. Créez une version WebP si possible
4. Mettez à jour les références dans le code HTML 