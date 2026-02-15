'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

const lookbookItems = [
    {
        id: 1,
        title: 'Luxury Box Braids',
        category: 'Braids',
        hairType: 'Kinky',
        image: '/images/gallery/gallery-3.jpg'
    },
    {
        id: 2,
        title: 'Elegant Knotless Braids',
        category: 'Braids',
        hairType: 'Kinky',
        image: '/images/gallery/gallery-2.jpg'
    },
    {
        id: 3,
        title: 'Artistic Braids',
        category: 'Braids',
        hairType: 'Curly',
        image: '/images/gallery/gallery-5.jpg'
    },
    {
        id: 4,
        title: 'Premium Natural Volume',
        category: 'Care',
        hairType: 'Curly',
        image: '/images/gallery/gallery-4.jpg'
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
        <main className="min-h-screen bg-[#0A0A0A] text-white">
            <Header />

            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/10 blur-[150px] -z-10" />
                <div className="section text-center">
                    <span className="text-[#D4AF37] text-sm uppercase tracking-[6px] font-bold mb-4 block">Inspiration</span>
                    <h1 className="mb-6 font-heading text-white">Interactive <span className="gradient-text italic font-serif">Lookbook</span></h1>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed mb-12 font-body">
                        Discover our exclusive creations celebrating African beauty. Filter by style or hair type to find your next transformation.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-4 mb-20">
                        <div className="space-y-4">
                            <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Service Style</p>
                            <div className="flex flex-wrap justify-center gap-2 bg-white/5 p-2 rounded-2xl border border-white/10">
                                {['All', 'Braids', 'Color', 'Care'].map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilterCategory(cat)}
                                        className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${filterCategory === cat ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 scale-105' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-bold">Hair Type</p>
                            <div className="flex flex-wrap justify-center gap-2 bg-white/5 p-2 rounded-2xl border border-white/10">
                                {['All', 'Kinky', 'Curly', 'Straight'].map((hair) => (
                                    <button
                                        key={hair}
                                        onClick={() => setFilterHair(hair)}
                                        className={`px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${filterHair === hair ? 'bg-[#D4AF37] text-black shadow-lg shadow-[#D4AF37]/20 scale-105' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                                    >
                                        {hair}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 px-6 max-w-6xl mx-auto">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="group relative aspect-[4/5] rounded-[40px] overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-700 shadow-2xl bg-[#111]">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90" />

                                <div className="absolute bottom-0 left-0 p-10 w-full">
                                    <div className="flex gap-3 mb-6">
                                        <span className="text-[10px] font-black uppercase tracking-widest bg-[#D4AF37] text-black px-4 py-1.5 rounded-full">
                                            {item.category}
                                        </span>
                                        <span className="text-[10px] font-black uppercase tracking-widest bg-white/10 text-white backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                                            {item.hairType}
                                        </span>
                                    </div>
                                    <h3 className="text-3xl font-heading font-bold text-white mb-8 group-hover:text-[#D4AF37] transition-colors">{item.title}</h3>

                                    <Link
                                        href="/#reservation"
                                        className="inline-block w-full py-5 bg-white text-black font-black text-xs uppercase tracking-[3px] rounded-2xl hover:bg-[#D4AF37] hover:text-black transition-all duration-500 shadow-xl"
                                    >
                                        Book This Style
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="py-40 text-center">
                            <span className="text-8xl mb-8 block opacity-10">🎞️</span>
                            <p className="text-gray-500 text-2xl italic font-light">No creations match these criteria at the moment.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default LookbookPage;
