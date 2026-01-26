'use client';

import React, { useState } from 'react';

const CalendarPage = () => {
    const days = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam', 'Dim'];
    const timeSlots = Array.from({ length: 11 }, (_, i) => `${i + 9}:00`);

    const appointments = [
        { id: 1, client: 'Zainab A.', service: 'Braids', time: '10:00', duration: 2, day: 'Mer', color: 'bg-blue-100 border-blue-200 text-blue-700' },
        { id: 2, client: 'Aminata K.', service: 'Silk Press', time: '14:00', duration: 1.5, day: 'Jeu', color: 'bg-amber-100 border-amber-200 text-amber-700' },
        { id: 3, client: 'Binta D.', service: 'Color', time: '09:00', duration: 3, day: 'Ven', color: 'bg-emerald-100 border-emerald-200 text-emerald-700' },
        { id: 4, client: 'Yasmine B.', service: 'Care', time: '11:00', duration: 1, day: 'Lun', color: 'bg-rose-100 border-rose-200 text-rose-700' },
    ];

    return (
        <div className="space-y-10 animate-fadeIn min-h-screen pb-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div>
                    <h1 className="text-4xl font-heading font-bold text-gray-950">Calendrier Salon</h1>
                    <p className="text-gray-500 text-base font-medium mt-1">Vue d'ensemble de l'occupation des collaborateurs et postes.</p>
                </div>
                <div className="flex bg-gray-200/50 p-1.5 rounded-xl border border-gray-200">
                    <button className="px-5 py-2 rounded-lg text-xs font-black uppercase tracking-widest bg-white text-gray-950 shadow-sm">Hebdomadaire</button>
                    <button className="px-5 py-2 rounded-lg text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-950 transition-all">Journalier</button>
                    <button className="px-5 py-2 rounded-lg text-xs font-black uppercase tracking-widest text-gray-400 hover:text-gray-950 transition-all">Mensuel</button>
                </div>
            </div>

            {/* Calendar Grid */}
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl overflow-hidden">
                {/* Grid Header */}
                <div className="grid grid-cols-8 border-b border-gray-100 bg-gray-50/50">
                    <div className="p-5 border-r border-gray-100"></div>
                    {days.map(day => (
                        <div key={day} className="p-5 text-center border-r border-gray-100 last:border-r-0">
                            <span className="text-sm font-black uppercase tracking-widest text-gray-400">{day}</span>
                        </div>
                    ))}
                </div>

                {/* Grid Body */}
                <div className="relative">
                    {timeSlots.map((time, idx) => (
                        <div key={time} className="grid grid-cols-8 border-b border-gray-50 last:border-b-0 h-24">
                            <div className="p-4 border-r border-gray-100 flex items-start justify-center">
                                <span className="text-xs font-bold text-gray-400">{time}</span>
                            </div>
                            {days.map(day => {
                                const appointment = appointments.find(a => a.day === day && a.time === time);
                                return (
                                    <div key={`${day}-${time}`} className="border-r border-gray-50 last:border-r-0 relative p-1">
                                        {appointment && (
                                            <div
                                                className={`absolute inset-x-1 top-1 rounded-xl p-3 border shadow-sm z-10 ${appointment.color}`}
                                                style={{ height: `${appointment.duration * 96 - 8}px` }}
                                            >
                                                <p className="text-xs font-black uppercase tracking-tight truncate">{appointment.client}</p>
                                                <p className="text-[10px] font-bold opacity-80 truncate">{appointment.service}</p>
                                                <p className="text-[9px] font-black mt-2 bg-white/40 w-fit px-1.5 py-0.5 rounded uppercase">{appointment.time}</p>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
            </div>

            {/* Legend & Staff Selection */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
                <div className="flex items-center gap-4">
                    <span className="text-xs font-black uppercase tracking-widest text-gray-400">Postes / Staff :</span>
                    <div className="flex -space-x-3">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-10 h-10 rounded-full border-4 border-white bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-600 transition-transform hover:scale-110 cursor-pointer">
                                AD
                            </div>
                        ))}
                        <div className="w-10 h-10 rounded-full border-4 border-white bg-gray-950 text-white flex items-center justify-center text-xs font-bold cursor-pointer">+</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CalendarPage;
