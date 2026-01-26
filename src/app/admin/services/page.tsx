'use client';

import React, { useState } from 'react';
import { services as initialServices, categories } from '@/data/services';

const ServicesAdminPage = () => {
    const [filter, setFilter] = useState('all');

    const filteredServices = filter === 'all'
        ? initialServices
        : initialServices.filter(s => s.category === filter);

    return (
        <div className="space-y-6 animate-fadeIn pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-sm font-bold text-gray-900 uppercase tracking-widest">Menu des Services</h1>
                    <p className="text-gray-400 text-[9px] font-medium uppercase tracking-wider mt-0.5">Configuration des Offres Professionnelles</p>
                </div>
                <button className="px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white bg-gray-950 rounded hover:bg-gray-800 transition-all">
                    + Nouvelle Prestation
                </button>
            </div>

            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.value)}
                        className={`px-3 py-1.5 rounded text-[8px] uppercase tracking-widest font-black transition-all border ${filter === cat.value
                            ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-sm'
                            : 'bg-white text-gray-400 border-gray-100 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredServices.map((service) => (
                    <div key={service.id} className="bg-white p-4 rounded-xl border border-gray-200 relative group hover:shadow-md transition-all flex flex-col">
                        <div className="flex justify-between items-start mb-3">
                            <span className="text-[8px] uppercase font-bold text-[#D4AF37] tracking-wider">{service.category}</span>
                            <button className="w-5 h-5 rounded bg-gray-50 flex items-center justify-center text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">✏️</button>
                        </div>

                        <h3 className="text-[11px] font-black mb-1 text-gray-950 group-hover:text-[#D4AF37] transition-colors uppercase tracking-tight leading-tight">{service.name}</h3>
                        <p className="text-gray-400 text-[9px] font-medium mb-4 flex-1 line-clamp-2 leading-relaxed">{service.description}</p>

                        <div className="flex items-center justify-between pt-3 border-t border-gray-50 mt-auto">
                            <div className="flex flex-col">
                                <span className="text-[7px] text-gray-400 uppercase font-black tracking-widest">Temps</span>
                                <span className="text-gray-900 font-bold text-[10px]">{service.duration} MIN</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-[7px] text-gray-400 uppercase font-black tracking-widest">Tarif Base</span>
                                <span className="text-base font-black text-gray-950">£{service.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesAdminPage;
