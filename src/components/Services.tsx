'use client';

import React from 'react';

const homeServices = [
    {
        title: 'Luxury Box Braids',
        description: 'Impeccable craftsmanship and protective styling using premium extensions. Tailored length and thickness.',
        price: 'From £180',
        icon: '✨'
    },
    {
        title: 'Silk Press & Treatment',
        description: 'The ultimate hydration and thermal smoothing for a bouncing, natural shine without chemical damage.',
        price: 'From £95',
        icon: '💎'
    },
    {
        title: 'Expert Coloration',
        description: 'Custom creative coloring that respects the delicate structure of textured hair.',
        price: 'From £120',
        icon: '🎨'
    },
    {
        title: 'Bridal & Special Events',
        description: 'Exclusive hair styling service for your most precious moments. Trial sessions included.',
        price: 'Custom Quote',
        icon: '👑'
    }
];

const Services = () => {
    return (
        <section id="services" className="py-32 bg-white relative overflow-hidden">
            <div className="section">
                <div className="flex flex-col lg:flex-row justify-between items-end gap-10 mb-20 px-4">
                    <div className="max-w-2xl">
                        <span className="text-[#C5A06B] font-bold text-xs uppercase tracking-[6px] mb-4 block">Our Expertise</span>
                        <h2 className="text-4xl md:text-6xl font-heading mb-6 leading-tight text-[#2D2D2D]">Artistry in <br /> <span className="italic font-serif text-[#C5A06B]">Haircare</span></h2>
                    </div>
                    <p className="text-[#6B6B6B] max-w-sm mb-4 font-light leading-relaxed">
                        Every session is a bespoke ritual designed to celebrate your heritage while ensuring the pinnacle of hair health.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {homeServices.map((service, index) => (
                        <div
                            key={service.title}
                            className="group p-10 bg-[#FAF9F6] border border-black/5 rounded-[40px] hover:bg-white hover:border-[#C5A06B]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#C5A06B]/10 relative overflow-hidden"
                        >
                            <div className="text-4xl mb-8 group-hover:scale-110 transition-transform inline-block grayscale group-hover:grayscale-0">
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-heading font-light mb-4 text-[#2D2D2D] group-hover:text-[#C5A06B] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-[#6B6B6B] text-sm leading-relaxed mb-8 font-light">
                                {service.description}
                            </p>
                            <div className="pt-6 border-t border-black/5">
                                <span className="text-[#2D2D2D] font-bold text-xs uppercase tracking-widest">{service.price}</span>
                            </div>

                            {/* Minimal Decorative line */}
                            <div className="absolute top-0 left-10 right-10 h-[2px] bg-[#C5A06B]/0 group-hover:bg-[#C5A06B]/30 transition-all duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
