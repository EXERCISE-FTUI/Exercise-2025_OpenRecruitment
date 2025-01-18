"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { almImages } from "./almImages";

const sliderCompany = () => {
  const images = [...almImages, ...almImages]; // Duplicate images for seamless loop

  return (
    <div className="w-screen overflow-hidden flex flex-col gap-10 my-12">
      <div className="text-center">
        <span className="text-blue_3 text-[56px] font-normal font-['Inter']">
          Company{" "}
        </span>
        <span className="text-purple_4 text-[56px] font-extrabold font-['Inter']">
          Alumni
        </span>
      </div>
      <div className="relative flex slider-company-gradient items-center ">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 90,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="flex flex-shrink-0 space-x-4 gap-2"
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`alm${index + 1}`}
              className="w-20 md:w-32"
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{
            duration: 90,
            repeat: Infinity,
            repeatType: "loop",
            ease: "linear",
          }}
          className="flex flex-shrink-0 space-x-4 gap-2"
        >
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`alm${index + 1}`}
              className="w-20 md:w-32"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default sliderCompany;
