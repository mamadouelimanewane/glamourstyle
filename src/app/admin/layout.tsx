import React from 'react';
import Sidebar from '@/components/admin/Sidebar';
import Link from 'next/link';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-gray-100 min-h-screen">
            <Sidebar />
            <main className="flex-1 min-w-0 overflow-y-auto">
                {/* Top bar */}
                <div className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-10">
                    <div className="flex items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
                            <p className="text-sm text-gray-500 mt-1">Manage your salon operations</p>
                        </div>

                        <div className="flex items-center gap-3">
                            <button className="relative w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                                <span className="text-lg">🔔</span>
                                <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full"></span>
                            </button>
                            <Link href="/" className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                                View Site
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
