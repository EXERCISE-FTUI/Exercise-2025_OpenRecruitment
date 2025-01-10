"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/utils/supabase/supabase";
import axios from 'axios';

const DIVISIONS = ["SOFTWARE", "HARDWARE", "FNS", "TND", "CMB", "HR", "PM"] as const;

const FormSubmissionWithUpload: React.FC = () => {
    const router = useRouter();
    const [step, setStep] = useState(1);
    const [folderUrl, setFolderUrl] = useState("");
    const [confirmationChecked, setConfirmationChecked] = useState(false);
    const [uploadStatus, setUploadStatus] = useState<string>("");
    const [isLoading, setIsLoading] = useState(true);
    
    // Define separate state for each file type
    const [twibbonFile, setTwibbonFile] = useState<File>();
    const [cvFile, setCvFile] = useState<File>();
    const [task1File, setTask1File] = useState<File>();
    const [task2File, setTask2File] = useState<File>();

    const [formData, setFormData] = useState({
        user_id: "",
        name: "",
        major: "",
        first_choice: DIVISIONS[0],
        second_choice: DIVISIONS[1],
    });

    useEffect(() => {
        const fetchUser = async () => {
            try {
                setIsLoading(true);
                const { data, error } = await supabase.auth.getUser();
                
                if (error) {
                    console.error("Auth error:", error);
                    router.replace("/login");
                    return;
                }

                if (!data.user) {
                    router.replace("/login");
                    return;
                }

                setFormData(prevData => ({
                    ...prevData,
                    user_id: data.user.id
                }));
            } catch (error) {
                console.error("Fetch user error:", error);
                router.replace("/login");
            } finally {
                setIsLoading(false);
            }
        };

        fetchUser();
    }, [router]);

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNext = async () => {
        if (!formData.user_id) {
            setUploadStatus("Please wait for user authentication...");
            return;
        }

        if (!formData.name || !formData.major) {
            setUploadStatus("Please fill in all required fields");
            return;
        }

        try {
            setUploadStatus("Submitting form...");
            const { error: insertError } = await supabase
                .from("form_submission")
                .insert({
                    ...formData,
                    folderUrl: "",
                });

            if (insertError) {
                setUploadStatus(`Initial form submission failed: ${insertError.message}`);
                return;
            }

            setStep(2);
            setUploadStatus("");
        } catch (error) {
            console.error(error);
            setUploadStatus("An unexpected error occurred.");
        }
    };

    // File upload handler function
    const handleFileUpload = async (file: File, fileType: string) => {
        if (file.type !== "application/pdf") {
            setUploadStatus("Only PDF files are allowed.");
            return;
        }

        try {
            setUploadStatus(`Uploading ${fileType}...`);
            const uploadFormData = new FormData();
            uploadFormData.append("file", file);
            uploadFormData.append("name", formData.name);

            const response = await axios.post(
                "https://oprec-exercise-2025-gdrive.vercel.app/upload",
                uploadFormData,
                {
                    headers: { "Content-Type": "multipart/form-data" },
                }
            );

            setFolderUrl(response.data.folderUrl);
            
            const { error: updateError } = await supabase
                .from("form_submission")
                .update({ folderUrl: response.data.folderUrl })
                .eq("user_id", formData.user_id);

            if (updateError) {
                throw new Error(`Failed to update folder URL: ${updateError.message}`);
            }

            setUploadStatus(`${fileType} uploaded successfully`);
        } catch (error) {
            console.error(error);
            setUploadStatus(`Failed to upload ${fileType}. Please try again.`);
        }
    };

    // File input change handlers for each type
    const handleTwibbonChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setTwibbonFile(file);
            await handleFileUpload(file, "Twibbon Photo");
        }
    };

    const handleCVChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setCvFile(file);
            await handleFileUpload(file, "CV");
        }
    };

    const handleTask1Change = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setTask1File(file);
            await handleFileUpload(file, "Task 1");
        }
    };

    const handleTask2Change = async (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setTask2File(file);
            await handleFileUpload(file, "Task 2");
        }
    };

    const handleDone = () => {
        if (confirmationChecked) {
            router.push("/");
        } else {
            setUploadStatus("Please check the confirmation box to submit");
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-center">
                    <p className="text-gray-600">Loading user data...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <div className="max-w-lg mx-auto p-4 space-y-4 bg-white shadow-md rounded-md">
                <h1 className="text-xl font-bold">Open Recruitment Form</h1>
                
                {step === 1 ? (
                    <>
                        <div>
                            <label className="block text-sm font-medium text-blue-700">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Major
                            </label>
                            <input
                                type="text"
                                name="major"
                                value={formData.major}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                First Choice
                            </label>
                            <select
                                name="first_choice"
                                value={formData.first_choice}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                                required
                            >
                                {DIVISIONS.map((division) => (
                                    <option key={division} value={division}>
                                        {division}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">
                                Second Choice
                            </label>
                            <select
                                name="second_choice"
                                value={formData.second_choice}
                                onChange={handleChange}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                                required
                            >
                                {DIVISIONS.map((division) => (
                                    <option key={division} value={division}>
                                        {division}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <button
                            onClick={handleNext}
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                            disabled={!formData.user_id}
                        >
                            {formData.user_id ? "Next" : "Loading..."}
                        </button>
                    </>
                ) : (
                    <div className="space-y-6">
                        {/* Twibbon Photo Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Twibbon Photo
                            </label>
                            <input
                                type="file"
                                onChange={handleTwibbonChange}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                                required
                                accept="application/pdf"
                            />
                            {twibbonFile && (
                                <p className="text-sm text-green-600 mt-1">
                                    Uploaded: {twibbonFile.name}
                                </p>
                            )}
                        </div>

                        {/* CV Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Curriculum Vitae (CV)
                            </label>
                            <input
                                type="file"
                                onChange={handleCVChange}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                                required
                                accept="application/pdf"
                            />
                            {cvFile && (
                                <p className="text-sm text-green-600 mt-1">
                                    Uploaded: {cvFile.name}
                                </p>
                            )}
                        </div>

                        {/* Task 1 Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Division Task 1
                            </label>
                            <input
                                type="file"
                                onChange={handleTask1Change}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                                required
                                accept="application/pdf"
                            />
                            {task1File && (
                                <p className="text-sm text-green-600 mt-1">
                                    Uploaded: {task1File.name}
                                </p>
                            )}
                        </div>

                        {/* Task 2 Upload */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Division Task 2
                            </label>
                            <input
                                type="file"
                                onChange={handleTask2Change}
                                className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                                required
                                accept="application/pdf"
                            />
                            {task2File && (
                                <p className="text-sm text-green-600 mt-1">
                                    Uploaded: {task2File.name}
                                </p>
                            )}
                        </div>

                        <div className="flex items-center space-x-2 mt-6">
                            <input
                                type="checkbox"
                                checked={confirmationChecked}
                                onChange={(e) => setConfirmationChecked(e.target.checked)}
                                className="h-4 w-4 text-blue-600"
                            />
                            <label className="text-sm text-gray-700">
                                I confirm that all the information provided is correct
                            </label>
                        </div>

                        <button
                            onClick={handleDone}
                            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 mt-4"
                        >
                            Done
                        </button>

                        {uploadStatus && (
                            <p className="text-sm font-medium text-gray-700 mt-4">
                                {uploadStatus}
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FormSubmissionWithUpload;