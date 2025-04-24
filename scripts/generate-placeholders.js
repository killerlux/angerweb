const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Configuration des dimensions
const dimensions = {
    portfolio: { width: 1200, height: 800 },
    profile: { width: 400, height: 400 },
    general: { width: 1920, height: 1080 }
};

// Fonction pour générer une image de placeholder
function generatePlaceholder(width, height, text, outputPath) {
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Fond
    ctx.fillStyle = '#f3f4f6';
    ctx.fillRect(0, 0, width, height);

    // Texte
    ctx.fillStyle = '#1f2937';
    ctx.font = 'bold 48px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(text, width / 2, height / 2);

    // Dimensions
    ctx.font = '24px Arial';
    ctx.fillText(`${width}x${height}`, width / 2, height / 2 + 50);

    // Sauvegarder l'image
    const buffer = canvas.toBuffer('image/jpeg');
    fs.writeFileSync(outputPath, buffer);
}

// Créer les dossiers nécessaires
const dirs = [
    'src/assets/portfolio',
    'src/assets/images',
    'src/assets/icons'
];

dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Générer les images de placeholder
generatePlaceholder(
    dimensions.portfolio.width,
    dimensions.portfolio.height,
    'Restaurant Website',
    'src/assets/portfolio/restaurant.jpg'
);

generatePlaceholder(
    dimensions.portfolio.width,
    dimensions.portfolio.height,
    'Salon de Coiffure',
    'src/assets/portfolio/coiffeur.jpg'
);

generatePlaceholder(
    dimensions.portfolio.width,
    dimensions.portfolio.height,
    'Artisan Local',
    'src/assets/portfolio/artisan.jpg'
);

generatePlaceholder(
    dimensions.profile.width,
    dimensions.profile.height,
    'Aymen Kouskoussi',
    'src/assets/images/aymen-profile.jpg'
);

generatePlaceholder(
    dimensions.general.width,
    dimensions.general.height,
    'Angers City',
    'src/assets/images/angers-city.jpg'
);

console.log('Images de placeholder générées avec succès !'); 