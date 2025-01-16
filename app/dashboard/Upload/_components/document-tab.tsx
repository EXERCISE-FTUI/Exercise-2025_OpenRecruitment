"use client";

import * as React from "react";
import { useCallback, useState } from "react";

import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Upload } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

interface FileUploadProps {
  label: string;
  note?: string;
  acceptedFormats: string;
  maxSize: number;
  onChange: (file: File | null) => void;
}

function FileUpload({
  label,
  note,
  acceptedFormats,
  maxSize,
  onChange,
}: FileUploadProps) {
  const [dragActive, setDragActive] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFile = useCallback(
    (file: File) => {
      if (!file.type.includes("pdf") && !file.type.includes("image")) {
        setError("Please upload a PDF file");
        return;
      }
      if (file.size > maxSize * 1024 * 1024) {
        setError(`File size must be less than ${maxSize}MB`);
        return;
      }
      setFile(file);
      setError(null);
      onChange(file);
    },
    [maxSize, onChange]
  );

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setDragActive(false);
      if (e.dataTransfer.files && e.dataTransfer.files[0]) {
        handleFile(e.dataTransfer.files[0]);
      }
    },
    [handleFile]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault();
      if (e.target.files && e.target.files[0]) {
        handleFile(e.target.files[0]);
      }
    },

    [handleFile]
  );

  return (
    <div className="flex flex-col justify-end space-y-2">
      <Label className="font-semibold">{label}</Label>
      {note && <p className="text-sm text-muted-foreground">{note}</p>}
      <div className=" bg-white border border-blue_4 rounded-lg p-3">
        <Card
          className={`max-h-32 overflow-hidden relative border-2 border-dashed rounded-lg p-3 ${
            dragActive ? "border-[#584B7C] bg-[#584B7C]/5" : "border-gray-300"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            required
            type="file"
            className="  absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            accept={acceptedFormats}
            onChange={handleChange}
          />
          <div className="flex overflow-hidden flex-col items-center justify-center gap-2 py-4">
            <Upload
              className="h-8 w-8 text-gray-500"
              style={file ? { display: "none" } : { display: "block" }}
            />
            <div className="text-center">
              {file && (
                <div className=" overflow-hidden text-sm text-blue3 font-semibold">
                  Selected file: {file.name}
                </div>
              )}
              {error && (
                <div className="w-full overflow-hidden  text-sm text-red-600">
                  {error}
                </div>
              )}
              {!file && (
                <p className="text-sm text-gray-600">
                  Drag and drop file or{" "}
                  <span className="underline text-blue_4 underline-offset-2 font-extrabold">
                    Choose File
                  </span>
                </p>
              )}
            </div>
          </div>
        </Card>
        <div className="flex flex-wrap justify-between ">
          <p className="text-xs text-gray-500 mt-1">
            Supported formats: {acceptedFormats}
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Maximum Size: {maxSize}MB
          </p>
        </div>
      </div>
    </div>
  );
}

interface DocumentTabProps {
  handleFileUpload: (file: File | null, type: string) => void;
  handleTabChange: (tab: string) => void;
}

export default function DocumentTab({
  handleFileUpload,
  handleTabChange,
}: DocumentTabProps) {
  const [files, setFiles] = useState({
    cv: null as File | null,
    motivationLetter: null as File | null,
    assignment1: null as File | null,
    assignment2: null as File | null,
    instagramStory: null as File | null,
    twibbon: null as File | null,
  });

  const { toast } = useToast();

  const handleSubmit = () => {
    if (
      !files["cv"] ||
      !files["motivationLetter"] ||
      !files["instagramStory"] ||
      !files["twibbon"] ||
      !files["assignment1"] ||
      !files["assignment2"] ||
      !files["instagramStory"]
    ) {
      toast({
        title: "Please upload all required files!",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Thank you for submitting your documents!",
      description: "Your documents have been successfully uploaded.",
    });
    window.location.href = "upload/finish";
  };

  return (
    <form onSubmit={handleSubmit} className="mt-9 space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FileUpload
          label="Curriculum Vitae (CV)"
          note="NOTE: Must use ATS CV"
          acceptedFormats=".pdf"
          maxSize={10}
          onChange={(file) => {
            setFiles((prev) => ({ ...prev, cv: file }));
            handleFileUpload(file, "cv");
          }}
        />
        <FileUpload
          label="Motivation Letter"
          acceptedFormats=".pdf"
          maxSize={15}
          onChange={(file) => {
            setFiles((prev) => ({ ...prev, motivationLetter: file }));
            handleFileUpload(file, "motivationLetter");
          }}
        />
        <FileUpload
          label="Optional Division Assignment 1"
          acceptedFormats=".pdf"
          maxSize={10}
          onChange={(file) => {
            setFiles((prev) => ({ ...prev, assignment1: file }));
            handleFileUpload(file, "assignment1");
          }}
        />
        <FileUpload
          label="Optional Division Assignment 2"
          acceptedFormats=".pdf"
          maxSize={15}
          onChange={(file) => {
            setFiles((prev) => ({ ...prev, assignment2: file }));
            handleFileUpload(file, "assignment2");
          }}
        />
      </div>

      <div className="space-y-4">
        <div className="prose prose-sm max-w-none">
          <p>
            Prospective staff are <span className="font-bold">required</span> to
            post a <span className="text-blue_4 font-bold">twibbon</span> on SG
            (Instagram Story),{" "}
            <span className="text-blue_4 font-bold">mention</span>{" "}
            @exercise.ftui, and include a{" "}
            <span className="text-blue_4 font-bold">screenshot</span> following
            @exercise.ftui.
          </p>
          <p>
            Here&apos;s the twibbon link:{" "}
            <a
              href="https://www.twibbon.com/[PLACEHOLDER]"
              className="text-blue_4 hover:underline"
            >
              https://www.twibbon.com/[PLACEHOLDER]
            </a>
          </p>
          <p>
            Here is the Oprec link that you can include:{" "}
            <span className="text-blue_4">link web oprec</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FileUpload
            label="Instagram Story Upload"
            acceptedFormats=".png,.jpg,.jpeg"
            maxSize={10}
            onChange={(file) => {
              setFiles((prev) => ({ ...prev, instagramStory: file }));
              handleFileUpload(file, "instagramStory");
            }}
          />
          <FileUpload
            label="Twibbon InstaStory Upload"
            acceptedFormats=".png,.jpg,.jpeg"
            maxSize={15}
            onChange={(file) => {
              setFiles((prev) => ({ ...prev, twibbon: file }));
              handleFileUpload(file, "twibbon");
            }}
          />
        </div>
      </div>
      <div className="mt-5 flex justify-center w-full md:w-auto md:justify-end space-x-4">
        <Button
          onClick={() => handleTabChange("personal")}
          type="button"
          variant="outline"
          className="text-blue_3 w-full md:max-w-40"
        >
          Back
        </Button>
        <Button
          type="submit"
          className="md:max-w-40 w-full bg-blue_3 hover:bg-blue_4"
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
