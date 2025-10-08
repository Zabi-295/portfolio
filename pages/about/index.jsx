import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";
import {
  FaCss3,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiIonic,
  SiFirebase,
  SiVercel,
  SiRailway,
} from "react-icons/si";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// updated data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend Development",
        icons: [FaHtml5, FaCss3, FaBootstrap, FaJs, SiTypescript, FaReact, SiIonic],
      },
      {
        title: "Backend Development",
        icons: [FaNodeJs, SiExpress, SiMongodb, SiFirebase],
      },
      {
        title: "Basic DevOps & Tools",
        icons: [FaGithub, SiVercel, SiRailway],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Full-Stack Developer (Freelance / Personal Projects)",
        stage: "2023 - Present",
      },
      {
        title: "App Developer - Learn2Earn Software House (Internship)",
        stage: "2022 - 2023",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "BS Software Engineering - University of Sahiwal, Pakistan",
        stage: "2022 - 2026",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: "MERN Stack Development - Self Taught & Practice Projects",
        stage: "2023",
      },
      {
        title: "Ionic Framework Certification (App Development)",
        stage: "2023",
      },
    ],
  },
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[250px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Building modern <span className="text-accent">web & mobile</span> apps with MERN & Ionic.
          </motion.h2>

          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            I’m Jahanzaib Alam, a passionate Full-Stack Developer from Pakistan 🇵🇰,
            currently pursuing a Bachelor’s degree in Software Engineering at the University of Sahiwal.
            I build responsive, high-performing applications using the MERN Stack and Ionic Framework.
            I also have basic experience in DevOps, including Git, GitHub, and deployment on Railway & Vercel.
          </motion.p>

          {/* counters (optional, disabled) */}
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-center text-white/60"
              >
                {/* title */}
                <div className="font-light mb-2 md:mb-0">{item.title}</div>
                <div className="hidden md:flex">-</div>
                <div>{item.stage}</div>

                <div className="flex gap-x-4">
                  {/* icons */}
                  {item.icons?.map((Icon, iconI) => (
                    <div key={iconI} className="text-2xl text-white">
                      <Icon />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
