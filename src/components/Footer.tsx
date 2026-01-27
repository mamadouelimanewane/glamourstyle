'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-black py-20 border-t border-white/5 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#D4AF37]/5 blur-[150px] -z-10" />

            <div className="section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                <div className="space-y-6">
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-xl">💇</div>
                        <div className="flex flex-col">
                            <span className="text-white font-black text-xl tracking-[4px] leading-none mb-1">GLAMOUR STYLE</span>
                            <span className="text-[#D4AF37] text-[10px] font-bold uppercase tracking-[3px]">Luxury Hair Studio</span>
                        </div>
                    </Link>
                    <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                        London's premier destination for high-end African hair styling. We celebrate beauty, excellence, and the art of professional braids.
                    </p>
                    <div className="flex gap-4">
                        {['Instagram', 'Facebook', 'TikTok'].map((social) => (
                            <a key={social} href="#" className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-xs hover:bg-[#D4AF37] hover:text-black hover:border-[#D4AF37] transition-all">
                                {social[0]}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-heading font-bold text-lg mb-8">Navigation</h4>
                    <nav className="flex flex-col gap-4">
                        {['Home', 'Services', 'Pricing', 'Lookbook', 'Experience'].map((item) => (
                            <Link key={item} href={`/${item === 'Home' ? '' : item === 'Lookbook' ? 'lookbook' : item === 'Pricing' ? 'pricing' : '#' + item.toLowerCase()}`} className="text-gray-400 text-sm hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                                <span className="w-0 h-[1px] bg-[#D4AF37] group-hover:w-4 transition-all"></span>
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div>
                    <h4 className="text-white font-heading font-bold text-lg mb-8">Contact Info</h4>
                    <div className="space-y-4 text-sm text-gray-400">
                        <p className="flex items-center gap-3">
                            <span className="text-[#D4AF37]">📍</span>
                            123 Luxury Lane, Mayfair<br />London, W1J 7JX
                        </p>
                        <p className="flex items-center gap-3">
                            <span className="text-[#D4AF37]">📞</span>
                            +44 20 7123 4567
                        </p>
                        <p className="flex items-center gap-3">
                            <span className="text-[#D4AF37]">✉️</span>
                            contact@glamourstyle.co.uk
                        </p>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-heading font-bold text-lg mb-8">Newsletter</h4>
                    <p className="text-gray-400 text-xs mb-6 font-medium uppercase tracking-[2px]">Get exclusive luxury offers</p>
                    <div className="relative">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 text-sm text-white placeholder:text-gray-500 outline-none focus:border-[#D4AF37] transition-all"
                        />
                        <button className="absolute right-2 top-2 p-2 bg-[#D4AF37] rounded-full text-black hover:scale-110 transition-transform">
                            →
                        </button>
                    </div>
                    <Link href="/admin/login" className="mt-8 block text-[10px] uppercase tracking-[3px] text-gray-600 hover:text-[#D4AF37] transition-colors font-black">
                        Staff Access Area
                    </Link>
                </div>
            </div>

            <div className="section mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[3px] text-gray-600">
                <p>© 2026 GLAMOUR STYLE LONDON. ALL RIGHTS RESERVED.</p>
                <div className="flex gap-8">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
