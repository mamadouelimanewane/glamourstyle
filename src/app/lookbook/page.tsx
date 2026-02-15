'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

const lookbookItems = [
    {
        id: 1,
        title: 'Coloration Artiste',
        category: 'Coloration',
        hairType: 'Boucles',
        image: '/luxury_box_braids_black_woman_1769458648557.png'
    },
    {
        id: 2,
        title: 'Sculpture Knotless',
        category: 'Sculpture',
        hairType: 'Frisé',
        image: '/knotless_braids_style_1769458664468.png'
    },
    {
        id: 3,
        title: 'Cornrows Dakaroises',
        category: 'Art',
        hairType: 'Crépu',
        image: '/african_cornrows_design_1769458682980.png'
    },
    {
        id: 4,
        title: 'Lissage de Soie',
        category: 'Soin',
        hairType: 'Lisse',
        image: '/silk_press_natural_hair_1769458698699.png'
    }
];

const LookbookPage = () => {
    const [filterCategory, setFilterCategory] = useState('All');
    const [filterHair, setFilterHair] = useState('All');

    const filteredItems = lookbookItems.filter(item => {
        const catMatch = filterCategory === 'All' || item.category === filterCategory;
        const hairMatch = filterHair === 'All' || item.hairType === filterHair;
        return catMatch && hairMatch;
    });

    return (
        <main className="min-h-screen bg-background text-secondary">
            <Header />

            <section className="pt-56 pb-40 relative overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-accent/5 blur-[150px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[50rem] h-[50rem] bg-primary/5 blur-[150px] -z-10" />

                <div className="section text-center px-10">
                    <span className="text-primary text-xs uppercase tracking-[12px] font-bold mb-10 block">Exposition Permanente</span>
                    <h1 className="text-6xl md:text-9xl mb-12 font-heading font-light text-secondary leading-tight">
                        Regard sur <br />
                        <span className="italic font-serif text-accent underline decoration-primary/20 decoration-8 underline-offset-12">Nos Créations</span>
                    </h1>
                    <p className="text-secondary/60 max-w-2xl mx-auto text-2xl leading-relaxed font-light italic mb-24">
                        Une curation de nos plus belles œuvres, où la technique s'efface devant l'émotion.
                        Trouvez l'inspiration pour votre prochaine métamorphose.
                    </p>

                    {/* Filters - Editorial Style */}
                    <div className="flex flex-wrap justify-center gap-16 mb-32 border-b border-secondary/5 pb-16">
                        <div className="space-y-6">
                            <p className="text-[10px] uppercase tracking-[6px] text-primary font-bold">L'Univers</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {['All', 'Sculpture', 'Coloration', 'Art', 'Soin'].map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilterCategory(cat)}
                                        className={`px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[4px] transition-all duration-700 ${filterCategory === cat ? 'bg-secondary text-white shadow-2xl' : 'text-secondary/40 hover:text-secondary'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-[10px] uppercase tracking-[6px] text-primary font-bold">La Texture</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {['All', 'Boucles', 'Frisé', 'Crépu', 'Lisse'].map((hair) => (
                                    <button
                                        key={hair}
                                        onClick={() => setFilterHair(hair)}
                                        className={`px-10 py-4 rounded-full text-xs font-bold uppercase tracking-[4px] transition-all duration-700 ${filterHair === hair ? 'bg-accent text-white shadow-2xl' : 'text-secondary/40 hover:text-secondary'}`}
                                    >
                                        {hair}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Grid - Gallery Style */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-[1600px] mx-auto">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="group relative aspect-[3/4] rounded-[80px] overflow-hidden bg-background border border-secondary/5 hover:shadow-[0_50px_100px_-20px_rgba(26,15,13,0.3)] transition-all duration-1000">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                {/* Artistic Overlay */}
                                <div className="absolute inset-0 bg-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-[2px]" />

                                <div className="absolute bottom-0 left-0 p-12 w-full text-left translate-y-8 group-hover:translate-y-0 transition-transform duration-700">
                                    <div className="flex gap-4 mb-6">
                                        <span className="text-[9px] font-bold uppercase tracking-[3px] bg-accent text-white px-4 py-2 rounded-full">
                                            {item.category}
                                        </span>
                                        <span className="text-[9px] font-bold uppercase tracking-[3px] bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full border border-white/20">
                                            {item.hairType}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-heading font-medium text-white mb-8 italic">{item.title}</h3>
                                    <button className="w-full py-6 bg-white text-secondary font-bold text-xs uppercase tracking-[4px] rounded-full hover:bg-primary hover:text-white transition-all duration-500 shadow-2xl active:scale-95">
                                        Réserver ce Style
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="py-48 text-center bg-background/50 rounded-[100px] border border-dashed border-secondary/10">
                            <span className="text-9xl mb-12 block opacity-10">�</span>
                            <p className="text-secondary/40 text-3xl font-light italic">Aucune œuvre ne correspond à votre sélection actuelle.</p>
                            <button
                                onClick={() => { setFilterCategory('All'); setFilterHair('All'); }}
                                className="mt-16 px-16 py-6 bg-secondary text-white rounded-full font-bold uppercase tracking-[6px] text-xs hover:bg-primary transition-all shadow-2xl"
                            >
                                Réinitialiser l'Exposition
                            </button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default LookbookPage;
