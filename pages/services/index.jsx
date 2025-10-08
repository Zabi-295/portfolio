import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import ServiceSlider from "../../components/ServiceSlider";
import { fadeIn } from "../../variants";

// === Updated Service Data ===
export const serviceData = [
  {
    title: "Full-Stack App Development",
    description:
      "Building modern, high-performance web and mobile applications using the MERN Stack (MongoDB, Express, React, Node.js)",
  },
  {
    title: "Frontend Development",
    description:
      "Creating responsive and interactive user interfaces with HTML, CSS, Bootstrap, and TypeScript, ensuring smooth user experience across all devices.",
  },
  {
    title: "Backend & API Integration",
    description:
      "Developing secure RESTful APIs and integrating databases using Node.js and MongoDB to deliver complete and scalable backend solutions.",
  },
  {
    title: "Basic DevOps & Deployment",
    description:
      "Setting up environments, automating builds, and deploying applications using tools like Git, GitHub, Railway, and Vercel for smooth CI/CD workflows.",
  },
  {
    title: "UI/UX & App Optimization",
    description:
      "Designing clean and intuitive interfaces inspired by modern trends, optimizing performance, and ensuring seamless cross-platform compatibility.",
  },
];

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-8"
            >
              My <span className="text-accent">Services</span>
            </motion.h2>

            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              I specialize in building scalable web and mobile applications with
              clean design, robust backend, and smooth deployment workflows.
              Every project I create focuses on performance, user experience,
              and modern technologies.
            </motion.p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
