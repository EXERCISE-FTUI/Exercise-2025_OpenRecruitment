"use client";

import CountdownTimer from "@/components/countdownTimer/page";
import SliderCompany from "@/components/sliderCompany/page";
import opregHeader from "@/images/opregHeader.svg";
import { User } from "@supabase/supabase-js";
import Image from "next/image";
import { useState } from "react";

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
      <SliderCompany />
    </div>
  );
};

export default HomePage;
