import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { download, downloadHover, resume } from "../assets";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: "#FFFFFF", // clean corporate white
      color: "#1F2937", // gray-800 for readability
      boxShadow: "0px 4px 12px rgba(0,0,0,0.05)", // subtle shadow
      borderRadius: "10px",
      border: "1px solid #E5E7EB", // light border
      padding: "20px 25px",
    }}
    contentArrowStyle={{
      borderRight: "7px solid #E5E7EB",
    }}
    date={
      <p className="text-[14px] font-medium text-[#6B7280] tracking-wide">
        {experience.date}
      </p>
    }
    iconStyle={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[55%] h-[55%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-[20px] font-semibold text-[#111827] mb-1">
        {experience.title}
      </h3>
      <p className="text-[16px] font-medium text-[#2563EB] mb-3">
        {experience.company_name}
      </p>
      <ul className="list-disc ml-5 space-y-2 text-[14px] text-[#4B5563] leading-relaxed">
        {experience.points?.map((point, i) => (
          <li key={`exp-point-${i}`}>{point}</li>
        ))}
      </ul>
    </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()} className="text-center">
        <p className={`${styles.sectionSubText} text-[#6B7280]`}>
          Professional Journey
        </p>
        <h2 className={`${styles.sectionHeadText} text-[#111827]`}>
          Work Experience
        </h2>
      </motion.div>

      <div className="mt-16 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}

          {/* Resume CTA */}
          {/* <VerticalTimelineElement
            contentStyle={{
              background: "#F9FAFB",
              color: "#111827",
              boxShadow: "0px 4px 12px rgba(0,0,0,0.05)",
              border: "1px solid #E5E7EB",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
            }}
            contentArrowStyle={{ borderRight: "7px solid #E5E7EB" }}
            iconStyle={{ background: "#2563EB", color: "#fff" }}
            icon={
              <div className="flex justify-center items-center w-full h-full">
                <img
                  src={resume}
                  alt="resume"
                  className="w-[45%] h-[45%] object-contain"
                />
              </div>
            }
          >
            <button
              className="flex items-center gap-2 px-6 py-3 
              text-[15px] font-semibold rounded-lg 
              bg-[#2563EB] text-white 
              hover:bg-[#1D4ED8] transition duration-200"
              onClick={() => window.open("resume link", "_blank")}
              onMouseOver={() =>
                document
                  .querySelector(".download-btn")
                  .setAttribute("src", downloadHover)
              }
              onMouseOut={() =>
                document
                  .querySelector(".download-btn")
                  .setAttribute("src", download)
              }
            >
              View My Resume
              <img
                src={download}
                alt="download"
                className="download-btn w-[18px] h-[18px] object-contain"
              />
            </button>
          </VerticalTimelineElement> */}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");