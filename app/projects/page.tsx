"use client"

import React from 'react'
import {
  DiReact, DiJavascript1, DiNodejsSmall, DiPython,
  DiMongodb, DiMysql, DiDocker
} from 'react-icons/di'
import {
  SiNextdotjs, SiTailwindcss, SiLaravel, SiFirebase,
  SiSqlite, SiDjango, SiFlutter, SiGithub
} from 'react-icons/si'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

// --- SKILLS DATA with react-icons ---
const skills = {
  frontend: [
    { name: 'React', icon: <DiReact className="w-8 h-8 text-sky-400" /> },
    { name: 'Next.js', icon: <SiNextdotjs className="w-8 h-8 text-white" /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss className="w-8 h-8 text-teal-300" /> },
    { name: 'JavaScript', icon: <DiJavascript1 className="w-8 h-8 text-yellow-300" /> },
  ],
  backend: [
    { name: 'Node.js', icon: <DiNodejsSmall className="w-8 h-8 text-green-500" /> },
    { name: 'Laravel', icon: <SiLaravel className="w-8 h-8 text-red-500" /> },
    { name: 'Python', icon: <DiPython className="w-8 h-8 text-blue-400" /> },
    { name: 'Firebase', icon: <SiFirebase className="w-8 h-8 text-yellow-400" /> },
  ],
  databases: [
    { name: 'MySQL', icon: <DiMysql className="w-8 h-8 text-blue-500" /> },
    { name: 'SQLite', icon: <SiSqlite className="w-8 h-8 text-blue-200" /> },
    { name: 'Django', icon: <SiDjango className="w-8 h-8 text-green-900" /> },
    { name: 'MongoDB', icon: <DiMongodb className="w-8 h-8 text-green-600" /> },
  ],
  mobile: [
    { name: 'React Native', icon: <DiReact className="w-8 h-8 text-sky-400" /> },
    { name: 'Flutter', icon: <SiFlutter className="w-8 h-8 text-blue-300" /> },
  ],
  tools: [
    { name: 'Git & GitHub', icon: <SiGithub className="w-8 h-8 text-gray-400" /> },
    { name: 'Docker', icon: <DiDocker className="w-8 h-8 text-blue-500" /> },
  ],
}

// --- PROJECTS DATA ---
const projects = [
  {
    title: 'Love Home Mart',
    description: 'A full-stack e-commerce website with product catalog, cart, and auth.',
    imageUrl: '/imgs/loveHomeMart.png',
    technologies: ['React', 'Laravel', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://lovehomemart.com'
  },
  {
    title: 'Yieh Boats',
    description: 'We create solar boats and book trips. Based in Kenya around Lake Victoria.',
    imageUrl: '/imgs/YiehBoats.png',
    technologies: ['Vuejs', 'Nodejs', 'Mysql', 'Tailwind CSS', 'Express'],
    liveLink: 'https://client-neon-xi-74.vercel.app'
  },
  {
    title: 'Portfolio Website V2',
    description: 'A personal portfolio showcasing skills and projects to employers.',
    imageUrl: 'https://placehold.co/600x400/2D3748/E2E8F0/png?text=Project+3',
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    liveLink: 'https://example.com'
  }
]

// --- SKILL BOX COMPONENT ---
type Skill = { name: string; icon: React.ReactNode }
type SkillBoxProps = { title: string; skills: Skill[] }

const SkillBox: React.FC<SkillBoxProps> = ({ title, skills }) => (
  <div className="group bg-[#005b60] p-6 rounded-2xl border border-[#005b60] shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
    <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
    <div className="grid grid-cols-2 gap-4">
      {skills.map(skill => (
        <div
          key={skill.name}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
        >
          {skill.icon}
          <span className="text-white">{skill.name}</span>
        </div>
      ))}
    </div>
  </div>
)

// --- MAIN PAGE COMPONENT ---
export default function Page() {
  return (
    <>
      <Navbar />
      <main className="text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-36">

          {/* Hero Section */}
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-[#005b60] pb-4">
              Developer & Creator
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-black/80">
              I build modern, responsive, and performant web and mobile applications.
            </p>
          </div>

          {/* Skills Section (MODIFIED) */}
          <div className="mb-24">
            <h2 className="text-4xl text-black font-bold text-center mb-12">My Technical Skills</h2>
            {/* 1. Revert to a 4-column grid for large screens. */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 2. The first three items fill the first three columns. */}
              <SkillBox title="Frontend" skills={skills.frontend} />
              <SkillBox title="Backend" skills={skills.backend} />
              <SkillBox title="Database" skills={skills.databases} />

              {/* 3. The fourth column is a container that stacks its children vertically. */}
              <div className="flex flex-col gap-6">
                <SkillBox title="Mobile" skills={skills.mobile} />
                <SkillBox title="Tools & Deployment" skills={skills.tools} />
              </div>
            </div>
          </div>

          {/* Projects Section */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-12 text-black">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative group overflow-hidden rounded-xl shadow-lg bg-slate-900"
                >
                  {/* Project Image */}
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  />
                  {/* Gradient overlay for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                  {/* Content that slides up */}
                  <div
                    className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-[calc(100%-4.5rem)] 
                     group-hover:translate-y-0 transition-transform duration-500 ease-in-out"
                  >
                    {/* Project Title (Always visible) */}
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>

                    {/* Hidden content revealed on hover */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                      <p className="text-slate-300 mb-4 h-16">{project.description}</p>

                      {/* Technology Tags */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {project.technologies.map((tech, i) => (
                          <span key={i} className="bg-sky-900/80 text-sky-200 text-xs font-semibold px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Live Project Button */}
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-center bg-sky-600 text-white font-semibold px-6 py-2 rounded-lg 
                         hover:bg-sky-700 transition-colors duration-300"
                      >
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}