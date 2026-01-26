'use client';

import React, { useState } from 'react';

const CustomersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const customers = [
        { id: 'CL-001', name: 'Zainab A.', email: 'zainab@example.com', phone: '+44 7123 456789', visits: 8, totalSpent: '£1,760', lastVisit: '2026-01-22', status: 'VIP' },
        { id: 'CL-002', name: 'Aminata K.', email: 'aminata@example.com', phone: '+44 7123 987654', visits: 12, totalSpent: '£2,160', lastVisit: '2026-01-18', status: 'VIP' },
        { id: 'CL-003', name: 'Binta D.', email: 'binta@example.com', phone: '+44 7234 112233', visits: 3, totalSpent: '£840', lastVisit: '2026-01-15', status: 'Regular' },
        { id: 'CL-004', name: 'Yasmine B.', email: 'yasmine@example.com', phone: '+44 7345 445566', visits: 6, totalSpent: '£1,050', lastVisit: '2026-01-05', status: 'Regular' },
        { id: 'CL-005', name: 'Fatou S.', email: 'fatou@example.com', phone: '+44 7456 778899', visits: 1, totalSpent: '£150', lastVisit: '2026-01-10', status: 'New' },
        { id: 'CL-006', name: 'Hawa J.', email: 'hawa@example.com', phone: '+44 7567 001122', visits: 15, totalSpent: '£3,200', lastVisit: '2026-01-20', status: 'VIP' },
    ];

    const filteredCustomers = customers.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm)
    );

    return (
        <div className="space-y-8">
            <div className="flex justify-between items-end">
                <div>
                    <h1 className="text-4xl font-heading mb-2">Customer Database</h1>
                    <p className="text-gray-500">Manage client profiles, history, and loyalty status.</p>
                </div>
                <button className="btn-primary py-2">+ Add Customer</button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="glass p-5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">👥</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Total Clients</span>
                    </div>
                    <p className="text-3xl font-bold">{customers.length}</p>
                </div>
                <div className="glass p-5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">⭐</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">VIP Members</span>
                    </div>
                    <p className="text-3xl font-bold text-[#D4AF37]">{customers.filter(c => c.status === 'VIP').length}</p>
                </div>
                <div className="glass p-5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">🆕</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">New This Month</span>
                    </div>
                    <p className="text-3xl font-bold text-green-500">{customers.filter(c => c.status === 'New').length}</p>
                </div>
                <div className="glass p-5 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">💰</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest">Avg. Lifetime Value</span>
                    </div>
                    <p className="text-3xl font-bold">£1,527</p>
                </div>
            </div>

            {/* Search Bar */}
            <div className="glass p-4 rounded-xl border border-white/5">
                <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">🔍</span>
                    <input
                        type="text"
                        placeholder="Search by name, email, or phone..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-transparent pl-12 pr-4 py-3 text-white placeholder-gray-600 focus:outline-none"
                    />
                </div>
            </div>

            {/* Customers Table */}
            <div className="glass rounded-2xl border border-white/5 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-white/[0.02] text-gray-500 text-[10px] uppercase tracking-widest border-b border-gray-900">
                                <th className="px-6 py-5">Customer ID</th>
                                <th className="px-6 py-5">Contact Info</th>
                                <th className="px-6 py-5 text-center">Visits</th>
                                <th className="px-6 py-5 text-right">Total Spent</th>
                                <th className="px-6 py-5">Last Visit</th>
                                <th className="px-6 py-5 text-center">Status</th>
                                <th className="px-6 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-900">
                            {filteredCustomers.map((customer) => (
                                <tr key={customer.id} className="hover:bg-white/[0.01] transition-colors group">
                                    <td className="px-6 py-5 font-mono text-xs text-[#D4AF37]">{customer.id}</td>
                                    <td className="px-6 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#8B7355] flex items-center justify-center font-bold text-black uppercase">
                                                {customer.name[0]}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-white">{customer.name}</span>
                                                <span className="text-xs text-gray-500">{customer.email}</span>
                                                <span className="text-xs text-gray-600">{customer.phone}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5 text-center">
                                        <span className="text-2xl font-bold">{customer.visits}</span>
                                    </td>
                                    <td className="px-6 py-5 text-right font-bold text-[#D4AF37]">{customer.totalSpent}</td>
                                    <td className="px-6 py-5 text-sm text-gray-400">{customer.lastVisit}</td>
                                    <td className="px-6 py-5 text-center">
                                        <span className={`text-[9px] uppercase font-bold px-3 py-1.5 rounded-full border ${customer.status === 'VIP' ? 'bg-[#D4AF37]/10 text-[#D4AF37] border-[#D4AF37]/20' :
                                                customer.status === 'Regular' ? 'bg-blue-500/10 text-blue-500 border-blue-500/20' :
                                                    'bg-green-500/10 text-green-500 border-green-500/20'
                                            }`}>
                                            {customer.status}
                                        </span>
                                    </td>
                                    <td className="px-6 py-5 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 hover:border-[#D4AF37]/30 transition-all">👁️</button>
                                            <button className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center border border-white/5 hover:border-[#D4AF37]/30 transition-all">✏️</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {filteredCustomers.length === 0 && (
                <div className="text-center py-20 bg-white/[0.02] rounded-2xl border-2 border-dashed border-white/5">
                    <span className="text-4xl mb-4 block opacity-50">🔍</span>
                    <p className="text-gray-500 italic">No customers found matching "{searchTerm}"</p>
                </div>
            )}
        </div>
    );
};

export default CustomersPage;
