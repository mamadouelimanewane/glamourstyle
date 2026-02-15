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
        <div className="flex bg-[#FAF9F6] min-h-screen font-body relative overflow-x-hidden text-[#2D2D2D]">
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
                {/* Top bar - Modern Workspace Header */}
                <div className="bg-white/80 backdrop-blur-md border-b border-black/5 px-6 py-4 sticky top-0 z-30 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            {/* Mobile Hamburger */}
                            <button
                                onClick={() => setIsSidebarOpen(true)}
                                className="lg:hidden p-2 hover:bg-[#FAF9F6] rounded-xl text-[#2D2D2D] transition-colors"
                            >
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>

                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-[3px] font-bold text-[#C5A06B]">Professional Ecosystem</span>
                                <nav className="flex items-center gap-2 mt-0.5">
                                    <Link href="/admin" className="text-xs font-bold text-[#A8A29E] hover:text-[#2D2D2D] transition-colors uppercase tracking-widest">Atelier Management</Link>
                                    <span className="text-[#E7E5E4] text-xs">/</span>
                                    <span className="text-xs font-bold text-[#2D2D2D] uppercase tracking-widest">Dashboard Board</span>
                                </nav>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="hidden md:flex items-center relative group">
                                <span className="absolute left-3 text-[#A8A29E]">🔍</span>
                                <input
                                    type="text"
                                    placeholder="Search ecosystem..."
                                    className="bg-[#FAF9F6] border border-black/5 rounded-xl py-2.5 pl-10 pr-4 text-sm w-72 focus:bg-white focus:border-[#C5A06B] focus:ring-4 focus:ring-[#C5A06B]/5 transition-all outline-none"
                                />
                            </div>

                            <div className="flex items-center gap-4">
                                <button className="relative w-11 h-11 rounded-xl bg-[#FAF9F6] text-[#6B6B6B] hover:text-[#2D2D2D] hover:bg-white border border-black/5 transition-all flex items-center justify-center">
                                    <span className="text-xl">🔔</span>
                                    <span className="absolute top-3 right-3 w-2 h-2 bg-[#C5A06B] rounded-full border-2 border-white"></span>
                                </button>

                                <Link href="/" className="flex items-center gap-3 px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white bg-[#2D2D2D] rounded-xl hover:bg-[#C5A06B] transition-all shadow-lg shadow-black/5">
                                    <span>🌐</span>
                                    <span className="hidden sm:inline">Preview Maison</span>
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
