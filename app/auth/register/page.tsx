"use client";

import {useState} from "react";
import {RegisterForm} from "./_components/RegisterForm";
import Image from "next/image";
import {useToast} from "@/hooks/use-toast";

const Page = () => {
	const {toast} = useToast();
	const [registerData, setRegisterData] = useState({email: "", password: ""});
	const [confirmPassword, setConfirmPassword] = useState("");
	const [step, setStep] = useState(1);

	async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault(); // Prevent form submission
		if (registerData.password !== confirmPassword) {
			toast({
				title: "Password do not match!",
				variant: "destructive",
				description: "Your passwords do not match. Please try again.",
			});
			return;
		}

		const data = await fetch("/api/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(registerData),
		});

		const response = await data.json();

		console.log(response);

		// const response = await supabase.auth.signUp({
		// 	email: registerData.email,
		// 	password: registerData.password,
		// 	options: {
		// 		emailRedirectTo: window.location.origin + "/login",
		// 	},
		// });

		if (response.error) {
			toast({
				title: response.error,
				variant: "destructive",
				description: response.error.message,
			});
		} else {
			toast({
				color: "green",
				title: "Registration successful!",
				description: "Please check your email for a verification link.",
			});
			setStep(2);
		}
	}

	return (
		<div className="flex flex-col justify-center items-center min-h-screen">
			{step === 1 ? (
				<>
					<h1 className="md:flex text-purple_4 scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
						Register
					</h1>
					<div className="flex mt-5 md:mt-0 w-full items-center justify-center md:justify-evenly">
						<RegisterForm
							handleRegister={handleRegister}
							setRegisterData={setRegisterData}
							setconfirmPassword={setConfirmPassword}
							registerData={registerData}
						/>
						<Image
							src="/Graphic.svg"
							alt="logo"
							width={600}
							height={600}
							className="hidden md:flex"
						/>
					</div>
				</>
			) : (
				<div>
					<h1 className="text-4xl text-black">
						Check your email for a verification link
					</h1>
				</div>
			)}
		</div>
	);
};

export default Page;
