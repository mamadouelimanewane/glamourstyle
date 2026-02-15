'use client';

import React from 'react';
import { testimonials } from '@/data/services';

const Testimonials = () => {
    return (
        <section id="avis" className="section py-32 bg-white relative overflow-hidden">
            {/* Soft Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50rem] h-[50rem] bg-[#C5A06B]/5 blur-[120px] rounded-full -z-10" />

            <div className="text-center mb-24 px-6">
                <span className="text-[#C5A06B] font-bold text-xs uppercase tracking-[6px] mb-4 block">Kind Words</span>
                <h2 className="text-4xl md:text-6xl font-heading text-[#2D2D2D] leading-tight font-light">Appreciated <span className="italic font-serif text-[#C5A06B]">Excellence</span></h2>
                <p className="text-[#6B6B6B] font-light mt-4">Hear from our clients about their bespoke Glamour Style experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto px-6">
                {testimonials.map((testi) => (
                    <div key={testi.id} className="p-10 rounded-[50px] relative bg-[#FAF9F6] border border-black/5 hover:bg-white hover:shadow-2xl hover:shadow-[#C5A06B]/10 transition-all duration-700 group">
                        <div className="absolute top-8 right-10 text-7xl text-[#C5A06B]/10 font-serif italic group-hover:text-[#C5A06B]/20 transition-colors">“</div>
                        <div className="flex items-center mb-8 gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className="text-[#C5A06B] text-sm">★</span>
                            ))}
                        </div>
                        <p className="text-[#2D2D2D]/80 italic mb-10 relative z-10 text-xl font-light leading-relaxed">
                            "{testi.comment}"
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-5">
                                <div className="w-14 h-14 rounded-full bg-[#C5A06B] flex items-center justify-center font-bold text-white uppercase text-lg shadow-lg shadow-[#C5A06B]/20">
                                    {testi.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#2D2D2D] uppercase tracking-widest text-xs">{testi.name}</h4>
                                    <p className="text-[10px] text-[#C5A06B] font-bold uppercase tracking-[2px] mt-1">{testi.service}</p>
                                </div>
                            </div>
                            <span className="text-[10px] text-[#A8A29E] font-bold uppercase tracking-widest">{testi.date}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-24 text-center">
                <div className="flex flex-col items-center">
                    <p className="text-[10px] font-bold text-[#A8A29E] mb-10 uppercase tracking-[4px]">Recommended on</p>
                    <div className="flex gap-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 items-baseline">
                        <span className="font-bold text-2xl text-[#2D2D2D]">Google</span>
                        <span className="font-bold text-2xl text-[#2D2D2D]">Trustpilot</span>
                        <span className="font-bold text-2xl text-[#2D2D2D]">Yelp</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
