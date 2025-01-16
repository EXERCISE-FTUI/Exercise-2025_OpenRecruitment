"use client";

import CountdownTimer from "@/components/countdownTimer/page";
import SliderCompany from "@/components/sliderCompany/page";

import { User } from "@supabase/supabase-js";

import { useState } from "react";
import CarouselLastYear from "@/components/carouselLastyear/Page";
import CardProject from "@/components/cardProject/Page";
import HomePageExer from "@/components/homePage/homePage";
import DefineExer from "@/components/homePage/defineExer";
import OurMission from "@/components/homePage/ourMission";
import OurValues from "@/components/homePage/ourValues";
import OurVision from "@/components/homePage/ourVision";

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
        <HomePageExer />  
      </div>
      <CountdownTimer />
      <DefineExer />
      <OurVision />
      <OurMission />
      <OurValues />
      <CarouselLastYear/>
      <CardProject/>
      <SliderCompany />
    </div>
  );
};

export default HomePage;
