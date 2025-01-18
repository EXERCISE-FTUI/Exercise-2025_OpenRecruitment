import Image from "next/image";
import timelineSvg from "@/public/timeline_small.svg";

const SmallWidthTimeline = () => {
	return (
		<div className="flex justify-center items-center h-[300]px">
			<Image src='/timeline_small.svg' alt="timeline" />
		</div>
	);
};

export default SmallWidthTimeline;
