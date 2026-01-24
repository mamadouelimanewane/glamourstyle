'use client';

import React, { useState } from 'react';
import { services, categories } from '@/data/services';

const Services = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredServices = activeCategory === 'all'
        ? services
        : services.filter(service => service.category === activeCategory);

    return (
        <section id="services" className="section bg-[#0D0D0D]">
            <div className="text-center mb-16 animate-fadeIn">
                <span className="text-[#D4AF37] text-sm uppercase tracking-widest font-semibold tracking-[4px]">Our Portfolio</span>
                <h2 className="mt-4 mb-6">The Art of <span className="gradient-text">Transformation</span></h2>
                <div className="w-24 h-1 bg-[#D4AF37] mx-auto rounded-full" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
                {categories.map((category) => (
                    <button
                        key={category.id}
                        onClick={() => setActiveCategory(category.value)}
                        className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium ${activeCategory === category.value
                            ? 'bg-[#D4AF37] text-black border-[#D4AF37] shadow-glow'
                            : 'border-gray-700 text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37]'
                            }`}
                    >
                        {category.name}
                    </button>
                ))}
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                    <div key={service.id} className="card group relative overflow-hidden">
                        {service.popular && (
                            <div className="absolute top-4 right-4 bg-[#D4AF37] text-black text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter z-10">
                                Popular
                            </div>
                        )}

                        <div className="flex flex-col h-full">
                            <h3 className="text-xl mb-3 group-hover:text-[#D4AF37] transition-colors">
                                {service.name}
                            </h3>
                            <p className="text-gray-400 text-sm mb-6 flex-grow">
                                {service.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-6 border-t border-gray-800">
                                <div className="flex flex-col">
                                    <span className="text-xs text-gray-500 uppercase tracking-widest">Duration</span>
                                    <span className="text-white font-medium">{service.duration} min</span>
                                </div>
                                <div className="flex flex-col items-end">
                                    <span className="text-xs text-gray-500 uppercase tracking-widest">Investment</span>
                                    <span className="text-[#D4AF37] font-bold text-2xl">£{service.price}</span>
                                </div>
                            </div>

                            <button
                                onClick={() => {
                                    const element = document.getElementById('reservation');
                                    element?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                className="mt-6 w-full py-3 bg-transparent border border-gray-700 text-white rounded-md hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all duration-300 font-semibold"
                            >
                                Book this service
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 glass p-8 rounded-xl text-center border-dashed border-2 border-[#D4AF37]/30">
                <h3 className="text-2xl mb-4">Need personalized advice?</h3>
                <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                    Our expert stylists are available for a free consultation to define the style that will enhance your beauty best.
                </p>
                <button className="btn-secondary">Book a Consultation</button>
            </div>
        </section>
    );
};

export default Services;
