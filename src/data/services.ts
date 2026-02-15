import { Service, PaymentOption, LoyaltyProgram } from '@/types';

export const services: Service[] = [
    // HAIR STYLING
    {
        id: 'cut-styling',
        name: 'Coupe & Coiffage',
        description: 'Coupe de cheveux personnalisée avec coiffage professionnel pour magnifier votre look unique',
        duration: 60,
        price: 85,
        category: 'hair-styling' as any,
        popular: true,
    },
    {
        id: 'blow-dry-luxe',
        name: 'Brushing de Luxe',
        description: 'Brushing premium utilisant des produits haut de gamme pour une finition impeccable',
        duration: 45,
        price: 65,
        category: 'hair-styling' as any,
        popular: true,
    },
    {
        id: 'keratin-treatment',
        name: 'Lissage à la Kératine',
        description: 'Traitement intensif à la kératine pour des cheveux soyeux et sans frisottis pendant des mois',
        duration: 180,
        price: 350,
        category: 'hair-styling' as any,
    },
    {
        id: 'silk-press',
        name: 'Silk Press Premium',
        description: 'Silk press haut de gamme avec protection thermique et produits de luxe',
        duration: 150,
        price: 180,
        category: 'hair-styling' as any,
    },
    {
        id: 'child-cut',
        name: 'Coupe Enfant (Moins de 10 ans)',
        description: 'Coupe douce et professionnelle pour les enfants de moins de 10 ans',
        duration: 30,
        price: 35,
        category: 'hair-styling' as any,
    },

    // COLORATION
    {
        id: 'full-color',
        name: 'Traitement Couleur Complet',
        description: 'Soin couleur complet avec des produits professionnels sans ammoniaque',
        duration: 120,
        price: 150,
        category: 'coloration',
        popular: true,
    },
    {
        id: 'balayage-highlights',
        name: 'Balayage / Mèches',
        description: 'Technique de balayage naturel ou mèches pour un effet lumineux',
        duration: 150,
        price: 200,
        category: 'coloration',
    },
    {
        id: 'ombre-hair',
        name: 'Ombré Hair',
        description: 'Dégradé de couleur élégant du foncé au clair',
        duration: 180,
        price: 250,
        category: 'coloration',
    },
    {
        id: 'toning-gloss',
        name: 'Patine / Gloss',
        description: 'Soin de brillance et correction de couleur pour sublimer votre ton',
        duration: 45,
        price: 70,
        category: 'coloration',
    },

    // CARE
    {
        id: 'restructuring-care',
        name: 'Soin Restructurant',
        description: 'Soin profond pour réparer les cheveux abîmés et fragiles',
        duration: 60,
        price: 80,
        category: 'soin' as any,
    },
    {
        id: 'intensive-keratin',
        name: 'Soin Intense à la Kératine',
        description: 'Traitement intensif à la kératine pour renforcer la fibre capillaire',
        duration: 75,
        price: 95,
        category: 'soin' as any,
        popular: true,
    },
    {
        id: 'hair-spa',
        name: 'Hair Spa Premium',
        description: 'Expérience complète : massage du cuir chevelu, soin profond, vapeur à l\'ozone',
        duration: 90,
        price: 120,
        category: 'soin' as any,
    },
    {
        id: 'scalp-detox',
        name: 'Traitement Détox Cuir Chevelu',
        description: 'Nettoyage en profondeur et purification du cuir chevelu',
        duration: 45,
        price: 60,
        category: 'soin' as any,
    },

    // EVENTS
    {
        id: 'bridal-updo',
        name: 'Coiffure de Mariée',
        description: 'Coiffure élaborée pour votre grand jour, essai inclus',
        duration: 120,
        price: 280,
        category: 'coiffure-evenement',
        popular: true,
    },
    {
        id: 'evening-styling',
        name: 'Coiffage de Soirée',
        description: 'Mise en beauté raffinée pour vos événements spéciaux',
        duration: 90,
        price: 150,
        category: 'coiffure-evenement',
    },
    {
        id: 'knotless-braids',
        name: 'Tresses Knotless de Luxe',
        description: 'Tresses traditionnelles avec des extensions de haute qualité',
        duration: 240,
        price: 220,
        category: 'coiffure-evenement',
    },
    {
        id: 'cornrows',
        name: 'Cornrows Tressées',
        description: 'Tresses plaquées avec motifs personnalisables',
        duration: 180,
        price: 180,
        category: 'coiffure-evenement',
    },

    // EXTENSIONS
    {
        id: 'natural-extensions',
        name: 'Pose d\'Extensions Naturelles',
        description: 'Extensions 100% naturelles, pose à froid ou à chaud',
        duration: 180,
        price: 450,
        category: 'extension',
    },
    {
        id: 'full-weave',
        name: 'Tissage de Luxe Complet',
        description: 'Tissage premium avec des cheveux naturels de qualité supérieure',
        duration: 240,
        price: 380,
        category: 'extension',
    },
    {
        id: 'custom-wig',
        name: 'Perruque Sur Mesure',
        description: 'Création de perruque personnalisée avec des cheveux naturels',
        duration: 300,
        price: 650,
        category: 'extension',
    },
];

