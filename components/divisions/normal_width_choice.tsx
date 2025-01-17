import { useState } from 'react';
import Image from 'next/image';
import { divisionIcons } from '@/components/divisions/divisionsIcons';

interface NormalWidthProps {
  selectedIcon: number;
  setSelectedIcon: (index: number) => void;
}

const NormalWidth = ({ selectedIcon, setSelectedIcon }: NormalWidthProps) => {
  const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);

  // Add labels for each icon
  const iconLabels = [
    "UI/UX",
    "Software",
    "Human Resource",
    "Project",
    "Partnership",
    "Public Relations",
    "Creative",
    "Design",
    "Finance"
  ];

  return (
    <div className="w-full flex justify-center">
      <div className="bg-white rounded-[50px] h-20 px-[30px] flex justify-center items-center gap-4">
        {divisionIcons.map((icon, index) => (
          <div
            key={index}
            className="relative"
          >
            {/* Hover Label */}
            {hoveredIcon === index && (
              <div className="absolute -top-[40px] left-1/2 transform -translate-x-1/2 w-max">
                <div className="w-max px-2 py-0.5 bg-[#55457e] rounded-md justify-center items-center gap-2.5 inline-flex">
                  <div className="text-center text-white text-base font-medium font-['Inter']">
                    {iconLabels[index]}
                  </div>
                </div>
              </div>
            )}
            
            {/* Icon Container */}
            <div
              className={`relative w-20 h-20 flex justify-center items-center cursor-pointer transition-all duration-300 ease-in-out
                ${hoveredIcon === index || selectedIcon === index ? 'bg-[#55457E] rounded-none' : 'rounded-lg'}`}
              onClick={() => setSelectedIcon(index)}
              onMouseEnter={() => setHoveredIcon(index)}
              onMouseLeave={() => setHoveredIcon(null)}
            >
              {(selectedIcon === index || hoveredIcon === index) ? (
                <Image 
                  src={icon.selectedSrc}
                  alt={icon.alt} 
                />
              ) : (
                <Image 
                  src={icon.src} 
                  alt={icon.alt} 
                  className=" transition-colors duration-300 ease-in-out" 
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NormalWidth;
