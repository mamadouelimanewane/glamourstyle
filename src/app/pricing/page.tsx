'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services, categories } from '@/data/services';
import Link from 'next/link';

const PricingPage = () => {
    return (
        <main className="min-h-screen bg-[#FAF9F6] text-[#2D2D2D]">
            <Header />

            <section className="pt-48 pb-24 relative overflow-hidden bg-white">
                <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-[#C5A06B]/5 blur-[120px] -z-10" />
                <div className="absolute bottom-0 left-0 w-[40rem] h-[40rem] bg-[#2D2D2D]/5 blur-[120px] -z-10" />

                <div className="section text-center px-6">
                    <span className="text-[#C5A06B] text-xs uppercase tracking-[8px] font-bold mb-6 block">Our Rates</span>
                    <h1 className="text-5xl md:text-7xl mb-8 font-heading font-light text-[#2D2D2D]">Investment in <br /><span className="italic font-serif text-[#C5A06B]">Your Radiance</span></h1>
                    <p className="text-[#6B6B6B] max-w-2xl mx-auto text-xl leading-relaxed font-light">
                        Explore our curated selection of premium hair rituals. Each session is a bespoke encounter tailored to your hair's unique story.
                    </p>
                </div>
            </section>

            <section className="py-32 bg-[#FAF9F6]">
                <div className="max-w-7xl mx-auto px-6">
                    {categories.filter(c => c.id !== 'all').map((category) => (
                        <div key={category.id} className="mb-32 last:mb-0">
                            <div className="flex items-center gap-8 mb-16">
                                <h2 className="text-3xl md:text-4xl font-heading font-light text-[#2D2D2D] uppercase tracking-widest">{category.name}</h2>
                                <div className="h-px bg-black/5 flex-grow" />
                                <span className="text-[#C5A06B] text-[10px] font-bold uppercase tracking-[4px]">Collection</span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
                                {services.filter(s => s.category === category.value).map((service) => (
                                    <div key={service.id} className="group flex justify-between items-start pb-8 border-b border-black/5 hover:border-[#C5A06B]/30 transition-all">
                                        <div className="max-w-md">
                                            <div className="flex items-center gap-4 mb-2">
                                                <h3 className="text-xl font-heading font-bold text-[#2D2D2D] group-hover:text-[#C5A06B] transition-colors">{service.name}</h3>
                                                {service.popular && (
                                                    <span className="text-[8px] bg-[#C5A06B] text-white px-2 py-1 rounded-full font-bold uppercase tracking-[2px] shadow-sm">Popular</span>
                                                )}
                                            </div>
                                            <p className="text-[#6B6B6B] text-sm mb-4 font-light leading-relaxed">{service.description}</p>
                                            <div className="flex items-center gap-4">
                                                <span className="text-[10px] text-[#A8A29E] font-bold uppercase tracking-widest">{service.duration} Minute Ritual</span>
                                                <div className="w-1 h-1 rounded-full bg-[#C5A06B]/30" />
                                                <span className="text-[10px] text-[#C5A06B] font-bold uppercase tracking-widest">Premium Care</span>
                                            </div>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <span className="text-[#2D2D2D] text-3xl font-heading font-bold">£{service.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section py-40 bg-white">
                <div className="max-w-5xl mx-auto bg-[#FAF9F6] p-12 md:p-24 rounded-[80px] text-center border border-black/5 relative overflow-hidden shadow-2xl shadow-black/5 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#C5A06B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <div className="relative z-10">
                        <span className="text-[#C5A06B] text-xs font-bold uppercase tracking-[6px] mb-6 block">Ready to Transform?</span>
                        <h2 className="text-4xl md:text-6xl mb-10 font-heading font-light text-[#2D2D2D]">Embrace Your <br /><span className="italic font-serif text-[#C5A06B]">New Identity</span></h2>
                        <p className="text-[#6B6B6B] max-w-xl mx-auto mb-12 text-lg font-light leading-relaxed">
                            Step into our studio and let our artists redefine your look. Your transformation begins with a single moment of decision.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-6">
                            <Link href="/#booking" className="px-12 py-5 bg-[#2D2D2D] text-white font-bold text-xs uppercase tracking-[3px] rounded-full hover:bg-[#C5A06B] transition-all shadow-xl shadow-black/10">Reserve My Slot</Link>
                            <Link href="/#contact" className="px-12 py-5 bg-white border border-black/5 text-[#2D2D2D] font-bold text-xs uppercase tracking-[3px] rounded-full hover:bg-black hover:text-white transition-all shadow-sm">Inquire via WhatsApp</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PricingPage;
