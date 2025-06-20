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
    <Link href={`/designs/${design.id}`} passHref className=''>
      <div className="rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out w-full h-auto sm:h-48 md:h-64 lg:h-80">
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