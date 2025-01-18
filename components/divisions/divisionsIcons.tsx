import brushIcon from "@/public/div_logo/brush.svg";
import cpuIcon from "@/public/div_logo/cpu.svg";
import dumbellIcon from "@/public/div_logo/dumbell.svg";
import gitForkIcon from "@/public/div_logo/git_fork.svg";
import handshakeIcon from "@/public/div_logo/handshake.svg";
import heartIcon from "@/public/div_logo/heart.svg";
import laptopIcon from "@/public/div_logo/laptop.svg";
import paletteIcon from "@/public/div_logo/palette.svg";
import walletIcon from "@/public/div_logo/wallet.svg";

// Import selected SVGs
import brushSelectedIcon from "@/public/div_logo/selected/brush.svg";
import cpuSelectedIcon from "@/public/div_logo/selected/cpu.svg";
import dumbellSelectedIcon from "@/public/div_logo/selected/dumbell.svg";
import gitForkSelectedIcon from "@/public/div_logo/selected/git_fork.svg";
import handshakeSelectedIcon from "@/public/div_logo/selected/handshake.svg";
import heartSelectedIcon from "@/public/div_logo/selected/heart.svg";
import laptopSelectedIcon from "@/public/div_logo/selected/laptop.svg";
import paletteSelectedIcon from "@/public/div_logo/selected/palette.svg";
import walletSelectedIcon from "@/public/div_logo/selected/wallet.svg";

export const divisionIcons: Array<{
	src: string;
	selectedSrc: string;
	alt: string;
	id: string;
}> = [
	{
		src: heartIcon,
		selectedSrc: heartSelectedIcon,
		alt: "Heart Icon",
		id: "heart",
	},
	{
		src: brushIcon,
		selectedSrc: brushSelectedIcon,
		alt: "Brush Icon",
		id: "brush",
	},
	{
		src: handshakeIcon,
		selectedSrc: handshakeSelectedIcon,
		alt: "Handshake Icon",
		id: "handshake",
	},
	{
		src: paletteIcon,
		selectedSrc: paletteSelectedIcon,
		alt: "Palette Icon",
		id: "palette",
	},
	{
		src: laptopIcon,
		selectedSrc: laptopSelectedIcon,
		alt: "Laptop Icon",
		id: "laptop",
	},
	{src: cpuIcon, selectedSrc: cpuSelectedIcon, alt: "CPU Icon", id: "cpu"},
	{
		src: gitForkIcon,
		selectedSrc: gitForkSelectedIcon,
		alt: "Git Fork Icon",
		id: "git-fork",
	},
	{
		src: walletIcon,
		selectedSrc: walletSelectedIcon,
		alt: "Wallet Icon",
		id: "wallet",
	},
	{
		src: dumbellIcon,
		selectedSrc: dumbellSelectedIcon,
		alt: "Dumbell Icon",
		id: "dumbell",
	},
] as const;
