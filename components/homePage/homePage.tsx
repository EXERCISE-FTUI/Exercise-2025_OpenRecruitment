import React from "react";
import Image from "next/image";
import {motion} from "framer-motion";

const createFallingStar = (delay: number) => ({
	initial: {
		y: -100,
		x: 0,
		opacity: 0,
	},
	animate: {
		y: 800,
		x: [0, 80, -80, 0],
		opacity: [0, 1, 1, 0],
		transition: {
			duration: 4,
			repeat: Infinity,
			repeatDelay: 0,
			ease: "linear",
			delay: delay,
		},
	},
});

const HomePageExer = () => {
	const starDelays = [0.2, 1.5, 0.8, 2.1, 1.2, 0.5, 1.8];

	return (
		<div className="w-full lg:mt-0 lg:h-[500px] pb-10 lg:pb-20 overflow-x-clip relative">
			<div className="w-full h-[130%] flex flex-col justify-center items-center">
				<h1 className="text-7xl max-md:text-4xl font-black text-blue_3">
					<motion.span
						className="bg-gradient-to-r from-purple_3 to-gray_2 bg-clip-text text-transparent"
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{
							duration: 2,
						}}
					>
						Open
					</motion.span>{" "}
					<motion.span
						initial={{opacity: 0}}
						animate={{opacity: 1}}
						transition={{
							delay: 0.5,
							duration: 3,
						}}
					>
						Recruitment
					</motion.span>
				</h1>
				<motion.div
					initial={{opacity: 0}}
					animate={{opacity: 1}}
					transition={{delay: 1.5, duration: 2}}
				>
					<div className="p-6">
						<div className="px-4 py-2 w-auto h-auto bg-blue_3 text-white_2">
							<p className="text-5xl max-md:text-2xl text-center">
								EXERCISE 2025
							</p>
						</div>
					</div>
					<div className="w-full gap-2 text-center">
						<Image
							src="/headerExer.svg"
							alt="headerExer"
							className="w-full h-[100px] z-10"
						/>
						<p className="text-blue_3 text-2xl max-md:text-lg font-extrabold italic">
							#IntoTheExerverse
						</p>
					</div>
				</motion.div>
			</div>
			{/*Left Section */}
			<Image
				src="/hexagonLeft.svg"
				alt="hexagonLeft"
				className="absolute top-20 left-0 size z-0 max-lg:hidden"
			/>

			<motion.img
				variants={createFallingStar(starDelays[0])}
				initial="initial"
				animate="animate"
				src="/star1_topLeft.svg"
				alt="star1_topLeft"
				className="absolute top-52 left-64 size-16 max-lg:left-14 max-lg:size-10 z-0"
			/>

			<motion.img
				variants={createFallingStar(starDelays[2])}
				initial="initial"
				animate="animate"
				src="/star2_middleLeft.svg"
				alt="star2_middleLeft"
				className="absolute top-[340px] left-[380px] size max-lg:left-20 max-lg:size-7 max-lg:rotate-[28deg] z-0"
			/>

			<motion.img
				variants={createFallingStar(starDelays[3])}
				initial="initial"
				animate="animate"
				src="/star3_bottomRight.svg"
				alt="star3_bottomRight"
				className="absolute top-0 left-48 size-32 max-lg:left-[-38px] max-lg:size-24 z-0"
			/>

			{/*Right Section */}
			<Image
				src="/polygonRight.svg"
				alt="polygonRight"
				className="absolute top-44 right-0 size z-0 max-lg:hidden"
			/>

			<motion.img
				variants={createFallingStar(starDelays[4])}
				initial="initial"
				animate="animate"
				src="/star1_topLeft.svg"
				alt="star1_topLeft"
				className="absolute top-40 right-48 size z-0 max-lg:right-0 max-lg:size-20"
			/>

			<motion.img
				variants={createFallingStar(starDelays[5])}
				initial="initial"
				animate="animate"
				src="/star2_middleLeft.svg"
				alt="star2_middleLeft"
				className="absolute top-80 right-[340px] size z-0 max-lg:size-8 max-lg:right-32 max-md:right-16"
			/>

			<motion.img
				variants={createFallingStar(starDelays[6])}
				initial="initial"
				animate="animate"
				src="/star1_topLeft.svg"
				alt="star1_topLeft"
				className="absolute top-0 right-52 size-12 z-0 max-lg:top-[440px] max-lg:size-6 max-lg:right-8"
			/>
		</div>
	);
};

export default HomePageExer;
