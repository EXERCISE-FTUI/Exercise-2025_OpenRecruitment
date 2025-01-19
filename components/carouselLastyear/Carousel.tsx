import {
	EmblaCarouselType,
	EmblaEventType,
	EmblaOptionsType,
} from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import React, {useCallback, useEffect, useRef} from "react";
import "./carousel.css";
import {LastYearCarouselImage} from "./yearImages";

const TWEEN_FACTOR_BASE = 0.2;

type PropType = {
	slides: LastYearCarouselImage[];
	options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
	const {slides, options} = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	const tweenFactor = useRef(0);
	const tweenNodes = useRef<HTMLElement[]>([]);

	const setTweenNodes = useCallback((emblaApi: EmblaCarouselType): void => {
		tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
			return slideNode.querySelector(
				".embla__parallax__layer"
			) as HTMLElement;
		});
	}, []);

	const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
		tweenFactor.current =
			TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
	}, []);

	const tweenParallax = useCallback(
		(emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
			const engine = emblaApi.internalEngine();
			const scrollProgress = emblaApi.scrollProgress();
			const slidesInView = emblaApi.slidesInView();
			const isScrollEvent = eventName === "scroll";

			emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
				let diffToTarget = scrollSnap - scrollProgress;
				const slidesInSnap = engine.slideRegistry[snapIndex];

				slidesInSnap.forEach((slideIndex) => {
					if (isScrollEvent && !slidesInView.includes(slideIndex))
						return;

					if (engine.options.loop) {
						engine.slideLooper.loopPoints.forEach((loopItem) => {
							const target = loopItem.target();

							if (slideIndex === loopItem.index && target !== 0) {
								const sign = Math.sign(target);

								if (sign === -1) {
									diffToTarget =
										scrollSnap - (1 + scrollProgress);
								}
								if (sign === 1) {
									diffToTarget =
										scrollSnap + (1 - scrollProgress);
								}
							}
						});
					}

					const translate =
						diffToTarget * (-1 * tweenFactor.current) * 100;
					const tweenNode = tweenNodes.current[slideIndex];
					tweenNode.style.transform = `translateX(${translate}%)`;
				});
			});
		},
		[]
	);

	useEffect(() => {
		if (!emblaApi) return;

		setTweenNodes(emblaApi);
		setTweenFactor(emblaApi);
		tweenParallax(emblaApi);

		emblaApi
			.on("reInit", setTweenNodes)
			.on("reInit", setTweenFactor)
			.on("reInit", tweenParallax)
			.on("scroll", tweenParallax)
			.on("slideFocus", tweenParallax);
	}, [emblaApi, tweenParallax, setTweenFactor, setTweenNodes]);

	return (
		<div className="embla cursor-grab active:cursor-grabbing">
			<div className="embla__viewport" ref={emblaRef}>
				<div className="embla__container">
					{slides.map((image, index) => (
						<div className="embla__slide" key={index}>
							<div className="embla__parallax">
								<div className="embla__parallax__layer">
									<div className="w-full h-full bg-black relative">
										<Image
											src={image.img}
											key={index}
											alt={`alm${index + 1}`}
											width={500}
											className="rounded-lg h-full object-cover "
										/>
										<p className="bg-red-500 absolute z-[100]">
											{image.title} tes
										</p>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default EmblaCarousel;
