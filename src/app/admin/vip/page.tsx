'use client';

import React from 'react';

const VIPPage = () => {
    const vipMembers = [
        { id: 1, name: 'Zainab A.', tier: 'Platine', points: 1250, visits: 24, status: 'Actif' },
        { id: 2, name: 'Aminata K.', tier: 'Or', points: 850, visits: 18, status: 'Actif' },
        { id: 3, name: 'Binta D.', tier: 'Argent', points: 420, visits: 8, status: 'Actif' },
        { id: 4, name: 'Yasmine B.', tier: 'Argent', points: 310, visits: 6, status: 'Actif' },
        { id: 5, name: 'Fatou S.', tier: 'Standard', points: 150, visits: 2, status: 'Nouveau' },
    ];

    return (
        <div className="space-y-10 animate-fadeIn min-h-screen pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-gray-950">Programme Fidélité VIP</h1>
                    <p className="text-gray-500 text-base font-medium mt-1">Gérez les récompenses et les avantages de vos meilleurs clients.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/5 border border-[#D4AF37]/20 rounded-xl hover:bg-[#D4AF37] hover:text-white transition-all">
                        Configurer Récompenses
                    </button>
                </div>
            </div>

            {/* VIP Tiers Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-3xl text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-8 text-7xl opacity-20">💎</div>
                    <div className="relative z-10">
                        <p className="text-[#D4AF37] text-xs font-black uppercase tracking-[3px] mb-2">Tier Platine</p>
                        <h3 className="text-4xl font-black mb-4">5 <span className="text-sm font-medium text-gray-400">clients</span></h3>
                        <p className="text-gray-400 text-xs italic">Avantages : -20% permanent, Priorité RDV, Soin offert/mois.</p>
                    </div>
                </div>
                <div className="bg-gradient-to-br from-[#D4AF37] to-[#8B7355] p-8 rounded-3xl text-white relative overflow-hidden shadow-2xl">
                    <div className="absolute top-0 right-0 p-8 text-7xl opacity-20">✨</div>
                    <div className="relative z-10">
                        <p className="text-white text-xs font-black uppercase tracking-[3px] mb-2">Tier Or</p>
                        <h3 className="text-4xl font-black mb-4">12 <span className="text-sm font-medium text-white/60">clients</span></h3>
                        <p className="text-white/80 text-xs italic">Avantages : -10% permanent, Accès ventes privées mèches.</p>
                    </div>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 p-8 text-7xl opacity-5">🎟️</div>
                    <div className="relative z-10">
                        <p className="text-gray-400 text-xs font-black uppercase tracking-[3px] mb-2">Argent & Moins</p>
                        <h3 className="text-4xl font-black mb-4">45 <span className="text-sm font-medium text-gray-400">clients</span></h3>
                        <p className="text-gray-500 text-xs italic">Avantages : Cumul de points standard, offres anniversaires.</p>
                    </div>
                </div>
            </div>

            {/* VIP Members List */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-8 py-6 border-b border-gray-50 bg-gray-50/20 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-950 uppercase tracking-widest">Registre des Membres</h3>
                    <div className="text-right">
                        <p className="text-[10px] font-black text-[#D4AF37] uppercase tracking-widest leading-none">Total Points Distribués</p>
                        <p className="text-xl font-black text-gray-950">142,500 pts</p>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-50 text-gray-400 text-xs font-black uppercase tracking-widest">
                                <th className="px-8 py-5">Membre VIP</th>
                                <th className="px-8 py-5">Niveau (Tier)</th>
                                <th className="px-8 py-5 text-center">Points Cumulés</th>
                                <th className="px-8 py-5 text-center">Fréquence</th>
                                <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50/50">
                            {vipMembers.map((member) => (
                                <tr key={member.id} className="hover:bg-gray-50/50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-full bg-gray-950 text-white flex items-center justify-center font-black text-xs uppercase shadow-lg">
                                                {member.name[0]}
                                            </div>
                                            <p className="text-base font-bold text-gray-950">{member.name}</p>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[1px] border ${member.tier === 'Platine' ? 'bg-gray-950 text-white border-black' :
                                                member.tier === 'Or' ? 'bg-[#D4AF37] text-white border-[#D4AF37]' :
                                                    'bg-white text-gray-500 border-gray-200'
                                            }`}>
                                            {member.tier}
                                        </span>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <div className="flex flex-col items-center">
                                            <span className="text-base font-black text-gray-950">{member.points} pts</span>
                                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-tight">Valeur: £{Math.floor(member.points / 10)}</p>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <span className="text-sm font-black text-gray-600 uppercase tracking-widest italic">{member.visits} visites</span>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="px-4 py-2 bg-gray-50 hover:bg-white text-gray-950 text-[10px] font-black uppercase tracking-widest border border-gray-100 hover:border-black rounded-lg transition-all shadow-sm">Offrir Récompense</button>
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

export default VIPPage;
