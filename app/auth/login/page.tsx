"use client";

import {useState} from "react";
import {LoginForm} from "./_components/LoginForm";
import Image from "next/image";
import {useToast} from "@/hooks/use-toast";
import {useRouter} from "next/navigation";

export default function LoginPage() {
	const {toast} = useToast();
	const [loginData, setLoginData] = useState({email: "", password: ""});
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
		setLoading(true);
		e.preventDefault(); // Prevent form submission

		const fetchResponse = await fetch("/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(loginData),
		});

		const response = await fetchResponse.json();

		if (response.error) {
			toast({
				title: response.error,
				variant: "destructive",
				description: response.error.message,
			});
		} else {
			toast({
				title: "Login successful!",
			});
			router.push("/dashboard");
			window.location.reload();
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
