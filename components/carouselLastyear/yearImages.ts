import {StaticImageData} from "next/image";
import alm1 from "@/public/lastyear/img1.jpg";
import internship from "@/public/lastyear/internship.png";
import alm2 from "@/public/lastyear/img2.jpg";
import alm3 from "@/public/lastyear/img3.jpg";

export type LastYearCarouselImage = {
	img: StaticImageData;
	title: string;
};

export const yearImages: LastYearCarouselImage[] = [
	{img: internship, title: "Internship"},
	{img: alm1, title: "Alm1"},
	{img: alm2, title: "Alm2"},
	{img: alm3, title: "Alm3"},
];
