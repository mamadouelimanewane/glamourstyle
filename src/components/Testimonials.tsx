'use client';

import React from 'react';
import { testimonials } from '@/data/services';

const Testimonials = () => {
    return (
        <section id="avis" className="section bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-secondary/10 rounded-full blur-3xl opacity-50" />

            <div className="text-center mb-16 animate-fadeInUp">
                <span className="text-secondary text-sm uppercase tracking-widest font-bold tracking-[4px]">Kind Words</span>
                <h2 className="mt-4 mb-4 font-heading text-primary">Appreciated <span className="gradient-text">Excellence</span></h2>
                <p className="text-muted-foreground font-body">Hear from our clients about their Glamour Style experience</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testi) => (
                    <div key={testi.id} className="card p-8 rounded-2xl relative bg-muted/20 border-border">
                        <div className="absolute top-6 right-8 text-6xl text-secondary/10 font-serif">“</div>
                        <div className="flex items-center mb-6">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className="text-secondary text-lg">★</span>
                            ))}
                        </div>
                        <p className="text-primary/80 italic mb-8 relative z-10 text-lg font-body leading-relaxed">
                            "{testi.comment}"
                        </p>
                        <div className="flex justify-between items-center">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center font-bold text-primary-foreground uppercase font-heading">
                                    {testi.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-primary font-heading uppercase tracking-widest text-xs">{testi.name}</h4>
                                    <p className="text-[10px] text-secondary font-bold uppercase tracking-tighter">{testi.service}</p>
                                </div>
                            </div>
                            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{testi.date}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-16 text-center">
                <div className="flex flex-col items-center">
                    <p className="text-[10px] font-bold text-muted-foreground mb-6 uppercase tracking-widest">Recommended on</p>
                    <div className="flex gap-8 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500 items-baseline">
                        <span className="font-heading font-black text-2xl text-primary/80">Google</span>
                        <span className="font-heading font-black text-2xl text-primary/80">Trustpilot</span>
                        <span className="font-heading font-black text-2xl text-primary/80">Yelp</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
