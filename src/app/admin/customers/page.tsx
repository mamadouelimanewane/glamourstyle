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
        <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-gray-950">Client Registry</h1>
                    <p className="text-gray-500 text-sm font-medium">Manage your salon's most valuable relationships.</p>
                </div>
                <button className="px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest text-white bg-gray-950 rounded-full hover:bg-gray-800 hover:shadow-lg transition-all">
                    + Register New Client
                </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Total Clients', value: customers.length, icon: '👥' },
                    { label: 'VIP Status', value: customers.filter(c => c.status === 'VIP').length, icon: '⭐', color: 'text-[#D4AF37]' },
                    { label: 'New Entries', value: customers.filter(c => c.status === 'New').length, icon: '🆕', color: 'text-green-500' },
                    { label: 'Avg. Value', value: '£1,527', icon: '💰' },
                ].map((s) => (
                    <div key={s.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-xl">
                            {s.icon}
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-0.5">{s.label}</p>
                            <p className={`text-2xl font-black ${s.color || 'text-gray-950'}`}>{s.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Search Bar */}
            <div className="bg-white p-2 rounded-full border border-gray-100 shadow-sm flex items-center">
                <div className="pl-6 pr-4 text-gray-400">🔍</div>
                <input
                    type="text"
                    placeholder="Search by client identifier, email, or contact number..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 bg-transparent py-3 pr-6 text-sm font-bold text-gray-900 placeholder-gray-400 outline-none"
                />
            </div>

            {/* Customers Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50 border-b border-gray-100 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                                <th className="px-8 py-5">Client ID</th>
                                <th className="px-8 py-5">Identity & Contact</th>
                                <th className="px-8 py-5 text-center">Sessions</th>
                                <th className="px-8 py-5 text-right">Lifetime Rev</th>
                                <th className="px-8 py-5">Last Activity</th>
                                <th className="px-8 py-5 text-center">Grading</th>
                                <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredCustomers.map((customer) => (
                                <tr key={customer.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-8 py-5 font-mono text-xs text-gray-400">{customer.id}</td>
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-full bg-gray-950 flex items-center justify-center font-bold text-white text-sm shadow-md group-hover:bg-[#D4AF37] transition-colors uppercase">
                                                {customer.name[0]}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-gray-950">{customer.name}</span>
                                                <span className="text-[11px] text-gray-400 font-medium">{customer.email}</span>
                                                <span className="text-[11px] text-gray-300">{customer.phone}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-center">
                                        <span className="text-xl font-black text-gray-950">{customer.visits}</span>
                                    </td>
                                    <td className="px-8 py-5 text-right font-black text-gray-950">{customer.totalSpent}</td>
                                    <td className="px-8 py-5 text-xs text-gray-500 font-bold">{customer.lastVisit}</td>
                                    <td className="px-8 py-5 text-center">
                                        <span className={`text-[9px] uppercase font-bold px-3 py-1.5 rounded-full border shadow-sm ${customer.status === 'VIP' ? 'bg-white text-[#D4AF37] border-[#D4AF37]/30 shadow-[#D4AF37]/10' :
                                            customer.status === 'Regular' ? 'bg-white text-blue-600 border-blue-100' :
                                                'bg-white text-green-600 border-green-100'
                                            }`}>
                                            {customer.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex justify-end gap-2">
                                            <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-gray-100 hover:border-[#D4AF37] transition-all text-gray-400 hover:text-[#D4AF37] shadow-sm">👁️</button>
                                            <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-gray-100 hover:border-[#D4AF37] transition-all text-gray-400 hover:text-[#D4AF37] shadow-sm">✏️</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {filteredCustomers.length === 0 && (
                <div className="text-center py-20 bg-white rounded-3xl border-2 border-dashed border-gray-100 shadow-sm">
                    <span className="text-5xl mb-4 block opacity-10">🔍</span>
                    <p className="text-gray-400 font-medium italic">No client records match "{searchTerm}"</p>
                </div>
            )}
        </div>
    );
};

export default CustomersPage;
