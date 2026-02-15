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

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass shadow-lg py-3' : 'bg-transparent py-5'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-6 flex flex-row items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex flex-row items-center space-x-3 group shrink-0">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-full flex items-center justify-center transition-transform group-hover:scale-105">
                        <span className="text-xl md:text-2xl">💇</span>
                    </div>
                    <div className="flex flex-col">
                        <h1 className="font-heading text-xl md:text-2xl font-bold gradient-text leading-none">
                            GLAMOUR STYLE
                        </h1>
                        <p className="text-[10px] text-gray-400 font-light tracking-widest hidden sm:block">Luxury Hair Studio</p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex flex-row items-center space-x-6 lg:space-x-8 xl:space-x-12">
                    <li>
                        <Link
                            href="/#accueil"
                            className="text-white hover:text-[#D4AF37] transition-colors font-medium text-[10px] lg:text-sm xl:text-base uppercase tracking-wider"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#services"
                            className="text-white hover:text-[#D4AF37] transition-colors font-medium text-[10px] lg:text-sm xl:text-base uppercase tracking-wider"
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/lookbook"
                            className="text-white hover:text-[#D4AF37] transition-colors font-medium text-[10px] lg:text-sm xl:text-base uppercase tracking-wider"
                        >
                            Lookbook
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/pricing"
                            className="text-white hover:text-[#D4AF37] transition-colors font-medium text-[10px] lg:text-sm xl:text-base uppercase tracking-wider"
                        >
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link
                            href="/#avis"
                            className="text-white hover:text-[#D4AF37] transition-colors font-medium text-[10px] lg:text-sm xl:text-base uppercase tracking-wider"
                        >
                            Reviews
                        </Link>
                    </li>
                </ul>

                {/* CTA Button */}
                <div className="hidden lg:block shrink-0">
                    <Link
                        href="/#reservation"
                        className="btn-primary py-2.5 px-6 text-sm"
                    >
                        Book Now
                    </Link>
                </div>


                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </nav>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass mt-4 mx-4 rounded-lg overflow-hidden animate-fadeIn">
                    <ul className="py-4">
                        <li>
                            <Link
                                href="/#accueil"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-left px-6 py-3 text-white hover:bg-[#D4AF37] hover:text-black transition-colors"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#services"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-left px-6 py-3 text-white hover:bg-[#D4AF37] hover:text-black transition-colors"
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/lookbook"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-left px-6 py-3 text-white hover:bg-[#D4AF37] hover:text-black transition-colors"
                            >
                                Lookbook
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/pricing"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-left px-6 py-3 text-white hover:bg-[#D4AF37] hover:text-black transition-colors"
                            >
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/#avis"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block w-full text-left px-6 py-3 text-white hover:bg-[#D4AF37] hover:text-black transition-colors"
                            >
                                Reviews
                            </Link>
                        </li>
                        <li className="px-6 py-3">
                            <Link
                                href="/#reservation"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="btn-primary w-full text-center block"
                            >
                                Book Now
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Header;
