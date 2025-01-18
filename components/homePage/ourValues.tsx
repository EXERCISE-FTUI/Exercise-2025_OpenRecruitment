import React from "react";
import {motion} from "framer-motion";

const OurValues = () => {
	return (
		<div className="w-full max-w-5xl mx-auto pb-32 flex flex-col justify-center items-center max-md:p-4">
			<motion.h1
				initial={{opacity: 0}}
				whileInView={{opacity: 1}}
				transition={{duration: 1}}
				viewport={{once: true, margin: "-300px"}}
				className="text-7xl text-center font-normal text-blue_2 max-md:text-6xl mb-24 max-md:mb-5 "
			>
				Our <span className="font-black text-purple_4">Values</span>
			</motion.h1>
			<div className="grid grid-cols-3 max-md:grid-cols-1 max-md:justify-center max-md:items-center relative gap-10">
				<motion.div
					initial={{opacity: 0}}
					whileInView={{opacity: 1}}
					transition={{duration: 1}}
					viewport={{once: true, margin: "-300px"}}
					className="bg-white_2 col-span-1 rounded-3xl top-10 text-lg h-72 text-center p-10 border-purple_4 border-4 m-auto leading-tight max-md:mb-6 shadow-xl"
				>
					<p className="font-light flex items-center justify-center w-full h-full">
						Symbolizing togetherness and a sense of family within
						EXERCISE 2025. Every member works in harmony, creating
						an inclusive and supportive environment, in line with
						the spirit of &quot;Together We Rise.&quot;
					</p>
					<div className="flex justify-center items-center w-full h-full">
						<div className="absolute top-[-16px] bg-purple_4 text-white font-InterExer font-black text-3xl py-2 px-6 rounded-md">
							UNITE
						</div>
					</div>
				</motion.div>

				<div className="relative col-span-1 w-full bg-white_2 text-lg h-72">
					<motion.div
						initial={{opacity: 0}}
						whileInView={{opacity: 1}}
						transition={{duration: 1, delay: 0.2}}
						viewport={{once: true, margin: "-300px"}}
						className="bottom-12 absolute w-full h-full text-center p-10 border-purple_5 border-4 m-auto leading-tight max-md:mb-6 shadow-xl rounded-3xl"
					>
						<p className="font-light flex items-center justify-center w-full h-full">
							Focusing on empowering members to grow, learn, and
							confidently face challenges. This core value
							emphasizes EXERCISE&quot;s commitment to equipping
							members with meaningful skills and experiences.
						</p>
						<div className="flex justify-center items-center w-full h-full">
							<div className="absolute top-[-20px] bg-purple_5 text-white font-bold text-3xl py-2 px-6 rounded-md">
								EMPOWER
							</div>
						</div>
					</motion.div>
				</div>

				<motion.div
					initial={{opacity: 0}}
					whileInView={{opacity: 1}}
					transition={{duration: 1, delay: 0.5}}
					viewport={{once: true, margin: "-300px"}}
					className="relative col-span-1 bg-white_2 rounded-3xl max-md:top-0 text-lg h-72 text-center p-10 border-purple_4 border-4 m-auto leading-tight shadow-xl"
				>
					<p className="font-light flex items-center justify-center w-full h-full">
						Reflecting the spirit of continuous growth through fresh
						ideas, creative solutions, and new approaches that take
						EXERCISE beyond boundaries, in line with the tagline
						&quot;Beyond Limits.&quot;
					</p>
					<div className="flex justify-center items-center w-full h-full">
						<div className="absolute top-[-20px] bg-purple_4 text-white font-bold text-3xl py-2 px-6 rounded-md">
							INNOVATE
						</div>
					</div>
				</motion.div>
			</div>
		</div>
	);
};

export default OurValues;
