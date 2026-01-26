'use client';

import React, { useState } from 'react';
import { services as initialServices, categories } from '@/data/services';

const categoryColors: Record<string, string> = {
    'hair-styling': 'bg-blue-50 border-blue-100 text-blue-700',
    'coloration': 'bg-amber-50 border-amber-100 text-amber-700',
    'soin': 'bg-emerald-50 border-emerald-100 text-emerald-700',
    'coiffure-evenement': 'bg-rose-50 border-rose-100 text-rose-700',
    'extension': 'bg-purple-50 border-purple-100 text-purple-700',
};

const ServicesAdminPage = () => {
    const [filter, setFilter] = useState('all');

    const filteredServices = filter === 'all'
        ? initialServices
        : initialServices.filter(s => s.category === filter);

    return (
        <div className="space-y-8 animate-fadeIn pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-gray-950">Menu des Services</h1>
                    <p className="text-gray-500 text-base font-medium mt-1 uppercase tracking-wide">Gestion de l'offre et des tarifs prestations</p>
                </div>
                <button className="px-6 py-3 text-sm font-bold uppercase tracking-widest text-white bg-gray-950 rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-black/10">
                    + Ajouter une prestation
                </button>
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2 pb-2">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.value)}
                        className={`px-5 py-2.5 rounded-xl text-xs uppercase tracking-widest font-black transition-all border ${filter === cat.value
                            ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-md shadow-[#D4AF37]/20'
                            : 'bg-white text-gray-500 border-gray-100 hover:border-gray-300'
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            {/* Services Grid as Business Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                    <div
                        key={service.id}
                        className={`p-6 rounded-2xl border transition-all hover:scale-[1.02] hover:shadow-xl flex flex-col min-h-[220px] relative overflow-hidden group ${categoryColors[service.category] || 'bg-white border-gray-100'}`}
                    >
                        {/* Decorative watermark icon */}
                        <div className="absolute -bottom-4 -right-4 text-8xl opacity-[0.05] rotate-12 group-hover:rotate-0 transition-transform">
                            {service.category === 'coloration' ? '🎨' :
                                service.category === 'soin' ? '🌿' :
                                    service.category === 'extension' ? '💎' : '✂️'}
                        </div>

                        <div className="flex justify-between items-start relative z-10 mb-4">
                            <div className="flex flex-col">
                                <span className="text-xs font-black uppercase tracking-widest opacity-60 mb-1">{service.category}</span>
                                <h3 className="text-xl font-heading font-bold leading-tight text-gray-950 group-hover:text-black transition-colors">{service.name}</h3>
                            </div>
                            <button className="w-8 h-8 rounded-lg bg-white/50 backdrop-blur-sm border border-white/80 flex items-center justify-center text-sm shadow-sm hover:bg-white transition-all">✏️</button>
                        </div>

                        <p className="text-gray-600/80 text-sm font-medium mb-6 flex-1 relative z-10 leading-relaxed max-w-[90%]">
                            {service.description}
                        </p>

                        <div className="flex items-center justify-between pt-4 border-t border-black/5 relative z-10 mt-auto">
                            <div className="flex flex-col">
                                <span className="text-xs uppercase font-black tracking-widest opacity-40">Durée Session</span>
                                <div className="flex items-center gap-1.5 mt-1">
                                    <span className="text-sm">⏱️</span>
                                    <span className="text-gray-900 font-bold text-sm uppercase">{service.duration} MIN</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-xs uppercase font-black tracking-widest opacity-40">Tarif Prestation</span>
                                <span className="text-3xl font-black text-gray-950">£{service.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {filteredServices.length === 0 && (
                <div className="py-20 text-center bg-white rounded-2xl border border-dashed border-gray-200">
                    <span className="text-3xl block mb-4">🔎</span>
                    <p className="text-gray-400 text-xs font-bold uppercase tracking-widest">Aucun service trouvé dans cette catégorie</p>
                </div>
            )}
        </div>
    );
};

export default ServicesAdminPage;
