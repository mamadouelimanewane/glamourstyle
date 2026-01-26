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
                <div className="bg-white/80 backdrop-blur-md border-b border-gray-200 px-8 py-4 sticky top-0 z-10 shadow-sm">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-8">
                            <h1 className="text-base font-bold text-gray-900 border-r border-gray-200 pr-8">Control Panel</h1>
                            <div className="hidden md:flex items-center relative group">
                                <span className="absolute left-3 text-gray-400 group-focus-within:text-[#D4AF37] transition-colors text-xs">🔍</span>
                                <input
                                    type="text"
                                    placeholder="Search everything..."
                                    className="bg-gray-100 border-none rounded-full py-2 pl-10 pr-4 text-[10px] w-64 focus:ring-1 focus:ring-[#D4AF37] transition-all outline-none"
                                />
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="hidden sm:flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-[10px] uppercase tracking-widest font-bold text-gray-400">Live Status</span>
                            </div>
                            <button className="relative w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center hover:shadow-md transition-all">
                                <span className="text-lg">🔔</span>
                                <span className="absolute top-0 right-0 w-3 h-3 bg-[#D4AF37] border-2 border-white rounded-full"></span>
                            </button>
                            <Link href="/" className="flex items-center gap-2 px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-white transition-all">
                                <span>🌐</span>
                                <span>Website</span>
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
