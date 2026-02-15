'use client';

import React from 'react';

const testimonials = [
    {
        name: "Fatou Diome",
        role: "Écrivaine",
        content: "Plus qu'une coiffure, c'est une véritable sculpture capillaire. L'ambiance au Sea Plaza est incomparable, un mélange de sérénité et d'audace artistique.",
        rating: 5,
        tag: "Incontournable"
    },
    {
        name: "Youssou N'Dour",
        role: "Artiste",
        content: "Michèle KA capture l'essence de la modernité dakaroise. Le service est impeccable, et le souci du détail rappelle les plus grands ateliers parisiens.",
        rating: 5,
        tag: "Excellence"
    },
    {
        name: "Awa Marie Coll Seck",
        role: "Ministre",
        content: "Un havre de paix où l'on se sent écoutée et sublimée. Les soins spécifiques sont révolutionnaires pour nos textures de cheveux.",
        rating: 5,
        tag: "Bien-être"
    }
];

const Testimonials = () => {
    return (
        <section className="py-52 bg-background relative overflow-hidden">
            <div className="absolute top-1/2 left-0 w-full h-px bg-primary/10" />

            <div className="section px-10">
                <div className="text-center mb-28">
                    <span className="text-primary font-bold text-xs uppercase tracking-[12px] mb-8 block">Le Livre d'Or</span>
                    <h2 className="text-5xl md:text-8xl font-heading font-light text-secondary">
                        Paroles de <br />
                        <span className="italic font-serif text-accent">Passionnés</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-[1600px] mx-auto">
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className="bg-white p-14 rounded-[80px] border border-secondary/5 shadow-2xl hover:-translate-y-4 transition-all duration-700 relative group"
                        >
                            <div className="text-accent text-6xl font-serif absolute -top-8 left-14 opacity-20 transition-opacity group-hover:opacity-100">“</div>
                            <div className="relative z-10">
                                <span className="inline-block px-4 py-2 bg-primary/5 text-primary text-[9px] font-bold uppercase tracking-[4px] rounded-full mb-10">
                                    {t.tag}
                                </span>
                                <p className="text-secondary/80 text-xl font-light italic leading-relaxed mb-12">
                                    {t.content}
                                </p>
                                <div className="flex items-center gap-6 border-t border-secondary/5 pt-10">
                                    <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-white font-black text-sm shadow-xl">
                                        {t.name[0]}
                                    </div>
                                    <div className="flex flex-col">
                                        <span className="text-secondary font-bold text-lg leading-none">{t.name}</span>
                                        <span className="text-accent text-[10px] uppercase tracking-[3px] mt-2 font-medium">{t.role}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
