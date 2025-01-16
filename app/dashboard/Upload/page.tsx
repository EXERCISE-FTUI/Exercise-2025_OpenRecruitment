"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/utils/supabase/supabase";
import axios from "axios";
import RegistrationForm from "./_components/registration-form";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Loader } from "lucide-react";

const FormSubmissionWithUpload: React.FC = () => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  // Define separate state for each file type

  const { toast } = useToast();

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
    },
  });

  const { handleSubmit, control, watch } = form;

  const onSubmit = () => {
    setIsLoading(true);
    handleNext();
  };

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

        form.setValue("user_id", data.user.id);
        // console.log(form.getValues());
      } catch (error) {
        console.error("Fetch user error:", error);
        router.replace("/login");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleNext = async () => {
    try {
      // Check if the user already exists in the database
      const { data: existingUser, error: fetchError } = await supabase
        .from("form_submission")
        .select("*")
        .eq("user_id", form.getValues().user_id)
        .single();

      if (fetchError && fetchError.code !== "PGRST116") {
        // Check for non-existent user case
        toast({
          title: "Error checking user existence!",
          variant: "destructive",
          description: fetchError.message,
        });
        return;
      }

      // If the user exists, update their record
      if (existingUser) {
        const { error: updateError } = await supabase
          .from("form_submission")
          .update({
            ...form.getValues(),
            folderUrl: "",
          })
          .eq("user_id", form.getValues().user_id);

        if (updateError) {
          toast({
            title: "Form update failed!",
            variant: "destructive",
            description: updateError.message,
          });
          return;
        }

        toast({
          title: "Form updated successfully!",
          description: "Your information has been updated.",
        });
      }
      // If the user does not exist, insert a new record
      else {
        const { error: insertError } = await supabase
          .from("form_submission")
          .insert({
            ...form.getValues(),
            folderUrl: "",
          });

        if (insertError) {
          toast({
            title: "Form submission failed!",
            variant: "destructive",
            description: insertError.message,
          });
          return;
        }

        toast({
          title: "Form submitted successfully!",
          description: "Please upload the required files.",
        });
      }
    } catch (error) {
      console.error("Error handling form submission:", error);
      toast({
        title: "Unexpected error!",
        variant: "destructive",
        description: "Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  // File upload handler function
  const handleFileUpload = async (file: File | null, fileType: string) => {
    if (!file) {
      toast({
        title: `No file selected for ${fileType}`,
        variant: "destructive",
        description: "Please select a file and try again.",
      });
      return;
    }
    setIsLoading(true);
    // console.log(file, fileType);
    // if (file.type !== "application/pdf" && !file.type.includes("image")) {
    //   console.log("Only PDF files are allowed.");
    //   return;
    // }
    try {
      const uploadFormData = new FormData();
      uploadFormData.append("file", file);
      uploadFormData.append("name", watch("fullName"));

      const response = await axios.post(
        "https://oprec-exercise-2025-gdrive.vercel.app/upload",
        uploadFormData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      const { error: updateError } = await supabase
        .from("form_submission")
        .update({ folderUrl: response.data.folderUrl })
        .eq("user_id", watch("user_id"));

      if (updateError) {
        throw new Error(`Failed to update folder URL: ${updateError.message}`);
      }

      toast({
        title: `${fileType} uploaded successfully`,
        description: "Please proceed to the next step.",
      });
      // console.log(`${fileType} uploaded successfully`);
    } catch (error) {
      toast({
        title: `Failed to upload ${fileType}`,
        variant: "destructive",
        description: "Please try again.",
      });
      console.error(error);
      // console.log(`Failed to upload ${fileType}. Please try again.`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading === true && (
        <div className="z-30 top-0 fixed bg-black  w-screen bg-opacity-20 flex justify-center items-center h-screen">
          <Loader className="animate-spin" />
        </div>
      )}
      <div className="mt-24">
        <RegistrationForm
          form={form}
          onSubmit={onSubmit}
          handleSubmit={handleSubmit}
          control={control}
          handleFileUpload={handleFileUpload}
        />
      </div>
    </>
  );
};

export default FormSubmissionWithUpload;
