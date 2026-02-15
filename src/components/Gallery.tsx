'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const galleryItems = [
    { id: 1, src: '/images/gallery-1.png', title: 'Coloration Haute Couture', category: 'L\'Art', span: 'col-span-1 row-span-2' },
    { id: 2, src: '/images/gallery-2.png', title: 'Rituel de Boucles', category: 'Mouvement', span: 'col-span-2 row-span-1' },
    { id: 3, src: '/images/gallery-3.png', title: 'Soin Signature', category: 'Soin', span: 'col-span-1 row-span-1' },
    { id: 4, src: '/images/gallery-4.png', title: 'L\'expérience Salon', category: 'Ambiance', span: 'col-span-1 row-span-1' },
    { id: 5, src: '/images/gallery-5.png', title: 'Détail Artistique', category: 'Style', span: 'col-span-2 row-span-2' },
];

const Gallery = () => {
    return (
        <section id="portfolio" className="py-40 bg-background overflow-hidden px-8">
            <div className="section mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
                <div className="max-w-2xl">
                    <span className="text-primary font-bold text-xs uppercase tracking-[10px] mb-6 block font-body">Exposition Visuelle</span>
                    <h2 className="text-5xl md:text-8xl font-heading font-light text-secondary leading-tight">
                        La Galerie <br />
                        <span className="italic font-serif text-accent">Michèle Ka</span>
                    </h2>
                </div>
                <p className="text-muted-foreground max-w-sm font-light italic leading-relaxed mb-4">
                    Une immersion dans notre univers où chaque chaque création est une pièce unique exposée au regard du monde.
                </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-[1600px] mx-auto auto-rows-[300px]">
                {galleryItems.map((item) => (
                    <div
                        key={item.id}
                        className={`group relative overflow-hidden rounded-[80px] cursor-pointer shadow-premium ${item.span}`}
                    >
                        <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 backdrop-blur-sm flex flex-col items-center justify-center text-center p-10">
                            <span className="text-white text-[10px] uppercase tracking-[6px] mb-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-700">{item.category}</span>
                            <h4 className="text-white font-heading text-3xl italic translate-y-4 group-hover:translate-y-0 transition-transform duration-700 delay-100">{item.title}</h4>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-32 text-center">
                <Link
                    href="/lookbook"
                    className="group inline-flex items-center gap-6 px-16 py-6 bg-secondary text-white font-bold text-xs uppercase tracking-[6px] rounded-full hover:bg-primary transition-all duration-700 shadow-2xl"
                >
                    <span>Explorer le Lookbook Full</span>
                    <span className="text-xl group-hover:translate-x-2 transition-transform">→</span>
                </Link>
            </div>
        </section>
    );
};

export default Gallery;
