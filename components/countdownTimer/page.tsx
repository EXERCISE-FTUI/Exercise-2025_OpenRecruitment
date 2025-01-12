"use client";

import React, { useState, useEffect } from "react";

const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  const deadline = "2025-01-26T23:59:00"; // Deadline tanggal dan waktu

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

    return () => clearInterval(timer); // Cleanup on component unmount
  }, [deadline]);

  return (
    <div className="w-full max-w-4xl h-60 relative mx-auto">
      {/* Background Gradient */}
      <div className="w-full h-44 absolute top-14 bg-gradient-to-r from-blue-900 via-purple-700 to-gray-400 rounded-2xl backdrop-blur-sm"></div>

      {/* Booklet Button */}
      <div className="w-96 h-16 absolute top-28 right-0 flex items-center gap-3 px-10 py-2 rounded-xl border-2 border-blue-900 bg-white shadow-lg">
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden"></div>
        <div className="text-center text-blue-900 text-xl font-bold">Booklet</div>
      </div>

      {/* Title Section */}
      <div className="w-80 h-20 absolute top-36 left-10">
        <div className="text-center text-teal-900 text-xl font-medium">
          Until Submission Closed!
        </div>
        <div className="flex items-center mt-2">
          <div className="w-7 h-7 flex items-center justify-center"></div>
          <div className="ml-2 text-center text-teal-900 text-lg font-medium">
            26 Jan 2025, 23:59 WIB
          </div>
        </div>
      </div>

      {/* Countdown Timer */}
      <div className="absolute top-0 left-24 flex items-center gap-6">
        {/* Days */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-center text-teal-900 text-lg font-medium">
            Days
          </div>
          <div className="w-24 h-24 bg-teal-900 rounded-md flex items-center justify-center">
            <span className="text-white text-5xl font-normal">
              {timeLeft.days}
            </span>
          </div>
        </div>
        <span className="text-purple-700 text-5xl">:</span>
        {/* Hours */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-center text-teal-900 text-lg font-medium">
            Hours
          </div>
          <div className="w-24 h-24 bg-teal-900 rounded-md flex items-center justify-center">
            <span className="text-white text-5xl font-normal">
              {timeLeft.hours}
            </span>
          </div>
        </div>
        <span className="text-purple-700 text-5xl">:</span>
        {/* Minutes */}
        <div className="flex flex-col items-center gap-2">
          <div className="text-center text-teal-900 text-lg font-medium">
            Minutes
          </div>
          <div className="w-24 h-24 bg-teal-900 rounded-md flex items-center justify-center">
            <span className="text-white text-5xl font-normal">
              {timeLeft.minutes}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
