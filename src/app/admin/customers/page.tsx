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
        <div className="space-y-8 animate-fadeIn pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-gray-950">Registre des Clients</h1>
                    <p className="text-gray-500 text-base font-medium mt-1 uppercase tracking-wide">Base de données CRM et fidélisation</p>
                </div>
                <button className="px-6 py-3 text-xs font-bold uppercase tracking-widest text-white bg-gray-950 rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-black/10">
                    + Ajouter un client
                </button>
            </div>

            {/* Key Metrics */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'Clients Totaux', value: customers.length, icon: '👥' },
                    { label: 'Statut VIP', value: customers.filter(c => c.status === 'VIP').length, icon: '⭐', color: 'text-[#D4AF37]' },
                    { label: 'Nouveautés', value: customers.filter(c => c.status === 'New').length, icon: '🆕', color: 'text-green-500' },
                    { label: 'CA Moyen', value: '£1,527', icon: '💰' },
                ].map((s) => (
                    <div key={s.label} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
                        <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-xl">
                            {s.icon}
                        </div>
                        <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-widest mb-1">{s.label}</p>
                            <p className={`text-2xl font-black ${s.color || 'text-gray-950'}`}>{s.value}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Search Bar */}
            <div className="bg-white p-2 rounded-2xl border border-gray-200 shadow-sm flex items-center">
                <div className="pl-5 pr-3 text-gray-400 text-lg">🔍</div>
                <input
                    type="text"
                    placeholder="Chercher par nom, email ou numéro..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="flex-1 bg-transparent py-3 pr-6 text-sm font-medium text-gray-900 placeholder-gray-400 outline-none"
                />
            </div>

            {/* Customers Table */}
            <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-400 text-xs font-bold uppercase tracking-widest">
                                <th className="px-8 py-5">Identité</th>
                                <th className="px-8 py-5 text-center">Sessions</th>
                                <th className="px-8 py-5 text-right">CA Total</th>
                                <th className="px-8 py-5 text-center">Dernière Visite</th>
                                <th className="px-8 py-5 text-center">Rang</th>
                                <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {filteredCustomers.map((customer) => (
                                <tr key={customer.id} className="hover:bg-gray-50/30 transition-colors group">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-gray-950 flex items-center justify-center font-black text-white text-xs">
                                                {customer.name[0]}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="font-bold text-gray-900 text-base">{customer.name}</span>
                                                <span className="text-sm text-gray-500 font-medium">{customer.email}</span>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5 text-center">
                                        <span className="text-base font-black text-gray-950">{customer.visits}</span>
                                    </td>
                                    <td className="px-8 py-5 text-right font-black text-gray-950 text-base">{customer.totalSpent}</td>
                                    <td className="px-8 py-5 text-center text-sm text-gray-500 font-bold">{customer.lastVisit}</td>
                                    <td className="px-8 py-5 text-center">
                                        <span className={`text-xs uppercase font-black px-3 py-1.5 rounded-full border ${customer.status === 'VIP' ? 'bg-amber-50 text-amber-600 border-amber-100 shadow-sm' :
                                            customer.status === 'Regular' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                                                'bg-green-50 text-green-600 border-green-100'
                                            }`}>
                                            {customer.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <button className="w-8 h-8 rounded-lg bg-white flex items-center justify-center border border-gray-200 text-sm opacity-0 group-hover:opacity-100 transition-all hover:border-[#D4AF37] hover:shadow-sm">✏️</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CustomersPage;
