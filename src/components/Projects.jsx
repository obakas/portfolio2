import { motion } from "framer-motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { github } from "../assets";
import { projects } from "../constants";
import { fadeIn, textVariant, staggerContainer } from "../utils/motion";

const ProjectCard = ({ name, description, image, repo, demo, index }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.3, 0.75)}
      className="bg-[#223e62] border-t-4 border-[#223e62] rounded-2xl overflow-hidden 
                 flex flex-col hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-beckman text-night text-[20px] font-bold mb-2">
          {name}
        </h3>
        <p className="text-dim text-[14px] leading-[22px] flex-1">
          {description}
        </p>

        {/* Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={() => window.open(repo, "_blank")}
            className="px-4 py-2 text-[14px] rounded-lg border border-night text-night 
                       hover:bg-night hover:text-white transition"
          >
            <div className="flex items-center gap-2">
              <img src={github} alt="GitHub" className="w-4 h-4" />
              Code
            </div>
          </button>
          <button
            onClick={() => window.open(demo, "_blank")}
            className="px-4 py-2 text-[14px] rounded-lg bg-accent text-white 
                       hover:bg-[#2563eb] transition"
          >
            Live Demo
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
      <div className={`${styles.paddingX} -mt-48 bg-[#972f44] w-full px-6`}>
        {/* Header */}
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText} `}>Case Studies</p>
          <h2 className={`${styles.sectionHeadTextLight} text-night`}>
            Featured Projects
          </h2>
        </motion.div>


        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} index={index} {...project} />
          ))}
        </motion.div>
      </div>
  );
};

export default SectionWrapper(Projects, "projects");
