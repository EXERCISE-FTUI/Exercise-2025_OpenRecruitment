import brushIcon from "@/images/div_logo/brush.svg";
import cpuIcon from "@/images/div_logo/cpu.svg";
import dumbellIcon from "@/images/div_logo/dumbell.svg";
import gitForkIcon from "@/images/div_logo/git_fork.svg";
import handshakeIcon from "@/images/div_logo/handshake.svg";
import heartIcon from "@/images/div_logo/heart.svg";
import laptopIcon from "@/images/div_logo/laptop.svg";
import paletteIcon from "@/images/div_logo/palette.svg";
import walletIcon from "@/images/div_logo/wallet.svg";

// Import selected SVGs
import brushSelectedIcon from "@/images/div_logo/selected/brush.svg";
import cpuSelectedIcon from "@/images/div_logo/selected/cpu.svg";
import dumbellSelectedIcon from "@/images/div_logo/selected/dumbell.svg";
import gitForkSelectedIcon from "@/images/div_logo/selected/git_fork.svg";
import handshakeSelectedIcon from "@/images/div_logo/selected/handshake.svg";
import heartSelectedIcon from "@/images/div_logo/selected/heart.svg";
import laptopSelectedIcon from "@/images/div_logo/selected/laptop.svg";
import paletteSelectedIcon from "@/images/div_logo/selected/palette.svg";
import walletSelectedIcon from "@/images/div_logo/selected/wallet.svg";

export const divisionIcons: Array<{
  src: string;
  selectedSrc: string;
  alt: string;
  id: string;
}> = [
  { src: brushIcon, selectedSrc: brushSelectedIcon, alt: "Brush Icon", id: "brush" },
  { src: cpuIcon, selectedSrc: cpuSelectedIcon, alt: "CPU Icon", id: "cpu" },
  { src: dumbellIcon, selectedSrc: dumbellSelectedIcon, alt: "Dumbell Icon", id: "dumbell" },
  { src: gitForkIcon, selectedSrc: gitForkSelectedIcon, alt: "Git Fork Icon", id: "git-fork" },
  { src: handshakeIcon, selectedSrc: handshakeSelectedIcon, alt: "Handshake Icon", id: "handshake" },
  { src: heartIcon, selectedSrc: heartSelectedIcon, alt: "Heart Icon", id: "heart" },
  { src: laptopIcon, selectedSrc: laptopSelectedIcon, alt: "Laptop Icon", id: "laptop" },
  { src: paletteIcon, selectedSrc: paletteSelectedIcon, alt: "Palette Icon", id: "palette" },
  { src: walletIcon, selectedSrc: walletSelectedIcon, alt: "Wallet Icon", id: "wallet" },
] as const;