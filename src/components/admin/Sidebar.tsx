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
        <aside className="w-64 bg-white border-r border-gray-200 h-screen sticky top-0 flex flex-col shadow-sm">
            <div className="p-6 border-b border-gray-200">
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                        <span className="text-xl">💇</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-gray-900 text-lg">Glamour Style</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-wider">Admin Panel</span>
                    </div>
                </Link>
            </div>

            <nav className="flex-1 p-4 space-y-1">
                {menuItems.map((item) => {
                    const isActive = pathname === item.path;
                    return (
                        <Link
                            key={item.name}
                            href={item.path}
                            className={`flex items-center space-x-3 px-4 py-2.5 rounded-lg transition-all ${isActive
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }`}
                        >
                            <span className="text-lg">{item.icon}</span>
                            <span className="font-medium text-sm">{item.name}</span>
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50">
                    <div className="w-9 h-9 rounded-full bg-gray-900 flex items-center justify-center">
                        <span className="text-white text-sm font-semibold">A</span>
                    </div>
                    <div className="flex flex-col overflow-hidden text-sm">
                        <span className="text-gray-900 font-medium truncate">Admin User</span>
                        <span className="text-gray-500 text-xs truncate">Manager</span>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
