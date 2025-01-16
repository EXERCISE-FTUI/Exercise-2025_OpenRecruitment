import { EmblaOptionsType } from "embla-carousel";
import Carousel from "./Carousel";

const CarouselLastYear = () => {
  const OPTIONS: EmblaOptionsType = { loop: true };
  const SLIDE_COUNT = 3;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  return (
    <div className="w-screen flex justify-center items-center my-12">
      <div className="w-4/5 flex flex-col justify-center items-center py-12 rounded-2xl outline outline-purple_4">
        <div className="text-center text-blue_3 text-6xl font-['Inter'] mb-14">
          <span className="text-purple_4 font-black">What We Do </span>
          <span>Last Year</span>
        </div>
        <Carousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
};

export default CarouselLastYear;
