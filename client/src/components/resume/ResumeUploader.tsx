import { useState } from "react";
import { File, CloudUpload, FileUp, Trash } from "lucide-react";
import Button from "@/components/ui/Button";

const ResumeUploader = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;

    if (selectedFile && selectedFile.type !== "application/pdf") {
      alert("Please upload a PDF file only.");
      setFile(null);
      return;
    }

    setFile(selectedFile);
  };

  const handleClearFile = () => {
    setFile(null);
  };

  return (
    <div className='w-full flex flex-col gap-2 mt-4'>
      <div className='w-full flex flex-col gap-2 bg-card p-3 rounded-xl shadow'>
        <label
          htmlFor={`${file ? "" : "resume-selector"}`}
          className={`w-full h-72 flex flex-col items-center justify-center gap-3 border-2 border-dashed rounded-xl cursor-pointer ${
            file ? "opacity-30" : ""
          }`}
        >
          <CloudUpload className='w-32 h-32' />
          <h2 className='font-bold text-lg'>Browse File to Upload</h2>
        </label>

        <input
          type='file'
          id='resume-selector'
          accept='.pdf'
          onChange={handleFileChange}
          className='hidden'
        />

        <div className='w-full h-12 flex flex-row items-center justify-between bg-blue-900/10 p-2 rounded-lg'>
          <File />
          <p className='w-[75%] text-center text-muted-foreground truncate'>
            {file ? file.name : "No Selected File"}
          </p>
          {file ? (
            <Trash
              color='red'
              className='cursor-pointer'
              onClick={handleClearFile}
              aria-label='Remove file'
            />
          ) : (
            <Trash className='text-muted' aria-label='No file selected' />
          )}
        </div>
      </div>

      {file && (
        <Button
          className='py-3 px-5 mt-2'
          disabled={!file}
          onClick={() => {
            alert(`Uploading: ${file?.name}`);
          }}
        >
          <FileUp className='mr-2' />
          Upload Selected File
        </Button>
      )}
    </div>
  );
};

export default ResumeUploader;
