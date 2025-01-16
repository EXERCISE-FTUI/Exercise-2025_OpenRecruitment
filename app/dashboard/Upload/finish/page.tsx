"use client";
import { Button } from "@/components/ui/button";
import { HomeIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import Confetti from "react-confetti";

function page() {
  return (
    <div className="flex flex-col items-center w-full justify-center text-center min-h-screen space-y-4 ">
      <Confetti
        width={window.innerWidth}
        height={window.innerHeight}
        recycle={false}
        numberOfPieces={500}
      />
      <img src="/lynxpopup.svg" alt="Upload complete" className="" />
      <div className="-translate-y-28 flex flex-col items-center space-y-4">
        <h1 className="text-purple_4 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          Thank You For Registering!
        </h1>
        <h2 className="text-blue_2 scroll-m-20 text-xl font-bold tracking-tight lg:text-2xl">
          Stay tuned for the Exciting next steps!
        </h2>
        <div className="flex justify-center gap-4 md:gap-7 w-full">
          <Link href="/dashboard/home">
            <Button
              variant={"outline"}
              className="hover:-translate-y-0.5 ease-in-out transform transition-all"
            >
              <HomeIcon />
              Home
            </Button>
          </Link>
          <Button className="bg-[#00C200] hover:bg-[#00C200] hover:-translate-y-0.5 ease-in-out transform transition-all">
            <img src="/lineIcon.svg" />
            Join Line Group
          </Button>
        </div>
      </div>
    </div>
  );
}

export default page;
