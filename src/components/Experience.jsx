import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { download, downloadHover, resume } from '../assets';
import { textVariant } from '../utils/motion';

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: '#F0F4F8', // soft bluish-gray from your picture
      color: '#1F2A44', // navy-charcoal for text
      boxShadow: '0px 8px 20px rgba(31, 42, 68, 0.08)', // soft professional shadow
      borderRadius: '12px',
    }}
    contentArrowStyle={{
      borderRight: '7px solid #CBD5E1', // subtle light slate arrow
    }}
    date={
      <div>
        <h3 className="text-[18px] font-bold font-beckman text-[#4B5563]">
          {experience.date}
        </h3>
      </div>
    }
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }>
    <div>
      <h3 className="text-[22px] font-bold font-beckman tracking-[1px] text-[#1F2A44]">
        {experience.title}
      </h3>
      <p
        className="text-[18px] font-semibold font-overcameBold tracking-[0.5px] text-[#3A86FF]" // blue accent for company name
        style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} sm:pl-16 pl-[2rem] text-[#4B5563]`}>
          What I've done so far
        </p>
        <h2 className={`${styles.sectionHeadText} sm:pl-16 pl-[2rem] text-[#1F2A44]`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline className="vertical-timeline-custom-line">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}

          {/* Resume CTA */}
          <VerticalTimelineElement
            contentStyle={{
              background: '#F0F4F8',
              color: '#1F2A44',
              boxShadow: '0px 8px 20px rgba(31, 42, 68, 0.08)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '12px',
            }}
            contentArrowStyle={{
              borderRight: '7px solid #CBD5E1',
            }}
            iconStyle={{ background: '#1F2A44' }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }>
            <button
              className="flex justify-between items-center gap-2 px-4 py-3 
              text-[14px] sm:text-[16px] font-bold font-beckman 
              rounded-lg bg-[#3A86FF] text-white 
              hover:bg-[#2563eb] transition duration-200"
              onClick={() =>
                window.open(
                  'resume link', // replace with your actual resume link
                  '_blank'
                )
              }
              onMouseOver={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', downloadHover);
              }}
              onMouseOut={() => {
                document
                  .querySelector('.download-btn')
                  .setAttribute('src', download);
              }}>
              MY RESUME
              <img
                src={download}
                alt="download"
                className="download-btn w-[20px] h-[20px] object-contain"
              />
            </button>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
