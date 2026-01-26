import React from 'react';
import Sidebar from '@/components/admin/Sidebar';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-[#050505] min-h-screen text-gray-200">
            <Sidebar />
            <main className="flex-1 min-w-0 p-8 overflow-y-auto">
                {/* Top bar with breadcrumbs/notifications placeholder */}
                <div className="flex items-center justify-between mb-8 pb-6 border-b border-gray-900">
                    <div>
                        <h2 className="text-gray-500 text-xs uppercase tracking-[4px] font-bold mb-1">Administrative Portal</h2>
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-600">Home</span>
                            <span className="text-xs text-gray-700">/</span>
                            <span className="text-sm text-[#D4AF37]">Dashboard</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/5 hover:border-[#D4AF37]/30 transition-all">
                            🔔
                        </button>
                        <button className="btn-secondary py-2 text-xs">
                            Preview Site
                        </button>
                    </div>
                </div>

                {children}
            </main>
        </div>
    );
}
