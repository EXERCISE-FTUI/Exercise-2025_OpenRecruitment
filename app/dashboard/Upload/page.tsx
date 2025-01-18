"use client";

import React from "react";
import RegistrationForm from "./_components/registration-form";
import {useForm} from "react-hook-form";

const FormSubmissionWithUpload: React.FC = () => {
	const form = useForm({
		defaultValues: {
			user_id: "",
			fullName: "",
			npm: "",
			department: "",
			major: "",
			force: "",
			email: "",
			phone: "",
			idLine: "",
			otherContacts: "",
			division1: "",
			division2: "",
			folderUrl: "",
			cvUrl: "",
			motivationLetterUrl: "",
			assignment1Url: "",
			assignment2Url: "",
			instagramStoryUrl: "",
			twibbonUrl: "",
		},
	});

	const {handleSubmit, control} = form;

	const onSubmit = () => {
		// setIsLoading(true);
		// handleNext();
	};

	// const handleNext = async () => {
	// 	try {
	// 		// // Check if the user already exists in the database
	// 		// const { data: existingUser, error: fetchError } = await supabase
	// 		//   .from("form_submission")
	// 		//   .select("*")
	// 		//   .eq("user_id", form.getValues().user_id)
	// 		//   .single();
	// 		// if (fetchError && fetchError.code !== "PGRST116") {
	// 		//   // Check for non-existent user case
	// 		//   toast({
	// 		//     title: "Error checking user existence!",
	// 		//     variant: "destructive",
	// 		//     description: fetchError.message,
	// 		//   });
	// 		//   return;
	// 		// }
	// 		// // If the user exists, update their record
	// 		// if (existingUser) {
	// 		//   const { error: updateError } = await supabase
	// 		//     .from("form_submission")
	// 		//     .update({
	// 		//       ...form.getValues(),
	// 		//       folderUrl: "",
	// 		//     })
	// 		//     .eq("user_id", form.getValues().user_id);
	// 		//   if (updateError) {
	// 		//     toast({
	// 		//       title: "Form update failed!",
	// 		//       variant: "destructive",
	// 		//       description: updateError.message,
	// 		//     });
	// 		//     return;
	// 		//   }
	// 		//   toast({
	// 		//     title: "Form updated successfully!",
	// 		//     description: "Your information has been updated.",
	// 		//   });
	// 		// }
	// 		// // If the user does not exist, insert a new record
	// 		// else {
	// 		//   const { error: insertError } = await supabase
	// 		//     .from("form_submission")
	// 		//     .insert({
	// 		//       ...form.getValues(),
	// 		//       folderUrl: "",
	// 		//     });
	// 		//   if (insertError) {
	// 		//     toast({
	// 		//       title: "Form submission failed!",
	// 		//       variant: "destructive",
	// 		//       description: insertError.message,
	// 		//     });
	// 		//     return;
	// 		//   }
	// 		//   toast({
	// 		//     title: "Form submitted successfully!",
	// 		//     description: "Please upload the required files.",
	// 		//   });
	// 		// return null;
	// 		// }
	// 	} catch (error) {
	// 		console.error("Error handling form submission:", error);
	// 		toast({
	// 			title: "Unexpected error!",
	// 			variant: "destructive",
	// 			description: "Please try again.",
	// 		});
	// 	} finally {
	// 		setIsLoading(false);
	// 	}
	// };

	return (
		<>
			<div className="mt-24">
				<RegistrationForm
					form={form}
					onSubmit={onSubmit}
					handleSubmit={handleSubmit}
					control={control}
				/>
			</div>
		</>
	);
};

export default FormSubmissionWithUpload;
