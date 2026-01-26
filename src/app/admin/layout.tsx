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
                    className="fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <main className="flex-1 min-w-0 flex flex-col h-screen overflow-hidden">
                {/* Top bar - Modern Workspace Header */}
                <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-6 py-3.5 sticky top-0 z-30 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            {/* Mobile Hamburger */}
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg text-gray-600 transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <div className="flex flex-col">
                                <span className="text-xs uppercase tracking-[3px] font-black text-[#D4AF37]">Cabinet LexPremium ERP</span>
                                <nav className="flex items-center gap-2 mt-0.5">
                                    <Link href="/admin" className="text-sm font-bold text-gray-400 hover:text-gray-950 transition-colors">Espace Personnel</Link>
                                    <span className="text-gray-200 text-sm">/</span>
                                    <span className="text-sm font-bold text-gray-950">Gestion de Bord</span>
                                </nav>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="hidden md:flex items-center relative group">
                                <span className="absolute left-3 text-gray-400">🔍</span>
                                <input
                                    type="text"
                                    placeholder="Recherche globale..."
                                    className="bg-gray-50 border border-gray-200 rounded-xl py-2 pl-10 pr-4 text-sm w-64 focus:bg-white focus:border-[#D4AF37] focus:ring-4 focus:ring-[#D4AF37]/5 transition-all outline-none"
                                />
                            </div>

                            <div className="flex items-center gap-3">
                                <button className="relative w-10 h-10 rounded-xl bg-gray-50 text-gray-500 hover:text-gray-950 hover:bg-gray-100 transition-all flex items-center justify-center">
                                    <span className="text-xl">🔔</span>
                                    <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                                </button>

                                <Link href="/" className="flex items-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl hover:bg-[#D4AF37] hover:text-white transition-all">
                                    <span>🌐</span>
                                    <span className="hidden sm:inline">Aperçu Site</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Main Content Area */}
                <div className="p-6 sm:p-8 lg:p-10 flex-1 overflow-y-auto w-full custom-scrollbar">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
