'use client';

import React from 'react';

const Booking = () => {
    return (
        <section id="booking" className="py-32 relative overflow-hidden bg-[#FAF9F6]">
            {/* Soft Ambient Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-[#C5A06B]/5 blur-[120px] rounded-full -z-10" />

            <div className="section px-6">
                <div className="max-w-4xl mx-auto bg-white border border-black/5 p-8 md:p-20 rounded-[60px] shadow-2xl shadow-[#C5A06B]/5 relative overflow-hidden group">
                    {/* Minimal Decorative Corner */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A06B]/5 -mr-16 -mt-16 rounded-full group-hover:scale-150 transition-transform duration-700" />

                    <div className="text-center mb-16 relative z-10">
                        <span className="text-[#C5A06B] text-xs font-bold uppercase tracking-[8px] mb-6 block">Reservation</span>
                        <h2 className="text-4xl md:text-6xl font-heading mb-8 text-[#2D2D2D]">Your <span className="italic font-serif text-[#C5A06B]">Bespoke</span> Session</h2>
                        <p className="text-[#6B6B6B] max-w-xl mx-auto font-light leading-relaxed">
                            Join the elite circle of Glamour Style. Please share your preferences below to secure your moment of transformation.
                        </p>
                    </div>

                    <form className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-10">
                        {/* Stylist Selection */}
                        <div className="md:col-span-2 space-y-6 p-8 bg-[#FAF9F6] border border-black/5 rounded-[40px]">
                            <label className="text-[10px] font-bold uppercase tracking-[4px] text-[#C5A06B] flex items-center gap-2">
                                👑 Preferred Artistry Expert
                            </label>
                            <div className="flex flex-wrap gap-3">
                                {['Nonye', 'Mareme', 'Surat', 'Iyabo', 'Nene', 'Chika', 'Other'].map((stylist) => (
                                    <label key={stylist} className="relative group cursor-pointer">
                                        <input type="radio" name="stylist" className="peer sr-only" value={stylist} />
                                        <div className="px-6 py-3 bg-white border border-black/5 rounded-full peer-checked:bg-[#2D2D2D] peer-checked:text-white peer-checked:border-[#2D2D2D] hover:border-[#C5A06B] transition-all text-xs font-bold tracking-widest uppercase">
                                            {stylist}
                                        </div>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-bold uppercase tracking-[3px] text-[#A8A29E] ml-4">Full Name</label>
                            <input
                                type="text"
                                placeholder="E.g. Zainab Adams"
                                className="w-full bg-[#FAF9F6] border border-black/5 rounded-3xl py-5 px-8 text-[#2D2D2D] placeholder:text-[#A8A29E]/50 focus:border-[#C5A06B] focus:bg-white outline-none transition-all"
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-bold uppercase tracking-[3px] text-[#A8A29E] ml-4">Phone / WhatsApp</label>
                            <input
                                type="tel"
                                placeholder="+44 7..."
                                className="w-full bg-[#FAF9F6] border border-black/5 rounded-3xl py-5 px-8 text-[#2D2D2D] placeholder:text-[#A8A29E]/50 focus:border-[#C5A06B] focus:bg-white outline-none transition-all"
                            />
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-bold uppercase tracking-[3px] text-[#A8A29E] ml-4">Desired Service</label>
                            <div className="relative">
                                <select className="w-full bg-[#FAF9F6] border border-black/5 rounded-3xl py-5 px-8 text-[#2D2D2D] focus:border-[#C5A06B] focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                                    <option>Bespoke Box Braids</option>
                                    <option>Signature Silk Press</option>
                                    <option>Expert Coloration</option>
                                    <option>Bridal / Event Updo</option>
                                    <option>Custom Weave Install</option>
                                </select>
                                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-[#C5A06B]">▼</div>
                            </div>
                        </div>

                        <div className="space-y-3">
                            <label className="text-[10px] font-bold uppercase tracking-[3px] text-[#A8A29E] ml-4">Preferred Date</label>
                            <input
                                type="date"
                                className="w-full bg-[#FAF9F6] border border-black/5 rounded-3xl py-5 px-8 text-[#2D2D2D] focus:border-[#C5A06B] focus:bg-white outline-none transition-all cursor-pointer"
                            />
                        </div>

                        {/* Group Booking Toggle */}
                        <div className="md:col-span-2">
                            <label className="flex items-center gap-6 cursor-pointer p-8 bg-[#C5A06B]/5 border border-[#C5A06B]/10 rounded-[40px] hover:bg-[#C5A06B]/10 transition-all group/toggle">
                                <input type="checkbox" className="w-6 h-6 rounded-lg bg-white border-black/5 text-[#C5A06B] focus:ring-0 cursor-pointer" />
                                <div className="flex-1">
                                    <h4 className="text-[#2D2D2D] font-bold text-sm tracking-widest uppercase">🤝 Group Excursions (2-3 People)</h4>
                                    <p className="text-[#C5A06B] text-xs font-medium">Coming together? <span className="font-bold underline italic">20% AUTOMATIC DISCOUNT APPLIED.</span></p>
                                </div>
                            </label>
                        </div>

                        <div className="md:col-span-2 space-y-3">
                            <label className="text-[10px] font-bold uppercase tracking-[3px] text-[#A8A29E] ml-4">Artistic Notes</label>
                            <textarea
                                rows={4}
                                placeholder="Any specific hair history or goals we should know?"
                                className="w-full bg-[#FAF9F6] border border-black/5 rounded-[40px] py-5 px-8 text-[#2D2D2D] placeholder:text-[#A8A29E]/50 focus:border-[#C5A06B] focus:bg-white outline-none transition-all resize-none"
                            ></textarea>
                        </div>

                        <div className="md:col-span-2 mt-8 text-center">
                            <button className="w-full md:w-auto px-20 py-6 bg-[#2D2D2D] text-white font-bold text-xs uppercase tracking-[5px] rounded-full hover:bg-[#C5A06B] transition-all duration-500 shadow-2xl shadow-black/10 active:scale-95">
                                Secure Your Moment
                            </button>
                            <p className="mt-6 text-[10px] uppercase tracking-widest text-[#A8A29E] font-medium">
                                A small deposit may be required to confirm your slot.
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Booking;
