import Image from "next/image";
import timelineSvg from "@/public/timeline.svg";

const NormalWidthTimeline = () => {
	return (
		<div className="flex justify-center items-center h-[300]px max-w-[90%]">
			<Image src={timelineSvg} alt="timeline" />
		</div>
	);
};

export default NormalWidthTimeline;
