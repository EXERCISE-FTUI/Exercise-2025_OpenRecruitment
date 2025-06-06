import Image from "next/image";
import {divisionIcons} from "@/components/divisions/divisionsIcons";

interface SmallerWidthProps {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
	selectedIcon: number;
	setSelectedIcon: (index: number) => void;
}

const SmallerWidth = ({
	isOpen,
	setIsOpen,
	selectedIcon,
	setSelectedIcon,
}: SmallerWidthProps) => {
	const divisionNames = [
		"Human Resource",
		"Finance and Secretary",
		"Relation",
		"UI/UX",
		"Software",
		"Hardware",
		"Project Management",
		"Creative Marketing",
		"Training and Development",
	];

	return (
		<div className="w-full flex justify-center px-4">
			<div className="relative w-full">
				<button
					onClick={() => setIsOpen(!isOpen)}
					className={`w-full h-auto py-2 relative bg-neutral-50 shadow-[0px_4px_10px_0px_rgba(0,0,0,0.10)] flex items-center justify-between px-6
            ${isOpen ? "rounded-t-xl" : "rounded-xl"}`}
				>
					<div className="flex items-center gap-4">
						<div className="w-10 flex items-center justify-center">
							<Image
								src={divisionIcons[selectedIcon].src}
								alt={divisionIcons[selectedIcon].alt}
								width={50}
								height={50}
							/>
						</div>
						<span className="text-[#55457e] text-lg font-medium font-['Inter'] truncate">
							{divisionNames[selectedIcon]}
						</span>
					</div>
					<svg
						className={`w-8 h-8 transition-transform ${
							isOpen ? "rotate-180" : ""
						}`}
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</button>

				{isOpen && (
					<div className="absolute w-full bg-white rounded-b-lg shadow-lg p-2">
						<div className="grid grid-rows-2 grid-cols-5 gap-3">
							{divisionIcons.map((icon, index) => (
								<div
									key={index}
									className={`flex rounded-lg justify-center items-center cursor-pointer transition-all duration-300 ease-in-out
                    ${selectedIcon === index ? "bg-[#55457E]" : ""}`}
									onClick={() => {
										setSelectedIcon(index);
										setIsOpen(false);
									}}
								>
									{selectedIcon === index ? (
										<Image
											src={icon.selectedSrc}
											alt={icon.alt}
											width={50}
											height={50}
										/>
									) : (
										<Image
											src={icon.src}
											alt={icon.alt}
											width={50}
											height={50}
										/>
									)}
								</div>
							))}
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default SmallerWidth;
