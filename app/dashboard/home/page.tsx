'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { supabase } from "@/app/utils/supabase/supabase";
import { User } from "@supabase/supabase-js";
import opregHeader from '@/images/opregHeader.svg';
import Image from "next/image";
import CountdownTimer from "@/components/countdownTimer/page"
import DefineExer from "@/components/homePage/defineExer"
import OurVision from "@/components/homePage/ourVision"
import OurMission from "@/components/homePage/ourMission"
import OurValues from "@/components/homePage/ourValues"
import HomePageExer from "@/components/homePage/homePage";
import CarouselLastYear from "@/components/carouselLastyear/Page";
import CardProject from "@/components/cardProject/Page";
import SliderCompany from "@/components/sliderCompany/page";


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
