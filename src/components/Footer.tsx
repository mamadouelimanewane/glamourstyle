'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-white py-32 border-t border-black/5 relative overflow-hidden">
            {/* Soft Ambient Background Elements */}
            <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[#C5A06B]/5 blur-[120px] rounded-full -z-10" />

            <div className="section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 px-6">
                <div className="space-y-8">
                    <Link href="/" className="group flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#C5A06B] rounded-full flex items-center justify-center text-xl shadow-lg shadow-[#C5A06B]/20 transition-transform group-hover:scale-110">💇</div>
                        <div className="flex flex-col">
                            <span className="text-[#2D2D2D] font-black text-xl tracking-[4px] leading-none mb-1">GLAMOUR STYLE</span>
                            <span className="text-[#C5A06B] text-[10px] font-bold uppercase tracking-[3px]">Elite Hair Artistry</span>
                        </div>
                    </Link>
                    <p className="text-[#6B6B6B] text-sm leading-relaxed max-w-xs font-light">
                        Waltham Cross's sanctuary for high-end Afro-Caribbean styling. We celebrate heritage through impeccable artistry and professional care.
                    </p>
                    <div className="flex gap-4">
                        {['Instagram', 'Facebook', 'TikTok'].map((social) => (
                            <a key={social} href="#" className="w-10 h-10 rounded-full bg-[#FAF9F6] border border-black/5 flex items-center justify-center text-[#2D2D2D] text-xs hover:bg-[#C5A06B] hover:text-white hover:border-[#C5A06B] transition-all">
                                {social[0]}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-[#2D2D2D] font-heading font-bold text-lg mb-8 uppercase tracking-widest">Navigation</h4>
                    <nav className="flex flex-col gap-5">
                        {['Home', 'Services', 'Pricing', 'Lookbook', 'Experience'].map((item) => (
                            <Link key={item} href={`/${item === 'Home' ? '' : item === 'Lookbook' ? 'lookbook' : item === 'Pricing' ? 'pricing' : '#' + item.toLowerCase()}`} className="text-[#6B6B6B] text-sm hover:text-[#C5A06B] transition-colors flex items-center gap-3 group">
                                <span className="w-0 h-[1px] bg-[#C5A06B] group-hover:w-4 transition-all"></span>
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div>
                    <h4 className="text-[#2D2D2D] font-heading font-bold text-lg mb-8 uppercase tracking-widest">The Studio</h4>
                    <div className="space-y-6 text-sm text-[#6B6B6B] font-light">
                        <p className="flex items-start gap-4 leading-relaxed">
                            <span className="text-[#C5A06B] mt-1">📍</span>
                            <span>
                                68 High Street, Waltham Cross<br />
                                EN8 7AR, United Kingdom<br />
                                <span className="text-[10px] font-bold uppercase tracking-widest text-[#C5A06B]">🅿️ Free Parking Available</span>
                            </span>
                        </p>
                        <p className="flex items-center gap-4">
                            <span className="text-[#C5A06B]">📞</span>
                            +44 7943 555555
                        </p>
                        <p className="flex items-center gap-4">
                            <span className="text-[#C5A06B]">✉️</span>
                            studio@glamourstyle.co.uk
                        </p>
                    </div>
                </div>

                <div>
                    <h4 className="text-[#2D2D2D] font-heading font-bold text-lg mb-8 uppercase tracking-widest">Maison Bulletin</h4>
                    <p className="text-[#C5A06B] text-[10px] mb-6 font-bold uppercase tracking-[3px]">Receive private invitations</p>
                    <div className="relative mb-8">
                        <input
                            type="email"
                            placeholder="Email address"
                            className="w-full bg-[#FAF9F6] border border-black/5 rounded-full py-5 px-8 text-sm text-[#2D2D2D] placeholder:text-[#A8A29E]/50 outline-none focus:border-[#C5A06B] transition-all"
                        />
                        <button className="absolute right-2 top-2 w-11 h-11 bg-[#2D2D2D] text-white rounded-full flex items-center justify-center hover:bg-[#C5A06B] transition-all">
                            →
                        </button>
                    </div>
                    <Link href="/admin/login" className="inline-block text-[10px] uppercase tracking-[4px] text-[#A8A29E] hover:text-[#C5A06B] transition-colors font-bold border-b border-transparent hover:border-[#C5A06B]/30 pb-1">
                        Professional Portal
                    </Link>
                </div>
            </div>

            <div className="section mt-24 pt-12 border-t border-black/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-bold uppercase tracking-[4px] text-[#A8A29E] px-6">
                <p>© 2026 GLAMOUR STYLE LONDON. ARTISTRY REDEFINED.</p>
                <div className="flex gap-10">
                    <a href="#" className="hover:text-[#2D2D2D] transition-colors">Privacy</a>
                    <a href="#" className="hover:text-[#2D2D2D] transition-colors">Terms</a>
                    <a href="#" className="hover:text-[#2D2D2D] transition-colors">Cookies</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
