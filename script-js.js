const features = [
    { title: "Gestion centralisée", description: "Gérez tous vos abonnements dans un seul endroit." },
    { title: "Rappels de renouvellement", description: "Recevez des notifications avant le renouvellement de vos abonnements." },
    { title: "Analyse des dépenses", description: "Suivez vos dépenses liées aux abonnements et optimisez vos coûts." },
    { title: "Catégorisation automatique", description: "Vos abonnements sont automatiquement classés en catégories." },
    { title: "Détecteur de doublons", description: "Évitez les abonnements redondants grâce à des notifications intelligentes." },
    { title: "Recommandations d'optimisation", description: "Recevez des suggestions pour optimiser vos abonnements." }
];

function createFeatureCards() {
    const featuresSection = document.getElementById('features');
    features.forEach(feature => {
        const card = document.createElement('div');
        card.className = 'feature-card';
        card.innerHTML = `
            <h3>${feature.title}</h3>
            <p>${feature.description}</p>
        `;
        featuresSection.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', createFeatureCards);
