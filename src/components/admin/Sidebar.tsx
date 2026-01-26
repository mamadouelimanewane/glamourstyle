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
        <aside className="w-64 bg-gray-900 h-screen sticky top-0 flex flex-col">
            {/* Logo Section */}
            <div className="p-6 border-b border-gray-800">
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <span className="text-xl">💇</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-white text-lg">Glamour Style</span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-wider">Admin</span>
                    </div>
                </Link>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-3 py-6 space-y-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all ${isActive
                                    ? 'bg-gray-800 text-white'
                                    : 'text-gray-400 hover:bg-gray-800/50 hover:text-white'
                                }`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className="font-medium text-sm">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            {/* User Section */}
            <div className="p-4 border-t border-gray-800">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-800">
                    <div className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">A</span>
                    </div>
                    <div className="flex flex-col overflow-hidden text-sm">
                        <span className="text-white font-medium truncate">Admin User</span>
                        <span className="text-gray-400 text-xs truncate">Manager</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
