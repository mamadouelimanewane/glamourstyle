'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 bg-[#FAF9F6] overflow-hidden">
            {/* Soft Ambient Background Elements */}
            <div className="absolute top-0 right-0 w-[60%] h-full bg-[#F5F1E9] -skew-x-12 origin-top-right transition-transform duration-1000" />

            <div className="section relative z-10 grid lg:grid-cols-2 gap-16 items-center px-6">
                <div className="animate-fadeInLeft">
                    <span className="inline-block text-[#C5A06B] font-bold text-xs uppercase tracking-[6px] mb-8">
                        The New Era of Hair Artistry
                    </span>
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl mb-8 leading-[1.1] font-heading font-light text-[#2D2D2D]">
                        Artistry in <br />
                        <span className="italic font-serif text-[#C5A06B]">Every Detail</span>
                    </h1>
                    <p className="text-[#6B6B6B] text-lg md:text-xl max-w-xl leading-relaxed mb-12 font-light">
                        Experience Waltham Cross's premier sanctuary for Afro-Caribbean hair. We blend ancestral heritage with modern luxury to reveal your inner regal.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center gap-6">
                        <Link
                            href="#booking"
                            className="w-full sm:w-auto px-12 py-5 bg-[#2D2D2D] text-white font-bold text-xs uppercase tracking-[3px] rounded-full hover:bg-[#C5A06B] transition-all duration-500 shadow-xl active:scale-95"
                        >
                            Elevate Your Look
                        </Link>
                        <Link
                            href="/lookbook"
                            className="w-full sm:w-auto px-12 py-5 bg-transparent border border-[#2D2D2D]/20 text-[#2D2D2D] font-bold text-xs uppercase tracking-[3px] rounded-full hover:bg-[#2D2D2D] hover:text-white transition-all duration-500"
                        >
                            The Collection
                        </Link>
                    </div>

                    <div className="mt-16 flex items-center gap-8 border-t border-black/5 pt-10">
                        <div className="flex -space-x-4">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className="w-12 h-12 rounded-full border-2 border-white bg-gray-200 overflow-hidden">
                                    <div className="w-full h-full bg-[#EAD09E]/20" />
                                </div>
                            ))}
                        </div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-[#C5A06B]">
                            Join 500+ <br /> Elite Clients
                        </p>
                    </div>
                </div>

                <div className="relative aspect-[4/5] lg:aspect-square animate-reveal group">
                    <div className="absolute inset-0 border-2 border-[#C5A06B]/20 rounded-[80px] translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
                    <div className="relative h-full w-full rounded-[80px] overflow-hidden shadow-2xl">
                        <Image
                            src="/images/hero-luxury.png"
                            alt="Luxury Hair Art"
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-1000"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#C5A06B]/20 to-transparent" />
                    </div>
                    {/* Floating Accent */}
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white p-6 rounded-3xl shadow-2xl animate-float lg:block hidden">
                        <div className="w-full h-full border border-[#C5A06B]/20 rounded-2xl flex flex-col items-center justify-center text-center">
                            <span className="text-[#C5A06B] font-serif italic text-2xl">20%</span>
                            <span className="text-[8px] font-black uppercase tracking-widest">Group Treat</span>
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
