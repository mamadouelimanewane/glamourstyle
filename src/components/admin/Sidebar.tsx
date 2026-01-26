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
        <aside className="w-64 bg-[#0D0D0D] border-r border-gray-800 h-screen sticky top-0 flex flex-col">
            <div className="p-8 border-b border-gray-800">
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] rounded-full flex items-center justify-center">
                        <span className="text-xl">💇</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-heading text-lg font-bold gradient-text leading-none">Glamour</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Back Office</span>
                    </div>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-2 mt-4">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 ${isActive
                                    ? 'bg-[#D4AF37] text-black shadow-glow'
                                    : 'text-gray-400 hover:bg-white/5 hover:text-[#D4AF37]'
                                }`}
                        >
                            <span className="text-xl">{item.icon}</span>
                            <span className="font-medium tracking-wide">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-800">
                <div className="flex items-center space-x-3 p-3 rounded-xl bg-white/5 border border-white/5">
                    <div className="w-10 h-10 rounded-full bg-[#D4AF37]/20 flex items-center justify-center border border-[#D4AF37]/30">
                        <span className="text-black font-bold">A</span>
                    </div>
                    <div className="flex flex-col overflow-hidden text-sm">
                        <span className="text-white font-medium truncate">Admin User</span>
                        <span className="text-gray-500 text-xs truncate">Manager</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
