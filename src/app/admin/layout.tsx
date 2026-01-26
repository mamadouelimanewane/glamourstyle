'use client';

import React, { useState } from 'react';
import Sidebar from '@/components/admin/Sidebar';
import Link from 'next/link';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex bg-[#f8fafc] min-h-screen font-body relative overflow-x-hidden text-gray-900">
            {/* Sidebar with Mobile Support */}
            <div className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 shrink-0`}>
                <Sidebar onClose={() => setIsSidebarOpen(false)} />
            </div>

            {/* Backdrop for mobile */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 bg-black/20 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <main className="flex-1 min-w-0 flex flex-col h-screen overflow-hidden">
                {/* Top bar - Minimalist ERP Style */}
                <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-2.5 sticky top-0 z-30">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            {/* Mobile Hamburger */}
                            <button 
                                onClick={() => setIsSidebarOpen(true)}
                                className="lg:hidden p-1.5 hover:bg-gray-100 rounded text-gray-500 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <div className="flex flex-col">
                                <span className="text-[8px] uppercase tracking-[2px] font-black text-gray-400">Cabinet LexPremium ERP</span>
                                <nav className="flex items-center gap-2 mt-0">
                                    <Link href="/admin" className="text-[10px] font-bold text-gray-500 hover:text-gray-900 transition-colors">Espace Personnel</cite></Link>
                                    <span className="text-gray-200 text-[8px]">/</span>
                                    <span className="text-[10px] font-bold text-gray-900">Gestion de Bord</span>
                                </nav>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex items-center relative group">
                                <span className="absolute left-3 text-gray-400 text-[10px]">🔍</span>
                                <input 
                                    type="text" 
                                    placeholder="Recherche rapide..." 
                                    className="bg-gray-50 border border-gray-200 rounded-lg py-1.5 pl-8 pr-4 text-[10px] w-48 focus:bg-white focus:border-[#D4AF37] transition-all outline-none"
                                />
                            </div>
                            
                            <div className="h-6 w-px bg-gray-200 hidden sm:block mx-1"></div>

                            <button className="relative w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors">
                                <span className="text-lg">🔔</span>
                                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
                            </button>

                            <Link href="/" className="flex items-center gap-2 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-gray-600 border border-gray-300 rounded hover:border-gray-950 hover:text-gray-950 transition-all">
                                <span>🌐</span>
                                <span className="hidden sm:inline">Visualiser Site</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="p-4 sm:p-6 lg:p-8 flex-1 overflow-y-auto w-full custom-scrollbar">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                    
                    {/* Compact Admin Footer */}
                    <div className="mt-12 py-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[2px]">© 2026 GLAMOUR STYLE • Propulsé par LexPremium</p>
                        <div className="flex items-center gap-4 text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                            <a href="#" className="hover:text-gray-950 transition-colors">Assistance</a>
                            <span className="text-gray-200">•</span>
                            <a href="#" className="hover:text-gray-950 transition-colors">Documentation</a>
                        </div>
                    </div>
                </div>
            </main >
        </div >
    );
}
