import { useState } from 'react';
export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMobileMenu = () => {
        setMenuOpen(!menuOpen);
    }
    return (
        <header className="z-10 bg-transparent justify-center w-screen mt-4.5 px-5 flex fixed top-0 bottom-auto left-0 right-0">
            <div className="bg-black rounded-[75px] justify-center items-center w-[55%] min-w-[650px] h-full pt-[15px] pb-[15px] flex">
                <div className="mb-0 pt-0 pb-0 grid grid-rows-auto grid-cols-3 gap-5 auto-cols-fr justify-center p-5">
                    <div className="justify-center items-center flex-col flex">
                        <a href={'/'} className="logo-holder">
                            <div className="logo text-black">A</div> {/* Note: 'text-black' on a black background won't be visible. You might want 'text-white' or a specific logo design here. */}
                            <div className="logo-text text-gray-300 hover:scale-110">Arnold Kimani</div>
                        </a>
                    </div>
                    <div className="justify-center items-center flex-col flex">
                        <nav className="justify-around w-full flex float-right relative">
                            <a href="#resume" className="text-white tracking-wider ml-0 mr-0 p-1.25 px-2.5 font-ubuntu text-xl font-medium leading-5 no-underline transition-all duration-200 ease-linear hover:text-blue-400 hover:font-medium hover:scale-110">Resume</a>
                            <a href="#skills" className="text-white tracking-wider ml-0 mr-0 p-1.25 px-2.5 font-2xl font-medium leading-5 no-underline transition-all duration-200 ease-linear hover:text-blue-400 hover:font-medium hover:scale-110">Skills</a> {/* Removed font-ubuntu as it's not a standard Tailwind class */}
                            <a href="/projects" className="text-white tracking-wider ml-0 mr-0 p-1.25 px-2.5 font-2xl font-medium leading-5 no-underline transition-all duration-200 ease-linear hover:text-blue-400 hover:font-medium hover:scale-110">Projects</a> {/* Removed font-ubuntu */}
                        </nav>
                    </div>
                    {/* Mobile Navbar */}
                    <a href="#" className="mobile-toggle flex justify-center items-center lg:hidden" onClick={toggleMobileMenu}> {/* Added flex, justify-center, items-center and hidden for lg screens for responsiveness */}
                        <svg className="w-8 h-8 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10" />
                        </svg>
                    </a>
                </div>
            </div>
        </header>
    )
}
