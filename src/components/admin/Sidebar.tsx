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
        { name: 'Calendrier', icon: '🗓️', path: '/admin/calendar' },
        { name: 'Rendez-vous', icon: '📅', path: '/admin/appointments' },
        { name: 'Services', icon: '✂️', path: '/admin/services' },
        { name: 'Clients', icon: '👥', path: '/admin/customers' },
        { name: 'Finances', icon: '💰', path: '/admin/finances' },
        { name: 'Fidélité VIP', icon: '🏆', path: '/admin/vip' },
        { name: 'Stocks', icon: '📦', path: '/admin/stock' },
        { name: 'Marketing', icon: '📣', path: '/admin/marketing' },
        { name: 'Utilisateurs', icon: '🔑', path: '/admin/users' },
        { name: 'Statistiques', icon: '📈', path: '/admin/analytics' },
        { name: 'Paramètres', icon: '⚙️', path: '/admin/settings' },
    ];

    return (
        <aside className="w-64 bg-gray-950 h-screen flex flex-col border-r border-gray-800 shadow-xl">
            {/* Logo Section - Elegant & Professional */}
            <div className="p-6 border-b border-gray-800/50 flex justify-between items-center bg-black/20">
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="w-9 h-9 bg-[#D4AF37] rounded-lg flex items-center justify-center text-xl shadow-lg shadow-[#D4AF37]/10 transition-transform group-hover:scale-105">
                        <span>💇</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base font-black text-white tracking-widest">GLAMOUR STYLE</span>
                        <span className="text-xs text-[#D4AF37] uppercase font-bold tracking-wider">Administration</span>
                    </div>
                </Link>
                <button
                    onClick={onClose}
                    className="lg:hidden text-gray-500 hover:text-white p-1"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Navigation - Ergonomic Spacing */}
            <nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto custom-scrollbar">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            href={item.path}
                            onClick={onClose}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 relative group ${isActive
                                ? 'bg-white/10 text-white border border-white/10 shadow-lg'
                                : 'text-gray-400 hover:bg-white/5 hover:text-white border border-transparent'
                                }`}
                        >
                            <span className={`text-xl transition-all ${isActive ? 'scale-110' : 'opacity-70 group-hover:opacity-100'}`}>{item.icon}</span>
                            <span className={`font-semibold text-base tracking-wide ${isActive ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'}`}>
                                {item.name}
                            </span>
                            {isActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-[#D4AF37] rounded-r-full shadow-[0_0_10px_#D4AF37]" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* User Section - Premium Feel */}
            <div className="p-4 border-t border-gray-800/50 bg-black/40">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-900/50 border border-gray-800">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8B7355] flex items-center justify-center border-2 border-gray-800 shadow-xl">
                        <span className="text-gray-950 text-sm font-black">AD</span>
                    </div>
                    <div className="flex flex-col overflow-hidden leading-tight">
                        <span className="text-white font-bold text-sm truncate">Admin Manager</span>
                        <span className="text-gray-500 text-xs truncate">LexPremium ERP System</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
