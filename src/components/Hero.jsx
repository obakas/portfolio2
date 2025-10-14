import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { styles } from '../styles';
import { idris } from '../assets';
import { useState } from "react";

const Hero = () => {
  const [active, setActive] = useState("");

  return (
    <section className="relative w-full min-h-screen mx-auto overflow-hidden bg-gradient-to-r from-[#1E3A5F] via-[#3F5879] to-[#B22234]">
      <motion.div
        className={`absolute inset-0 sm:top-[200px] top-[100px] 
        lg:top-[150px] xl:top-[200px] ${styles.paddingX} 
        max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start
        justify-center sm:justify-between gap-6 sm:gap-8`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Section - Text & Content */}
        <div className="flex flex-col justify-center items-center sm:items-start text-white text-center sm:text-left order-2 sm:order-1">
          {/* 👤 Headshot (Mobile Only) */}
          <motion.div
            className="block sm:hidden mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={idris}
              alt="Headshot of Obaka"
              className="h-[160px] w-[160px] object-cover rounded-full shadow-xl border-4 border-white"
            />
          </motion.div>

          <motion.h1
            className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Next.js & Web3 Engineer
          </motion.h1>

          <motion.p
            className="mt-4 text-base sm:text-lg text-gray-200 max-w-xl px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I build secure, scalable applications powered by Next.js, React 19,
            and blockchain technology—bringing modern web and decentralized
            systems together.
          </motion.p>

          {/* Credibility bullets */}
          <motion.ul
            className="mt-6 space-y-2 text-gray-300 text-sm sm:text-base max-w-lg px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <li>• 6+ years of full-stack development experience</li>
            <li className="text-xs sm:text-sm">• Smart contracts & decentralized applications (dApps)</li>
            <li className="text-xs sm:text-sm">• Expertise in Next.js, React, Tailwind, and Web3 tooling</li>
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 mt-6 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#projects"
              className="z-10 px-5 py-3 bg-[#B22234] text-white rounded-xl font-semibold shadow-lg hover:scale-105 hover:opacity-90 transition transform text-center text-sm sm:text-base"
            >
              🚀 See My Work
            </a>

            <a
              href="#contact"
              className="z-10 px-5 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#1E3A5F] hover:scale-105 transition transform text-center text-sm sm:text-base"
            >
              🤝 Let's Build Together
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 mt-6 text-gray-200 px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a
              href="https://github.com/obakas"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className='z-10'
            >
              <FaGithub size={24} className="hover:text-white transition" />
            </a>
            <a
              href="https://www.linkedin.com/in/idris-obaka/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className='z-10'
            >
              <FaLinkedin size={24} className="hover:text-white transition" />
            </a>
          </motion.div>
        </div>

        {/* Right Section - Profile Image (Desktop Only) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden sm:block order-2"
        >
          <img
            className="sm:h-[70vh] lg:h-[80vh] max-h-[500px] object-contain rounded-2xl shadow-xl border-4 border-white"
            src={idris}
            alt="Portrait of Obaka"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;