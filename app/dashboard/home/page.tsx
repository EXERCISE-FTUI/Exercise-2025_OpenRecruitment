"use client";

import CountdownTimer from "@/components/countdownTimer/page";
import SliderCompany from "@/components/sliderCompany/page";
import opregHeader from "@/images/opregHeader.svg";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
<<<<<<< HEAD
import CountdownTimer from "@/components/countdownTimer/page"
import DefineExer from "./defineExer";
import OurVision from "./ourVision";
import OurMission from "./ourMission";
import OurValues from "./ourValues";

=======
import { useState } from "react";
import CarouselLastYear from "@/components/carouselLastyear/Page";
import CardProject from "@/components/cardProject/Page";
>>>>>>> 8b3c5edcceae62e93229d8f747f1abfd5d3fb0d1
const HomePage = () => {
  const [user, setUser] = useState<User | null>(null);

  /*
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user); // Set user if logged in
    };

    checkUser();
  }, []);

  
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setUser(null); // Clear user state
      alert("You have logged out successfully!");
    } else {
      alert("Failed to log out: " + error.message);
    }
  };
   */

  return (
    <div>
      <div className="mt-1">
        <Image src={opregHeader} alt="header" className="w-full pt-10" />
      </div>
      <CountdownTimer />
<<<<<<< HEAD
      <DefineExer />
      <OurVision />
      <OurMission />
      <OurValues />
=======
      <CarouselLastYear/>
      <CardProject/>
      <SliderCompany />
>>>>>>> 8b3c5edcceae62e93229d8f747f1abfd5d3fb0d1
    </div>
  );
};

export default HomePage;
