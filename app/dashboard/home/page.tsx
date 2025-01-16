'use client';

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { supabase } from "@/app/utils/supabase/supabase";
import { User } from "@supabase/supabase-js";
import opregHeader from '@/images/opregHeader.svg';
import Image from "next/image";
import CountdownTimer from "@/components/countdownTimer/page"
import DefineExer from "./defineExer";
import OurVision from "./ourVision";
import OurMission from "./ourMission";
import OurValues from "./ourValues";

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
      <DefineExer />
      <OurVision />
      <OurMission />
      <OurValues />
    </div>
  );
};

export default HomePage;
