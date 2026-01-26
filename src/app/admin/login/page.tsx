'use client';

import React from 'react';
import Link from 'next/link';

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-[#f1f5f9] flex items-center justify-center p-4 font-body">
            <div className="w-full max-w-[320px]">
                {/* Logo Area */}
                <div className="text-center mb-8">
                    <div className="w-10 h-10 bg-gray-950 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-md">
                        <span className="text-xl">💇</span>
                    </div>
                    <h1 className="text-xs font-black text-gray-900 uppercase tracking-[3px]">Cabinet LexPremium</h1>
                    <p className="text-[9px] text-gray-500 uppercase tracking-widest mt-1 font-bold">Espace Personnel / Collaborateurs</p>
                </div>

                {/* Login Card */}
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                    <form className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="block text-[8px] text-gray-400 font-bold uppercase tracking-widest">Email professionnel</label>
                            <input
                                type="email"
                                placeholder="admin@lexpremium.sn"
                                className="w-full bg-gray-50 border border-gray-100 rounded px-3 py-2 text-[10px] font-bold text-gray-900 focus:bg-white focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-300"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="block text-[8px] text-gray-400 font-bold uppercase tracking-widest">Mot de passe</label>
                            <input
                                type="password"
                                placeholder="•••••••"
                                className="w-full bg-gray-50 border border-gray-100 rounded px-3 py-2 text-[10px] font-bold text-gray-900 focus:bg-white focus:border-[#D4AF37] outline-none transition-all placeholder:text-gray-300"
                            />
                        </div>

                        <div className="pt-2">
                            <Link
                                href="/admin"
                                className="w-full block bg-gray-950 text-white text-center py-2 rounded text-[9px] font-bold uppercase tracking-widest hover:bg-gray-800 transition-all shadow-sm"
                            >
                                Se connecter
                            </Link>
                        </div>
                    </form>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center">
                    <p className="text-[8px] text-gray-400 font-bold uppercase tracking-[2px]">© 2025 LexPremium ERP</p>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
