import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
const serviceData = [
  {
    Icon: RxDesktop,
    title: "Full-Stack Development",
    description:
      "Building complete web applications using the MERN Stack (MongoDB, Express, React, Node.js) with secure and scalable architecture.",
  },
  {
    Icon: RxCrop,
    title: "Ionic App Development",
    description:
      "Developing hybrid mobile apps with the Ionic Framework that deliver smooth performance on both Android and iOS platforms.",
  },
  {
    Icon: RxPencil2,
    title: "Frontend Development",
    description:
      "Creating responsive, attractive, and user-friendly interfaces using HTML, CSS, Bootstrap, and TypeScript.",
  },
  {
    Icon: RxReader,
    title: "Backend & API Integration",
    description:
      "Designing and integrating RESTful APIs with Node.js and MongoDB to ensure reliable and efficient data management.",
  },
  {
    Icon: RxRocket,
    title: "Basic DevOps & Deployment",
    description:
      "Deploying applications using platforms like Railway, Vercel, and GitHub — ensuring smooth delivery and version control.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
