'use client'
import React, { useState } from 'react'
import image_3 from "../../../public/image_3.jpeg"
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/navigation'
import Page from '../about/page.jsx'
import Portfolio from '../portfolio/page.jsx'
import Contact from '../contact/page.jsx'
const HomePage = () => {
  const [isHovered, setIsHovered] = useState(false);

  const router = useRouter()

  const handleOpenContact=()=>{
    router.push('/contact')
    
  }

  const handleOpenPortfolio=()=>{
    router.push('/portfolio')
    
  }

  return (
    <div id='home-section' className='relative w-[100%] h-[100%] px-4 md:px-8 lg:px-16'>
      <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-between ">
        {/* Left Part - Image */}
        <div className="lg:w-1/2 ml-4 lg:ml-28 flex justify-center lg:justify-start mt-10 lg:mt-0">
      <motion.div 
        className="w-[280px] h-[280px] md:w-[350px] md:h-[350px] relative cursor-pointer"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <motion.div
          className="relative rounded-xl overflow-hidden"
          animate={{ rotateY: isHovered ? 180 : 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 260, damping: 20 }}
        >
          {/* Front side */}
          <motion.div
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden'
            }}
            animate={{ scale: isHovered ? 0.8 : 1 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            <motion.div className="p-2 relative">
              <Image 
                src={image_3} 
                alt='portfolio'
                className='rounded-lg relative z-10 w-full h-full object-cover'
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                animate={{ opacity: [0.3, 0.5, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </motion.div>

          {/* Back side */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-lg p-4 flex items-center justify-center"
            style={{
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <motion.h2 
              className="text-white text-xl md:text-2xl font-bold text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Hover Effect!
            </motion.h2>
          </motion.div>
        </motion.div>

        {/* Floating particles effect */}
        <AnimatePresence>
          {isHovered && [...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-white"
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0],
                x: Math.random() * 200 - 100,
                y: Math.random() * 200 - 100,
              }}
              exit={{ opacity: 0, scale: 0 }}
              transition={{ duration: 1, delay: i * 0.1 }}
            />
          ))}
        </AnimatePresence>

        {/* Glowing effect */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          animate={{
            boxShadow: [
              '0 0 20px rgba(62, 184, 255, 0.3)',
              '0 0 60px rgba(62, 184, 255, 0.3)',
              '0 0 20px rgba(62, 184, 255, 0.3)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>

        {/* Right Part - Content */}
        <div className="w-full lg:w-1/2 mt-24 text-center lg:text-left">
        <div className="">
          <motion.h1
            className="text-white text-3xl md:text-4xl lg:text-5xl"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Hi, I&apos;m MUHAMMAD
          </motion.h1>
          
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            SHAHERYAR
          </motion.h1>
          
          <motion.h4
            className="text-xl md:text-2xl lg:text-3xl text-pink-500 mt-2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Software Engineer
          </motion.h4>
          
          <motion.p
            className="text-white font-light text-sm md:text-base lg:text-lg mt-6 md:mt-8 px-4 lg:px-0 "
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            I&apos; m a passionate software engineer driven by curiosity and a relentless desire to solve problems through technology. With a deep love for crafting elegant solutions, I specialize in building scalable applications that blend performance, functionality, and seamless user experiences.
          </motion.p>

          <motion.div 
            className="mt-8 space-y-4 md:space-y-0 md:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <motion.button
            onClick={handleOpenContact}
              className="w-full md:w-auto bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-6 py-2 rounded-full relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 15px rgba(236, 72, 153, 0.5)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0"
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Contact Me</span>
            </motion.button>

            <motion.button
            onClick={handleOpenPortfolio}
              className="w-full md:w-auto border-2 border-pink-500 text-white px-6 py-2 rounded-full relative overflow-hidden"
              whileHover={{ 
                scale: 1.05,
              }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className="absolute inset-0 bg-pink-500 opacity-0"
                whileHover={{ opacity: 0.2 }}
                transition={{ duration: 0.3 }}
              />
              <button className="relative z-10 ">Portfolio</button>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
    <Page/>
    <Portfolio/>
    <Contact/>
    
    </div>
  )
}

export default HomePage