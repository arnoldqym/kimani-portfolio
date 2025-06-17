import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Design = {
  id: number;
  coverImage: string; // Changed from imageUrl
  title: string;
  category: string;
};

type DesignCardProps = {
  design: Design;
};

export default function DesignCard({ design }: DesignCardProps) {
  return (
    <Link href={`/designs/${design.id}`} passHref>
      <div
        className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 w-full sm:w-44 md:w-48 lg:w-56 h-auto"
      >
        <Image
          src={design.coverImage} // Changed from design.imageUrl
          alt={design.title}
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out flex flex-col justify-center items-center text-white p-4 text-center">
          <h3 className="text-xl font-bold">{design.title}</h3>
          <p className="text-sm">{design.category}</p>
        </div>
      </div>
    </Link>
  );
}