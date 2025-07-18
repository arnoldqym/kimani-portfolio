// designs/[id]/page.tsx

"use client";
import { designs } from '@/db/qymDesigns';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Corrected PageProps type definition
type PageProps = {
    params: {
        id: string;
    };
    searchParams?: { [key: string]: string | string[] | undefined };
};

export default function DesignPage({ params }: PageProps) {
    const designId = parseInt(params.id, 10);
    const design = designs.find((d) => d.id === designId);
    const currentIndex = designs.findIndex((d) => d.id === designId);

    if (!design) {
        notFound();
    }

    const prevDesign = currentIndex > 0 ? designs[currentIndex - 1] : null;
    const nextDesign = currentIndex < designs.length - 1 ? designs[currentIndex + 1] : null;

    return (
        <>
            <Navbar />
            <div className="bg-white text-gray-800 pt-32">
                <div className="container mx-auto px-4 py-16">

                    {/* Header Section */}
                    <header className="max-w-4xl mx-auto text-center mb-16">
                        <Link href="/designs" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 inline-flex items-center mb-6">
                            <ArrowLeftIcon className="h-5 w-5 mr-2" />
                            Back to All Designs
                        </Link>
                        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 mb-4">{design.title}</h1>
                        <p className="text-xl text-gray-600 leading-relaxed">{design.description}</p>
                    </header>

                    {/* Design Process Section */}
                    <div className="max-w-5xl mx-auto space-y-24">
                        {design.process?.map((step, index) => (
                            <section key={index} className={`flex flex-col md:flex-row items-center gap-12 ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                                {/* Image Container */}
                                <div className="w-full md:w-1/2">
                                    <div className="rounded-xl shadow-2xl overflow-hidden">
                                        <Image
                                            src={step.imageUrl}
                                            alt={step.title}
                                            width={800}
                                            height={600}
                                            className="w-full h-auto object-cover"
                                        />
                                    </div>
                                </div>
                                {/* Text Container */}
                                <div className="w-full md:w-1/2 relative">
                                    <span className="absolute -top-8 -left-8 text-8xl font-black text-gray-100 z-0">0{index + 1}</span>
                                    <div className="relative z-10">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-4">{step.title}</h2>
                                        <p className="text-lg text-gray-700 leading-relaxed">{step.description}</p>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* New Engaging Navigation */}
                    <nav className="mt-28 pt-16 border-t border-gray-200 max-w-6xl mx-auto">
                        <h3 className="text-3xl font-bold text-center mb-8">Explore More</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {prevDesign ? (
                                <Link href={`/designs/${prevDesign.id}`} className="group relative block text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                                    <Image src={prevDesign.coverImage} alt={prevDesign.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/50" />
                                    <div className="relative h-full flex flex-col justify-between p-8">
                                        <div className="flex items-center text-lg font-semibold">
                                            <ArrowLeftIcon className="h-6 w-6 mr-3" />
                                            Previous Project
                                        </div>
                                        <h4 className="text-4xl font-bold">{prevDesign.title}</h4>
                                    </div>
                                </Link>
                            ) : <div className="hidden md:block"></div>} {/* Placeholder to keep alignment */}
                            
                            {nextDesign && (
                                <Link href={`/designs/${nextDesign.id}`} className="group relative block text-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 text-right">
                                     <Image src={nextDesign.coverImage} alt={nextDesign.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/50" />
                                    <div className="relative h-full flex flex-col justify-between items-end p-8">
                                        <div className="flex items-center text-lg font-semibold">
                                            Next Project
                                            <ArrowRightIcon className="h-6 w-6 ml-3" />
                                        </div>
                                        <h4 className="text-4xl font-bold">{nextDesign.title}</h4>
                                    </div>
                                </Link>
                            )}
                        </div>
                    </nav>

                </div>
            </div>
            <Footer />
        </>
    );
}