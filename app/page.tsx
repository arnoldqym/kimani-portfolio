"use client";

import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="container pt-40 mx-auto max-w-screen-xl">
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
              <div className="call-to-action mt-5 mb-2 flex flex-wrap"> {/* Added flex flex-wrap for responsiveness */}
                <a href="./Sample_Resume_Template.pdf" className="button black bg-black text-white py-3 px-6 rounded-md mr-2 mb-2 inline-block hover:opacity-90 transition-opacity">
                  View Resume
                </a>
                <a href="mailto:arnoldkimani@gmail.com" className="button white bg-white text-black py-3 px-6 rounded-md inline-block hover:opacity-90 transition-opacity">
                  Contact Me
                </a>
              </div>
              <div className="social-links flex space-x-4 mt-4"> {/* Added space-x-4 for spacing */}
                <a href="#" className="hover:no-underline">
                  <Image src="/imgs/github.png" alt="GitHub" width={48} height={48} />
                </a>
                <a href="#" className="hover:no-underline">
                  <Image src="/imgs/linkedin.png" alt="LinkedIn" width={48} height={48} />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-yellow flex-1 bg-yellow-400 rounded-[30px] px-[30px] flex justify-center items-end">
            <img src="./imgs/hero-image.png" alt="Adrian Twarog" className="mt-[-60px] max-w-[420px] mb-[-10px]" />
          </div>
        </section>
        <section id="skills" className="skills container pt-10 pb-10">
          <h2 className="text-5xl font-bold text-center mb-8">
            <small className="block text-xl font-normal text-gray-600 mb-2">About Me</small>
            Skills
          </h2>
          {/*
        The lg:divide-x was removed previously to precisely control borders.
        Borders are now applied individually to specific columns.
      */}
          <div className="holder-blue bg-blue-100 rounded-[30px] p-[30px] flex flex-col lg:grid lg:grid-cols-3 gap-8">

            {/* Frontend Column (has a right border) */}
            <div className="flex-1 px-4 lg:border-r lg:border-gray-300">
              <h3 className="text-3xl font-semibold mb-4 text-center">
                Frontend
              </h3>
              <ul className="flex flex-wrap list-none p-0 mb-5 gap-2.5 justify-center">
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">HTML</li>
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">CSS</li>
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">JavaScript</li>
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Nextjs</li>
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">React</li>
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Vue</li>
              </ul>

              {/* Mobile Sub-section under Frontend */}
              <h3 className="text-3xl font-semibold mb-4 text-center mt-6">
                Mobile
              </h3>
              <ul className="flex flex-wrap list-none p-0 mb-5 gap-2.5 justify-center">
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Flutter</li>
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">React Native</li>
              </ul>
            </div>

            {/* Backend Column (has a right border) */}
            <div className="flex-1 px-4 lg:border-r lg:border-gray-300">
              <h3 className="text-3xl font-semibold mb-4 text-center">
                Backend
              </h3>
              <ul className="flex flex-wrap list-none p-0 mb-5 gap-2.5 justify-center">
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Node.js</li>
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Express</li>
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Python</li>
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">MongoDB</li>
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Laravel</li>
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">PHP</li>
              </ul>
            </div>

            {/* Design Column (NO right border) */}
            <div className="flex-1 px-4"> {/* Note: No 'lg:border-r' here */}
              <h3 className="text-3xl font-semibold mb-4 text-center">
                Design
              </h3>
              <ul className="flex flex-wrap list-none p-0 mb-5 gap-2.5 justify-center">
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Photoshop</li>
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Illustrator</li>
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">InDesign</li>
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Premiere Pro</li>
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">After Effects</li>
                <li className="inline-block bg-blue-400 text-white py-2.5 px-5 rounded-[15px] mb-2.5">Figma</li>
              </ul>
            </div>

            {/* About Me / Right Column */}
            <div className="flex-1 lg:col-span-3 mt-8 lg:mt-0">
              <h3 className="text-3xl font-semibold mb-4 text-center">A bit about me</h3>
              <p className="mb-5 text-lg leading-relaxed">
                Hi I&#39;m Adrian Twarog, a designer and developer who creates educational content on YouTube to teach others about HTML, CSS and JavaScript. I&#39;m interested in AI topics which is why I also add things like ChatGPT into my projects these days!
              </p>
              <p className="mb-5 text-lg leading-relaxed">
                I&#39;m currently working on a project that uses Azure AI to create a chatbot that can help answer questions about web development. I&#39;m also working on a project that uses React and Next.js to create a portfolio website design that looks good.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
