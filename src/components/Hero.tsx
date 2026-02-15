'use client';

import React from 'react';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background with luxury gradient and subtle noise */}
            <div className="absolute inset-0 bg-[#0A0A0A] -z-20" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-black -z-10" />
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none -z-10 bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

            {/* Decorative elements */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full" />
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-white/5 blur-[120px] rounded-full" />

            <div className="section text-center relative z-10">
                <div className="animate-reveal">
                    <span className="inline-block text-[#D4AF37] font-black text-xs md:text-sm uppercase tracking-[8px] mb-6 border-b-2 border-[#D4AF37]/30 pb-2">
                        Le meilleur studio de coiffure africaine de Londres
                    </span>
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] font-heading text-white">
                        Excellence <br />
                        <span className="gradient-text italic font-serif">et beauté</span>
                    </h1>
                    <p className="text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-medium px-4">
                        Découvrez une expérience d'exception où l'artisanat traditionnel rencontre le luxe contemporain. Tresses et soins capillaires haut de gamme sur mesure pour la femme africaine moderne.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="#booking"
                            className="w-full sm:w-auto px-10 py-5 bg-[#D4AF37] text-black font-black text-xs uppercase tracking-[4px] rounded-full hover:bg-white transition-all duration-500 shadow-2xl shadow-[#D4AF37]/20 hover:-translate-y-1"
                        >
                            Sécurisez votre session
                        </Link>
                        <Link
                            href="/lookbook"
                            className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white border border-white/10 font-black text-xs uppercase tracking-[4px] rounded-full hover:bg-white/10 transition-all duration-500 backdrop-blur-md"
                        >
                            Explorez le lookbook
                        </Link>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 animate-bounce opacity-40">
                    <span className="text-[10px] font-black uppercase tracking-[4px] rotate-90 origin-left mt-10 text-white">Rouleau</span>
                    <div className="w-[1px] h-20 bg-gradient-to-b from-[#D4AF37] to-transparent" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
