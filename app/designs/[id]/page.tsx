"use client";
import { designs } from '@/db/qymDesigns';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import ProcessSpiral from '@/components/ProcessSpiral'; // Import the new component
import Footer from '@/components/Footer';

type PageProps = {
    params: {
        id: string;
    };
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
            <div className="bg-white text-gray-800 lg:pt-24 md:pt-24 sm:pt-28 xs:pt-28 pt-24 mx-auto max-w-screen-xl">
                <div className="container mx-auto px-4 py-12">

                    {/* Header Section */}
                    <div className="max-w-6xl mx-auto mb-8">
                        <Link href="/designs" className="text-indigo-600 hover:text-indigo-800 transition-colors duration-300 inline-flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            Back to Designs
                        </Link>
                        <div className="text-center mb-2">
                            <h1 className="text-4xl md:text-5xl font-bold mb-3">{design.title}</h1>
                            <p className="text-lg text-gray-600">{design.description}</p>
                        </div>
                    </div>

                    {/* Design Process Section */}
                    <div className="max-w-6xl mx-auto">
                        {design.process?.map((step, index) => (
                            <div key={index}>
                                <div
                                    className={`
                    flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16
                    ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} // This alternates the layout
                  `}
                                >
                                    {/* Image Container */}
                                    <div className="w-full md:w-1/2">
                                        <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                                            <Image
                                                src={step.imageUrl}
                                                alt={step.title}
                                                width={800}
                                                height={600}
                                                className="w-full h-auto object-contain"
                                            />
                                        </div>
                                    </div>

                                    {/* Text Container */}
                                    <div className="w-full md:w-1/2 text-center md:text-left">
                                        <h2 className="text-3xl font-bold text-gray-900 mb-3">{step.title}</h2>
                                        <p className="text-gray-700 leading-relaxed text-lg">{step.description}</p>
                                    </div>
                                </div>

                                {/* Render spiral connector between steps, but not after the last one */}
                                {index < design.process.length - 1 && <ProcessSpiral />}
                            </div>
                        ))}
                    </div>

                    {/* Navigation */}
                    <div className="mt-20 flex justify-between items-center max-w-6xl mx-auto">
                        <div>
                            {prevDesign && (
                                <Link href={`/design/${prevDesign.id}`} className="py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300 inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                    Previous
                                </Link>
                            )}
                        </div>
                        <div>
                            {nextDesign && (
                                <Link href={`/design/${nextDesign.id}`} className="py-2 px-4 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors duration-300 inline-flex items-center">
                                    Next
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}