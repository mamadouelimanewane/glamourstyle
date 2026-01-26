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
        <div className="space-y-8">
            <div>
                <h1 className="text-4xl font-heading mb-2">Settings</h1>
                <p className="text-gray-500">Configure your salon's operational preferences.</p>
            </div>

            <div className="flex gap-2 border-b border-gray-900 pb-4">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`flex items-center gap-2 px-6 py-3 rounded-t-xl text-sm font-medium transition-all ${activeTab === tab.id
                                ? 'bg-white/5 text-[#D4AF37] border-b-2 border-[#D4AF37]'
                                : 'text-gray-500 hover:text-white'
                            }`}
                    >
                        <span>{tab.icon}</span>
                        {tab.label}
                    </button>
                ))}
            </div>

            {activeTab === 'general' && (
                <div className="space-y-6">
                    <div className="glass p-8 rounded-2xl border border-white/5">
                        <h3 className="text-xl font-bold mb-6">Salon Information</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Salon Name</label>
                                <input type="text" defaultValue="Glamour Style" className="input-field" />
                            </div>
                            <div>
                                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Phone Number</label>
                                <input type="tel" defaultValue="+44 20 7123 4567" className="input-field" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                                <input type="email" defaultValue="contact@glamourstyle.co.uk" className="input-field" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Address</label>
                                <input type="text" defaultValue="68 High Street, Waltham Cross, UK" className="input-field" />
                            </div>
                            <div className="md:col-span-2">
                                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Description</label>
                                <textarea rows={4} defaultValue="Excellence at the service of your beauty. We have been creating exceptional styles for over 10 years in the heart of the UK." className="input-field" />
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button className="btn-primary">Save Changes</button>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'hours' && (
                <div className="space-y-6">
                    <div className="glass p-8 rounded-2xl border border-white/5">
                        <h3 className="text-xl font-bold mb-6">Operating Hours</h3>
                        <div className="space-y-4">
                            {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
                                <div key={day} className="flex items-center gap-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                    <div className="w-32">
                                        <span className="font-medium">{day}</span>
                                    </div>
                                    <label className="flex items-center gap-2">
                                        <input type="checkbox" defaultChecked={day !== 'Monday'} className="w-4 h-4" />
                                        <span className="text-sm text-gray-500">Open</span>
                                    </label>
                                    <div className="flex items-center gap-3">
                                        <input type="time" defaultValue="09:30" className="input-field py-2 text-sm" />
                                        <span className="text-gray-600">to</span>
                                        <input type="time" defaultValue={day === 'Friday' || day === 'Saturday' ? '19:00' : '18:00'} className="input-field py-2 text-sm" />
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button className="btn-primary">Update Hours</button>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'payments' && (
                <div className="space-y-6">
                    <div className="glass p-8 rounded-2xl border border-white/5">
                        <h3 className="text-xl font-bold mb-6">Payment Configuration</h3>
                        <div className="space-y-6">
                            <div>
                                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Deposit Percentage</label>
                                <div className="flex items-center gap-4">
                                    <input type="number" defaultValue="5" min="0" max="100" className="input-field w-32" />
                                    <span className="text-gray-500">% of total service price</span>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-bold mb-4 text-gray-400 uppercase tracking-widest">Accepted Payment Methods</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {['Klarna', 'Afterpay', 'Affirm', 'Credit Card', 'Debit Card', 'Cash'].map((method) => (
                                        <label key={method} className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 cursor-pointer hover:border-[#D4AF37]/30 transition-all">
                                            <input type="checkbox" defaultChecked className="w-4 h-4" />
                                            <span className="font-medium">{method}</span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs text-gray-500 uppercase tracking-widest mb-2">Currency</label>
                                <select className="input-field">
                                    <option>GBP (£)</option>
                                    <option>EUR (€)</option>
                                    <option>USD ($)</option>
                                </select>
                            </div>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button className="btn-primary">Save Payment Settings</button>
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'notifications' && (
                <div className="space-y-6">
                    <div className="glass p-8 rounded-2xl border border-white/5">
                        <h3 className="text-xl font-bold mb-6">Notification Preferences</h3>
                        <div className="space-y-4">
                            {[
                                { title: 'New Booking', desc: 'Get notified when a new appointment is made' },
                                { title: 'Booking Cancellation', desc: 'Alert when a customer cancels their appointment' },
                                { title: 'Payment Received', desc: 'Notification when deposit or payment is received' },
                                { title: 'Customer Reviews', desc: 'Alert when a new review is submitted' },
                                { title: 'Daily Summary', desc: 'Receive a daily report of bookings and revenue' },
                            ].map((notif) => (
                                <div key={notif.title} className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/5">
                                    <div>
                                        <p className="font-medium">{notif.title}</p>
                                        <p className="text-sm text-gray-500">{notif.desc}</p>
                                    </div>
                                    <label className="relative inline-block w-12 h-6">
                                        <input type="checkbox" defaultChecked className="sr-only peer" />
                                        <div className="w-12 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#D4AF37]"></div>
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 flex justify-end">
                            <button className="btn-primary">Save Preferences</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SettingsPage;
