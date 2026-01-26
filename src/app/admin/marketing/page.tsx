'use client';

import React, { useState } from 'react';

const MarketingPage = () => {
    const [activeTab, setActiveTab] = useState('templates');

    const templates = [
        { id: 1, type: 'SMS', trigger: 'Confirmation RDV', message: 'Bonjour {client}, votre rendez-vous chez Glamour Style est confirmé pour le {date} à {heure}. À bientôt !', active: true },
        { id: 2, type: 'WhatsApp', trigger: 'Rappel J-1', message: 'Hello {client} ! Petit rappel pour votre soin {service} demain à {heure}. Un empêchement ? Prévenez-nous ! ✨', active: true },
        { id: 3, type: 'SMS', trigger: 'Anniversaire', message: 'Joyeux Anniversaire {client} ! 🎂 Profitez de -15% sur votre prochaine prestation chez nous avec le code BDAY15.', active: false },
        { id: 4, type: 'WhatsApp', trigger: 'Suivi Post-Soin', message: 'Coucou {client}, on espère que votre {service} vous plaît ! N\'hésitez pas à nous laisser un avis ici : [Lien]', active: true },
    ];

    return (
        <div className="space-y-10 animate-fadeIn min-h-screen pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-gray-950">Marketing & Comms</h1>
                    <p className="text-gray-500 text-base font-medium mt-1">Automatisez vos relations clients via SMS et WhatsApp.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#25D366] bg-[#25D366]/5 border border-[#25D366]/20 rounded-xl hover:bg-[#25D366] hover:text-white transition-all">
                        🟢 WhatsApp Business
                    </button>
                    <button className="px-6 py-3 text-sm font-bold uppercase tracking-widest text-white bg-gray-950 rounded-xl hover:bg-gray-800 transition-all shadow-xl">
                        Campagne SMS Directe
                    </button>
                </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">SMS Envoyés (Mois)</p>
                    <p className="text-3xl font-black text-gray-950">1,240</p>
                    <div className="h-1.5 w-full bg-gray-50 rounded-full mt-4 overflow-hidden">
                        <div className="h-full bg-blue-500 w-[60%]" />
                    </div>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">WhatsApp Automatisés</p>
                    <p className="text-3xl font-black text-gray-950">854</p>
                    <div className="h-1.5 w-full bg-gray-50 rounded-full mt-4 overflow-hidden">
                        <div className="h-full bg-[#25D366] w-[85%]" />
                    </div>
                </div>
                <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                    <p className="text-xs font-black text-gray-400 uppercase tracking-widest mb-1">Taux d'ouverture</p>
                    <p className="text-3xl font-black text-green-600">98.2%</p>
                    <p className="text-[10px] text-gray-400 mt-2 font-bold uppercase">vs 22% pour les emails</p>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex gap-2 p-1.5 bg-gray-200/50 rounded-xl border border-gray-200 w-fit">
                <button
                    onClick={() => setActiveTab('templates')}
                    className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'templates' ? 'bg-white text-gray-950 shadow-md' : 'text-gray-500 hover:text-gray-950'}`}
                >
                    Modèles de messages
                </button>
                <button
                    onClick={() => setActiveTab('automation')}
                    className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'automation' ? 'bg-white text-gray-950 shadow-md' : 'text-gray-500 hover:text-gray-950'}`}
                >
                    Automatisations
                </button>
                <button
                    onClick={() => setActiveTab('history')}
                    className={`px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all ${activeTab === 'history' ? 'bg-white text-gray-950 shadow-md' : 'text-gray-500 hover:text-gray-950'}`}
                >
                    Historique d'envoi
                </button>
            </div>

            {activeTab === 'templates' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {templates.map((tpl) => (
                        <div key={tpl.id} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm relative group">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center gap-3">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${tpl.type === 'WhatsApp' ? 'bg-[#25D366]/10 text-[#25D366]' : 'bg-blue-100 text-blue-600'}`}>
                                        {tpl.type}
                                    </span>
                                    <h3 className="text-base font-bold text-gray-950">{tpl.trigger}</h3>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className={`w-3 h-3 rounded-full ${tpl.active ? 'bg-green-500' : 'bg-gray-300'}`} />
                                    <span className="text-[10px] font-bold text-gray-400 uppercase">{tpl.active ? 'Actif' : 'Pause'}</span>
                                </div>
                            </div>
                            <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 italic text-gray-600 text-sm leading-relaxed mb-6">
                                "{tpl.message}"
                            </div>
                            <div className="flex justify-end gap-3">
                                <button className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#D4AF37] border border-[#D4AF37]/20 rounded-lg hover:bg-[#D4AF37] hover:text-white transition-all">
                                    Éditer Modèle
                                </button>
                                <button className="px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 hover:text-gray-950 transition-all">
                                    Tester
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Pro Tips / WhatsApp Strategy */}
            <div className="bg-gradient-to-br from-[#25D366] to-[#128C7E] p-10 rounded-3xl text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 text-9xl opacity-10">💬</div>
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-3xl font-heading mb-6 leading-tight font-bold">Pourquoi WhatsApp ?</h2>
                    <ul className="space-y-4 mb-8">
                        <li className="flex gap-4">
                            <span className="text-2xl">⚡</span>
                            <p className="text-white/90 text-sm font-medium">Réduction massive des "No-Shows" grâce aux rappels interactifs.</p>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-2xl">📈</span>
                            <p className="text-white/90 text-sm font-medium">Augmentation du panier moyen en proposant des soins complémentaires (Hair Care).</p>
                        </li>
                        <li className="flex gap-4">
                            <span className="text-2xl">🤝</span>
                            <p className="text-white/90 text-sm font-medium">Relation client plus humaine et directe qu'un simple SMS automatisé.</p>
                        </li>
                    </ul>
                    <button className="px-8 py-4 bg-white text-[#128C7E] font-black text-xs uppercase tracking-[2px] rounded-xl hover:shadow-2xl transition-all">
                        Connecter mon compte Business
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MarketingPage;
