"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import timer from "@/images/timer.svg";
import booklet from "@/images/booklet.svg";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });
  
  const deadline = "2025-01-26T23:59:00";
  
  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const targetTime = new Date(deadline).getTime();
      const difference = targetTime - now;
      
      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        setTimeLeft({ days, hours, minutes });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0 });
      }
    };
    
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <div className="w-full max-w-4xl mx-auto pb-40">
      {/* Main container with relative positioning */}
      <div className="relative h-60 flex flex-col items-center">
        {/* Countdown Timer Section - Always at top */}
        <div className="flex justify-center items-center gap-6 z-10 w-full mb-4 max-md:gap-1">
          {/* Days */}
          <div className="flex flex-col items-center gap-2 max-md:gap-1">
            <div className="text-center text-teal-900 text-lg font-medium">
              Days
            </div>
            <div className="w-24 h-24 bg-teal-900 rounded-md flex items-center justify-center max-md:size-20">
              <span className="text-white text-5xl max-md:text-4xl font-normal">
                {timeLeft.days}
              </span>
            </div>
          </div>
          <span className="text-purple_4 text-5xl max-md:text-4xl">:</span>
          {/* Hours */}
          <div className="flex flex-col items-center gap-2 max-md:gap-1">
            <div className="text-center text-teal-900 text-lg font-medium">
              Hours
            </div>
            <div className="w-24 h-24 bg-teal-900 rounded-md flex items-center justify-center max-md:size-20">
              <span className="text-white text-5xl max-md:text-4xl font-normal">
                {timeLeft.hours}
              </span>
            </div>
          </div>
          <span className="text-purple_4 text-5xl max-md:text-4xl">:</span>
          {/* Minutes */}
          <div className="flex flex-col items-center gap-2 max-md:gap-1">
            <div className="text-center text-teal-900 text-lg font-medium">
              Minutes
            </div>
            <div className="w-24 h-24 bg-teal-900 rounded-md flex items-center justify-center max-md:size-20">
              <span className="text-white text-5xl max-md:text-4xl font-normal">
                {timeLeft.minutes}
              </span>
            </div>
          </div>
        </div>

        {/* Background Gradient - Positioned relative to container */}
        <div className="w-full max-md:w-[90%] h-60 bg-gradient-to-r from-purple_2 to-purple_1 rounded-xl backdrop-blur-sm absolute top-14 -z-10"></div>

        {/* Content Container */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full px-8 mt-auto">
          {/* Title Section */}
          <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
            <div className="text-center md:text-left text-teal-900 text-xl font-medium">
              Until Submission Closed!
            </div>
            <div className="flex items-center mt-2">
              <div className="flex flex-row gap-4">
                <Image src={timer} alt="timer" className="w-7 h-7" />
                <div className="text-center text-teal-900 text-lg font-medium">
                  26 Jan 2025, 23:59 WIB
                </div>
              </div>
            </div>
          </div>

          {/* Booklet Button */}
          <div className="flex items-center gap-3 px-16 py-2 rounded-xl border-2 border-blue-900 bg-transparent shadow-lg">
            <button className="hover:bg-purple_2" onClick={() => window.open("https://drive.google.com/")}>
            <Image src={booklet} alt="booklet" className="w-7 h-7"  />
            <div className="text-center text-blue-900 text-xl font-bold">
              Booklet
            </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;