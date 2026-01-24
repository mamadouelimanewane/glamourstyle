'use client';

import React from 'react';
import Image from 'next/image';

const Hero = () => {
    const scrollToReservation = () => {
        const element = document.getElementById('reservation');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="accueil" className="relative h-screen w-full flex items-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero.png"
                    alt="Luxury Hair Salon"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
                <div className="max-w-2xl animate-fadeInUp">
                    <h1 className="mb-6 leading-tight">
                        Modern <br />
                        <span className="gradient-text font-serif italic">Hair Artistry</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg">
                        Experience excellence in luxury hair styling. Our experts craft your unique style with passion and precision in a refined setting.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={scrollToReservation}
                            className="btn-primary flex items-center justify-center group"
                        >
                            Book Appointment
                            <svg
                                className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                        <button
                            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                            className="btn-secondary"
                        >
                            Explore Services
                        </button>
                    </div>

                    <div className="mt-12 flex items-center space-x-8 text-sm text-gray-400">
                        <div className="flex flex-col">
                            <span className="text-[#D4AF37] font-bold text-xl">10+</span>
                            <span>Years of Excellence</span>
                        </div>
                        <div className="w-px h-10 bg-gray-700" />
                        <div className="flex flex-col">
                            <span className="text-[#D4AF37] font-bold text-xl">5000+</span>
                            <span>Happy Clients</span>
                        </div>
                        <div className="w-px h-10 bg-gray-700" />
                        <div className="flex flex-col">
                            <span className="text-[#D4AF37] font-bold text-xl">4.9/5</span>
                            <span>Top Rated</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg
                    className="w-6 h-6 text-[#D4AF37]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
