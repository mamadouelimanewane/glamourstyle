'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-32 bg-background overflow-hidden">
            {/* Artistic Background Accents */}
            <div className="absolute -top-24 -right-24 w-[50rem] h-[50rem] bg-accent/10 rounded-full blur-[120px] animate-pulse" />
            <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />

            <div className="section relative z-10 grid lg:grid-cols-2 gap-20 items-center px-10">
                <div className="animate-fadeInLeft">
                    <div className="flex items-center gap-4 mb-10">
                        <div className="w-16 h-px bg-primary" />
                        <span className="text-primary font-bold text-xs uppercase tracking-[8px]">
                            L'Art de la Beauté
                        </span>
                    </div>

                    <h1 className="text-6xl sm:text-8xl lg:text-9xl mb-10 leading-[0.9] font-heading font-light text-secondary">
                        L'Éclat <br />
                        <span className="italic font-serif text-accent">Singulier</span>
                    </h1>

                    <p className="text-muted-foreground text-xl md:text-2xl max-w-xl leading-relaxed mb-16 font-light italic">
                        Plongez dans un univers où la coiffure rencontre l'art. Au cœur de Dakar, nous sculptons votre identité avec passion et audace.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-8">
                        <Link
                            href="#booking"
                            className="w-full sm:w-auto px-16 py-6 bg-secondary text-white font-bold text-xs uppercase tracking-[5px] rounded-full hover:bg-primary transition-all duration-700 shadow-2xl active:scale-95 flex items-center justify-center gap-4"
                        >
                            <span>Prendre RDV</span>
                            <span className="text-xl">→</span>
                        </Link>
                        <Link
                            href="/lookbook"
                            className="w-full sm:w-auto px-16 py-6 bg-white/50 backdrop-blur-md border border-secondary/10 text-secondary font-bold text-xs uppercase tracking-[5px] rounded-full hover:bg-secondary hover:text-white transition-all duration-700 shadow-xl"
                        >
                            La Galerie
                        </Link>
                    </div>

                    <div className="mt-20 flex items-center gap-10 border-t border-secondary/5 pt-12">
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="w-14 h-14 rounded-full border-4 border-background bg-secondary/10 overflow-hidden shadow-xl">
                                    <div className="w-full h-full bg-accent/20" />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col">
                            <span className="text-secondary font-bold text-lg leading-none">100% Artistique</span>
                            <span className="text-[10px] uppercase tracking-[4px] text-primary mt-1 font-bold">L'expérience Ka</span>
                        </div>
                    </div>
                </div>

                <div className="relative aspect-[4/5] lg:aspect-[3/4] animate-reveal group">
                    {/* Artistic Frame */}
                    <div className="absolute inset-0 border-2 border-accent/30 rounded-[100px] translate-x-6 translate-y-6 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-1000 ease-out" />

                    <div className="relative h-full w-full rounded-[100px] overflow-hidden shadow-[0_50px_100px_-20px_rgba(26,15,13,0.3)] border-8 border-white">
                        <Image
                            src="/images/micheleka-hero.png"
                            alt="Michele Ka Artistry"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 via-transparent to-transparent" />
                    </div>

                    {/* Floating Info Tag */}
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-accent p-8 rounded-full shadow-2xl animate-float lg:block hidden border-8 border-background">
                        <div className="w-full h-full rounded-full flex flex-col items-center justify-center text-center text-white">
                            <span className="font-heading italic text-3xl">Ka</span>
                            <span className="text-[9px] font-black uppercase tracking-[3px] mt-2">Dakar Art</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ambient Background Blur */}
            <div className="absolute -bottom-20 -left-20 w-[40rem] h-[40rem] bg-[#C5A06B]/5 blur-[120px] rounded-full -z-10" />
        </section>
    );
};

export default Hero;
