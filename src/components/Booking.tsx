'use client';

import React from 'react';

const Booking = () => {
    return (
        <section id="reservation" className="py-20 relative overflow-hidden bg-black">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#D4AF37]/5 blur-[120px] rounded-full -z-10" />

            <div className="section">
                <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-3xl border border-white/10 p-8 md:p-16 rounded-[48px] shadow-2xl">
                    <div className="text-center mb-12">
                        <span className="text-[#D4AF37] text-xs font-black uppercase tracking-[8px] mb-4 block">Booking</span>
                        <h2 className="text-3xl md:text-5xl font-heading mb-6">Reserve Your <span className="gradient-text italic">Moment</span></h2>
                        <p className="text-white text-lg max-w-xl mx-auto font-light">
                            Ready for a transformation? Fill out the form below to request your luxury session at Glamour Style.
                        </p>
                    </div>

                    <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[3px] text-gray-500 ml-2">Full Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-gray-600 focus:border-[#D4AF37] outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[3px] text-gray-500 ml-2">Email</label>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white placeholder:text-gray-600 focus:border-[#D4AF37] outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[3px] text-gray-500 ml-2">Desired Service</label>
                            <select className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-gray-400 focus:border-[#D4AF37] outline-none transition-all appearance-none">
                                <option>Box Braids</option>
                                <option>Silk Press</option>
                                <option>Coloring</option>
                                <option>Bridal Hair</option>
                                <option>Deep Care</option>
                            </select>
                        </div>
                        <div className="space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[3px] text-gray-500 ml-2">Preferred Date</label>
                            <input
                                type="date"
                                className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-gray-400 focus:border-[#D4AF37] outline-none transition-all"
                            />
                        </div>
                        <div className="md:col-span-2 space-y-3">
                            <label className="text-[10px] font-black uppercase tracking-[3px] text-gray-500 ml-2">Notes or Specific Requests</label>
                            <textarea
                                rows={4}
                                placeholder="Tell us more about your hair goals..."
                                className="w-full bg-white/5 border border-white/10 rounded-3xl py-4 px-6 text-white placeholder:text-gray-600 focus:border-[#D4AF37] outline-none transition-all resize-none"
                            ></textarea>
                        </div>
                        <div className="md:col-span-2 mt-4 text-center">
                            <button className="w-full md:w-auto px-16 py-5 bg-[#D4AF37] text-black font-black text-xs uppercase tracking-[4px] rounded-full hover:bg-white transition-all duration-500 shadow-xl shadow-[#D4AF37]/20">
                                Send Request
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Booking;
