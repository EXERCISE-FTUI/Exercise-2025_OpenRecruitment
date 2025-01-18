import Image from "next/image";


const NormalWidthTimeline = () => {
	return (
		<div className="flex justify-center items-center h-[300]px">
			<Image src='/timeline.svg' alt="timeline" />
		</div>
	);
};

export default NormalWidthTimeline;
