'use client';

import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { services, categories } from '@/data/services';
import Link from 'next/link';

const PricingPage = () => {
    return (
        <main className="min-h-screen bg-background text-foreground">
            <Header />

            <section className="pt-32 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 blur-[150px] -z-10" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 blur-[150px] -z-10" />

                <div className="section text-center">
                    <span className="text-secondary text-sm uppercase tracking-[6px] font-bold mb-4 block">Our Rates</span>
                    <h1 className="mb-6 font-heading text-primary">Investment in <span className="gradient-text italic">Your Beauty</span></h1>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-lg leading-relaxed font-body">
                        Explore our transparent pricing for premium hair services. Each session is a bespoke experience tailored to your needs.
                    </p>
                </div>
            </section>

            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    {categories.filter(c => c.id !== 'all').map((category) => (
                        <div key={category.id} className="mb-20 last:mb-0">
                            <div className="flex items-center gap-6 mb-10">
                                <h2 className="text-3xl font-heading text-primary">{category.name}</h2>
                                <div className="h-px bg-gradient-to-r from-secondary to-transparent flex-grow opacity-30" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                                {services.filter(s => s.category === category.value).map((service) => (
                                    <div key={service.id} className="group flex justify-between items-start pb-6 border-b border-border hover:border-secondary/30 transition-colors">
                                        <div className="max-w-md">
                                            <div className="flex items-center gap-3 mb-1">
                                                <h3 className="text-xl font-bold font-heading text-primary group-hover:text-secondary transition-colors">{service.name}</h3>
                                                {service.popular && (
                                                    <span className="text-[10px] bg-secondary text-primary px-2 py-0.5 rounded font-bold uppercase tracking-tighter shadow-sm">Pop</span>
                                                )}
                                            </div>
                                            <p className="text-muted-foreground text-sm line-clamp-1 font-body">{service.description}</p>
                                            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-2 block">{service.duration} MIN SESSION</span>
                                        </div>
                                        <div className="text-right shrink-0">
                                            <span className="text-secondary text-2xl font-bold font-heading">£{service.price}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="section pb-32">
                <div className="card p-12 text-center border-2 border-secondary/20 relative overflow-hidden shadow-premium">
                    <div className="relative z-10">
                        <h2 className="text-4xl mb-6 font-heading text-primary">Ready to <span className="gradient-text">Transform?</span></h2>
                        <p className="text-muted-foreground max-w-xl mx-auto mb-10 font-body">
                            Book your appointment today and experience the Glamour Style difference. Secure your spot with a small deposit.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/#reservation" className="btn-primary">Book Appointment</Link>
                            <Link href="/#contact" className="btn-secondary">Contact Us</Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default PricingPage;
