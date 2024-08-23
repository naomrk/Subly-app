// File: pages/index.js
import React from 'react';
import Head from 'next/head';
import HomePage from '../components/HomePage';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Subly - Simplifiez vos abonnements, maîtrisez vos dépenses</title>
        <meta name="description" content="Subly vous aide à gérer vos abonnements et à maîtriser vos dépenses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}

// File: components/HomePage.js
import React from 'react';
import Header from './Header';
import FeatureGrid from './FeatureGrid';

const HomePage = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <Header />
      <FeatureGrid />
    </div>
  );
};

export default HomePage;

// File: components/Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="flex items-center justify-between mb-8">
      <div className="flex items-center">
        <img src="/logo.svg" alt="Subly Logo" className="w-12 h-12 mr-4" />
        <h1 className="text-3xl font-bold text-blue-900">Subly</h1>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Commencer
      </button>
    </header>
  );
};

export default Header;

// File: components/FeatureGrid.js
import React from 'react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: "Gestion centralisée",
    description: "Gérez tous vos abonnements dans un seul endroit, classés par catégorie.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "text-green-500"
  },
  {
    title: "Rappels de renouvellement",
    description: "Recevez des notifications avant le renouvellement de vos abonnements.",
    icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9",
    color: "text-blue-500"
  },
  {
    title: "Analyse des dépenses",
    description: "Suivez vos dépenses liées aux abonnements et optimisez vos coûts.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    color: "text-gray-500"
  },
  {
    title: "Catégorisation automatique",
    description: "Vos abonnements sont automatiquement classés en catégories pour une meilleure vue d'ensemble de vos dépenses.",
    icon: "M3 7h18M3 12h18m-9 5h9",
    color: "text-purple-500"
  },
  {
    title: "Détecteur de doublons",
    description: "Évitez les abonnements redondants grâce à des notifications intelligentes détectant les doublons.",
    icon: "M12 8v4l3 3m0-10a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "text-red-500"
  },
  {
    title: "Recommandations d'optimisation",
    description: "Recevez des suggestions pour optimiser vos abonnements et réduire vos coûts.",
    icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    color: "text-yellow-500"
  }
];

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard key={index} {...feature} />
      ))}
    </div>
  );
};

export default FeatureGrid;

// File: components/FeatureCard.js
import React from 'react';

const FeatureCard = ({ title, description, icon, color }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" className={`h-8 w-8 ${color} mr-2`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} />
        </svg>
        <h2 className="text-lg font-medium">{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;

// File: styles/globals.css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';

body {
  @apply bg-gray-100;
}

// File: tailwind.config.js
module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        'blue': {
          900: '#000080',
        },
        'mint': '#98FF98',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

// File: next.config.js
module.exports = {
  reactStrictMode: true,
}

// File: package.json
{
  "name": "subly",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "12.0.0",
    "react": "17.0.2",
    "react-dom": "17.0.2"
  },
  "devDependencies": {
    "autoprefixer": "^10.3.7",
    "eslint": "8.0.1",
    "eslint-config-next": "11.1.2",
    "postcss": "^8.3.9",
    "tailwindcss": "^2.2.16"
  }
}
