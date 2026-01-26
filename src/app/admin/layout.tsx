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
        <div className="flex bg-[#F8F9FA] min-h-screen font-body relative overflow-x-hidden">
            {/* Sidebar with Mobile Support */}
            <div className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0`}>
                <Sidebar onClose={() => setIsSidebarOpen(false)} />
            </div>

            {/* Backdrop for mobile */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            <main className="flex-1 min-w-0 flex flex-col h-screen">
                {/* Top bar */}
                <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-4 sm:px-8 py-3 sticky top-0 z-30 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 sm:gap-6">
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
                                <span className="text-[9px] sm:text-[10px] uppercase tracking-widest font-black text-gray-400">Administrative Portal</span>
                                <nav className="flex items-center gap-2 mt-0.5">
                                    <Link href="/admin" className="text-[9px] sm:text-[10px] font-bold text-gray-400 hover:text-gray-900 transition-colors">Home</Link>
                                    <span className="text-gray-300 text-[10px]">/</span>
                                    <span className="text-[9px] sm:text-[10px] font-bold text-gray-950">Dashboard</span>
                                </nav>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-4">
                            <div className="hidden sm:flex items-center gap-2 mr-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Live Status</span>
                            </div>
                            <button className="relative w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:shadow-md transition-all">
                                <span className="text-sm">🔔</span>
                                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#D4AF37] border-2 border-white rounded-full"></span>
                            </button>
                            <Link href="/" className="flex items-center gap-2 px-3 sm:px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-white transition-all whitespace-nowrap">
                                <span>🌐</span>
                                <span className="hidden sm:inline">Preview Site</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="p-4 sm:p-8 flex-1 overflow-y-auto w-full">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </div>
            </main>
        </div>
    );
}
