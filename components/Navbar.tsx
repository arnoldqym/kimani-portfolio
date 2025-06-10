// "use client";
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuOpen && !e.target.closest('.navbar-container')) {
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
            scrolled ? 'mt-0 py-0.5 bg-black bg-opacity-80' : ''
        }`}>
            {/* Combined Navbar Container */}
            <div className="navbar-container w-full max-w-4xl mx-auto">
                <div className={`bg-black rounded-[40px] md:rounded-[75px] w-full transition-all overflow-hidden ${
                    menuOpen ? 'pb-3' : 'py-1 px-3 sm:py-1.5 sm:px-4'
                }`}>
                    {/* Top Bar - Always visible */}
                    <div className="flex items-center justify-between w-full py-1 px-3 sm:px-4">
                        {/* Logo Section */}
                        <div className="flex items-center min-w-0">
                            <a href={'/'} className="logo-holder flex items-center">
                                <div className="logo text-white text-3xl sm:text-4xl font-bold mr-1">A</div>
                                <div className="logo-text text-white text-[25px] sm:text-sm md:text-base font-medium whitespace-nowrap max-w-[80px] sm:max-w-[120px] md:max-w-none">
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

                        {/* Mobile Toggle Button */}
                        <div className="flex md:hidden">
                            <button 
                                onClick={toggleMobileMenu}
                                className="focus:outline-none p-1"
                                aria-label={menuOpen ? "Close menu" : "Open menu"}
                            >
                                {menuOpen ? (
                                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Mobile Dropdown Menu - Integrated into navbar */}
                    <div className={`md:hidden transition-all duration-300 overflow-hidden ${
                        menuOpen ? 'max-h-36 opacity-100 mt-2' : 'max-h-0 opacity-0'
                    }`}>
                        <div className="flex flex-col px-4 pb-2 space-y-2">
                            <a 
                                href="#resume" 
                                onClick={() => setMenuOpen(false)}
                                className="text-white px-3 py-2 hover:bg-gray-800 transition-colors rounded-lg text-center text-[20px]"
                            >
                                Resume
                            </a>
                            <a 
                                href="#skills" 
                                onClick={() => setMenuOpen(false)}
                                className="text-white px-3 py-2 hover:bg-gray-800 transition-colors rounded-lg text-center text-[20px]"
                            >
                                Skills
                            </a>
                            <a 
                                href="/projects" 
                                onClick={() => setMenuOpen(false)}
                                className="text-white px-3 py-2 hover:bg-gray-800 transition-colors rounded-lg text-center text-[20px]"
                            >
                                Projects
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}