"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { supabase } from "@/app/utils/supabase/supabase";
import { User } from "@supabase/supabase-js";

const HomePage = () => {
  const [user, setUser] = useState<User | null>(null);

  // Function to detect login status
  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user); // Set user if logged in
    };

    checkUser();
  }, []);

  // Function to handle logout
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      setUser(null); // Clear user state
      alert("You have logged out successfully!");
    } else {
      alert("Failed to log out: " + error.message);
    }
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="mb-10 text-9xl">EXERCISE FTUI</div>
      <div>
        <Link
          className="bg-blue-500 hover:bg-blue-700 text-white font-extrabold py-2 px-4 rounded size-auto p-4 text-xl"
          href={"/dashboard/upload"}
        >
          Upload Form
        </Link>
      </div>
      <div className="mt-6">
        {user ? (
          // Show logout button if user is logged in
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-700 text-white font-extrabold py-2 px-4 rounded size-auto p-4 text-xl"
          >
            Logout
          </button>
        ) : (
          // Show login link if user is not logged in
          <Link
            href={"/login"}
            className="bg-green-500 hover:bg-green-700 text-white font-extrabold py-2 px-4 rounded size-auto p-4 text-xl"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default HomePage;
