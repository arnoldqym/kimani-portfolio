"use client"
import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Image from 'next/image';

// --- ICONS (You can use a library like `react-icons` for this) ---
const IconPlaceholder = ({ className = "w-8 h-8" }) => <div className={`bg-gray-600 rounded-full ${className}`}></div>;

// --- EXAMPLE DATA ---
const skills = {
  frontend: [
    { name: 'React', icon: <IconPlaceholder /> },
    { name: 'Next.js', icon: <IconPlaceholder /> },
    { name: 'Tailwind CSS', icon: <IconPlaceholder /> },
    { name: 'JavaScript', icon: <IconPlaceholder /> },
  ],
  backend: [
    { name: 'Node.js', icon: <IconPlaceholder /> },
    { name: 'Laravel', icon: <IconPlaceholder /> },
    { name: 'Python', icon: <IconPlaceholder /> },
    { name: 'Firebase', icon: <IconPlaceholder /> },
    { name: 'MongoDB', icon: <IconPlaceholder /> },
  ],
  databases: [
    { name: 'MySql', icon: <IconPlaceholder /> },
    { name: 'Sqlite', icon: <IconPlaceholder /> },
    { name: 'Django', icon: <IconPlaceholder /> },
  ],
  mobile: [
    { name: 'React Native', icon: <IconPlaceholder /> },
    { name: 'Flutter', icon: <IconPlaceholder /> },
  ],
  tools: [
    { name: 'Git & GitHub', icon: <IconPlaceholder /> },
    { name: 'Docker', icon: <IconPlaceholder /> },
  ]
};

const projects = [
  {
    title: 'Love Home Mart',
    description: 'A full-stack e-commerce website with features like product catalog, shopping cart, and user authentication.',
    imageUrl: '/imgs/loveHomeMart.png',
    technologies: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    liveLink: 'https://lovehomemart.com'
  },
  {
    title: 'Mobile Weather App',
    description: 'A cross-platform mobile application that displays real-time weather information based on user location.',
    imageUrl: 'https://placehold.co/600x400/2D3748/E2E8F0/png?text=Project+2',
    technologies: ['React Native', 'Firebase', 'OpenWeatherMap API'],
    liveLink: 'https://example.com'
  },
  {
    title: 'Portfolio Website V2',
    description: 'A personal portfolio website to showcase my skills and projects to potential employers and clients.',
    imageUrl: 'https://placehold.co/600x400/2D3748/E2E8F0/png?text=Project+3',
    technologies: ['Next.js', 'Tailwind CSS', 'Vercel'],
    liveLink: 'https://example.com'
  }
];

// --- MODIFIED: Reusable Bento Box for Skills with hover effect on items ---
type Skill = { name: string; icon: React.ReactNode };
type SkillBoxProps = { title: string; skills: Skill[] };

const SkillBox: React.FC<SkillBoxProps> = ({ title, skills }) => (
  <div className="relative group col-span-1 bg-[#003459] backdrop-blur-sm p-6 rounded-2xl border border-[#003459] shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
    {/* Glowing Border Effect */}
    <div className="relative">
      <h3 className="text-xl font-semibold text-white mb-4">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        {skills.map((skill: Skill) => (
          <div key={skill.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-800/50 transition-colors">
            {skill.icon}
            <span className="text-white">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default function Page() {
  return (
    <>
      <Navbar />
      <main className="text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-36">

          {/* --- HERO/INTRO SECTION --- */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-blue-600 pb-4">
              Developer & Creator
            </h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-slate-100">
              I build modern, responsive, and performant web and mobile applications.
            </p>
          </div>

          {/* --- MODIFIED: SKILLS SECTION (BENTO GRID) --- */}
          <div className="mb-24">
            <h2 className="text-4xl font-bold text-center mb-12">My Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <SkillBox title="Frontend" skills={skills.frontend} />
              <SkillBox title="Backend" skills={skills.backend} />
              <SkillBox title="Database" skills={skills.databases} />
              <SkillBox title="Mobile" skills={skills.mobile} />
              <SkillBox title="Tools & Deployment" skills={skills.tools} />
            </div>
          </div>

          {/* --- PROJECTS SECTION --- */}
          <div>
            <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-[#003459] rounded-xl overflow-hidden shadow-lg group transform hover:-translate-y-2 transition-transform duration-300 ease-in-out border border-slate-700">
                  <div className="overflow-hidden">
                    <Image src={project.imageUrl} alt={project.title} width={600} height={400} className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="p-4">
                    <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-slate-400 mb-4 h-16">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="bg-sky-900/50 text-sky-300 text-xs font-semibold px-3 py-1 rounded-full">{tech}</span>
                      ))}
                    </div>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-block w-full text-center bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-sky-600 hover:to-blue-700 transition-all duration-300">
                      View Live Project
                    </a>
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