'use client';

import React from 'react';
import Link from 'next/link';
import { contactInfo, workingHours } from '@/data/services';

const Footer = () => {
    return (
        <footer id="contact" className="bg-[#050505] border-t border-gray-900 pt-20 pb-10">
            <div className="section">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-2">
                            <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-full flex items-center justify-center">
                                <span className="text-xl">💇</span>
                            </div>
                            <h2 className="text-2xl font-heading gradient-text">Glamour Style</h2>
                        </div>
                        <p className="text-gray-500 text-sm">
                            Excellence at the service of your beauty. We have been creating exceptional styles for over 10 years in the heart of the UK.
                        </p>
                        <div className="flex space-x-4">
                            {['Instagram', 'Facebook', 'TikTok', 'Pinterest'].map((social) => (
                                <a
                                    key={social}
                                    href="#"
                                    className="w-10 h-10 rounded-full border border-gray-800 flex items-center justify-center text-gray-400 hover:border-[#D4AF37] hover:text-[#D4AF37] transition-all"
                                >
                                    <span className="sr-only">{social}</span>
                                    <div className="text-xs">{(social[0])}</div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Opening Hours */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Opening Hours</h3>
                        <ul className="space-y-3">
                            {Object.entries(workingHours).map(([day, hours]) => (
                                <li key={day} className="flex justify-between text-sm">
                                    <span className="text-gray-500 capitalize">{day}</span>
                                    <span className={hours === 'Closed' ? 'text-red-900' : 'text-gray-300'}>{hours}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Navigation</h3>
                        <ul className="space-y-3">
                            {['Home', 'Services', 'Pricing', 'Gallery', 'RESERVATION'].map((link) => (
                                <li key={link}>
                                    <Link href={link === 'Pricing' ? '/pricing' : `/#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-500 text-sm hover:text-[#D4AF37] transition-colors uppercase tracking-wider">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-white uppercase tracking-widest">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <span className="text-[#D4AF37]">📍</span>
                                <span className="text-gray-500 text-sm">{contactInfo.address}</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[#D4AF37]">📞</span>
                                <a href={`tel:${contactInfo.phone}`} className="text-gray-500 text-sm hover:text-white transition-colors">{contactInfo.phone}</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <span className="text-[#D4AF37]">✉️</span>
                                <a href={`mailto:${contactInfo.email}`} className="text-gray-500 text-sm hover:text-white transition-colors">{contactInfo.email}</a>
                            </li>
                            <li className="mt-8">
                                <div className="glass p-4 rounded-xl border-dashed border border-[#D4AF37]/30">
                                    <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Payment Methods</p>
                                    <p className="text-[10px] text-[#D4AF37] font-bold">Klarna • Afterpay • Affirm • Credit Card</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-600 text-[10px] uppercase tracking-[2px]">
                        &copy; {new Date().getFullYear()} GLAMOUR STYLE. ALL RIGHTS RESERVED.
                    </p>
                    <p className="text-gray-600 text-[10px] uppercase tracking-[2px]">
                        DESIGNED BY <span className="text-gray-400">ANTIGRAVITY LUXE</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
