'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 shadow-2xl' : 'bg-transparent py-8'
                }`}
        >
            <nav className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="relative">
                        <div className="w-10 h-10 md:w-12 md:h-12 border-2 border-[#D4AF37] rounded-full flex items-center justify-center transition-transform duration-500 group-hover:rotate-[360deg]">
                            <span className="text-xl md:text-2xl">💇</span>
                        </div>
                        <div className="absolute inset-0 bg-[#D4AF37] blur-lg opacity-0 group-hover:opacity-20 transition-opacity" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-heading text-xl md:text-2xl font-bold gradient-text leading-none">
                            STYLE GLAMOUR
                        </h1>
                        <p className="text-[10px] text-gray-400 font-light tracking-widest hidden sm:block uppercase">Salon de coiffure de luxe</p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden lg:flex flex-row items-center space-x-12">
                    <li>
                        <Link href="/#accueil" className="text-white hover:text-[#D4AF37] transition-all font-bold text-xs uppercase tracking-[3px]">
                            Maison
                        </Link>
                    </li>
                    <li>
                        <Link href="/#services" className="text-white hover:text-[#D4AF37] transition-all font-bold text-xs uppercase tracking-[3px]">
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="/lookbook" className="text-white hover:text-[#D4AF37] transition-all font-bold text-xs uppercase tracking-[3px]">
                            Portefeuille
                        </Link>
                    </li>
                    <li>
                        <Link href="/pricing" className="text-white hover:text-[#D4AF37] transition-all font-bold text-xs uppercase tracking-[3px]">
                            Tarification
                        </Link>
                    </li>
                    <li>
                        <Link href="/#avis" className="text-white hover:text-[#D4AF37] transition-all font-bold text-xs uppercase tracking-[3px]">
                            Avis
                        </Link>
                    </li>
                </ul>

                {/* Right side Actions */}
                <div className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/#reservation"
                        className="btn-primary py-4 px-10 text-[10px] font-black tracking-[4px]"
                    >
                        RÉSERVEZ MAINTENANT
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden text-white p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <div className="w-8 h-5 flex flex-col justify-between items-end">
                        <span className={`h-0.5 bg-[#D4AF37] transition-all duration-300 ${isMobileMenuOpen ? 'w-8 rotate-45 translate-y-2' : 'w-8'}`} />
                        <span className={`h-0.5 bg-white transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-5'}`} />
                        <span className={`h-0.5 bg-[#D4AF37] transition-all duration-300 ${isMobileMenuOpen ? 'w-8 -rotate-45 -translate-y-2.5' : 'w-3'}`} />
                    </div>
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <div className={`fixed inset-0 bg-black z-40 lg:hidden transition-transform duration-700 ease-in-out ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col h-full justify-center items-center space-y-12 text-center">
                    <Link href="/#accueil" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-heading text-white hover:text-[#D4AF37] transition-colors">Maison</Link>
                    <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-heading text-white hover:text-[#D4AF37] transition-colors">Services</Link>
                    <Link href="/lookbook" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-heading text-white hover:text-[#D4AF37] transition-colors">Portefeuille</Link>
                    <Link href="/pricing" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-heading text-white hover:text-[#D4AF37] transition-colors">Tarification</Link>
                    <Link href="/#avis" onClick={() => setIsMobileMenuOpen(false)} className="text-4xl font-heading text-white hover:text-[#D4AF37] transition-colors">Avis</Link>
                    <Link href="/#reservation" onClick={() => setIsMobileMenuOpen(false)} className="btn-primary py-6 px-12 text-xs">RÉSERVEZ MAINTENANT</Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
