"use client";

import { useState } from "react";
import { supabase } from "../utils/supabase/supabase";
import { LoginForm } from "./_components/LoginForm";
import Image from "next/image";
import { useToast } from "@/hooks/use-toast";

export default function LoginPage() {
  const { toast } = useToast();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    setLoading(true);
    e.preventDefault(); // Prevent form submission
    const response = await supabase.auth.signInWithPassword({
      email: loginData.email,
      password: loginData.password,
    });

    if (response.error) {
      toast({
        title: "Login failed",
        variant: "destructive",
        description: response.error.message,
      });
    } else {
      toast({
        title: "Login successful!",
      });
      window.location.href = "/dashboard/home";
    }
    setLoading(false);
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen ">
      <h1 className=" flex text-purple_4 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
        Login
      </h1>
      <div className="flex mt-5 md:mt-0 w-full items-center justify-center md:justify-evenly">
        <LoginForm
          handleLogin={handleLogin}
          setLoginData={setLoginData}
          loginData={loginData}
          loading={loading}
        />
        <Image
          src="/Graphic.svg"
          alt="logo"
          width={600}
          height={600}
          className="hidden md:flex"
        />
      </div>
    </div>
  );
}
