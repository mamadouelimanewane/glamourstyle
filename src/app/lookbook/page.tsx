'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const lookbookItems = [
    {
        id: 1,
        title: 'Luxury Box Braids',
        category: 'Braids',
        hairType: 'Coily',
        image: '/luxury_box_braids_black_woman_1769458648557.png'
    },
    {
        id: 2,
        title: 'Elegant Knotless Braids',
        category: 'Braids',
        hairType: 'Coily',
        image: '/knotless_braids_style_1769458664468.png'
    },
    {
        id: 3,
        title: 'Artistic Cornrows',
        category: 'Braids',
        hairType: 'Curly',
        image: '/african_cornrows_design_1769458682980.png'
    },
    {
        id: 4,
        title: 'Shiny Silk Press',
        category: 'Coloration',
        hairType: 'Straight',
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
        <main className="min-h-screen bg-[#FAF9F6] text-[#2D2D2D]">
            <Header />

            <section className="pt-48 pb-24 relative overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#C5A06B]/5 blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-[#2D2D2D]/5 blur-[120px] -z-10" />

                <div className="section text-center px-6">
                    <span className="text-[#C5A06B] text-xs uppercase tracking-[8px] font-bold mb-6 block">Inspiration</span>
                    <h1 className="text-5xl md:text-7xl mb-8 font-heading font-light text-[#2D2D2D]">Maison <span className="italic font-serif text-[#C5A06B]">Lookbook</span></h1>
                    <p className="text-[#6B6B6B] max-w-2xl mx-auto text-xl leading-relaxed font-light mb-16">
                        Discover our gallery of bespoke creations. Each look is a testament to the heritage and artistry we offer every guest.
                    </p>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-center gap-10 mb-20">
                        <div className="space-y-4">
                            <p className="text-[10px] uppercase tracking-[4px] text-[#A8A29E] font-bold">Ritual Category</p>
                            <div className="flex bg-[#FAF9F6] p-1.5 rounded-full border border-black/5 shadow-inner">
                                {['All', 'Braids', 'Coloration', 'Care'].map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setFilterCategory(cat)}
                                        className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${filterCategory === cat ? 'bg-[#2D2D2D] text-white shadow-xl shadow-black/10' : 'text-[#A8A29E] hover:text-[#2D2D2D]'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            <p className="text-[10px] uppercase tracking-[4px] text-[#A8A29E] font-bold">Natural Texture</p>
                            <div className="flex bg-[#FAF9F6] p-1.5 rounded-full border border-black/5 shadow-inner">
                                {['All', 'Coily', 'Curly', 'Straight'].map((hair) => (
                                    <button
                                        key={hair}
                                        onClick={() => setFilterHair(hair)}
                                        className={`px-8 py-3 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-500 ${filterHair === hair ? 'bg-[#C5A06B] text-white shadow-xl shadow-[#C5A06B]/20' : 'text-[#A8A29E] hover:text-[#2D2D2D]'}`}
                                    >
                                        {hair}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-6 max-w-7xl mx-auto">
                        {filteredItems.map((item) => (
                            <div key={item.id} className="group relative aspect-[4/5] rounded-[50px] overflow-hidden bg-white border border-black/5 hover:shadow-2xl hover:shadow-[#C5A06B]/10 transition-all duration-1000">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                {/* Soft Light Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                                <div className="absolute bottom-0 left-0 p-10 w-full text-left">
                                    <div className="flex gap-3 mb-4">
                                        <span className="text-[8px] font-bold uppercase tracking-[2px] bg-[#C5A06B] text-white px-3 py-1 rounded-full">
                                            {item.category}
                                        </span>
                                        <span className="text-[8px] font-bold uppercase tracking-[2px] bg-white text-[#2D2D2D] px-3 py-1 rounded-full border border-black/5">
                                            {item.hairType}
                                        </span>
                                    </div>
                                    <h3 className="text-2xl font-heading font-bold text-[#2D2D2D] mb-6 leading-tight">{item.title}</h3>
                                    <button className="w-full py-5 bg-[#2D2D2D] text-white font-bold text-[10px] uppercase tracking-[3px] rounded-full opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0 duration-700 shadow-xl shadow-black/10 active:scale-95">
                                        Book This Signature
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredItems.length === 0 && (
                        <div className="py-32 text-center">
                            <span className="text-7xl mb-10 block opacity-10">🎞️</span>
                            <p className="text-[#A8A29E] text-xl font-light italic">Our collection currently has no entries matching these criteria.</p>
                            <button onClick={() => { setFilterCategory('All'); setFilterHair('All'); }} className="mt-10 px-10 py-4 border border-[#C5A06B]/30 text-[#C5A06B] rounded-full font-bold uppercase tracking-widest text-xs hover:bg-[#C5A06B] hover:text-white transition-all">Clear All Filters</button>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default LookbookPage;
