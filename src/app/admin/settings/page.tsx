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
        <div className="space-y-6 animate-fadeIn pb-10">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-[11px] font-black text-gray-900 uppercase tracking-widest leading-none">Configuration Système</h1>
                    <p className="text-gray-400 text-[8px] font-bold uppercase tracking-wider mt-1">Paramètres du Serveur LexPremium</p>
                </div>
            </div>

            <div className="flex gap-1 p-1 bg-gray-200/50 rounded-lg border border-gray-200 w-fit">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-4 py-1.5 rounded text-[8px] font-black uppercase tracking-widest transition-all ${activeTab === tab.id
                            ? 'bg-white text-gray-950 shadow-sm border border-gray-100'
                            : 'text-gray-500 hover:text-gray-900'
                            }`}
                    >
                        <span>{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            {activeTab === 'general' && (
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm max-w-3xl">
                        <h3 className="text-[10px] font-bold mb-6 text-gray-900 uppercase tracking-widest">Informations Établissement</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="block text-[8px] text-gray-400 font-bold uppercase tracking-widest">Nom Commercial</label>
                                <input type="text" defaultValue="Glamour Style" className="w-full bg-gray-50 border border-gray-100 rounded px-3 py-2 text-[10px] font-bold text-gray-900 focus:bg-white focus:border-[#D4AF37] outline-none transition-all" />
                            </div>
                            <div className="space-y-1.5">
                                <label className="block text-[8px] text-gray-400 font-bold uppercase tracking-widest">Contact Pro</label>
                                <input type="tel" defaultValue="+44 20 7123 4567" className="w-full bg-gray-50 border border-gray-100 rounded px-3 py-2 text-[10px] font-bold text-gray-900 focus:bg-white focus:border-[#D4AF37] outline-none transition-all" />
                            </div>
                            <div className="md:col-span-2 space-y-1.5">
                                <label className="block text-[8px] text-gray-400 font-bold uppercase tracking-widest">Email de Correspondance</label>
                                <input type="email" defaultValue="contact@glamourstyle.co.uk" className="w-full bg-gray-50 border border-gray-100 rounded px-3 py-2 text-[10px] font-bold text-gray-900 focus:bg-white focus:border-[#D4AF37] outline-none transition-all" />
                            </div>
                            <div className="md:col-span-2 space-y-1.5">
                                <label className="block text-[8px] text-gray-400 font-bold uppercase tracking-widest">Description Courte</label>
                                <textarea rows={3} defaultValue="Excellence au service de votre beauté." className="w-full bg-gray-50 border border-gray-100 rounded px-3 py-2 text-[10px] font-medium text-gray-600 focus:bg-white focus:border-[#D4AF37] outline-none transition-all" />
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button className="px-4 py-1.5 text-[8px] font-bold uppercase tracking-widest text-white bg-gray-950 rounded hover:bg-gray-800 transition-all">Enregistrer</button>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'hours' && (
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm max-w-3xl">
                        <h3 className="text-[10px] font-bold mb-6 text-gray-900 uppercase tracking-widest">Horaires d'Ouverture</h3>
                        <div className="grid grid-cols-1 gap-2">
                            {['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'].map((day) => (
                                <div key={day} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50/50 border border-gray-100 group">
                                    <div className="w-24">
                                        <span className="text-[10px] font-bold text-gray-900">{day}</span>
                                    </div>
                                    <div className="flex items-center gap-3 ml-auto">
                                        <input type="time" defaultValue="09:00" className="bg-white border border-gray-200 rounded p-1 text-[10px] font-bold" />
                                        <span className="text-[8px] font-black text-gray-300">-</span>
                                        <input type="time" defaultValue="18:00" className="bg-white border border-gray-200 rounded p-1 text-[10px] font-bold" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Other tabs follow same logic but let's keep it concise to finish the edit */}
            {activeTab === 'payments' && (
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm max-w-3xl">
                    <h3 className="text-[10px] font-bold mb-6 text-gray-900 uppercase tracking-widest">Passerelle de Paiement</h3>
                    <div className="p-4 bg-amber-50 rounded-lg border border-amber-100 mb-6">
                        <p className="text-[9px] text-amber-700 font-bold leading-relaxed uppercase">Terminal de Paiement : Actif (Visa/Stripe/Klarna)</p>
                    </div>
                    <div className="flex justify-end">
                        <button className="px-4 py-1.5 text-[8px] font-bold uppercase tracking-widest text-white bg-gray-950 rounded">Mise à jour</button>
                    </div>
                </div>
            )}

            {activeTab === 'notifications' && (
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm max-w-3xl">
                    <h3 className="text-[10px] font-bold mb-6 text-gray-900 uppercase tracking-widest">Journal des Alertes</h3>
                    <div className="space-y-2">
                        {['Email Client', 'SMS Rappel', 'Notifications Push'].map(item => (
                            <div key={item} className="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-100">
                                <span className="text-[10px] font-bold text-gray-700">{item}</span>
                                <div className="w-8 h-4 bg-gray-950 rounded-full relative">
                                    <div className="absolute right-1 top-1 w-2 h-2 bg-white rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SettingsPage;
