'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const lookbookItems = [
    {
        id: 1,
        title: 'Box Braids de Luxe',
        category: 'Tresses',
        hairType: 'Crépus',
        image: '/luxury_box_braids_black_woman_1769458648557.png'
    },
    {
        id: 2,
        title: 'Knotless Braids Élégantes',
        category: 'Tresses',
        hairType: 'Crépus',
        image: '/knotless_braids_style_1769458664468.png'
    },
    {
        id: 3,
        title: 'Cornrows Artistiques',
        category: 'Tresses',
        hairType: 'Bouclés',
        image: '/african_cornrows_design_1769458682980.png'
    },
    {
        id: 4,
        title: 'Silk Press Brillant',
        category: 'Coloration',
        hairType: 'Lisses',
        image: '/silk_press_natural_hair_1769458698699.png'
    }
];

const LookbookPage = () => {
    const [filterCategory, setFilterCategory] = useState('Tout');
    const [filterHair, setFilterHair] = useState('Tout');

    const filteredItems = lookbookItems.filter(item => {
        const catMatch = filterCategory === 'Tout' || item.category === filterCategory;
        const hairMatch = filterHair === 'Tout' || item.hairType === filterHair;
        return catMatch && hairMatch;
    });

    return (
        <main className="min-h-screen bg-[#0A0A0A] text-white">
            <Header />

            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-[150px] -z-10" />
                <div className="section text-center">
                    <span className="text-[#D4AF37] text-sm uppercase tracking-[6px] font-bold mb-4 block">Inspiration</span>
                    <h1 className="mb-6 font-heading">Lookbook <span className="gradient-text italic">Interactif</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-12">
                        Découvrez nos créations exclusives pour sublimer la beauté africaine. Filtrez par style ou type de cheveux pour trouver votre prochaine transformation.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        <div className="space-y-2">
                            <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Style de Service</p>
                            <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                                {['Tout', 'Tresses', 'Coloration', 'Soin'].map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilterCategory(cat)}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${filterCategory === cat ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Type de Cheveux</p>
                            <div className="flex bg-white/5 p-1 rounded-xl border border-white/10">
                                {['Tout', 'Crépus', 'Bouclés', 'Lisses'].map((hair) => (
                                    <button
                                        key={hair}
                                        onClick={() => setFilterHair(hair)}
                                        className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all ${filterHair === hair ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20' : 'text-gray-400 hover:text-white'}`}
                                    >
                                        {hair}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-7xl mx-auto">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-500 shadow-2xl">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                                <div className="absolute bottom-0 left-0 p-8 w-full translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex gap-2 mb-3">
                                        <span className="text-[8px] font-black uppercase tracking-widest bg-[#D4AF37] text-black px-2 py-1 rounded">
                                            {item.category}
                                        </span>
                                        <span className="text-[8px] font-black uppercase tracking-widest bg-white/20 text-white backdrop-blur-md px-2 py-1 rounded border border-white/10">
                                            {item.hairType}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-heading font-bold text-white mb-4">{item.title}</h3>
                                    <button className="w-full py-3 bg-white text-black font-black text-[10px] uppercase tracking-[2px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-500">
                                        Réserver ce style
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="py-20 text-center">
                            <span className="text-6xl mb-6 block opacity-20">🎞️</span>
                            <p className="text-gray-500 text-lg italic">Aucune création ne correspond à ces critères pour le moment.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default LookbookPage;
