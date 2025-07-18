// designs/page.tsx

"use client"
import Navbar from '@/components/Navbar';
import { useState } from 'react';
import { designs } from '@/db/qymDesigns';
import DesignCard from '@/components/DesignCard';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';

export default function Page() {
  const tabs = ['All', 'Product Design', 'Branding', 'Illustration', 'Motion Graphics', 'Posters'];
  const [activeTab, setActiveTab] = useState('All');

  const filteredDesigns = activeTab === 'All'
    ? designs
    : designs.filter((design) => design.category === activeTab);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 text-gray-800 py-36 sm:pt-36">
        <div className="container mx-auto px-4 py-6">
          <div className="text-center mb-10">
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-[#005b60] pb-4">Design Portfolio</h1>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-black/80">A curated selection of my creative work across branding, illustration, and product design.</p>
          </div>

          {/* Tabs: Updated to wrap on mobile */}
          <div className="flex justify-center mb-16">
            <div className="flex flex-wrap justify-center gap-2 bg-gray-200/80 p-2 rounded-2xl sm:rounded-full">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    activeTab === tab ? 'text-white' : 'text-gray-700 hover:text-black'
                  } relative rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300 whitespace-nowrap`}
                >
                  {activeTab === tab && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 z-0 bg-[#005b60]"
                      style={{ borderRadius: 9999 }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="relative z-10">{tab}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Animated Grid */}
          <motion.div layout className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
            <AnimatePresence>
              {filteredDesigns.map((design) => (
                <motion.div
                  key={design.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <DesignCard design={design} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  )
}