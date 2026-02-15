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
        <section id="portfolio" className="section overflow-hidden">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <span className="text-[#D4AF37] text-sm uppercase tracking-widest font-semibold tracking-[4px]">The Portfolio</span>
                    <h2 className="mt-4">Our Gallery of <span className="gradient-text">Masterpieces</span></h2>
                </div>
                <div className="hidden md:block">
                    <p className="text-white text-2xl max-w-lg text-right italic font-serif leading-relaxed border-l-4 border-[#D4AF37] pl-8 font-medium">
                        "Each hairstyle is a unique work of art, designed to reveal your true essence."
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {galleryItems.map((item) => (
                    <div key={item.id} className="group relative aspect-[3/4] overflow-hidden rounded-2xl cursor-pointer">
                        <Image
                            src={item.src}
                            alt={item.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                            <span className="text-[#D4AF37] text-xs uppercase tracking-widest font-bold mb-2">{item.category}</span>
                            <h3 className="text-xl font-heading text-white">{item.title}</h3>
                            <div className="w-10 h-0.5 bg-[#D4AF37] mt-4 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        </div>

                        {/* Corner Accent */}
                        <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-[#D4AF37]/50 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                        <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-[#D4AF37]/50 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0" />
                    </div>
                ))}
            </div>

            <div className="mt-16 flex justify-center">
                <Link href="/lookbook" className="btn-secondary px-12">View Full Collection</Link>
            </div>
        </section>
    );
};

export default Gallery;
