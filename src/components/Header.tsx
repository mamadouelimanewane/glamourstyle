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
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/70 backdrop-blur-xl py-4 border-b border-black/5 shadow-sm' : 'bg-transparent py-8'
                }`}
        >
            <div className="section flex items-center justify-between">
                <Link href="/" className="group flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#C5A06B] rounded-full flex items-center justify-center text-xl shadow-lg shadow-[#C5A06B]/20 group-hover:scale-110 transition-transform">
                        💇
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[#2D2D2D] font-black text-xl tracking-[4px] leading-none mb-1">GLAMOUR STYLE</span>
                        <span className="text-[#C5A06B] text-[10px] font-bold uppercase tracking-[3px]">Elite Hair Artistry</span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-10">
                    <a
                        href="tel:+447943555555"
                        className="text-xs font-black uppercase tracking-[2px] text-[#C5A06B] hover:text-[#2D2D2D] transition-colors flex items-center gap-2"
                    >
                        📞 Call Support
                    </a>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-xs font-black uppercase tracking-[2px] text-[#2D2D2D]/70 hover:text-[#C5A06B] transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#C5A06B] transition-all group-hover:w-full"></span>
                        </Link>
                    ))}
                    <div className="flex items-center gap-4">
                        <a
                            href="https://wa.me/447943555555"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 bg-[#C5A06B]/10 border border-[#C5A06B]/20 rounded-full flex items-center justify-center hover:bg-[#C5A06B]/20 transition-all text-[#C5A06B] font-bold"
                            title="Chat on WhatsApp"
                        >
                            💬
                        </a>
                        <Link
                            href="/#booking"
                            className="px-8 py-3 bg-[#C5A06B] text-white font-black text-[10px] uppercase tracking-[3px] rounded-full hover:bg-[#2D2D2D] transition-all shadow-lg shadow-[#C5A06B]/20 active:scale-95"
                        >
                            Book Now
                        </Link>
                    </div>
                </nav>

                <div className="lg:hidden flex items-center gap-4">
                    <a href="tel:+447943555555" className="text-xl">📞</a>
                    {/* Mobile Toggle */}
                    <button
                        className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <span className={`w-6 h-0.5 bg-[#2D2D2D] transition-all ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-[#2D2D2D] transition-all ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`w-6 h-0.5 bg-[#2D2D2D] transition-all ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 bg-white/95 backdrop-blur-2xl transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
                <div className="flex flex-col items-center justify-center h-full gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-2xl font-heading font-bold text-[#2D2D2D] hover:text-[#C5A06B] transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="/#booking"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="px-10 py-4 bg-[#C5A06B] text-white font-black text-xs uppercase tracking-[3px] rounded-full mt-4"
                    >
                        Book Now
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
