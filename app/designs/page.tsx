"use client"
import Navbar from '@/components/Navbar'
import { useState } from 'react';
import { designs } from '@/db/qymDesigns';
import DesignCard from '@/components/DesignCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function Page() {
  const tabs = ['All', 'Product Design', 'Branding', 'Illustration', 'Motion Graphics', 'Posters'];
  const [activeTab, setActiveTab] = useState('All');

  const filteredDesigns = activeTab === 'All'
    ? designs
    : designs.filter((design) => design.category === activeTab);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 text-gray-800 lg:pt-28 md:pt-28 sm:pt-28 xs:pt-28 pt-28 mx-auto">
        <div className="container mx-auto px-4 py-16">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">My Design Portfolio</h1>
            <p className="text-lg text-gray-600">A curated selection of my creative work.</p>
          </header>

          {/* Animated Tabs */}
          <div className="flex justify-center flex-wrap gap-2 md:gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`${
                  activeTab === tab ? 'text-white' : 'text-gray-600 hover:text-indigo-600'
                } relative rounded-full px-4 py-2 text-sm font-medium transition focus:outline-none`}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="bubble"
                    className="absolute inset-0 z-10 bg-indigo-600"
                    style={{ borderRadius: 9999 }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-20">{tab}</span>
              </button>
            ))}
          </div>

          {/* Animated Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 place-items-center"
          >
            <AnimatePresence>
              {filteredDesigns.map((design) => (
                <motion.div
                  key={design.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="flex justify-center" // Center the card in the grid cell
                >
                  <DesignCard design={design} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  )
}