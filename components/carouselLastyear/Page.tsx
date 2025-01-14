import { EmblaOptionsType } from "embla-carousel";
import Carousel from "./Carousel";

const CarouselLastYear = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="w-screen flex flex-col justify-center items-center my-12">
      <div className="text-center text-blue_3 text-6xl font-['Inter'] mb-14">
        <span className="text-purple_4 font-black">
          What We Do{" "}
        </span>
        <span>Last Year</span>
      </div>
      <Carousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default CarouselLastYear;
