import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
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
