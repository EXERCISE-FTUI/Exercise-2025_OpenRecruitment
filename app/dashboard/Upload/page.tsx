'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/app/utils/supabase/client";

// Initialize Supabase client
const supabase = createClient();

const DIVISIONS = ['SOFTWARE', 'HARDWARE', 'FNS', 'TND', 'CMB', 'HR', 'PM'] as const;

const FormSubmissionWithUpload: React.FC = () => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        user_id: "",
        name: "",
        major: "",
        first_choice: DIVISIONS[0],
        second_choice: DIVISIONS[1],
    });
    const [file, setFile] = useState<File | null>(null);
    const [uploadStatus, setUploadStatus] = useState<string>("");

    useEffect(() => {
        const fetchUser = async () => {
            const { data: { user }, error } = await supabase.auth.getUser();
            if (error || !user) {
                router.replace('/login'); // Redirect to login page
            } else {
                setFormData((prevData) => ({
                    ...prevData,
                    user_id: user.id, // Set user ID
                }));
            }
        };

        fetchUser();
    }, [router]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const selectedFile = event.target.files[0];

            if (selectedFile.type !== "application/pdf") {
                setUploadStatus("Only PDF files are allowed.");
                setFile(null);
                return;
            }

            setFile(selectedFile);
            setUploadStatus("");
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!file) {
            setUploadStatus("Please select a file to upload.");
            return;
        }

        const filePath = `uploads/${Date.now()}_${file.name}`; // Ensure unique filenames
        setUploadStatus("Uploading file...");

        try {
            // Upload file to Supabase storage
            const { data: fileData, error: fileError } = await supabase.storage
                .from("Exercise-Opreg")
                .upload(filePath, file);

            if (fileError) {
                setUploadStatus(`File upload failed: ${fileError.message}`);
                return;
            }

            const fileURL = `https://auegaftnrlbvwqzoatug.supabase.co/storage/v1/object/public/${fileData.path}`;
            console.log("File uploaded to:", fileURL);

            // Insert form data into Supabase table
            const { error: insertError } = await supabase.from("form_submission").insert({
                ...formData,
                file: fileURL,
            });

            if (insertError) {
                setUploadStatus(`Form submission failed: ${insertError.message}`);
            } else {
                setUploadStatus("Form and file submitted successfully!");
            }
        } catch (error) {
            console.error(error);
            setUploadStatus("An unexpected error occurred.");
        }
    };

    return (
        <div className="flex flex-col justify-center items-center h-screen">
            <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto p-4 space-y-4 bg-white shadow-md rounded-md"
            >
                <h1 className="text-xl font-bold">Open Recruitment Form</h1>
                <div>
                    <label className="block text-sm font-medium text-blue-700">Name</label>
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
                    <label className="block text-sm font-medium text-gray-700">Major</label>
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
                    <label className="block text-sm font-medium text-gray-700">First Choice</label>
                    <select
                        name="first_choice"
                        value={formData.first_choice}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                        required
                    >
                        {DIVISIONS.map((division) => (
                            <option key={division} value={division} className="text-gray-700">
                                {division}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Second Choice</label>
                    <select
                        name="second_choice"
                        value={formData.second_choice}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                        required
                    >
                        {DIVISIONS.map((division) => (
                            <option key={division} value={division} className="text-gray-700">
                                {division}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Upload Tubid 1</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        className="mt-1 p-2 w-full border border-gray-300 rounded-md text-black"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                >
                    Submit
                </button>
                {uploadStatus && (
                    <p className="mt-4 text-sm font-medium text-gray-700">{uploadStatus}</p>
                )}
            </form>
        </div>
    );
};

export default FormSubmissionWithUpload;
