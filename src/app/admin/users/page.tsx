'use client';

import React, { useState } from 'react';

const UsersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const users = [
        { id: 'USR-001', name: 'Nene Amar', email: 'nene@glamourstyle.co.uk', role: 'Owner', privileges: 'Full Access', status: 'Active' },
        { id: 'USR-002', name: 'Mamadou Wane', email: 'mamadou@glamourstyle.co.uk', role: 'Manager', privileges: 'Management & Finances', status: 'Active' },
        { id: 'USR-003', name: 'Zainab Diallo', email: 'zainab@glamourstyle.co.uk', role: 'Senior Stylist', privileges: 'Appointments & Customers', status: 'Active' },
        { id: 'USR-004', name: 'Aminata Sow', email: 'aminata@glamourstyle.co.uk', role: 'Assistant', privileges: 'Appointments Only', status: 'Active' },
    ];

    const roles = ['Owner', 'Manager', 'Senior Stylist', 'Assistant', 'Receptionist'];

    return (
        <div className="space-y-10 animate-fadeIn min-h-screen pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-gray-950">User Management</h1>
                    <p className="text-gray-500 text-base font-medium mt-1">Manage staff, roles, and access privileges.</p>
                </div>
                <button className="px-6 py-3 text-sm font-bold uppercase tracking-widest text-white bg-gray-950 rounded-xl hover:bg-gray-800 transition-all shadow-lg shadow-black/10">
                    + Add New User
                </button>
            </div>

            {/* Roles Quick Look */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-sm font-black uppercase tracking-widest text-[#D4AF37] mb-2">Administrators</h3>
                    <p className="text-3xl font-black text-gray-950">2</p>
                    <p className="text-xs text-gray-500 mt-2 font-medium italic">Full access to ERP system</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-sm font-black uppercase tracking-widest text-[#D4AF37] mb-2">Salon Staff</h3>
                    <p className="text-3xl font-black text-gray-950">5</p>
                    <p className="text-xs text-gray-500 mt-2 font-medium italic">Service & Appointment management</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                    <h3 className="text-sm font-black uppercase tracking-widest text-[#D4AF37] mb-2">Defined Roles</h3>
                    <p className="text-3xl font-black text-gray-950">{roles.length}</p>
                    <p className="text-xs text-gray-500 mt-2 font-medium italic">Customized permissions configuration</p>
                </div>
            </div>

            {/* Users Table */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <div className="px-8 py-6 border-b border-gray-50 flex justify-between items-center">
                    <h3 className="text-lg font-bold text-gray-950">Staff Members</h3>
                    <div className="relative">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
                        <input
                            type="text"
                            placeholder="Search..."
                            className="bg-gray-50 border border-gray-100 rounded-lg py-2 pl-9 pr-4 text-sm outline-none focus:border-[#D4AF37]"
                        />
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-400 text-xs font-black uppercase tracking-widest">
                                <th className="px-8 py-5">Name / Email</th>
                                <th className="px-8 py-5">Role</th>
                                <th className="px-8 py-5">Privileges</th>
                                <th className="px-8 py-5 text-center">Status</th>
                                <th className="px-8 py-5 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {users.map((user) => (
                                <tr key={user.id} className="hover:bg-gray-50/30 transition-colors group">
                                    <td className="px-8 py-5">
                                        <div className="flex flex-col">
                                            <span className="font-bold text-gray-900 text-base">{user.name}</span>
                                            <span className="text-sm text-gray-500 font-medium">{user.email}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="px-3 py-1 bg-gray-100 rounded-lg text-xs font-bold text-gray-700 uppercase tracking-widest">
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5">
                                        <span className="text-sm font-medium text-gray-600 italic">
                                            {user.privileges}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-center">
                                        <span className="flex items-center justify-center gap-2 text-xs font-bold text-green-600">
                                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="px-8 py-5 text-right">
                                        <div className="flex justify-end gap-3">
                                            <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-gray-200 transition-all">✏️</button>
                                            <button className="p-2 hover:bg-white rounded-lg border border-transparent hover:border-red-100 hover:text-red-500 transition-all">🗑️</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Role Privileges Editor - Teaser */}
            <div className="bg-gray-950 p-10 rounded-3xl text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 p-10 text-8xl opacity-10">🛡️</div>
                <div className="relative z-10 max-w-2xl">
                    <h2 className="text-2xl font-heading mb-4 leading-tight">Role & Security Editor</h2>
                    <p className="text-gray-400 text-base mb-8 italic">
                        Precisely configure what each team member can see and edit. From basic viewing to full financial management.
                    </p>
                    <button className="px-8 py-3 bg-[#D4AF37] text-gray-950 font-black text-xs uppercase tracking-[2px] rounded-xl hover:bg-white transition-all shadow-xl">
                        Configure Permissions
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UsersPage;
