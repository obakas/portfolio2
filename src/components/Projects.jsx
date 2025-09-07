import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionWrapper } from '../hoc';
import { styles } from '../styles';
import { github, pineapple, pineappleHover } from '../assets';
import { projects } from '../constants';
import { fadeIn, textVariant, staggerContainer } from '../utils/motion';

const ProjectCard = ({
  id,
  name,
  description,
  image,
  repo,
  demo,
  index,
  active,
  handleClick,
}) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className={`relative ${
        active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.5] flex-[2]'
      } flex items-center justify-center min-w-[170px] 
      h-[420px] cursor-pointer transition-all duration-300`}
      onClick={() => handleClick(id)}
    >
      {/* overlay tint */}
      <div className="absolute top-0 left-0 z-10 bg-[#1F2A44]/50 h-full w-full rounded-[24px]"></div>

      {/* project image */}
      <img
        src={image}
        alt={name}
        className="absolute w-full h-full object-cover rounded-[24px]"
      />

      {/* collapsed title */}
      {active !== id ? (
        <div className="flex items-center justify-start pr-[4.5rem]">
          <h3
            className="font-extrabold font-beckman uppercase w-[200px] h-[30px] 
            whitespace-nowrap sm:text-[27px] text-[18px] text-[#F0F4F8] tracking-[1px]
            absolute z-0 lg:bottom-[7rem] lg:rotate-[-90deg] lg:origin-[0,0]
            leading-none z-20"
          >
            {name}
          </h3>
        </div>
      ) : (
        <>
          {/* expanded content */}
          <div
            className="absolute bottom-0 p-8 justify-start w-full 
            flex-col bg-[rgba(240,244,248,0.95)] rounded-b-[24px] z-20"
          >
            {/* repo button */}
            <div className="absolute inset-0 flex justify-end m-3">
              <div
                onClick={() => window.open(repo, '_blank')}
                className="bg-[#1F2A44] sm:w-11 sm:h-11 w-10 h-10 rounded-full 
                flex justify-center items-center cursor-pointer
                sm:opacity-90 opacity-80 hover:bg-[#3A86FF] transition"
              >
                <img
                  src={github}
                  alt="source code"
                  className="w-4/5 h-4/5 object-contain"
                />
              </div>
            </div>

            {/* project name */}
            <h2
              className="font-bold sm:text-[28px] text-[22px] 
              text-[#1F2A44] uppercase font-beckman sm:mt-0 -mt-[1rem]"
            >
              {name}
            </h2>

            {/* project description */}
            <p
              className="text-[#4B5563] sm:text-[14px] text-[12px] 
              max-w-3xl sm:leading-[24px] leading-[18px]
              font-poppins tracking-[0.5px]"
            >
              {description}
            </p>

            {/* demo button */}
            <button
              className="flex justify-between items-center gap-2 px-4 py-3 
              sm:text-[16px] text-[14px] font-bold font-beckman 
              rounded-lg bg-[#3A86FF] text-white 
              hover:bg-[#2563eb] transition duration-200 mt-4"
              onClick={() => window.open(demo, '_blank')}
              onMouseOver={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineappleHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.btn-icon')
                  .setAttribute('src', pineapple);
              }}
            >
              <img
                src={pineapple}
                alt="pineapple"
                className="btn-icon sm:w-[28px] sm:h-[28px] 
                w-[24px] h-[24px] object-contain"
              />
              LIVE DEMO
            </button>
          </div>
        </>
      )}
    </motion.div>
  );
};

const Projects = () => {
  const [active, setActive] = useState('project-2');

  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-[#4B5563]`}>
          Case Studies
        </p>
        <h2 className={`${styles.sectionHeadText} text-[#1F2A44]`}>
          Projects.
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-4 text-[#4B5563] text-[18px] max-w-3xl leading-[30px]"
        >
          These projects highlight my expertise with real-world examples, 
          including descriptions, code repositories, and live demos. 
          They showcase my ability to solve complex problems, adapt across 
          technologies, and deliver polished, scalable solutions.
        </motion.p>
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              {...project}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Projects, 'projects');
