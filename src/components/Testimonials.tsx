'use client';

import React from 'react';
import { testimonials } from '@/data/services';

const Testimonials = () => {
    return (
        <section id="avis" className="section bg-[#0A0A0A] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#D4AF37]/5 rounded-full blur-3xl" />

            <div className="text-center mb-16">
                <span className="text-[#D4AF37] text-sm uppercase tracking-widest font-semibold">Kind Words</span>
                <h2 className="mt-4 mb-4">Appreciated <span className="gradient-text">Excellence</span></h2>
                <p className="text-gray-400">Hear from our clients about their Glamour Style experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testi) => (
                    <div key={testi.id} className="glass p-8 rounded-2xl relative">
                        <div className="absolute top-6 right-8 text-6xl text-[#D4AF37]/10 font-serif">“</div>
                        <div className="flex items-center mb-6">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className="text-[#D4AF37] text-lg">★</span>
                            ))}
                        </div>
                        <p className="text-gray-300 italic mb-8 relative z-10 text-lg">
                            "{testi.comment}"
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8B7355] flex items-center justify-center font-bold text-black uppercase">
                                    {testi.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white uppercase tracking-wider">{testi.name}</h4>
                                    <p className="text-xs text-[#D4AF37]">{testi.service}</p>
                                </div>
                            </div>
                            <span className="text-xs text-gray-600 font-mono">{testi.date}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <div className="flex flex-col items-center">
                    <p className="text-gray-500 text-sm mb-4">Recommended on</p>
                    <div className="flex gap-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                        <span className="font-bold text-2xl">Google</span>
                        <span className="font-bold text-2xl">Trustpilot</span>
                        <span className="font-bold text-2xl">Yelp</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
