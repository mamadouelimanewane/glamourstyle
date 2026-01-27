'use client';

import React, { useState } from 'react';

const StockPage = () => {
    const stockItems = [
        { id: 1, name: 'X-Pression Extensions (Black)', category: 'Braids', stock: 45, min: 10, unit: 'packs', price: '£5.00' },
        { id: 2, name: 'Organic Castor Oil', category: 'Care', stock: 8, min: 10, unit: 'units', price: '£12.50' },
        { id: 3, name: 'Pro Hydrating Shampoo', category: 'Care', stock: 15, min: 5, unit: 'L', price: '£22.00' },
        { id: 4, name: 'Natural Weave Extensions 18"', category: 'Extensions', stock: 4, min: 5, unit: 'packs', price: '£85.00' },
        { id: 5, name: 'Extra Strong Styling Gel', category: 'Finish', stock: 32, min: 15, unit: 'units', price: '£8.00' },
    ];

    return (
        <div className="space-y-10 animate-fadeIn min-h-screen pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-gray-950">Stock Management</h1>
                    <p className="text-gray-500 text-base font-medium mt-1">Monitor products and accessories inventory.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-3 text-sm font-bold uppercase tracking-widest text-[#D4AF37] bg-white border border-[#D4AF37]/20 rounded-xl hover:bg-[#D4AF37] hover:text-white transition-all shadow-sm">
                        Full Inventory PDF
                    </button>
                    <button className="px-6 py-3 text-sm font-bold uppercase tracking-widest text-white bg-gray-950 rounded-xl hover:bg-gray-800 transition-all shadow-xl">
                        + New Item
                    </button>
                </div>
            </div>

            {/* Low Stock Alert */}
            <div className="bg-red-50 p-6 rounded-2xl border border-red-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <span className="text-2xl">🚨</span>
                    <div>
                        <p className="text-red-800 font-black text-sm uppercase tracking-widest">Low Stock Alert</p>
                        <p className="text-red-600 text-sm font-medium">Some critical items are below the minimum threshold.</p>
                    </div>
                </div>
                <button className="px-4 py-2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest rounded-lg hover:bg-red-700 transition-all">
                    Order via WhatsApp
                </button>
            </div>

            {/* Stock Grid */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
                <table className="w-full text-left">
                    <thead>
                        <tr className="bg-gray-50/50 border-b border-gray-100 text-gray-400 text-xs font-black uppercase tracking-widest">
                            <th className="px-8 py-5">Article</th>
                            <th className="px-8 py-5">Category</th>
                            <th className="px-8 py-5 text-center">Stock Level</th>
                            <th className="px-8 py-5 text-right">Unit Price</th>
                            <th className="px-8 py-5 text-center">Status</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {stockItems.map((item) => {
                            const isLow = item.stock <= item.min;
                            return (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors group">
                                    <td className="px-8 py-6">
                                        <p className="font-bold text-gray-950 text-base">{item.name}</p>
                                        <p className="text-xs text-gray-400 font-medium uppercase tracking-tight">ID: SKU-00{item.id}</p>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-xs font-black uppercase tracking-widest text-gray-400">{item.category}</span>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <div className="flex flex-col items-center gap-2">
                                            <span className={`text-base font-black ${isLow ? 'text-red-600' : 'text-gray-950'}`}>{item.stock} {item.unit}</span>
                                            <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                                                <div
                                                    className={`h-full ${isLow ? 'bg-red-500' : 'bg-green-500'}`}
                                                    style={{ width: `${Math.min((item.stock / (item.min * 2)) * 100, 100)}%` }}
                                                />
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-right font-black text-gray-950 text-base">{item.price}</td>
                                    <td className="px-8 py-6 text-center">
                                        {isLow ? (
                                            <span className="px-3 py-1 bg-red-50 text-red-600 text-[10px] font-black uppercase rounded-full border border-red-100 italic">Critical</span>
                                        ) : (
                                            <span className="px-3 py-1 bg-green-50 text-green-600 text-[10px] font-black uppercase rounded-full border border-green-100 italic">Optimal</span>
                                        )}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default StockPage;
