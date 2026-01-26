'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
    const pathname = usePathname();

    const menuItems = [
        { name: 'Dashboard', icon: '📊', path: '/admin' },
        { name: 'Appointments', icon: '📅', path: '/admin/appointments' },
        { name: 'Services', icon: '✂️', path: '/admin/services' },
        { name: 'Customers', icon: '👥', path: '/admin/customers' },
        { name: 'Analytics', icon: '📈', path: '/admin/analytics' },
        { name: 'Settings', icon: '⚙️', path: '/admin/settings' },
    ];

    return (
        <aside className="w-64 bg-gray-950 h-screen sticky top-0 flex flex-col border-r border-gray-800">
            {/* Logo Section */}
            <div className="p-6 border-b border-gray-800">
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                        <span className="text-xl">💇</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading text-sm font-bold text-white tracking-wide">GLAMOUR <span className="text-[#D4AF37]">STYLE</span></span>
                        <span className="text-[9px] text-gray-500 uppercase tracking-[2px] font-medium">Administration</span>
                    </div>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-6 space-y-1 overflow-y-auto">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all duration-200 relative group ${isActive
                                ? 'bg-gray-800/60 text-white'
                                : 'text-gray-400 hover:bg-gray-900 hover:text-white'
                                }`}
                        >
                            {isActive && (
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 bg-[#D4AF37] rounded-r-full" />
                            )}
                            <span className={`text-lg transition-transform duration-200 group-hover:scale-110 ${isActive ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>{item.icon}</span>
                            <span className="font-medium text-xs tracking-wide">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* User Section */}
            <div className="p-4 border-t border-gray-800 bg-gray-950/50">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-gray-900 border border-gray-800">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8B7355] flex items-center justify-center shadow-lg">
                        <span className="text-gray-950 text-xs font-bold">A</span>
                    </div>
                    <div className="flex flex-col overflow-hidden text-xs">
                        <span className="text-white font-medium truncate">Admin User</span>
                        <span className="text-gray-500 text-[9px] truncate">Ops Manager</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
