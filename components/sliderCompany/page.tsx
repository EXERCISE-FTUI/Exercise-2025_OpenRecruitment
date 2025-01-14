"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { almImages } from "./almImages";

const sliderCompany = () => {
  const aImages = Object.values(almImages);

  // Duplicate the image array to create a seamless loop
  const images = [...aImages, ...aImages];

  return (
    <div className="w-screen overflow-hidden flex flex-col gap-10">
      <div className="text-center">
        <span className="text-blue_3 text-[56px] font-normal font-['Inter']">
          Company{" "}
        </span>
        <span className="text-purple_4 text-[56px] font-extrabold font-['Inter']">
          Alumni
        </span>
      </div>
      <div className="relative flex items-center">
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 75,
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
              height={120}
              width={120}
            />
          ))}
        </motion.div>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{
            duration: 75,
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
              height={120}
              width={120}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default sliderCompany;
