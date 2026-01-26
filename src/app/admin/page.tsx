'use client';

import React from 'react';

const DashboardPage = () => {
    const stats = [
        { label: 'Total Revenue', value: '£12,450', change: '+12.5%', positive: true, icon: '💰' },
        { label: 'Appointments', value: '48', change: '+4.2%', positive: true, icon: '📅' },
        { label: 'New Customers', value: '12', change: '+18%', positive: true, icon: '👥' },
        { label: 'Completion Rate', value: '94%', change: '+0.5%', positive: true, icon: '✅' },
    ];

    const recentBookings = [
        { id: '1', client: 'Zainab A.', service: 'Luxury Braids', date: 'Today', time: '14:30', amount: '£220', status: 'Confirmed' },
        { id: '2', client: 'Aminata K.', service: 'Silk Press', date: 'Today', time: '16:00', amount: '£180', status: 'Pending' },
        { id: '3', client: 'Binta D.', service: 'Bridal Updo', date: 'Tomorrow', time: '10:00', amount: '£280', status: 'Confirmed' },
        { id: '4', client: 'Yasmine B.', service: 'Keratin Care', date: 'Tomorrow', time: '13:00', amount: '£350', status: 'Awaiting Payment' },
        { id: '5', client: 'Fatou S.', service: 'Full Color', date: 'Jan 28', time: '11:00', amount: '£150', status: 'Confirmed' },
    ];

    return (
        <div className="space-y-6 animate-fadeIn pb-10">
            {/* Header section with very small fonts */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-[11px] font-black text-gray-900 uppercase tracking-widest leading-none">Tableau de Bord</h1>
                    <p className="text-gray-400 text-[8px] font-bold uppercase tracking-wider mt-1">Espace Personnel / Collaborateurs</p>
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-gray-600 bg-white border border-gray-200 rounded hover:bg-gray-50 transition-all">
                        Imprimer Rapport
                    </button>
                    <button className="flex-1 md:flex-none px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white bg-gray-950 rounded hover:bg-gray-800 transition-all">
                        + Nouveau RDV
                    </button>
                </div>
            </div>

            {/* Stats Grid - Smaller Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat) => (
                    <div key={stat.label} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm relative overflow-hidden group">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-sm">{stat.icon}</span>
                            <span className={`text-[8px] font-black px-1.5 py-0.5 rounded ${stat.positive ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <p className="text-[8px] uppercase tracking-wider font-bold text-gray-400 mb-0.5">{stat.label}</p>
                        <p className="text-base font-black text-gray-950">{stat.value}</p>
                    </div>
                ))}
            </div>

            {/* Table Section - Ultra Small & Clean */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/30">
                    <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest">Dernières Activités</h3>
                    <button className="text-[9px] font-bold text-gray-400 uppercase tracking-widest hover:text-gray-950">Voir tout</button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-white border-b border-gray-100">
                                <th className="px-6 py-3 text-left text-[9px] font-bold text-gray-400 uppercase tracking-widest">Client</th>
                                <th className="px-6 py-3 text-left text-[9px] font-bold text-gray-400 uppercase tracking-widest">Service</th>
                                <th className="px-6 py-3 text-left text-[9px] font-bold text-gray-400 uppercase tracking-widest">Date / Heure</th>
                                <th className="px-6 py-3 text-right text-[9px] font-bold text-gray-400 uppercase tracking-widest">Montant</th>
                                <th className="px-6 py-3 text-center text-[9px] font-bold text-gray-400 uppercase tracking-widest">Statut</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {recentBookings.map((booking) => (
                                <tr key={booking.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        <div className="flex items-center gap-2.5">
                                            <div className="w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-[9px] font-bold text-gray-600">
                                                {booking.client[0]}
                                            </div>
                                            <span className="text-[11px] font-bold text-gray-900">{booking.client}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap text-[10px] font-medium text-gray-500">{booking.service}</td>
                                    <td className="px-6 py-3 whitespace-nowrap">
                                        <div className="text-[10px] text-gray-900 font-bold">{booking.date}</div>
                                        <div className="text-[8px] text-gray-400 font-medium uppercase tracking-tight">{booking.time}</div>
                                    </td>
                                    <td className="px-6 py-3 whitespace-nowrap text-[10px] font-black text-gray-950 text-right">{booking.amount}</td>
                                    <td className="px-6 py-3 whitespace-nowrap text-center">
                                        <span className={`px-2 py-0.5 text-[8px] font-bold uppercase rounded ${booking.status === 'Confirmed'
                                            ? 'bg-green-50 text-green-600'
                                            : 'bg-amber-50 text-amber-600'
                                            }`}>
                                            {booking.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Bottom Grid: Low profile charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                    <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-6">Répartition Mensuelle</h3>
                    <div className="space-y-4">
                        {[
                            { category: 'Styling', percentage: 45, color: 'bg-gray-950' },
                            { category: 'Coloration', percentage: 25, color: 'bg-[#D4AF37]' },
                            { category: 'Extensions', percentage: 20, color: 'bg-gray-400' },
                            { category: 'Produits', percentage: 10, color: 'bg-gray-200' },
                        ].map((item) => (
                            <div key={item.category} className="space-y-1.5">
                                <div className="flex justify-between items-center text-[9px] font-bold uppercase text-gray-400">
                                    <span>{item.category}</span>
                                    <span className="text-gray-900">{item.percentage}%</span>
                                </div>
                                <div className="h-1 w-full bg-gray-50 rounded-full overflow-hidden">
                                    <div className={`h-full ${item.color}`} style={{ width: `${item.percentage}%` }} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                    <h3 className="text-[10px] font-bold text-gray-900 uppercase tracking-widest mb-6">Notes de Service</h3>
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 flex flex-col justify-between h-32">
                        <p className="text-[11px] text-gray-600 italic leading-relaxed">
                            Les réservations du vendredi sont <span className="text-gray-950 font-black">20% plus élevées</span>. Prévoir une équipe renforcée.
                        </p>
                        <div className="flex justify-between items-end border-t border-gray-200 pt-3">
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Espace Personnel</span>
                            <span className="text-[10px] font-black text-gray-950">LexPremium ERP</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
