import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Card.css";
import { projectData } from "./data";

export default function Card() {
  const projectDatas = Object.values(projectData);
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {projectDatas.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col justify-center items-center text-center p-3 gap-4 overflow-hidden font-[inter]">
              <h1 className="text-3xl mx-1 font-black mb-4">{project.title}</h1>
              <Image
                src={project.img}
                alt={project.title}
                height={160}
                objectFit="cover"
                className="h-[160px]"
              />
              <p className="text-lg mx-4">{project.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
