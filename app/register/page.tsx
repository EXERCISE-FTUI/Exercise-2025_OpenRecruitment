'use client';

import { useState } from "react";
import { supabase } from "../utils/supabase/supabase";


const Page = () => {
    const [registerData, setRegisterData] = useState({ email: "", password: "" });
    const [step, setStep] = useState(1);

    async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault(); // Prevent form submission
        const response = await supabase.auth.signUp({
          email: registerData.email,
          password: registerData.password,
          options: {
            emailRedirectTo: "http://localhost:3000/login",

          },
        });
    
        if (response.error) {
          console.error(response.error.message);
          alert("Registration failed: " + response.error.message);
        } else {
          setStep(2);
        }
      }
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
        { step === 1  ?(
            <>
        <form
        onSubmit={handleRegister}
        className="mt-4 text-center bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
      >
        <h2 className="text-2xl font-extrabold mb-6 text-center text-black">
          Sign up
        </h2>
        <div className="mb-4">
          <label
            htmlFor="register-email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            id="register-email"
            name="email"
            type="email"
            required
            value={registerData.email}
            onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="register-password"
            className="block text-sm font-medium text-gray-700"
          >
            Password:
          </label>
          <input
            id="register-password"
            name="password"
            type="password"
            required
            value={registerData.password}
            onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Sign up
        </button>
      </form>
      </>
        ) : (
            <div>
                <h1 className="text-4xl">Check your email for a verification link</h1>
            </div>
        )}
    </div>
  )
}

export default Page