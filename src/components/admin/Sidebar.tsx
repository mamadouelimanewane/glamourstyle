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
        { name: 'Dashboard', icon: '📊', path: '/admin' },
        { name: 'Calendar', icon: '🗓️', path: '/admin/calendar' },
        { name: 'Appointments', icon: '📅', path: '/admin/appointments' },
        { name: 'Services', icon: '✂️', path: '/admin/services' },
        { name: 'Customers', icon: '👥', path: '/admin/customers' },
        { name: 'Finances', icon: '💰', path: '/admin/finances' },
        { name: 'VIP Loyalty', icon: '🏆', path: '/admin/vip' },
        { name: 'Stock', icon: '📦', path: '/admin/stock' },
        { name: 'Marketing', icon: '📣', path: '/admin/marketing' },
        { name: 'Users', icon: '🔑', path: '/admin/users' },
        { name: 'Analytics', icon: '📈', path: '/admin/analytics' },
        { name: 'Settings', icon: '⚙️', path: '/admin/settings' },
    ];

    return (
        <aside className="w-68 bg-white h-screen flex flex-col border-r border-black/5 shadow-2xl shadow-black/5">
            {/* Logo Section - Elegant & Professional */}
            <div className="p-8 flex justify-between items-center">
                <Link href="/" className="flex items-center space-x-4 group">
                    <div className="w-10 h-10 bg-[#C5A06B] rounded-xl flex items-center justify-center text-xl shadow-lg shadow-[#C5A06B]/20 transition-transform group-hover:scale-110">
                        <span>💇</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-base font-black text-[#2D2D2D] tracking-[4px] leading-none mb-1">GLAMOUR</span>
                        <span className="text-[10px] text-[#C5A06B] uppercase font-bold tracking-[3px]">Atelier System</span>
                    </div>
                </Link>
                <button
                    onClick={onClose}
                    className="lg:hidden text-[#A8A29E] hover:text-[#2D2D2D] p-1"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>

            {/* Navigation - Ergonomic Spacing */}
            <nav className="flex-1 px-6 py-4 space-y-1 overflow-y-auto custom-scrollbar">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            href={item.path}
                            onClick={onClose}
                            className={`flex items-center space-x-4 px-5 py-3.5 rounded-2xl transition-all duration-500 relative group ${isActive
                                ? 'bg-[#FAF9F6] text-[#2D2D2D] border border-black/5 shadow-lg shadow-black/5'
                                : 'text-[#A8A29E] hover:bg-[#FAF9F6] hover:text-[#2D2D2D] border border-transparent'
                                }`}
                        >
                            <span className={`text-xl transition-all duration-500 ${isActive ? 'scale-110' : 'opacity-60 group-hover:opacity-100'}`}>{item.icon}</span>
                            <span className={`font-bold text-xs uppercase tracking-[2px] ${isActive ? 'text-[#2D2D2D]' : 'text-[#A8A29E] group-hover:text-[#6B6B6B]'}`}>
                                {item.name}
                            </span>
                            {isActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-6 w-1 bg-[#C5A06B] rounded-r-full shadow-[0_0_15px_#C5A06B]" />
                            )}
                        </Link>
                    );
                })}
            </nav>

            {/* User Section - Premium Feel */}
            <div className="p-6 border-t border-black/5 bg-[#FAF9F6]/50">
                <div className="flex items-center space-x-4 p-4 rounded-[20px] bg-white border border-black/5 shadow-sm group hover:shadow-md transition-all">
                    <div className="w-10 h-10 rounded-full bg-[#C5A06B] flex items-center justify-center border-2 border-white shadow-lg shadow-[#C5A06B]/20">
                        <span className="text-white text-xs font-black">AD</span>
                    </div>
                    <div className="flex flex-col overflow-hidden leading-tight">
                        <span className="text-[#2D2D2D] font-bold text-xs truncate uppercase tracking-widest">Maître d'Atelier</span>
                        <span className="text-[#A8A29E] text-[10px] truncate uppercase tracking-widest">Studio Manager</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
