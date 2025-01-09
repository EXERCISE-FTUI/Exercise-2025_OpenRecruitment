"use client";

import {useState} from "react";
import {supabase} from "../utils/supabase/supabase";

export default function LoginPage({}: {searchParams: {redirectTo?: string}}) {
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});

	async function handleLogin(e) {
		e.preventDefault();
		const response = await supabase.auth.signInWithPassword({
			email: userData.email,
			password: userData.password,
		});

		console.log(response);

		if (response.error) {
			// alert(response.error.message);
			return;
		} else {
			// router.push("/dashboard/");
			window.location.href = "/dashboard/home";
		}
	}

	async function handleRegister(e) {
		e.preventDefault();
		const response = await supabase.auth.signUp({
			email: userData.email,
			password: userData.password,
			options: {
				emailRedirectTo: "https://localhost:3000/login",
			},
		});

		console.log(response);

		if (response.error) {
			// alert(response.error.message);
			return;
		} else {
			// router.push("/dashboard");
			// window.location.href = "/dashboard";
		}
	}

	return (
		<div className="flex items-center justify-center min-h-screen">
			<form
				// action={login}
				// method="post"
				className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
			>
				<h2 className="text-2xl font-extrabold mb-6 text-center text-black">
					Login
				</h2>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email:
					</label>
					<input
						value={userData.email}
						onChange={(e) =>
							setUserData({...userData, email: e.target.value})
						}
						id="email"
						name="email"
						type="email"
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-700"
					>
						Password:
					</label>
					<input
						value={userData.password}
						onChange={(e) =>
							setUserData({...userData, password: e.target.value})
						}
						id="password"
						name="password"
						type="password"
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						type="submit"
						className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						onClick={handleLogin}
					>
						Log in
					</button>
				</div>
			</form>
			<form
				// action={signup}
				// method="post"
				className="mt-4 text-center bg-white p-8 rounded-lg shadow-md w-full max-w-sm"
			>
				<h2 className="text-2xl font-extrabold mb-6 text-center text-black">
					Sign up
				</h2>
				<div className="mb-4">
					<label
						htmlFor="email"
						className="block text-sm font-medium text-gray-700"
					>
						Email:
					</label>
					<input
						value={userData.email}
						onChange={(e) =>
							setUserData({...userData, email: e.target.value})
						}
						id="email"
						name="email"
						type="email"
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div className="mb-6">
					<label
						htmlFor="password"
						className="block text-sm font-medium text-gray-700"
					>
						Password:
					</label>
					<input
						value={userData.password}
						onChange={(e) =>
							setUserData({...userData, password: e.target.value})
						}
						id="password"
						name="password"
						type="password"
						required
						className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					/>
				</div>
				<div className="flex items-center justify-between">
					<button
						type="submit"
						className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						onClick={handleRegister}
					>
						Sign up
					</button>
				</div>
			</form>
		</div>
	);
}
