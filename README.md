# ProspectPro - SaaS de Prospection TPE/PME

![ProspectPro Logo](https://via.placeholder.com/400x120?text=ProspectPro&style=flat-square)

> **La première solution de prospection tout-en-un pensée pour les TPE et PME françaises**

[![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://typescriptlang.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)](https://mongodb.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)

## 🎯 Vue d'ensemble

ProspectPro est une application SaaS complète qui permet aux TPE et PME de :

- **Trouver** des prospects qualifiés dans une base de 2M+ entreprises françaises
- **Enrichir** automatiquement les données via APIs tierces (Hunter.io, Clearbit)
- **Contacter** via séquences emails/SMS automatisées
- **Convertir** grâce à un CRM intégré et des analytics prédictifs

## ✨ Fonctionnalités principales

### 🔍 **Prospection intelligente**

- Base de données enrichie 2M+ entreprises françaises (INSEE SIRENE)
- Filtres avancés : secteur, géolocalisation, taille, ancienneté
- Détection signaux déclencheurs (recrutements, déménagements, créations)
- Scoring automatique de qualité prospects (0-100)

### 📧 **Automation multi-canal**

- Séquences emails personnalisées avec templates sectoriels
- SMS marketing via Twilio
- Extension LinkedIn pour prospection sociale
- A/B testing automatique des campagnes

### 🎯 **CRM intégré ultra-simple**

- Pipeline visuel type Kanban
- Historique complet des interactions
- Notifications intelligentes et rappels
- Sync calendrier Google/Outlook

### 📊 **Analytics & ROI**

- Dashboard temps réel avec métriques clés
- Prédictions IA basées sur l'historique
- ROI détaillé par canal et campagne
- Benchmark sectoriel automatique

### 💳 **Gestion abonnements**

- 3 plans tarifaires (89€, 189€, 349€/mois)
- Quotas prospects inclus + facturation à l'usage
- Interface self-service Stripe complète

## 🚀 Stack technique

### **Frontend & Backend**

- **Next.js 14** (App Router) - Framework full-stack React
- **TypeScript** - Typage statique
- **Tailwind CSS + shadcn/ui** - Design system moderne
- **NextAuth.js** - Authentification complète

### **Base de données & Services**

- **MongoDB Atlas** - Base NoSQL cloud
- **Mongoose** - ODM avec validation schemas
- **Redis Cloud** - Cache et queues tâches
- **Vercel** - Déploiement et hosting

### **APIs d'enrichissement**

- **Hunter.io** - Enrichissement emails (0,10€/email)
- **Clearbit** - Données entreprises (0,50€/enrichissement)
- **INSEE SIRENE** - Données légales françaises (gratuit)
- **Bodacc** - Annonces légales (gratuit)

### **Communication**

- **SendGrid** - Envoi emails en masse
- **Twilio** - SMS multi-canal
- **Stripe** - Paiements et abonnements

## 📁 Structure du projet

```
prospect-pro/
├── src/
│   ├── app/                    # Next.js 14 App Router
│   │   ├── (auth)/            # Authentification
│   │   ├── (dashboard)/       # Dashboard protégé
│   │   └── api/               # API Routes
│   │       ├── prospects/     # CRUD prospects + enrichissement
│   │       ├── campaigns/     # Campagnes marketing
│   │       ├── enrichment/    # Services Hunter/Clearbit/INSEE
│   │       └── payments/      # Stripe webhooks
│   ├── components/            # Composants UI
│   ├── lib/                   # Configuration & services
│   ├── models/                # Modèles MongoDB
│   ├── hooks/                 # Hooks React custom
│   └── types/                 # Types TypeScript
```

## 🛠️ Installation

```bash
# Cloner le repository
git clone https://github.com/your-username/prospect-pro.git
cd prospect-pro

# Installer les dépendances
npm install

# Configuration environnement
cp .env.example .env.local
# Remplir les clés APIs dans .env.local

# Démarrage développement
npm run dev
```

## 🔑 Variables d'environnement

```bash
# Database
MONGODB_URI=mongodb+srv://...

# APIs Enrichissement
HUNTER_API_KEY=your-hunter-key
CLEARBIT_API_KEY=your-clearbit-key
INSEE_API_KEY=your-insee-key

# Communication
SENDGRID_API_KEY=your-sendgrid-key
TWILIO_ACCOUNT_SID=your-twilio-sid

# Paiements
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...
```

## 📊 Modèle économique

### **Coûts opérationnels**

- Infrastructure : 500€/mois
- Enrichissement APIs : 0,25€/prospect
- **Marge par client :** 39€ à 99€/mois selon plan

### **Tarification**

- **Starter :** 89€/mois - 200 prospects inclus
- **Business :** 189€/mois - 500 prospects inclus
- **Premium :** 349€/mois - 1000 prospects inclus

## 🎯 Objectifs Année 1

- **Q1 :** 30 clients → 18K€ CA
- **Q2 :** 120 clients → 75K€ CA
- **Q3 :** 280 clients → 170K€ CA
- **Q4 :** 450 clients → 290K€ CA

**Total :** 553K€ CA avec 84% de marge brute

## 🚀 Déploiement

```bash
# Production sur Vercel
npm run build
vercel --prod
```

## 📝 Documentation

- [Roadmap détaillé](./ROADMAP.md)
- [API Documentation](./docs/API.md)
- [Guide déploiement](./docs/DEPLOYMENT.md)

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature
3. Commit les changements
4. Ouvrir une Pull Request

## 📞 Support

- Email: support@prospectpro.fr
- Documentation: docs.prospectpro.fr

---

**ProspectPro** - Transformez votre prospection en machine à clients ! 🚀
