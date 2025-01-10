"use client";

import { useState } from "react";
import { supabase } from "../utils/supabase/supabase";
import Link from "next/link";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });


  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); // Prevent form submission
    const response = await supabase.auth.signInWithPassword({
      email: loginData.email,
      password: loginData.password,
    });

    if (response.error) {
      console.error(response.error.message);
      alert("Email Or Password is incorrect");
    } else {
      window.location.href = "/dashboard/home"; // Redirect after successful login
    }
  }

  

  return (
    <div className="flex items-center justify-center min-h-screen">
      {/* Login Form */}
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-extrabold mb-6 text-center text-black">
          Login
        </h2>
        <div className="mb-4">
          <label
            htmlFor="login-email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            id="login-email"
            name="email"
            type="email"
            required
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="login-password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            id="login-password"
            name="password"
            type="password"
            required
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Log in
        </button>
	
		<button
			onClick={() => window.location.href = "/register"}
		  className="mt-3 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign Up For an Account
        </button>
      </form>

      {/* Register Form */}
      
    </div>
  );
}
