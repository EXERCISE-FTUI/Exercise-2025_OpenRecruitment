import Image from "next/image";
import timelineSvg from "@/public/timeline_small.svg";

const SmallWidthTimeline = () => {
	return (
		<div className="flex justify-center items-center h-[300]px px-12">
			<Image src={timelineSvg} alt="timeline" />
		</div>
	);
};

export default SmallWidthTimeline;
