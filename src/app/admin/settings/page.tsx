'use client';

import React, { useState } from 'react';

const SettingsPage = () => {
    const [activeTab, setActiveTab] = useState('general');

    const tabs = [
        { id: 'general', label: 'General', icon: '⚙️' },
        { id: 'hours', label: 'Business Hours', icon: '🕐' },
        { id: 'payments', label: 'Payments', icon: '💳' },
        { id: 'notifications', label: 'Notifications', icon: '🔔' },
    ];

    return (
        <div className="space-y-8 animate-fadeIn">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h1 className="text-lg font-heading font-bold text-gray-950">System Settings</h1>
                    <p className="text-gray-500 text-[10px] font-medium">Fine-tune the salon's core configuration.</p>
                </div>
            </div>

            <div className="flex gap-1 p-1 bg-gray-200/50 rounded-full border border-gray-200 w-fit">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2.5 px-6 py-2.5 rounded-full text-[9px] font-bold uppercase tracking-widest transition-all ${activeTab === tab.id
                            ? 'bg-white text-gray-950 shadow-md border border-gray-100'
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
                    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm max-w-4xl">
                        <h3 className="text-base font-heading font-bold mb-6 text-gray-950">Salon Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="block text-[9px] text-gray-400 font-bold uppercase tracking-widest">Official Salon Name</label>
                                <input type="text" defaultValue="Glamour Style" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:bg-white focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all" />
                            </div>
                            <div className="space-y-2">
                                <label className="block text-[9px] text-gray-400 font-bold uppercase tracking-widest">Business Contact</label>
                                <input type="tel" defaultValue="+44 20 7123 4567" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:bg-white focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="block text-[9px] text-gray-400 font-bold uppercase tracking-widest">Public Correspondence (Email)</label>
                                <input type="email" defaultValue="contact@glamourstyle.co.uk" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:bg-white focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="block text-[9px] text-gray-400 font-bold uppercase tracking-widest">Physical Residency (Address)</label>
                                <input type="text" defaultValue="68 High Street, Waltham Cross, UK" className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-xs font-bold text-gray-900 focus:bg-white focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all" />
                            </div>
                            <div className="md:col-span-2 space-y-2">
                                <label className="block text-[9px] text-gray-400 font-bold uppercase tracking-widest">Brand Narrative</label>
                                <textarea rows={4} defaultValue="Excellence at the service of your beauty. We have been creating exceptional styles for over 10 years in the heart of the UK." className="w-full bg-gray-50 border border-gray-100 rounded-xl px-4 py-2.5 text-xs font-medium text-gray-600 focus:bg-white focus:ring-1 focus:ring-[#D4AF37] outline-none transition-all" />
                            </div>
                        </div>
                        <div className="mt-10 flex justify-end">
                            <button className="px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-white bg-gray-950 rounded-full hover:bg-gray-800 transition-all shadow-md">Apply Global Updates</button>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'hours' && (
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm max-w-4xl">
                        <h3 className="text-base font-heading font-bold mb-6 text-gray-950">Operating Hours</h3>
                        <div className="space-y-4">
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                                <div key={day} className="flex items-center gap-6 p-5 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white transition-all group">
                                    <div className="w-40">
                                        <span className="font-bold text-gray-900">{day}</span>
                                    </div>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <div className="relative">
                                            <input type="checkbox" defaultChecked={day !== 'Monday'} className="sr-only peer" />
                                            <div className="w-10 h-5 bg-gray-300 rounded-full peer-checked:bg-green-500 transition-colors" />
                                            <div className="absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-all peer-checked:translate-x-5" />
                                        </div>
                                        <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest group-hover:text-gray-950 transition-colors">Enabled</span>
                                    </label>
                                    <div className="flex items-center gap-4 ml-auto">
                                        <input type="time" defaultValue="09:30" className="bg-white border border-gray-100 rounded-lg py-1 px-3 text-sm font-bold shadow-sm" />
                                        <span className="text-[10px] font-black text-gray-300">/</span>
                                        <input type="time" defaultValue={day === 'Friday' || day === 'Saturday' ? '19:00' : '18:00'} className="bg-white border border-gray-100 rounded-lg py-1 px-3 text-sm font-bold shadow-sm" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 flex justify-end">
                            <button className="px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-white bg-gray-950 rounded-full hover:bg-gray-800 transition-all shadow-md">Secure Timetable</button>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'payments' && (
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm max-w-4xl">
                        <h3 className="text-base font-heading font-bold mb-6 text-gray-950">Payment Integrity</h3>
                        <div className="space-y-8">
                            <div className="space-y-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                                <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest">Commitment Deposit (%)</label>
                                <div className="flex items-center gap-6">
                                    <div className="relative w-40">
                                        <input type="number" defaultValue="5" min="0" max="100" className="w-full bg-white border border-gray-100 rounded-xl px-5 py-3 text-sm font-black text-gray-900 outline-none" />
                                        <span className="absolute right-5 top-1/2 -translate-y-1/2 font-bold text-gray-400">%</span>
                                    </div>
                                    <p className="text-[11px] text-gray-500 font-medium leading-tight max-w-xs italic">Set the percentage of the total service cost clients must pay to secure their appointment window.</p>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Supported Channels</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                                    {['Klarna', 'Afterpay', 'Affirm', 'Visa/Master', 'AMEX', 'Digital Wallets'].map((method) => (
                                        <label key={method} className="flex items-center justify-between p-4 rounded-xl border border-gray-100 hover:border-[#D4AF37] hover:shadow-sm cursor-pointer transition-all group">
                                            <span className="text-xs font-bold text-gray-600 group-hover:text-gray-950">{method}</span>
                                            <input type="checkbox" defaultChecked className="accent-gray-950 w-4 h-4" />
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="block text-[10px] text-gray-400 font-bold uppercase tracking-widest">Master Currency</label>
                                <select className="w-full sm:w-64 bg-gray-50 border border-gray-100 rounded-xl px-5 py-3 text-sm font-bold text-gray-900 outline-none cursor-pointer focus:bg-white transition-all">
                                    <option>GBP (£) - Sterling</option>
                                    <option>EUR (€) - Euro</option>
                                    <option>USD ($) - Dollar</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-10 flex justify-end">
                            <button className="px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-white bg-gray-950 rounded-full hover:bg-gray-800 transition-all shadow-md">Vault Transactions</button>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'notifications' && (
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-3xl border border-gray-200 shadow-sm max-w-4xl">
                        <h3 className="text-base font-heading font-bold mb-6 text-gray-950">Active Alerts</h3>
                        <div className="space-y-3">
                            {[
                                { title: 'New Reservation', desc: 'Instant alert upon client booking completion.' },
                                { title: 'Cancellation Pulse', desc: 'Immediate notification for appointment removals.' },
                                { title: 'Deposit Verification', desc: 'Log alert for successful gateway processing.' },
                                { title: 'Client Feedback', desc: 'Sync alert when a new rating is published.' },
                                { title: 'Strategic Summary', desc: 'Delivery of daily operational performance reports.' },
                            ].map((notif) => (
                                <div key={notif.title} className="flex items-center justify-between p-5 rounded-2xl bg-gray-50/50 border border-gray-100 hover:bg-white transition-all group">
                                    <div>
                                        <p className="text-sm font-bold text-gray-900 group-hover:text-[#D4AF37] transition-colors">{notif.title}</p>
                                        <p className="text-[11px] text-gray-500 font-medium italic">{notif.desc}</p>
                                    </div>
                                    <div className="relative">
                                        <input type="checkbox" defaultChecked className="sr-only peer" />
                                        <div className="w-12 h-6 bg-gray-300 rounded-full peer-checked:bg-gray-950 transition-all" />
                                        <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-6 transition-all shadow-sm" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-10 flex justify-end">
                            <button className="px-8 py-3 text-[10px] font-bold uppercase tracking-widest text-white bg-gray-950 rounded-full hover:bg-gray-800 transition-all shadow-md">Update Communication</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SettingsPage;
