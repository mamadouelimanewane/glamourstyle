'use client';

import React from 'react';

const FinancesPage = () => {
    const revenueData = [
        { label: 'Chiffre d\'Affaires Brut', value: '£12,450', change: '+12.5%', icon: '📈' },
        { label: 'Acomptes Reçus', value: '£1,245', change: '+8.2%', icon: '🛡️' },
        { label: 'Dépenses Produits', value: '£2,100', change: '-4.1%', icon: '📉', negative: true },
        { label: 'Marge Nette Est.', value: '£9,105', change: '+15.2%', icon: '💎' },
    ];

    const transactions = [
        { id: 'TR-101', date: '26 Jan 2026', client: 'Zainab A.', type: 'Service', amount: '£220', method: 'Stripe', status: 'Réglé' },
        { id: 'TR-102', date: '26 Jan 2026', client: 'Aminata K.', type: 'Acompte', amount: '£18', method: 'Stripe', status: 'Réglé' },
        { id: 'TR-103', date: '25 Jan 2026', client: 'Binta D.', type: 'Service', amount: '£280', method: 'Espèces', status: 'Réglé' },
        { id: 'TR-104', date: '25 Jan 2026', client: 'Yasmine B.', type: 'Service', amount: '£350', method: 'Klarna', status: 'En attente' },
    ];

    return (
        <div className="space-y-10 animate-fadeIn min-h-screen pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-gray-950">Gestion Financière</h1>
                    <p className="text-gray-500 text-base font-medium mt-1">Pilotage de la rentabilité et suivi des transactions en temps réel.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#D4AF37] bg-white border border-[#D4AF37]/20 rounded-xl hover:bg-[#D4AF37] hover:text-white transition-all shadow-sm">
                        Exporter Comptabilité
                    </button>
                    <button className="px-6 py-3 text-sm font-bold uppercase tracking-widest text-white bg-gray-950 rounded-xl hover:bg-gray-800 transition-all shadow-xl">
                        + Ajouter Dépense
                    </button>
                </div>
            </div>

            {/* Financial Overview Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {revenueData.map((stat) => (
                    <div key={stat.label} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl hover:shadow-blue-500/5 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-2xl">
                                {stat.icon}
                            </div>
                            <span className={`text-xs font-black px-2 py-1 rounded-lg ${stat.negative ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-xs uppercase tracking-[2px] font-black text-gray-400 mb-1">{stat.label}</p>
                        <p className="text-3xl font-heading font-bold text-gray-950">{stat.value}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Detailed Ledger Table */}
                <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="px-8 py-6 border-b border-gray-50 flex justify-between items-center bg-gray-50/20">
                        <h3 className="text-lg font-bold text-gray-950 uppercase tracking-widest">Grand Livre Digital</h3>
                        <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">Janvier 2026</span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-gray-50 text-gray-400 text-xs font-black uppercase tracking-widest">
                                    <th className="px-8 py-5">Date</th>
                                    <th className="px-8 py-5">Description / Client</th>
                                    <th className="px-8 py-5">Mode</th>
                                    <th className="px-8 py-5 text-right">Montant</th>
                                    <th className="px-8 py-5 text-center">Status</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50/50">
                                {transactions.map((tr) => (
                                    <tr key={tr.id} className="hover:bg-gray-50/50 transition-colors">
                                        <td className="px-8 py-5 whitespace-nowrap text-sm font-medium text-gray-500">{tr.date}</td>
                                        <td className="px-8 py-5 whitespace-nowrap">
                                            <div className="flex flex-col">
                                                <span className="text-sm font-bold text-gray-950 uppercase tracking-tight">{tr.client}</span>
                                                <span className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest">{tr.type}</span>
                                            </div>
                                        </td>
                                        <td className="px-8 py-5 whitespace-nowrap">
                                            <span className="text-xs font-black uppercase tracking-widest text-gray-400">{tr.method}</span>
                                        </td>
                                        <td className="px-8 py-5 whitespace-nowrap text-right text-base font-black text-gray-950">{tr.amount}</td>
                                        <td className="px-8 py-5 whitespace-nowrap text-center">
                                            <span className={`px-3 py-1 text-[10px] font-black uppercase tracking-[1px] rounded-full ${tr.status === 'Réglé' ? 'bg-green-50 text-green-600' : 'bg-amber-50 text-amber-600'} border border-current opacity-70`}>
                                                {tr.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Performance Breakdown Widget */}
                <div className="space-y-8">
                    <div className="bg-gray-950 p-8 rounded-3xl text-white shadow-2xl">
                        <h3 className="text-sm font-black uppercase tracking-[3px] text-[#D4AF37] mb-8">Tax / VAT Breakdown</h3>
                        <div className="space-y-6">
                            <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                                <span className="text-gray-400 text-sm font-medium">Net Sales</span>
                                <span className="text-xl font-black">£10,375</span>
                            </div>
                            <div className="flex justify-between items-center pb-4 border-b border-gray-800">
                                <span className="text-gray-400 text-sm font-medium">VAT (20%)</span>
                                <span className="text-xl font-black text-red-400">£2,075</span>
                            </div>
                            <div className="pt-2 flex justify-between items-center">
                                <span className="text-white text-base font-black uppercase tracking-widest">Total Gross</span>
                                <span className="text-3xl font-black text-[#D4AF37]">£12,450</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                        <h3 className="text-sm font-black uppercase tracking-widest text-gray-400 mb-6">Payment Analytics</h3>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex-1 h-3 bg-blue-500 rounded-full" style={{ width: '65%' }} />
                            <span className="text-xs font-black text-gray-950">Stripe 65%</span>
                        </div>
                        <div className="flex items-center gap-4 mb-4">
                            <div className="flex-1 h-3 bg-amber-500 rounded-full" style={{ width: '25%' }} />
                            <span className="text-xs font-black text-gray-950">Espèces 25%</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex-1 h-3 bg-purple-500 rounded-full" style={{ width: '10%' }} />
                            <span className="text-xs font-black text-gray-950">Autres 10%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FinancesPage;
