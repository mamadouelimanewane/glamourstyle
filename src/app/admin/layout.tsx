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
        <div className="flex bg-[#f1f5f9] min-h-screen font-body relative overflow-x-hidden">
            {/* Sidebar with Mobile Support */}
            <div className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 shrink-0`}>
                <Sidebar onClose={() => setIsSidebarOpen(false)} />
            </div>

            {/* Backdrop for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <main className="flex-1 min-w-0 flex flex-col h-screen overflow-hidden">
                {/* Top bar - Ultra Compact */}
                <div className="bg-white border-b border-gray-200 px-4 sm:px-6 py-2 sticky top-0 z-30 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            {/* Mobile Hamburger */}
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="lg:hidden p-1.5 hover:bg-gray-100 rounded-lg text-gray-500 transition-colors"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <div className="flex flex-col">
                                <span className="text-[8px] uppercase tracking-wider font-black text-gray-400">Espace Administration</span>
                                <nav className="flex items-center gap-1.5 mt-0">
                                    <Link href="/admin" className="text-[9px] font-bold text-gray-500 hover:text-gray-900 transition-colors">LexPremium</Link>
                                    <span className="text-gray-300 text-[8px]">/</span>
                                    <span className="text-[9px] font-bold text-gray-900">Dashboard</span>
                                </nav>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden md:flex items-center relative group">
                                <span className="absolute left-3 text-gray-400 text-[10px]">🔍</span>
                                <input
                                    type="text"
                                    placeholder="Rechercher..."
                                    className="bg-gray-50 border border-gray-200 rounded-lg py-1 pl-8 pr-3 text-[10px] w-40 focus:bg-white focus:ring-1 focus:ring-[#D4AF37] transition-all outline-none"
                                />
                            </div>
                            <button className="relative w-7 h-7 rounded-lg bg-gray-50 border border-gray-100 flex items-center justify-center hover:bg-white hover:shadow-sm transition-all focus:ring-1 focus:ring-gray-200">
                                <span className="text-sm">🔔</span>
                                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 border border-white rounded-full"></span>
                            </button>
                            <Link href="/" className="flex items-center gap-1.5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37] rounded-lg hover:bg-[#D4AF37] hover:text-white transition-all whitespace-nowrap">
                                <span className="hidden sm:inline">Preview Site</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="p-4 sm:p-6 flex-1 overflow-y-auto w-full custom-scrollbar">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                    {/* Footer for Admin */}
                    <div className="mt-8 pt-4 border-t border-gray-200 text-center">
                        <p className="text-[9px] text-gray-400 font-bold uppercase tracking-[2px]">© 2026 GLAMOUR STYLE • LexPremium ERP System</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
