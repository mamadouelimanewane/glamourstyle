'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-secondary text-white py-40 relative overflow-hidden">
            {/* Artistic Elements */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-primary/10 blur-[150px] rounded-full" />

            <div className="section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 px-10">
                <div className="space-y-12">
                    <Link href="/" className="group flex items-center gap-4">
                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-2xl shadow-xl shadow-primary/20 transition-transform group-hover:rotate-12">
                            ✨
                        </div>
                        <div className="flex flex-col">
                            <span className="text-white font-black text-2xl tracking-[5px] leading-none mb-1 font-heading">MICHELE KA</span>
                            <span className="text-accent text-[9px] font-bold uppercase tracking-[4px]">Dakar • Paris Artistry</span>
                        </div>
                    </Link>
                    <p className="text-white/60 text-sm leading-relaxed max-w-xs font-light italic">
                        Une fusion unique entre l'art de rue sénégalais, le design contemporain et la haute coiffure parisienne.
                    </p>
                    <div className="flex gap-6">
                        {['Instagram', 'Facebook', 'WhatsApp'].map((social) => (
                            <a
                                key={social}
                                href="#"
                                className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white text-xs hover:bg-primary hover:border-primary transition-all duration-500 shadow-xl"
                            >
                                {social[0]}
                            </a>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-accent font-heading font-light text-2xl mb-10 italic">L'Atelier</h4>
                    <nav className="flex flex-col gap-6">
                        {['Accueil', 'Services', 'Pricing', 'Lookbook', 'Expérience'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Accueil' ? '/' : item === 'Lookbook' ? '/lookbook' : item === 'Pricing' ? '/pricing' : `/#${item.toLowerCase()}`}
                                className="text-white/50 text-xs uppercase tracking-[3px] hover:text-primary transition-colors flex items-center gap-4 group"
                            >
                                <span className="w-4 h-px bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                {item}
                            </Link>
                        ))}
                    </nav>
                </div>

                <div>
                    <h4 className="text-accent font-heading font-light text-2xl mb-10 italic">Le Salon</h4>
                    <div className="space-y-8 text-sm text-white/60 font-light">
                        <p className="flex items-start gap-6 leading-relaxed">
                            <span className="text-primary text-xl">📍</span>
                            <span>
                                Centre Commercial Sea Plaza<br />
                                Corniche Ouest, BP 12345<br />
                                <span className="text-white font-bold">Dakar, Sénégal</span>
                            </span>
                        </p>
                        <p className="flex items-center gap-6">
                            <span className="text-primary text-xl">📞</span>
                            +221 33 800 00 00
                        </p>
                        <p className="flex items-center gap-6">
                            <span className="text-primary text-xl">✉️</span>
                            contact@micheleka.com
                        </p>
                    </div>
                </div>

                <div>
                    <h4 className="text-accent font-heading font-light text-2xl mb-10 italic">Gazette Ka</h4>
                    <p className="text-white/40 text-[10px] mb-8 font-bold uppercase tracking-[4px]">Recevez nos invitations vernissages</p>
                    <div className="relative mb-10">
                        <input
                            type="email"
                            placeholder="Votre email"
                            className="w-full bg-white/5 border border-white/10 rounded-full py-6 px-10 text-sm text-white placeholder:text-white/20 outline-none focus:border-primary transition-all"
                        />
                        <button className="absolute right-3 top-3 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center hover:bg-accent transition-all duration-500 shadow-xl">
                            →
                        </button>
                    </div>
                    <Link href="/admin/login" className="inline-block text-[11px] uppercase tracking-[5px] text-white/30 hover:text-accent transition-colors font-bold">
                        Professional Portal
                    </Link>
                </div>
            </div>

            <div className="section mt-32 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10 text-[10px] font-bold uppercase tracking-[5px] text-white/20 px-10">
                <p>© 2026 MAISON MICHELE KA DAKAR. L'ART DE REVOIR LA BEAUTÉ.</p>
                <div className="flex gap-12">
                    <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
                    <a href="#" className="hover:text-white transition-colors">Confidentialité</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
