'use client';

import React, { useState } from 'react';

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('general');

    const tabs = [
        { id: 'general', label: 'Général', icon: '⚙️' },
        { id: 'hours', label: 'Horaires', icon: '🕐' },
        { id: 'comm', label: 'Communications', icon: '📱' },
        { id: 'payments', label: 'Paiements', icon: '💳' },
        { id: 'notifications', label: 'Alertes', icon: '🔔' },
    ];

    return (
        <div className="space-y-10 animate-fadeIn pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-3xl font-heading font-bold text-gray-950">Configuration Système</h1>
                    <p className="text-gray-500 text-base font-medium mt-1 uppercase tracking-wide">Paramètres globaux du serveur LexPremium</p>
                </div>
            </div>

            <div className="flex gap-1.5 p-1.5 bg-gray-200/50 rounded-xl border border-gray-200 w-fit">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${activeTab === tab.id
                            ? 'bg-white text-gray-950 shadow-md border border-gray-100'
                            : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        <span className="text-base">{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            <div className="max-w-4xl">
                {activeTab === 'general' && (
                    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm space-y-8">
                        <div>
                            <h3 className="text-lg font-bold text-gray-950 mb-6 uppercase tracking-wider">Identité de l'Héroïne</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-xs text-gray-400 font-black uppercase tracking-widest">Enseigne Commerciale</label>
                                    <input type="text" defaultValue="Glamour Style" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-base font-bold text-gray-900 focus:bg-white focus:border-[#D4AF37] outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="block text-xs text-gray-400 font-black uppercase tracking-widest">Ligne Directe</label>
                                    <input type="tel" defaultValue="+44 20 7123 4567" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-base font-bold text-gray-900 focus:bg-white focus:border-[#D4AF37] outline-none transition-all" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="block text-xs text-gray-400 font-black uppercase tracking-widest">Email Professionnel</label>
                                    <input type="email" defaultValue="contact@glamourstyle.co.uk" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-3 text-base font-bold text-gray-900 focus:bg-white focus:border-[#D4AF37] outline-none transition-all" />
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
                        <h3 className="text-lg font-bold text-gray-950 mb-8 uppercase tracking-wider">Horaires Hebdomadaires</h3>
                        <div className="space-y-3">
                            {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map((day) => (
                                <div key={day} className="flex items-center gap-6 p-4 rounded-xl bg-gray-50/50 border border-gray-100 group hover:bg-white hover:shadow-sm transition-all text-base">
                                    <div className="w-32">
                                        <span className="font-bold text-gray-950 uppercase tracking-widest text-xs">{day}</span>
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

                {activeTab === 'comm' && (
                    <div className="space-y-8">
                        <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm max-w-4xl">
                            <h3 className="text-lg font-bold text-gray-950 mb-8 uppercase tracking-wider">Passerelles de Communication</h3>

                            <div className="space-y-8">
                                {/* WhatsApp API */}
                                <div className="p-6 bg-[#25D366]/5 rounded-2xl border border-[#25D366]/20">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="text-3xl">🧩</div>
                                            <div>
                                                <p className="text-base font-black text-gray-950">Intégration WhatsApp Business</p>
                                                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Status : Connecté via Twilio API</p>
                                            </div>
                                        </div>
                                        <div className="w-12 h-6 bg-green-500 rounded-full relative">
                                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">WhatsApp ID</label>
                                            <input type="text" readOnly value="GS_PROD_1102938" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold font-mono" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Phone Linked</label>
                                            <input type="text" value="+44 7123 456789" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold" />
                                        </div>
                                    </div>
                                </div>

                                {/* SMS Gateway */}
                                <div className="p-6 bg-blue-500/5 rounded-2xl border border-blue-500/20">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex items-center gap-4">
                                            <div className="text-3xl">📡</div>
                                            <div>
                                                <p className="text-base font-black text-gray-950">SMS Gateway (Global)</p>
                                                <p className="text-xs text-gray-500 font-bold uppercase tracking-widest mt-1">Credit restant : 452 SMS</p>
                                            </div>
                                        </div>
                                        <button className="text-[10px] px-3 py-1 bg-white border border-blue-200 text-blue-600 font-black rounded-lg uppercase">Recharger</button>
                                    </div>
                                    <div className="space-y-1.5 mt-6">
                                        <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Sender ID (Alpha-numeric)</label>
                                        <input type="text" value="GLAMOURSTYL" className="w-full bg-white border border-gray-200 rounded-xl px-4 py-2.5 text-xs font-bold uppercase" />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <button className="px-8 py-3 text-xs font-bold uppercase tracking-widest text-white bg-gray-950 rounded-xl hover:bg-gray-800 transition-all shadow-lg">Sauvegarder Configuration</button>
                            </div>
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
