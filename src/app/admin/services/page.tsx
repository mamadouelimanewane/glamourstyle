'use client';

import React, { useState } from 'react';

const ServicesAdminPage = () => {
    const [filter, setFilter] = useState('All');

    const categories = [
        { id: 1, label: 'All', value: 'All' },
        { id: 2, label: 'Styling', value: 'Styling' },
        { id: 3, label: 'Coloration', value: 'Coloration' },
        { id: 4, label: 'Care', value: 'Care' },
        { id: 5, label: 'Extensions', value: 'Extensions' },
    ];

    const services = [
        { id: 1, name: 'Luxury Box Braids', category: 'Styling', price: 220, duration: 240, color: 'border-blue-100 bg-blue-50/30', description: 'Complete high-end braiding with premium finish and hair protection.' },
        { id: 2, name: 'Silk Press & Treatment', category: 'Styling', price: 120, duration: 90, color: 'border-rose-100 bg-rose-50/30', description: 'Thermal smoothing on natural hair with deep hydration treatment.' },
        { id: 3, name: 'Full Creative Color', category: 'Coloration', price: 180, duration: 180, color: 'border-amber-100 bg-amber-50/30', description: 'Full custom coloration with scalp protection and shine boost.' },
        { id: 4, name: 'Keratin Deep Care', category: 'Care', price: 85, duration: 60, color: 'border-emerald-100 bg-emerald-50/30', description: 'Intensive keratin reconstructive treatment for damaged hair.' },
        { id: 5, name: 'Bridal Premium Updo', category: 'Styling', price: 250, duration: 120, color: 'border-purple-100 bg-purple-50/30', description: 'Exclusive wedding styling with trial session included.' },
        { id: 6, name: 'Natural Extensions', category: 'Extensions', price: 350, duration: 150, color: 'border-indigo-100 bg-indigo-50/30', description: 'Premium human hair extensions for length and volume.' },
    ];

    const filteredServices = filter === 'All'
        ? services
        : services.filter(s => s.category === filter);

    return (
        <div className="space-y-8 animate-fadeIn pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-gray-950">Service Menu</h1>
                    <p className="text-gray-500 text-base font-medium mt-1 uppercase tracking-wide">Manage offerings and pricing</p>
                </div>
                <button className="px-6 py-3 text-sm font-bold uppercase tracking-widest text-white bg-gray-950 rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-black/10">
                    + Add New Service
                </button>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
                {categories.map((cat) => (
                    <button
                        key={cat.id}
                        onClick={() => setFilter(cat.value)}
                        className={`px-5 py-2.5 rounded-xl text-xs uppercase tracking-widest font-black transition-all border ${filter === cat.value
                            ? 'bg-[#D4AF37] text-white border-[#D4AF37] shadow-md shadow-[#D4AF37]/20'
                            : 'bg-white text-gray-500 border-gray-100 hover:border-gray-300'
                            }`}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Services Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                    <div key={service.id} className={`group relative p-8 rounded-[32px] border-2 transition-all hover:shadow-2xl hover:-translate-y-2 overflow-hidden flex flex-col ${service.color}`}>
                        {/* Decorative watermark */}
                        <div className="absolute -top-10 -right-10 text-9xl opacity-[0.03] rotate-12 group-hover:rotate-0 transition-transform duration-700 select-none">✂️</div>

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

                        <div className="flex justify-between items-end pt-6 border-t border-white/40 relative z-10">
                            <div className="flex flex-col">
                                <span className="text-xs uppercase font-black tracking-widest opacity-40">Session Duration</span>
                                <div className="flex items-center gap-1.5 mt-1">
                                    <span className="text-sm">⏱️</span>
                                    <span className="text-gray-900 font-bold text-sm uppercase">{service.duration} MIN</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <span className="text-xs uppercase font-black tracking-widest opacity-40">Service Tariff</span>
                                <span className="text-3xl font-black text-gray-950">£{service.price}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesAdminPage;
