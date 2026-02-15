'use client';

import React from 'react';

const testimonials = [
    {
        id: '1',
        name: 'Zainab A.',
        rating: 5,
        comment: 'Absolument magnifique ! Fatou a une main experte pour des tresses sans douleur. Le salon est une véritable perle.',
        service: 'Tresses de Luxe',
        date: '22-01-2026',
    },
    {
        id: '2',
        name: 'Aminata K.',
        rating: 5,
        comment: 'Enfin un salon de luxe qui comprend parfaitement nos textures. Mon Silk Press est impeccable et mes cheveux sont incroyables.',
        service: 'Premium Silk Press',
        date: '18-01-2026',
    },
    {
        id: '3',
        name: 'Binta D.',
        rating: 5,
        comment: 'Expérience incroyable pour mon mariage. L\'interprétation moderne de la coiffure traditionnelle a été le point fort de la soirée. Merci !',
        service: 'Coiffure de Mariée',
        date: '15-01-2026',
    },
    {
        id: '4',
        name: 'Yasmine B.',
        rating: 5,
        comment: 'Les soins naturels ont sauvé mes boucles. Le massage du cuir chevelu était hors du commun. Je reviendrai chaque mois.',
        service: 'Soins Premium',
        date: '05-01-2026',
    },
];

const Testimonials = () => {
    return (
        <section id="avis" className="section bg-black relative overflow-hidden py-32">
            {/* Decorative Elements */}
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#D4AF37]/10 rounded-full blur-3xl opacity-50" />

            <div className="text-center mb-16 animate-fadeInUp">
                <span className="text-[#D4AF37] text-sm uppercase tracking-widest font-bold tracking-[4px]">Témoignages</span>
                <h2 className="mt-4 mb-4 font-heading text-white text-4xl md:text-6xl">L'Excellence <span className="gradient-text">Appréciée</span></h2>
                <p className="text-gray-400 font-light text-xl">Découvrez les avis de nos clientes sur leur expérience Style Glamour</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
                {testimonials.map((testi) => (
                    <div key={testi.id} className="bg-white/5 p-10 rounded-[40px] relative border border-white/5 hover:border-[#D4AF37]/30 transition-all duration-500 group">
                        <div className="absolute top-6 right-10 text-6xl text-[#D4AF37]/10 font-serif group-hover:text-[#D4AF37]/20 transition-colors">“</div>
                        <div className="flex items-center mb-6">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <span key={star} className="text-[#D4AF37] text-lg">★</span>
                            ))}
                        </div>
                        <p className="text-white italic mb-10 relative z-10 text-xl font-light leading-relaxed">
                            "{testi.comment}"
                        </p>
                        <div className="flex justify-between items-center border-t border-white/5 pt-8">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#F4E4C1] flex items-center justify-center font-bold text-black uppercase font-heading text-xl shadow-lg">
                                    {testi.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-white font-heading uppercase tracking-widest text-xs">{testi.name}</h4>
                                    <p className="text-[10px] text-[#D4AF37] font-bold uppercase tracking-tighter">{testi.service}</p>
                                </div>
                            </div>
                            <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{testi.date}</span>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 text-center">
                <div className="flex flex-col items-center">
                    <p className="text-[10px] font-bold text-gray-500 mb-8 uppercase tracking-[4px]">Recommandé sur</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700 items-baseline">
                        <span className="font-heading font-black text-3xl text-white">Google</span>
                        <span className="font-heading font-black text-3xl text-white">Trustpilot</span>
                        <span className="font-heading font-black text-3xl text-white">Yelp</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
