'use client';

import React, { useState } from 'react';
import { services as initialServices, categories } from '@/data/services';

const ServicesAdminPage = () => {
    const [filter, setFilter] = useState('all');

    const filteredServices = filter === 'all'
        ? initialServices
        : initialServices.filter(s => s.category === filter);

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-heading mb-2">Service Portfolio</h1>
                    <p className="text-gray-500">Add, edit, or remove services offered at Glamour Style.</p>
                </div>
                <button className="btn-primary py-2">+ Add New Service</button>
            </div>

            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.value)}
                        className={`px-4 py-2 rounded-xl text-[10px] uppercase tracking-widest font-bold transition-all border ${filter === cat.value
                                ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-glow'
                                : 'bg-white/5 text-gray-400 border-white/5 hover:border-[#D4AF37]/30'
                            }`}
                    >
                        {cat.name}
                    </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service) => (
                    <div key={service.id} className="glass p-6 rounded-2xl border border-white/5 relative group hover:border-[#D4AF37]/20 transition-all flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <span className="text-[10px] uppercase font-bold text-[#D4AF37] tracking-widest">{service.category}</span>
                            <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="text-gray-500 hover:text-white transition-colors">✏️</button>
                                <button className="text-gray-500 hover:text-red-500 transition-colors">🗑️</button>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-2 group-hover:text-[#D4AF37] transition-colors">{service.name}</h3>
                        <p className="text-gray-500 text-sm mb-6 flex-1 line-clamp-3">{service.description}</p>

                        <div className="flex items-center justify-between pt-6 border-t border-gray-900 mt-auto">
                            <div className="flex flex-col">
                                <span className="text-[10px] text-gray-600 uppercase tracking-widest">Duration</span>
                                <span className="text-white font-medium">{service.duration} min</span>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-[10px] text-gray-600 uppercase tracking-widest">Price</span>
                                <span className="text-2xl font-bold text-[#D4AF37]">£{service.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesAdminPage;
