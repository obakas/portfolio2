import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { styles } from '../styles';
import { idris } from '../assets'; // You can add a cropped version later

const Hero = () => {
  return (
    <section className="relative flex sm:flex-row flex-col items-center justify-center w-full h-screen mx-auto overflow-hidden bg-gradient-to-r from-[#1E3A5F] via-[#3F5879] to-[#B22234]">
      <motion.div
        className={`relative sm:top-[200px] top-[150px] 
        lg:top-[150px] xl:top-[200px] ${styles.paddingX} 
        max-w-7xl mx-auto flex flex-col sm:flex-row items-center sm:items-start justify-between gap-8`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Section - Text + Headshot on mobile */}
        <div className="flex flex-col justify-center items-center sm:items-start text-white text-center sm:text-left">

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

          {/* Title */}
          <motion.h1
            className="text-4xl sm:text-6xl font-bold leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Next.js & Web3 Engineer
          </motion.h1>

          <motion.p
            className="mt-4 text-lg text-gray-200 max-w-xl"
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
            className="mt-6 space-y-2 text-gray-300 text-base"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <li>• 6+ years of full-stack development experience</li>
            <li>• Smart contracts & decentralized applications (dApps)</li>
            <li>• Expertise in Next.js, React, Tailwind, and Web3 tooling</li>
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#projects"
              className="z-10 px-6 py-3 bg-[#B22234] text-white rounded-xl font-semibold shadow-lg hover:scale-105 hover:opacity-90 transition transform"
            >
              🚀 See My Work
            </a>

            <a
              href="#contact"
              className="z-10 px-6 py-3 border border-white text-white rounded-xl font-semibold hover:bg-white hover:text-[#1E3A5F] hover:scale-105 transition transform"
            >
              🤝 Let’s Build Together
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-4 mt-6 text-gray-200 justify-center sm:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <a
              href="https://github.com/obakas"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="z-10"
            >
              <FaGithub size={24} className="hover:text-white transition" />
            </a>

            <a
              href="https://www.linkedin.com/in/idris-obaka/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="z-10"
            >
              <FaLinkedin size={24} className="hover:text-white transition" />
            </a>
          </motion.div>
        </div>

        {/* Desktop Portrait (hidden on mobile) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="hidden sm:flex justify-center items-center mt-10 sm:mt-0"
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
