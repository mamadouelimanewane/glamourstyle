'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/#services' },
        { name: 'Lookbook', href: '/lookbook' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Experience', href: '/#experience' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${isScrolled ? 'bg-white/90 backdrop-blur-2xl py-4 border-b border-black/5 shadow-md' : 'bg-transparent py-10'
                }`}
        >
            <div className="section flex items-center justify-between px-8">
                <Link href="/" className="group flex items-center gap-4">
                    <div className="relative w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl shadow-xl shadow-primary/20 group-hover:rotate-12 transition-transform duration-500">
                        <span className="text-white">✨</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-secondary font-black text-2xl tracking-[5px] leading-none mb-1 font-heading">MICHELE KA</span>
                        <span className="text-accent text-[9px] font-bold uppercase tracking-[4px]">Dakar • Paris Artistry</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-12 font-heading">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-[11px] font-bold uppercase tracking-[3px] text-secondary/70 hover:text-primary transition-all relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-2 left-0 w-0 h-[2px] bg-accent transition-all duration-500 group-hover:w-full"></span>
                        </Link>
                    ))}
                    <div className="flex items-center gap-6">
                        <Link
                            href="/#booking"
                            className="px-10 py-4 bg-secondary text-white font-bold text-[10px] uppercase tracking-[4px] rounded-full hover:bg-primary transition-all duration-500 shadow-2xl active:scale-95"
                        >
                            Rendez-vous
                        </Link>
                    </div>
                </nav>

                <div className="lg:hidden flex items-center gap-6">
                    {/* Mobile Toggle */}
                    <button
                        className="w-12 h-12 flex flex-col items-center justify-center gap-2 bg-secondary rounded-full"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2.5' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 bg-background/98 backdrop-blur-3xl transition-all duration-700 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-12">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-4xl font-heading font-light text-secondary hover:text-primary transition-colors italic"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/#booking"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-12 py-5 bg-primary text-white font-black text-xs uppercase tracking-[5px] rounded-full mt-6 shadow-2xl"
                    >
                        Réserver
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
