"use client";
import React from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


const Footer: React.FC = () => {
    const pathname = usePathname();
    const isHomepage = pathname === '/';
    const resumeHref = isHomepage ? '#resume' : '/#resume';
    const skillsHref = isHomepage ? '#skills' : '/#skills';

    return (
        <footer className="bg-gray-900 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Arnold Kimani</h3>
                        <p className="mt-4 text-sm text-gray-400">
                            A creative designer and developer passionate about building beautiful, functional user experiences.
                        </p>
                    </div>

                    {/* Quick Links Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Quick Links</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><Link href={resumeHref} className="text-gray-400 hover:text-white transition-colors duration-300">About Me</Link></li>
                            <li><Link href={skillsHref} className="text-gray-400 hover:text-white transition-colors duration-300">Skills</Link></li>
                            <li><Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Social Media Section */}
                    <div>
                        <h3 className="text-lg font-semibold text-white">Connect</h3>
                        <ul className="mt-4 space-y-2 text-sm">
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">LinkedIn</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Dribbble</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">GitHub</a></li>
                        </ul>
                    </div>
                </div>
                <div className="mt-12 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
                    <p>Designed & Built by Arnold Kimani</p>
                    <p className="mt-2">&copy; {new Date().getFullYear()}. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;