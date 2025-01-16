import React from 'react';
import Image from 'next/image';
import whitePoly from '@/images/whitePoly.svg';
import bluePoly from '@/images/bluePoly.svg';

interface BracketCardProps {
  number: number;
  message: string;
}

const BracketCard: React.FC<BracketCardProps> = ({ number, message }) => {
  const isOdd = number % 2 !== 0;
  const bracketColor = isOdd ? 'bg-blue_2' : 'bg-purple_4';
  const textColor = isOdd ? 'text-white_1' : 'text-white_2';
  const polygonSrc = isOdd ? whitePoly : bluePoly;
  const polygonTextColor = isOdd ? 'text-blue_2' : 'text-white_2';
  const rotation = isOdd ? 'rotate-12' : 'rotate-[-12deg]';

  return (
    <div className={`${bracketColor} w-full h-auto pl-20 pr-6 py-3 rounded-3xl shadow-xl z-0 relative`}>
      <p className={`${textColor} text-md font-light`}>
        {message}
      </p>
      <div className="absolute top-[-12px] max-md:top-0 left-[-30px] flex justify-center items-center">
        <Image src={polygonSrc} alt="polygon" className="w-20 h-20 z-10" />
        <span className={`absolute ${polygonTextColor} font-black text-4xl ${rotation} z-20`}>
          {number}
        </span>
      </div>
    </div>
  );
};

const OurMission: React.FC = () => {
  const data: BracketCardProps[] = [
    { number: 1, message: 'Creating a warm and inclusive atmosphere that fosters togetherness and strengthens relationships among members during all activities.' },
    { number: 2, message: 'Empowering members to face challenges confidently, learn new skills, and grow as a united team.' },
    { number: 3, message: 'Fostering synergy by enhancing communication, integration, and engagement, which strengthens harmony and resilience within the organization.' },
    { number: 4, message: 'Leveraging social media to creatively express EXERCISE’s identity, build connections, and engage with audiences across various platforms.' },
    { number: 5, message: 'Encouraging strategic collaborations with other organizations to amplify impact and expand professional networks.' },
    { number: 6, message: 'Equipping members with adaptive and innovative skills to tackle future challenges with confidence and success.' },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto pb-32 flex flex-col justify-center items-center max-md:p-4 relative">
      <h1 className="text-7xl text-center font-normal text-blue_2 max-md:text-6xl mb-14 max-md:mb-5">
        Our <span className="font-black text-purple_4">Mission</span>
      </h1>
      <div className="grid grid-cols-1 w-full gap-10 max-md:gap-6 relative max-md:p-4">
        {data.map((item) => (
          <BracketCard key={item.number} number={item.number} message={item.message} />
        ))}
      </div>
    </div>
  );
};

export default OurMission;
