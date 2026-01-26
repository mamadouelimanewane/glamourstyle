'use client';

import React, { useState } from 'react';

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('general');

    const tabs = [
        { id: 'general', label: 'Général', icon: '⚙️' },
        { id: 'hours', label: 'Horaires', icon: '🕐' },
        { id: 'payments', label: 'Paiements', icon: '💳' },
        { id: 'notifications', label: 'Alertes', icon: '🔔' },
    ];

    return (
        <div className="space-y-10 animate-fadeIn pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-2xl font-heading font-bold text-gray-950">Configuration Système</h1>
                    <p className="text-gray-500 text-sm font-medium mt-1 uppercase tracking-wide">Paramètres globaux du serveur LexPremium</p>
                </div>
            </div>

            <div className="flex gap-1.5 p-1.5 bg-gray-200/50 rounded-xl border border-gray-200 w-fit">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab.id
                            ? 'bg-white text-gray-950 shadow-md border border-gray-100'
                            : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        <span className="text-sm">{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="max-w-4xl">
                {activeTab === 'general' && (
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
                        <div>
                            <h3 className="text-base font-bold text-gray-950 mb-6 uppercase tracking-wider">Identité de l'Héroïne</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-[10px] text-gray-400 font-black uppercase tracking-widest">Enseigne Commerciale</label>
                                    <input type="text" defaultValue="Glamour Style" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:bg-white focus:border-[#D4AF37] outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-[10px] text-gray-400 font-black uppercase tracking-widest">Ligne Directe</label>
                                    <input type="tel" defaultValue="+44 20 7123 4567" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:bg-white focus:border-[#D4AF37] outline-none transition-all" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="block text-[10px] text-gray-400 font-black uppercase tracking-widest">Email Professionnel</label>
                                    <input type="email" defaultValue="contact@glamourstyle.co.uk" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-sm font-bold text-gray-900 focus:bg-white focus:border-[#D4AF37] outline-none transition-all" />
                                </div>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-gray-50 flex justify-end">
                            <button className="px-8 py-3 text-xs font-bold uppercase tracking-widest text-white bg-gray-950 rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-black/10">Mettre à jour</button>
                        </div>
                    </div>
                )}

                {activeTab === 'hours' && (
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h3 className="text-base font-bold text-gray-950 mb-8 uppercase tracking-wider">Horaires Hebdomadaires</h3>
                        <div className="space-y-3">
                            {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map((day) => (
                                <div key={day} className="flex items-center gap-6 p-4 rounded-xl bg-gray-50/50 border border-gray-100 group hover:bg-white hover:shadow-sm transition-all text-sm">
                                    <div className="w-32">
                                        <span className="font-bold text-gray-950 uppercase tracking-widest text-[11px]">{day}</span>
                                    </div>
                                    <div className="flex items-center gap-4 ml-auto">
                                        <input type="time" defaultValue="09:00" className="bg-white border border-gray-200 rounded-lg p-2 font-bold text-gray-900 outline-none focus:border-[#D4AF37]" />
                                        <span className="text-gray-300 font-black">-</span>
                                        <input type="time" defaultValue="18:00" className="bg-white border border-gray-200 rounded-lg p-2 font-bold text-gray-900 outline-none focus:border-[#D4AF37]" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'payments' && (
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
                        <h3 className="text-base font-bold text-gray-950 uppercase tracking-wider">Passerelle LexPremium Payments</h3>
                        <div className="p-6 bg-[#D4AF37]/5 rounded-2xl border border-[#D4AF37]/20 flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="text-3xl">💳</div>
                                <div>
                                    <p className="text-sm font-black text-gray-950 mb-1">Terminal Stripe Connecté</p>
                                    <p className="text-xs text-[#D4AF37] font-bold uppercase tracking-widest">Opérationnel • Mode Production</p>
                                </div>
                            </div>
                            <span className="px-4 py-2 bg-white rounded-lg text-xs font-bold text-gray-600 border border-gray-100 italic">ID: GS-734-LXP</span>
                        </div>
                    </div>
                )}

                {activeTab === 'notifications' && (
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
                        <h3 className="text-base font-bold text-gray-950 uppercase tracking-wider">Alertes & Rappels SMS</h3>
                        <div className="space-y-3">
                            {['Email de confirmation automatique', 'Rappel SMS (H-24)', 'Alerte Annulation Manager'].map(item => (
                                <div key={item} className="flex justify-between items-center p-4 bg-gray-50/50 rounded-xl border border-gray-100 group hover:bg-white hover:shadow-sm transition-all">
                                    <span className="text-sm font-bold text-gray-700">{item}</span>
                                    <div className="w-10 h-5 bg-gray-950 rounded-full relative cursor-pointer">
                                        <div className="absolute right-1 top-1 w-3 h-3 bg-[#D4AF37] rounded-full shadow-[0_0_5px_#D4AF37]"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default SettingsPage;
