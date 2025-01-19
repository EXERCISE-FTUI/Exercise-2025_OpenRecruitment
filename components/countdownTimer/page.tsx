"use client";

import Image from "next/image";
import React, {useState, useEffect} from "react";
import timer from "@/public/timer.svg";
import booklet from "@/public/booklet.svg";
import {motion} from "framer-motion";

const CountdownTimer: React.FC = () => {
	const [timeLeft, setTimeLeft] = useState({
		days: 0,
		hours: 0,
		minutes: 0,
	});

	const deadline = "2025-01-26T23:59:00";

	useEffect(() => {
		const calculateTimeLeft = () => {
			const now = new Date().getTime();
			const targetTime = new Date(deadline).getTime();
			const difference = targetTime - now;

			if (difference > 0) {
				const days = Math.floor(difference / (1000 * 60 * 60 * 24));
				const hours = Math.floor(
					(difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
				);
				const minutes = Math.floor(
					(difference % (1000 * 60 * 60)) / (1000 * 60)
				);
				setTimeLeft({days, hours, minutes});
			} else {
				setTimeLeft({days: 0, hours: 0, minutes: 0});
			}
		};

		const timer = setInterval(calculateTimeLeft, 1000);
		return () => clearInterval(timer);
	}, [deadline]);

	return (
		<>
			<motion.div
				className="pb-40 relative w-full"
				initial={{opacity: 0}}
				animate={{opacity: 1}}
				transition={{duration: 1, delay: 1.5}}
			>
				<div
					className="absolute w-full h-1/2"
					style={{
						background: "linear-gradient(0deg, #9D98B3, #9D98B3)",
						filter: "blur(200px)",
						borderRadius: "100px",
					}}
				></div>
				{/* Main container with relative positioning */}
				<div className="relative h-60 flex flex-col lg:flex-row items-center w-full lg:w-9/12 mx-auto">
					{/* Countdown Timer Section - Always at top */}
					<div className="flex flex-col justify-center items-center gap-4 z-10 w-full px-12 lg:px-24">
						{/* Days */}
						<div className="flex items-center justify-center gap-2 lg:gap-4 w-auto h-fit">
							<div className="flex flex-col items-center gap-2 max-md:gap-1">
								<div className="text-center text-blue_3 text-xl lg:text-2xl font-medium">
									Days
								</div>
								<div className="w-20 lg:w-24 h-20 lg:h-24 bg-blue_3 rounded-md flex items-center justify-center max-md:size-16">
									<span className="text-white text-5xl max-md:text-3xl font-bold">
										{timeLeft.days}
									</span>
								</div>
							</div>
							<div className="text-purple_4 text-5xl max-md:text-3xl pt-5">
								:
							</div>
							{/* Hours */}
							<div className="flex flex-col items-center gap-2 max-md:gap-1">
								<div className="text-center text-blue_3 text-xl lg:text-2xl font-medium">
									Hours
								</div>
								<div className="w-20 lg:w-24 h-20 lg:h-24 bg-blue_3 rounded-md flex items-center justify-center max-md:size-16">
									<span className="text-white text-5xl max-md:text-3xl font-bold">
										{timeLeft.hours}
									</span>
								</div>
							</div>
							<span className="text-blue_3 text-5xl max-md:text-3xl pt-5">
								:
							</span>
							{/* Minutes */}
							<div className="flex flex-col items-center gap-2 max-md:gap-1">
								<div className="text-center text-blue_3 text-xl lg:text-2xl font-medium">
									Minutes
								</div>
								<div className="w-20 lg:w-24 h-20 lg:h-24 bg-blue_3 rounded-md flex items-center justify-center max-md:size-16">
									<span className="text-white text-5xl max-md:text-3xl font-bold">
										{timeLeft.minutes}
									</span>
								</div>
							</div>
						</div>

						{/* Title Section */}
						<div className="flex flex-col w-full lg:w-auto justify-center items-center md:items-start mb-4 md:mb-0">
							<p className="text-center w-full text-blue_3 text-lg lg:text-xl font-medium">
								Until Submission Closed!
							</p>
							<div className="flex items-center w-full justify-center">
								<div className="flex flex-row gap-4">
									<Image
										src={timer}
										alt="timer"
										className="w-7 h-7"
									/>
									<div className="text-center text-blue_3 lg:text-lg font-medium">
										26 Jan 2025, 23:59 WIB
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Background Gradient - Positioned relative to container */}
					<div
						className="w-full h-4/5 lg:h-2/3 -bottom-6 lg:bottom-0 lg:rounded-xl backdrop-blur-sm absolute z-0"
						style={{
							background:
								"linear-gradient(90deg, rgba(56, 63, 150, 0.3) 0.27%, rgba(85, 69, 126, 0.3) 50%, rgba(157, 152, 179, 0.3) 100%)",
							backdropFilter: "blur(2px)",
						}}
					></div>

					{/* Content Container */}
					<div className="flex justify-center items-center w-full px-20 z-[10] lg:mt-20">
						{/* Booklet Button */}
						<button
							className="w-full flex items-center gap-3 justify-center px-16 py-3 rounded-xl border-2 border-blue-900 bg-transparent shadow-lg"
							onClick={() =>
								window.open("https://drive.google.com/")
							}
						>
							<Image
								src={booklet}
								alt="booklet"
								className="w-7 h-7"
							/>
							<div className="text-center text-blue-900 text-xl font-bold">
								Booklet
							</div>
						</button>
					</div>
				</div>
			</motion.div>
		</>
	);
};

export default CountdownTimer;
