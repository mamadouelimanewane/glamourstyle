'use client';

import React from 'react';

const Booking = () => {
    return (
        <section id="booking" className="py-40 relative overflow-hidden bg-background">
            {/* Artistic Elements */}
            <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-accent/5 blur-[120px] rounded-full -z-10" />

            <div className="section">
                <div className="max-w-5xl mx-auto bg-white border border-secondary/5 p-12 md:p-24 rounded-[80px] shadow-[0_40px_100px_-20px_rgba(26,15,13,0.1)] relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-accent to-primary" />

                    <div className="text-center mb-16">
                        <span className="text-accent font-bold text-xs uppercase tracking-[6px] mb-6 block">Réservation Privée</span>
                        <h2 className="text-4xl md:text-7xl font-heading font-light text-secondary leading-tight">
                            Réservez votre <br />
                            <span className="italic font-serif text-primary">Moment Ka</span>
                        </h2>
                    </div>

                    <form className="space-y-10 relative z-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <label className="text-[10px] font-bold uppercase tracking-[3px] text-primary ml-4">Votre Signature</label>
                                <div className="relative">
                                    <select className="w-full bg-muted border border-secondary/5 rounded-3xl py-6 px-10 text-secondary focus:border-accent focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                                        <option>Soin Spécifique</option>
                                        <option>Coloration d'Art</option>
                                        <option>Sculpture & Coupe</option>
                                        <option>Rituel de Boucles</option>
                                    </select>
                                    <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-primary">▼</div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-bold uppercase tracking-[3px] text-primary ml-4">Votre Artiste</label>
                                <div className="relative">
                                    <select className="w-full bg-muted border border-secondary/5 rounded-3xl py-6 px-10 text-secondary focus:border-accent focus:bg-white outline-none transition-all appearance-none cursor-pointer">
                                        <option>Premier Disponible</option>
                                        <option>Direction Artistique</option>
                                        <option>Maître Coloriste</option>
                                    </select>
                                    <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none text-primary">▼</div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="space-y-4">
                                <label className="text-[10px] font-bold uppercase tracking-[3px] text-primary ml-4">Prénom & Nom</label>
                                <input
                                    type="text"
                                    placeholder="Ex. Aminata Gueye"
                                    className="w-full bg-muted border border-secondary/5 rounded-3xl py-6 px-10 text-secondary placeholder:text-muted-foreground/40 focus:border-accent focus:bg-white outline-none transition-all"
                                />
                            </div>
                            <div className="space-y-4">
                                <label className="text-[10px] font-bold uppercase tracking-[3px] text-primary ml-4">Date Souhaitée</label>
                                <input
                                    type="date"
                                    className="w-full bg-muted border border-secondary/5 rounded-3xl py-6 px-10 text-secondary focus:border-accent focus:bg-white outline-none transition-all"
                                />
                            </div>
                        </div>

                        <div className="pt-10 flex flex-col items-center gap-8">
                            <button className="w-full md:w-auto px-24 py-7 bg-secondary text-white font-bold text-xs uppercase tracking-[5px] rounded-full hover:bg-primary transition-all duration-700 shadow-2xl shadow-secondary/20 active:scale-95">
                                Confirmer la Séance
                            </button>
                            <p className="text-[10px] text-muted-foreground uppercase tracking-[3px] font-medium">
                                ✨ Un acompte peut être requis pour les soins haute couture
                            </p>
                        </div>
                    </form>

                    {/* Decorative Art Shadow */}
                    <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/20 transition-all duration-1000" />
                </div>
            </div>
        </section>
    );
};

export default Booking;
