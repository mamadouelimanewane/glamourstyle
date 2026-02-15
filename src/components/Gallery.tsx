'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const galleryItems = [
    { id: 1, src: '/images/gallery/gallery-1.jpg', title: 'Signature Cut', category: 'Styling' },
    { id: 2, src: '/images/gallery/gallery-2.jpg', title: 'Cornrow Elegance', category: 'Braids' },
    { id: 3, src: '/images/gallery/gallery-3.jpg', title: 'African Queen', category: 'Braids' },
    { id: 4, src: '/images/gallery/gallery-4.jpg', title: 'Natural Glow', category: 'Natural' },
    { id: 5, src: '/images/gallery/gallery-5.jpg', title: 'Twist Artistry', category: 'Styling' },
];

const Gallery = () => {
    return (
        <section id="portfolio" className="section py-32 bg-white overflow-hidden">
            <div className="flex flex-col lg:flex-row justify-between items-end mb-20 px-6">
                <div>
                    <span className="text-[#C5A06B] font-bold text-xs uppercase tracking-[6px] mb-4 block">The Lookbook</span>
                    <h2 className="text-4xl md:text-6xl font-heading text-[#2D2D2D] leading-tight">Gallery of <span className="italic font-serif text-[#C5A06B]">Masterpieces</span></h2>
                </div>
                <div className="hidden lg:block">
                    <p className="text-[#6B6B6B] max-w-sm text-right font-light leading-relaxed">
                        "Every hairstyle is a unique ritual of beauty, meticulously crafted to reveal your inner regal essence."
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-6">
                {galleryItems.map((item) => (
                    <div key={item.id} className="group relative aspect-[3/4] overflow-hidden rounded-[40px] cursor-pointer shadow-lg shadow-black/5">
                        <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-1000 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-[#C5A06B]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="absolute inset-x-6 bottom-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center text-center p-6 bg-white/90 backdrop-blur-md rounded-3xl">
                            <span className="text-[#C5A06B] text-[10px] uppercase tracking-[4px] font-bold mb-2">{item.category}</span>
                            <h3 className="text-lg font-heading font-bold text-[#2D2D2D]">{item.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-20 flex justify-center">
                <Link
                    href="/lookbook"
                    className="px-12 py-5 bg-[#FAF9F6] border border-black/5 text-[#2D2D2D] font-bold text-xs uppercase tracking-[4px] rounded-full hover:bg-[#2D2D2D] hover:text-white transition-all duration-500"
                >
                    View Full Collection
                </Link>
            </div>
        </section>
    );
};

export default Gallery;
