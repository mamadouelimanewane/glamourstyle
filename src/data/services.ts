import { Service, PaymentOption, LoyaltyProgram } from '@/types';

export const services: Service[] = [
    // HAIR STYLING
    {
        id: 'cut-styling',
        name: 'Cut & Styling',
        description: 'Personalized haircut with professional styling to enhance your unique look',
        duration: 60,
        price: 85,
        category: 'hair-styling' as any,
        popular: true,
    },
    {
        id: 'blow-dry-luxe',
        name: 'Luxury Blow Dry',
        description: 'Premium blow dry using high-end products for an impeccable finish',
        duration: 45,
        price: 65,
        category: 'hair-styling' as any,
        popular: true,
    },
    {
        id: 'keratin-treatment',
        name: 'Keratin Smoothing',
        description: 'Intensive keratin treatment for silky, frizz-free hair for months',
        duration: 180,
        price: 350,
        category: 'hair-styling' as any,
    },
    {
        id: 'silk-press',
        name: 'Premium Silk Press',
        description: 'High-end silk press with heat protection and luxury products',
        duration: 150,
        price: 180,
        category: 'hair-styling' as any,
    },
    {
        id: 'child-cut',
        name: 'Children\'s Cut (Under 10)',
        description: 'Gentle and professional haircut for children under 10 years old',
        duration: 30,
        price: 35,
        category: 'hair-styling' as any,
    },

    // COLORATION
    {
        id: 'full-color',
        name: 'Full Color Treatment',
        description: 'Complete color treatment with professional ammonia-free products',
        duration: 120,
        price: 150,
        category: 'coloration',
        popular: true,
    },
    {
        id: 'balayage-highlights',
        name: 'Balayage / Highlights',
        description: 'Natural balayage technique or highlights for a luminous effect',
        duration: 150,
        price: 200,
        category: 'coloration',
    },
    {
        id: 'ombre-hair',
        name: 'Ombré Hair',
        description: 'Elegant color gradient from dark to light',
        duration: 180,
        price: 250,
        category: 'coloration',
    },
    {
        id: 'toning-gloss',
        name: 'Toning / Gloss',
        description: 'Shine treatment and color correction to enhance your tone',
        duration: 45,
        price: 70,
        category: 'coloration',
    },

    // CARE
    {
        id: 'restructuring-care',
        name: 'Restructuring Treatment',
        description: 'Deep care to repair damaged and fragile hair',
        duration: 60,
        price: 80,
        category: 'soin' as any,
    },
    {
        id: 'intensive-keratin',
        name: 'Intensive Keratin Care',
        description: 'Intensive keratin treatment to strengthen the hair fiber',
        duration: 75,
        price: 95,
        category: 'soin' as any,
        popular: true,
    },
    {
        id: 'hair-spa',
        name: 'Premium Hair Spa',
        description: 'Complete experience: scalp massage, deep care, ozone steam',
        duration: 90,
        price: 120,
        category: 'soin' as any,
    },
    {
        id: 'scalp-detox',
        name: 'Scalp Detox Treatment',
        description: 'Deep cleansing and purification of the scalp',
        duration: 45,
        price: 60,
        category: 'soin' as any,
    },

    // EVENTS
    {
        id: 'bridal-updo',
        name: 'Bridal Updo',
        description: 'Elaborate hairstyle for your big day, trial included',
        duration: 120,
        price: 280,
        category: 'coiffure-evenement',
        popular: true,
    },
    {
        id: 'evening-styling',
        name: 'Evening Styling',
        description: 'Refined beauty styling for your special events',
        duration: 90,
        price: 150,
        category: 'coiffure-evenement',
    },
    {
        id: 'knotless-braids',
        name: 'Luxury Knotless Braids',
        description: 'Traditional braiding with high-quality extensions',
        duration: 240,
        price: 220,
        category: 'coiffure-evenement',
    },
    {
        id: 'cornrows',
        name: 'Braided Cornrows',
        description: 'Flat braiding with customizable patterns',
        duration: 180,
        price: 180,
        category: 'coiffure-evenement',
    },

    // EXTENSIONS
    {
        id: 'natural-extensions',
        name: 'Natural Extensions Install',
        description: '100% natural hair extensions, cold or hot application',
        duration: 180,
        price: 450,
        category: 'extension',
    },
    {
        id: 'full-weave',
        name: 'Full Luxury Weave',
        description: 'Premium weave with top-quality natural hair',
        duration: 240,
        price: 380,
        category: 'extension',
    },
    {
        id: 'custom-wig',
        name: 'Custom Made Wig',
        description: 'Personalized wig creation using natural hair',
        duration: 300,
        price: 650,
        category: 'extension',
    },
];

