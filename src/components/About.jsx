import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", 0.15 * index, 0.8)}
      className="w-full xs:w-[260px] p-[1px] rounded-2xl shadow-lg bg-gradient-to-r from-gray-200 to-gray-100"
    >
      <div className="bg-white rounded-2xl py-2 px-6 min-h-[260px] flex flex-col justify-center items-center hover:shadow-[0_0_20px_rgba(207,199,196,0.6)] transition duration-300">
        <img src={icon} alt={title} className="w-14 h-14 object-contain mb-2" />
        <h3 className="text-gray-800 text-lg font-semibold text-center">{title}</h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section
      className="bg-gradient-to-br from-[#d6d0cc] to-[#cfc7c4] py-12 px-4"
      id="about"
    >
      {/* Heading */}
      <motion.div variants={textVariant()} className="text-center">
        <p className="text-gray-600 text-sm uppercase tracking-wider">About Me</p>
        <h2 className="text-4xl font-bold text-[#4a3f3c] tracking-tight">
          Professional Overview
        </h2>
      </motion.div>

      {/* Intro */}
      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6"
      >
        <p>
          I’m <span className="font-semibold">Obaka</span>, a{" "}
          <span className="text-taupe font-semibold">
            blockchain and fullstack developer
          </span>{" "}
          with over six years of experience building{" "}
          <span className="font-semibold">secure, scalable applications</span>.
          I specialize in creating solutions that seamlessly integrate{" "}
          blockchain technology with modern web engineering.
        </p>
        <p>
          My expertise spans{" "}
          <span className="font-semibold">smart contracts</span>,{" "}
          <span className="font-semibold">dApps</span>, and{" "}
          <span className="font-semibold">end-to-end system architecture</span>.
          I thrive on solving complex problems that redefine{" "}
          <span className="font-semibold">
            transparency, security, and digital ownership
          </span>.
        </p>
        <p>
          Let’s collaborate to deliver{" "}
          <span className="font-semibold text-taupe">
            impactful solutions
          </span>{" "}
          that shape the future of decentralized technology.
        </p>
      </motion.div>

      {/* Services */}
      <div className="mt-8 flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(About, "about");
