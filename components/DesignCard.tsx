// components/DesignCard.tsx

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Design = {
  id: number;
  coverImage: string;
  title: string;
  category: string;
};

type DesignCardProps = {
  design: Design;
};

export default function DesignCard({ design }: DesignCardProps) {
  return (
    <Link href={`/designs/${design.id}`} passHref className="block w-full">
      <div className="group relative overflow-hidden rounded-xl shadow-lg transition-shadow duration-300 hover:shadow-2xl aspect-[2/1]">
        {/* Background Image */}
        <Image
          src={design.coverImage}
          alt={design.title}
          fill // Use 'fill' for responsive background images
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        {/* Gradient Overlay for Readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Content that slides up from the bottom */}
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white transform transition-transform duration-500 ease-in-out translate-y-[calc(100%-80px)] group-hover:translate-y-0">
          <h3 className="text-2xl font-bold">{design.title}</h3>
          <div className="pt-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <p className="text-sm font-medium bg-indigo-500/80 px-3 py-1 rounded-full inline-block">
              {design.category}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}