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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-black/80 backdrop-blur-lg py-4 border-b border-white/5 shadow-2xl' : 'bg-transparent py-8'
                }`}
        >
            <div className="section flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-xl shadow-lg shadow-[#D4AF37]/20 group-hover:scale-110 transition-transform">
                        💇
                    </div>
                    <div className="flex flex-col">
                        <span className="text-white font-black text-xl tracking-[4px] leading-none mb-1">GLAMOUR STYLE</span>
                        <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[3px]">Luxury Hair Studio</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-black uppercase tracking-[2px] text-gray-300 hover:text-[#D4AF37] transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                    <Link
                        href="/#booking"
                        className="px-8 py-3 bg-[#D4AF37] text-black font-black text-[10px] uppercase tracking-[3px] rounded-full hover:bg-white transition-all shadow-lg shadow-[#D4AF37]/20 active:scale-95"
                    >
                        Book Now
                    </Link>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`w-6 h-0.5 bg-white transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-2xl transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-heading font-bold text-white hover:text-[#D4AF37] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/#booking"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-10 py-4 bg-[#D4AF37] text-black font-black text-xs uppercase tracking-[3px] rounded-full mt-4"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
