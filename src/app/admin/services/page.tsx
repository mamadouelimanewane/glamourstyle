'use client';

import React, { useState } from 'react';
import { services as initialServices, categories } from '@/data/services';

const ServicesAdminPage = () => {
    const [filter, setFilter] = useState('all');

    const filteredServices = filter === 'all'
        ? initialServices
        : initialServices.filter(s => s.category === filter);

    return (
        <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-lg font-heading font-bold text-gray-950">Service Menu</h1>
                    <p className="text-gray-500 text-[10px] font-medium">Customize your salon's professional offerings.</p>
                </div>
                <button className="px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white bg-gray-950 rounded-full hover:bg-gray-800 hover:shadow-lg transition-all">
                    + Register New Service
                </button>
            </div>

            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.value)}
                        className={`px-4 py-1.5 rounded-full text-[9px] uppercase tracking-widest font-extrabold transition-all border ${filter === cat.value
                            ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-md'
                            : 'bg-white text-gray-400 border-gray-100 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                    <div key={service.id} className="bg-white p-6 rounded-2xl border border-gray-100 relative group hover:shadow-xl transition-all flex flex-col overflow-hidden">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-[#D4AF37]/5 rounded-bl-full -translate-y-8 translate-x-8 group-hover:bg-[#D4AF37]/10 transition-colors" />

                        <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-[2px]">{service.category}</span>
                            <div className="flex gap-2">
                                <button className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 hover:bg-white border border-transparent hover:border-gray-100 transition-all">✏️</button>
                            </div>
                        </div>

                        <h3 className="text-sm font-heading font-bold mb-1 text-gray-950 group-hover:text-[#D4AF37] transition-colors">{service.name}</h3>
                        <p className="text-gray-500 text-xs font-medium mb-6 flex-1 line-clamp-2 leading-relaxed">{service.description}</p>

                        <div className="flex items-center justify-between pt-6 border-t border-gray-50 mt-auto">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Duration</span>
                                <span className="text-gray-900 font-bold text-xs tracking-tight">{service.duration} MIN</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] text-gray-400 uppercase font-bold tracking-widest">Price Point</span>
                                <span className="text-xl font-black text-gray-950">£{service.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesAdminPage;
