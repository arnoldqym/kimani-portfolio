"use client"
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuOpen && !e.target.closest('.mobile-menu-container')) {
                setMenuOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [menuOpen]);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMobileMenu = (e) => {
        e.stopPropagation();
        setMenuOpen(!menuOpen);
    }

    return (
        <header className={`z-50 bg-transparent w-full mt-2.5 sm:mt-4.5 px-2 sm:px-4 flex fixed top-0 left-0 right-0 transition-all duration-300 ${
            scrolled ? 'mt-0 py-0.5 bg-black bg-opacity-80 backdrop-blur-sm' : ''
        }`}>
            {/* Navbar Container - Reduced size */}
            <div className="relative w-full max-w-4xl mx-auto">
                <div className="bg-black rounded-[40px] md:rounded-[75px] items-center w-full h-full py-1 px-3 sm:py-1.5 sm:px-4 flex transition-all overflow-hidden">
                    {/* Full-width layout */}
                    <div className="flex items-center justify-between w-full">
                        {/* Logo Section - Optimized sizing */}
                        <div className="flex items-center min-w-0">
                            <a href={'/'} className="logo-holder flex items-center">
                                <div className="logo text-white text-3xl sm:text-4xl font-bold mr-1">A</div>
                                <div className="logo-text text-white text-xs sm:text-sm md:text-base font-medium whitespace-nowrap truncate max-w-[80px] sm:max-w-[120px] md:max-w-none">
                                    Arnold Kimani
                                </div>
                            </a>
                        </div>

                        {/* Desktop Navigation Links - Centered */}
                        <div className="hidden md:flex items-center justify-center flex-1">
                            <nav className="flex justify-center space-x-3 lg:space-x-5 w-full max-w-md">
                                <a 
                                    href="#resume" 
                                    className="nav-link text-white hover:text-blue-400 transition-colors text-center w-full text-sm lg:text-base"
                                >
                                    Resume
                                </a>
                                <a 
                                    href="#skills" 
                                    className="nav-link text-white hover:text-blue-400 transition-colors text-center w-full text-sm lg:text-base"
                                >
                                    Skills
                                </a>
                                <a 
                                    href="/projects" 
                                    className="nav-link text-white hover:text-blue-400 transition-colors text-center w-full text-sm lg:text-base"
                                >
                                    Projects
                                </a>
                            </nav>
                        </div>

                        {/* Mobile Toggle Button - Compact */}
                        <div className="flex md:hidden">
                            <button 
                                onClick={toggleMobileMenu}
                                className="focus:outline-none p-1"
                                aria-label={menuOpen ? "Close menu" : "Open menu"}
                            >
                                {menuOpen ? (
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Dropdown Menu - Compact */}
                <div className={`mobile-menu-container absolute top-full right-0 mt-1.5 z-40 transition-all duration-300 transform origin-top-right ${
                    menuOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 invisible'
                }`}>
                    <div className="bg-black rounded-xl shadow-xl border border-gray-800 w-36 sm:w-40 overflow-hidden">
                        <nav className="flex flex-col p-1">
                            <a 
                                href="#resume" 
                                onClick={() => setMenuOpen(false)}
                                className="text-white px-3 py-1.5 hover:bg-gray-800 transition-colors rounded-lg text-center text-xs sm:text-sm"
                            >
                                Resume
                            </a>
                            <a 
                                href="#skills" 
                                onClick={() => setMenuOpen(false)}
                                className="text-white px-3 py-1.5 hover:bg-gray-800 transition-colors rounded-lg text-center text-xs sm:text-sm"
                            >
                                Skills
                            </a>
                            <a 
                                href="/projects" 
                                onClick={() => setMenuOpen(false)}
                                className="text-white px-3 py-1.5 hover:bg-gray-800 transition-colors rounded-lg text-center text-xs sm:text-sm"
                            >
                                Projects
                            </a>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}