export const paymentOptions: PaymentOption[] = [
    {
        id: 'klarna',
        name: 'Klarna',
        description: 'Pay in 3 or 4 interest-free installments',
        logo: '/payment/klarna.svg',
        type: 'bnpl',
    },
    {
        id: 'afterpay',
        name: 'Afterpay',
        description: 'Shop now, pay later',
        logo: '/payment/afterpay.svg',
        type: 'bnpl',
    },
    {
        id: 'affirm',
        name: 'Affirm',
        description: 'Flexible payment plans up to 12 months',
        logo: '/payment/affirm.svg',
        type: 'bnpl',
    },
    {
        id: 'zip',
        name: 'Zip',
        description: 'Split your payment easily',
        logo: '/payment/zip.svg',
        type: 'bnpl',
    },
    {
        id: 'card',
        name: 'Credit Card',
        description: 'Secure card payment',
        logo: '/payment/card.svg',
        type: 'card',
    },
];

export const loyaltyPrograms: LoyaltyProgram[] = [
    {
        name: 'Loyalty Program',
        description: 'Exclusive rewards for our regular clients',
        discount: 10,
        minVisits: 5,
    },
    {
        name: 'Children\'s Rate',
        description: '£20 discount on all services for children under 10',
        discount: 20,
    },
];

export const categories = [
    { id: 'all', name: 'All Services', value: 'all' },
    { id: 'hair-styling', name: 'Styling', value: 'hair-styling' },
    { id: 'coloration', name: 'Color', value: 'coloration' },
    { id: 'soin', name: 'Care', value: 'soin' },
    { id: 'coiffure-evenement', name: 'Events', value: 'coiffure-evenement' },
    { id: 'extension', name: 'Extensions', value: 'extension' },
];

export const testimonials = [
    {
        id: '1',
        name: 'Zainab A.',
        rating: 5,
        comment: 'Absolutely stunning! Fatou has an expert hand for painless braiding. The salon is a true gem.',
        service: 'Luxury Braids',
        date: '2026-01-22',
    },
    {
        id: '2',
        name: 'Aminata K.',
        rating: 5,
        comment: 'Finally a luxury salon that perfectly understands our textures. My Silk Press is flawless and my hair feels amazing.',
        service: 'Premium Silk Press',
        date: '2026-01-18',
    },
    {
        id: '3',
        name: 'Binta D.',
        rating: 5,
        comment: 'Incredible experience for my wedding. The modern take on traditional styling was the highlight of the night. Thank you!',
        service: 'Bridal Updo',
        date: '2026-01-15',
    },
    {
        id: '4',
        name: 'Yasmine B.',
        rating: 5,
        comment: 'The natural hair care saved my curls. The scalp massage was out of this world. I\'ll be back every month.',
        service: 'Premium Care',
        date: '2026-01-05',
    },
];

export const workingHours = {
    monday: 'Closed',
    tuesday: '9:30 AM - 6:00 PM',
    wednesday: '9:30 AM - 6:00 PM',
    thursday: '9:30 AM - 6:00 PM',
    friday: '9:30 AM - 7:00 PM',
    saturday: '9:30 AM - 7:00 PM',
    sunday: '10:00 AM - 4:00 PM',
};

export const contactInfo = {
    phone: '+44 20 7123 4567',
    email: 'contact@luxehairartistry.co.uk',
    address: '68 High Street, Waltham Cross, UK',
    instagram: '@luxehair',
    facebook: 'luxehairartistry',
    tiktok: '@luxehair',
};
