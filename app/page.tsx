// "use client";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container w-full lg:pt-40 md:pt-28 sm:pt-28 xs:pt-28 pt-28 mx-auto max-w-screen-xl">
        {/* Hero Section - Fixed overflow */}
        <section className="hero flex flex-col lg:flex-row">
          <div className="hero-blue flex-1 bg-blue-100 rounded-[30px] p-[30px] flex flex-col justify-center">
            <div>
              <h1 className="text-4xl font-bold">
                <small className="text-xl font-normal">Hi I&#39;m</small>
                <br />
                Arnold Kimani
              </h1>
              <p className="mt-4 text-lg">
                Designer and Developer in Kenya who loves creating applications and designs. <span className="hidden md:inline">I&#39;m interested in AI topics which is why I also add things like ChatGPT into my projects these days.</span>
              </p>
              <div className="call-to-action mt-5 mb-2 flex flex-wrap">
                <a href="./Sample_Resume_Template.pdf" className="button black bg-black text-white py-3 px-6 rounded-md mr-2 mb-2 inline-block hover:opacity-90 transition-opacity">
                  View Resume
                </a>
                <a href="mailto:arnoldkimani@gmail.com" className="button white bg-white text-black py-3 px-6 rounded-md inline-block hover:opacity-90 transition-opacity">
                  Contact Me
                </a>
              </div>
              <div className="social-links flex space-x-4 mt-4">
                <a href="#" className="hover:no-underline">
                  <Image src="/imgs/github.png" alt="GitHub" width={48} height={48} />
                </a>
                <a href="#" className="hover:no-underline">
                  <Image src="/imgs/linkedin.png" alt="LinkedIn" width={48} height={48} />
                </a>
              </div>
            </div>
          </div>
          {/* Fixed hero image overflow */}
          <div className="hero-yellow flex-1 bg-yellow-400 rounded-[30px] px-[30px] flex justify-center items-center lg:items-end mt-6 lg:mt-0">
            <img 
              src="./imgs/hero-image.png" 
              alt="Arnold Kimani" 
              className="arnold-image w-full max-w-[280px] sm:max-w-[350px] md:max-w-[420px] md:mt-[-30px] md:mb-[-10px] lg:mt-[-60px] lg:mb-[-10px]" 
            />
          </div>
        </section>

        {/* Skills Section - Fixed overflow */}
        <section id="skills" className="skills container pt-10 pb-10">
          <h2 className="text-5xl font-bold text-center mb-8">
            <small className="block text-xl font-normal text-gray-600 mb-2">About Me</small>
            Skills
          </h2>
          <div className="holder-blue bg-blue-100 rounded-[30px] p-[30px] flex flex-col lg:grid lg:grid-cols-3 gap-8 overflow-hidden">

            {/* Frontend Column */}
            <div className="flex-1 px-4 lg:border-r lg:border-gray-300">
              <h3 className="text-3xl font-semibold mb-4 text-center">
                Frontend
              </h3>
              <ul className="flex flex-wrap list-none p-0 mb-5 gap-2.5 justify-center">
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">HTML</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">CSS</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">JavaScript</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Nextjs</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">React</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Vue</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">JQuery</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Tailwind</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Bootstrap</li>
              </ul>

              {/* Mobile Sub-section */}
              <h3 className="text-3xl font-semibold mb-4 text-center mt-6">
                Mobile
              </h3>
              <ul className="flex flex-wrap list-none p-0 mb-5 gap-2.5 justify-center">
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Flutter</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">React Native</li>
              </ul>
            </div>

            {/* Backend Column */}
            <div className="flex-1 px-4 lg:border-r lg:border-gray-300">
              <h3 className="text-3xl font-semibold mb-4 text-center">
                Backend
              </h3>
              <ul className="flex flex-wrap list-none p-0 mb-5 gap-2.5 justify-center">
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Node.js</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Express</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Python</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">MongoDB</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Laravel</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">PHP</li>
              </ul>
              {/* SQL Sub-section */}
              <h3 className="text-3xl font-semibold mb-4 text-center mt-6">
                Database
              </h3>
              <ul className="flex flex-wrap list-none p-0 mb-5 gap-2.5 justify-center">
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">MySQL</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">PostgrelSQL</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Django</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">MongoDB</li>
              </ul>
            </div>

            {/* Design Column */}
            <div className="flex-1 px-4">
              <h3 className="text-3xl font-semibold mb-4 text-center">
                Design
              </h3>
              <ul className="flex flex-wrap list-none p-0 mb-5 gap-2.5 justify-center">
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Photoshop</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Illustrator</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">InDesign</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Premiere Pro</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">After Effects</li>
                <li className="bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Figma</li>
              </ul>
            </div>

            {/* About Me Section */}
            <div className="flex-1 lg:col-span-3 mt-8 lg:mt-0">
              <h3 className="text-3xl font-semibold mb-4 text-center">A bit about me</h3>
              <p className="mb-5 text-lg leading-relaxed">
                Designer and Developer in Kenya who loves creating applications and designs. <span className="hidden md:inline">I&#39;m interested in AI topics which is why I also add things like Gemini into my projects these days.</span>
              </p>
              <p className="mb-5 text-lg leading-relaxed">
                I&#39;m currently working on a project that uses Azure AI to create a chatbot that can help answer questions about web development.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}