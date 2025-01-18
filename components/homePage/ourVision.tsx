import React from "react";
import {motion} from "framer-motion";

const OurVision = () => {
	return (
		<motion.div
			initial={{opacity: 0}}
			whileInView={{opacity: 1}}
			transition={{duration: 1}}
			viewport={{once: true, margin: "-250px"}}
			className="w-full max-w-4xl mx-auto mb-24 flex flex-col justify-center items-center max-md:p-4"
		>
			<h1 className="text-7xl text-center font-normal text-blue_2 max-md:text-6xl mb-8 max-md:mb-5 ">
				Our <span className="font-black text-purple_4">Vision</span>
			</h1>
			<div className="w-full h-auto p-4 text-center bg-gradient-to-r from-blue_2 to-purple_4">
				<p className="text-white_1 text-md font-light">
					EXERCISE 2025 as a professional, inspiring, and supportive
					family where every member can grow, learn, and gain
					meaningful experiences. Bringing EXERCISE to greater
					recognition across the Faculty of Engineering and other
					faculties through innovation, a sense of family values, and
					a spirit of collaboration.
				</p>
			</div>
		</motion.div>
	);
};

export default OurVision;
