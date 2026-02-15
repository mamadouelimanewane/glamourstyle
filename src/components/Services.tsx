'use client';

import React from 'react';

const homeServices = [
    {
        title: "L'Univers de la Coloration",
        description: "Des pigments de haute couture pour révéler votre lumière unique.",
        icon: "🎨",
        color: "bg-primary/10"
    },
    {
        title: "Une Affaire de Boucles",
        description: "Célébrez le mouvement naturel de vos cheveux avec nos rituels experts.",
        icon: "🌀",
        color: "bg-accent/10"
    },
    {
        title: "Les Soins Spécifiques",
        description: "Traitements profonds et régénérants pour une santé capillaire absolue.",
        icon: "🧪",
        color: "bg-secondary/10"
    },
    {
        title: "À la Karte",
        description: "Une expérience sur mesure, sculptée selon vos envies les plus audacieuses.",
        icon: "💎",
        color: "bg-primary/5"
    }
];

const Services = () => {
    return (
        <section id="services" className="py-40 bg-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/10 to-transparent" />

            <div className="section text-center mb-20 px-8">
                <span className="text-accent font-bold text-xs uppercase tracking-[10px] mb-6 block">Le Menu des Arts</span>
                <h2 className="text-4xl md:text-7xl font-heading font-light text-secondary">
                    Nos <span className="italic font-serif text-primary">Spécialités</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-8 max-w-[1600px] mx-auto">
                {homeServices.map((service, index) => (
                    <div
                        key={service.title}
                        className="group p-12 bg-background border border-secondary/5 rounded-[60px] hover:bg-white hover:border-accent/40 transition-all duration-700 hover:shadow-[0_40px_80px_-20px_rgba(26,15,13,0.15)] relative overflow-hidden text-center"
                    >
                        <div className={`w-24 h-24 ${service.color} rounded-full flex items-center justify-center text-4xl mb-10 mx-auto group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                            {service.icon}
                        </div>
                        <h3 className="text-2xl font-heading font-medium mb-6 text-secondary uppercase tracking-tighter">{service.title}</h3>
                        <p className="text-muted-foreground font-light leading-relaxed mb-8 italic">
                            {service.description}
                        </p>
                        <div className="w-10 h-10 border border-accent/20 rounded-full flex items-center justify-center mx-auto group-hover:bg-accent group-hover:text-white transition-all duration-500">
                            →
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;
