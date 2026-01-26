import React from 'react';
import Sidebar from '@/components/admin/Sidebar';
import Link from 'next/link';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-[#F8F9FA] min-h-screen font-body">
            <Sidebar />
            <main className="flex-1 min-w-0 overflow-y-auto">
                {/* Top bar */}
                <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-8 py-3 sticky top-0 z-10 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6">
                            <div className="flex flex-col">
                                <span className="text-[10px] uppercase tracking-widest font-black text-gray-400">Administrative Portal</span>
                                <nav className="flex items-center gap-2 mt-0.5">
                                    <Link href="/admin" className="text-[10px] font-bold text-gray-400 hover:text-gray-900 transition-colors">Home</Link>
                                    <span className="text-gray-300 text-[10px]">/</span>
                                    <span className="text-[10px] font-bold text-gray-950">Dashboard</span>
                                </nav>
                            </div>
                            <div className="hidden lg:flex items-center relative group ml-4">
                                <span className="absolute left-3 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors text-[10px]">🔍</span>
                                <input
                                    type="text"
                                    placeholder="Search everything..."
                                    className="bg-gray-100 border-none rounded-full py-1.5 pl-9 pr-4 text-[10px] w-48 focus:ring-1 focus:ring-[#D4AF37] transition-all outline-none font-bold"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex items-center gap-2 mr-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-[9px] uppercase tracking-widest font-bold text-gray-400">Live Status</span>
                            </div>
                            <button className="relative w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:shadow-md transition-all">
                                <span className="text-sm">🔔</span>
                                <span className="absolute top-0 right-0 w-2.5 h-2.5 bg-[#D4AF37] border-2 border-white rounded-full"></span>
                            </button>
                            <Link href="/" className="flex items-center gap-2 px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-white transition-all">
                                <span>🌐</span>
                                <span className="hidden sm:inline">Preview Site</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="p-8 max-w-7xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