export const paymentOptions: PaymentOption[] = [
    {
        id: 'klarna',
        name: 'Klarna',
        description: 'Payez en 3 ou 4 fois sans frais',
        logo: '/payment/klarna.svg',
        type: 'bnpl',
    },
    {
        id: 'afterpay',
        name: 'Afterpay',
        description: 'Achetez maintenant, payez plus tard',
        logo: '/payment/afterpay.svg',
        type: 'bnpl',
    },
    {
        id: 'affirm',
        name: 'Affirm',
        description: 'Plans de paiement flexibles jusqu\'à 12 mois',
        logo: '/payment/affirm.svg',
        type: 'bnpl',
    },
    {
        id: 'zip',
        name: 'Zip',
        description: 'Divisez votre paiement facilement',
        logo: '/payment/zip.svg',
        type: 'bnpl',
    },
    {
        id: 'card',
        name: 'Carte Bancaire',
        description: 'Paiement sécurisé par carte',
        logo: '/payment/card.svg',
        type: 'card',
    },
];

export const loyaltyPrograms: LoyaltyProgram[] = [
    {
        name: 'Programme de Fidélité',
        description: 'Récompenses exclusives pour nos clients réguliers',
        discount: 10,
        minVisits: 5,
    },
    {
        name: 'Tarif Enfant',
        description: 'Réduction de £20 sur tous les services pour les moins de 10 ans',
        discount: 20,
    },
];

export const categories = [
    { id: 'all', name: 'Tous les Services', value: 'all' },
    { id: 'hair-styling', name: 'Coiffage', value: 'hair-styling' },
    { id: 'coloration', name: 'Couleur', value: 'coloration' },
    { id: 'soin', name: 'Soin', value: 'soin' },
    { id: 'coiffure-evenement', name: 'Événements', value: 'coiffure-evenement' },
    { id: 'extension', name: 'Extensions', value: 'extension' },
];

export const testimonials = [
    {
        id: '1',
        name: 'Zainab A.',
        rating: 5,
        comment: 'Absolument magnifique ! Fatou a une main experte pour un tressage sans douleur. Le salon est un véritable joyau.',
        service: 'Tresses de Luxe',
        date: '2026-01-22',
    },
    {
        id: '2',
        name: 'Aminata K.',
        rating: 5,
        comment: 'Enfin un salon de luxe qui comprend parfaitement nos textures. Mon Silk Press est impeccable et mes cheveux sont incroyables.',
        service: 'Silk Press Premium',
        date: '2026-01-18',
    },
    {
        id: '3',
        name: 'Binta D.',
        rating: 5,
        comment: 'Expérience incroyable pour mi mariage. L\'interprétation moderne du style traditionnel a été le point fort de la soirée. Merci !',
        service: 'Coiffure de Mariée',
        date: '2026-01-15',
    },
    {
        id: '4',
        name: 'Yasmine B.',
        rating: 5,
        comment: 'Le soin naturel des cheveux a sauvé mes boucles. Le massage du cuir chevelu était d\'un autre monde. Je reviendrai tous les mois.',
        service: 'Soin Premium',
        date: '2026-01-05',
    },
];

export const workingHours = {
    monday: 'Fermé',
    tuesday: '09h30 - 18h00',
    wednesday: '09h30 - 18h00',
    thursday: '09h30 - 18h00',
    friday: '09h30 - 19h00',
    saturday: '09h30 - 19h00',
    sunday: '10h00 - 16h00',
};

export const contactInfo = {
    phone: '+44 20 7123 4567',
    email: 'contact@glamourstyle.co.uk',
    address: '68 High Street, Waltham Cross, Royaume-Uni',
    instagram: '@luxehair',
    facebook: 'luxehairartistry',
    tiktok: '@luxehair',
};
