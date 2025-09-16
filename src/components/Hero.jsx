import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { styles } from '../styles';
import { idris } from '../assets';
import { useState } from "react";

const Hero = () => {
  const [active, setActive] = useState("");

  return (
    <section className="relative flex sm:flex-row flex-col w-full h-screen mx-auto overflow-hidden bg-gradient-to-r from-[#1E3A5F] via-[#3F5879] to-[#B22234]">
      <motion.div
        className={`absolute inset-0 sm:top-[200px] top-[150px] 
        lg:top-[150px] xl:top-[200px] ${styles.paddingX} 
        max-w-7xl mx-auto flex flex-row items-start
        justify-between gap-8`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Section - Text */}
        <div className="flex flex-col justify-center items-start text-white">
          <motion.h1
            className="text-4xl sm:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Blockchain & Fullstack Developer
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-gray-200 max-w-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Delivering secure, scalable applications that integrate blockchain
            technology and fullstack engineering to drive innovation and growth.
          </motion.p>

          {/* Credibility bullets */}
          <motion.ul
            className="mt-6 space-y-2 text-gray-300 text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <li>• 6+ years of fullstack development experience</li>
            <li>• Smart contracts & decentralized applications (dApps)</li>
            <li>• Expertise in React, Node.js, MongoDB, and Express</li>
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div
            className="flex gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >

            <a
              href="#projects"
              className="z-10 px-6 py-3 bg-[#B22234] text-white rounded-lg font-medium shadow hover:opacity-90 transition"
              onClick={() => {setActive("projects");window.scrollTo(0, 0);}}
            >
              View Portfolio
            </a>

            <a
              href="#contact"
              className="z-10 px-6 py-3 border border-white text-white rounded-lg font-medium hover:bg-white hover:text-[#1E3A5F] transition"
              onClick={() => setActive("Contact")}
            >
              Contact Me
            </a>

          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 mt-6 text-gray-200"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            {/* GitHub */}
            <a
              href="https://github.com/obakas"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className='z-10'
            >
              <FaGithub size={24} className="hover:text-white transition" />
            </a>

            {/* LinkedIn */}
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

        {/* Right Section - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden sm:block"
        >
          <img
            className="sm:h-[80vh] max-h-[500px] object-contain rounded-2xl shadow-xl border-4 border-white"
            src={idris}
            alt="Portrait of Obaka"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;