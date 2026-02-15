'use client';

import React from 'react';

const homeServices = [
    {
        title: 'Tresses Box de Luxe',
        description: 'Un savoir-faire impeccable et un style protecteur utilisant des extensions premium. Longueur et épaisseur sur mesure.',
        price: 'À partir de £180',
        icon: '✨'
    },
    {
        title: 'Silk Press & Soin',
        description: 'L\'hydratation ultime et le lissage thermique pour une brillance naturelle et rebondissante sans dommages chimiques.',
        price: 'À partir de £95',
        icon: '💎'
    },
    {
        title: 'Coloration Expert',
        description: 'Coloration créative sur mesure qui respecte la structure délicate des cheveux texturés.',
        price: 'À partir de £120',
        icon: '🎨'
    },
    {
        title: 'Mariage & Événements',
        description: 'Service de coiffure exclusif pour vos moments les plus précieux. Séances d\'essai incluses.',
        price: 'Devis Personnalisé',
        icon: '👑'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 bg-[#0A0A0A] relative overflow-hidden">
            <div className="section">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20 px-4">
                    <div className="max-w-2xl">
                        <span className="text-[#D4AF37] font-black text-xs uppercase tracking-[6px] mb-4 block">Notre Expertise</span>
                        <h2 className="text-4xl md:text-6xl font-heading mb-6 leading-tight">Services de Coiffage <br /> <span className="gradient-text italic">d'Élite</span></h2>
                    </div>
                    <p className="text-white text-xl max-w-sm mb-4 font-light">
                        Chaque service est un rituel unique conçu pour sublimer votre beauté naturelle tout en garantissant la santé de vos cheveux.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {homeServices.map((service, index) => (
                        <div
                            key={service.title}
                            className="group p-10 bg-white/5 border border-white/5 rounded-[40px] hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-500 hover:-translate-y-2 relative overflow-hidden"
                        >
                            <div className="text-4xl mb-8 group-hover:scale-110 transition-transform inline-block opacity-80 group-hover:opacity-100">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-heading font-bold mb-4 text-white group-hover:text-[#D4AF37] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-1">
                                {service.description}
                            </p>
                            <div className="pt-6 border-t border-white/5">
                                <span className="text-white font-black text-xs uppercase tracking-widest">{service.price}</span>
                            </div>

                            {/* Decorative circle */}
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-[#D4AF37]/5 rounded-full blur-2xl group-hover:bg-[#D4AF37]/10 transition-all" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
