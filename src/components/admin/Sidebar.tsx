'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface SidebarProps {
    onClose?: () => void;
}

const Sidebar = ({ onClose }: SidebarProps) => {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Tableau de bord', icon: '📊', path: '/admin' },
        { name: 'Rendez-vous', icon: '📅', path: '/admin/appointments' },
        { name: 'Services', icon: '✂️', path: '/admin/services' },
        { name: 'Clients', icon: '👥', path: '/admin/customers' },
        { name: 'Statistiques', icon: '📈', path: '/admin/analytics' },
        { name: 'Paramètres', icon: '⚙️', path: '/admin/settings' },
    ];

    return (
        <aside className="w-56 bg-white h-screen flex flex-col border-r border-gray-200 shadow-sm">
            {/* Logo Section - Clean & Small */}
            <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-2 group">
                    <div className="w-7 h-7 bg-gray-950 rounded flex items-center justify-center text-sm shadow-sm transition-transform group-hover:scale-105">
                        <span>💇</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-[11px] font-black text-gray-900 tracking-wider">GLAMOUR STYLE</span>
                        <span className="text-[8px] text-gray-400 uppercase font-medium">ERP v2.0</span>
                    </div>
                </Link>
                <button
                    onClick={onClose}
                    className="lg:hidden text-gray-400 hover:text-gray-900 p-1"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Navigation - Very Compact */}
            <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            href={item.path}
                            onClick={onClose}
                            className={`flex items-center space-x-2.5 px-3 py-2 rounded-md transition-all duration-150 relative group ${isActive
                                ? 'bg-[#f1f5f9] text-[#D4AF37]'
                                : 'text-gray-500 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                        >
                            <span className={`text-base ${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>{item.icon}</span>
                            <span className="font-bold text-[10px] uppercase tracking-wide">{item.name}</span>
                            {isActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-0.5 bg-[#D4AF37] rounded-r-full" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* User Section - Minimalist */}
            <div className="p-3 border-t border-gray-100 bg-gray-50/50">
                <div className="flex items-center space-x-2.5 p-2 rounded-lg border border-gray-200 bg-white">
                    <div className="w-7 h-7 rounded bg-gray-100 flex items-center justify-center border border-gray-200">
                        <span className="text-gray-600 text-[10px] font-black">AD</span>
                    </div>
                    <div className="flex flex-col overflow-hidden leading-tight">
                        <span className="text-gray-900 font-bold text-[10px] truncate">Admin Manager</span>
                        <span className="text-gray-400 text-[8px] truncate">LexPremium Role</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
