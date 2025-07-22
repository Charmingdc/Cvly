import { useEffect, useState } from "react";
import { toast } from "sonner";
import { File, CloudUpload, FileUp, Trash } from "lucide-react";
import Button from "@/components/ui/Button";
import ResumeLinksOutput from "@/components/resume/ResumeLinksOutput";

const ResumeUploader = () => {
  const [file, setFile] = useState<File | null>(null);
  const [filename, setFilename] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [username, setUsername] = useState("charmingdc");
  const [viewUrl, setViewUrl] = useState("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;

    if (selectedFile && selectedFile.type !== "application/pdf") {
      toast.warning("Please upload a PDF file only.");
      setFile(null);
      return;
    }

    setFile(selectedFile);
  };

  const handleFileUpload = async () => {
    if (!file || !filename || !username) {
      toast.warning("Missing file, name, or user.");
      return;
    }

    const safeFilename = filename
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^a-zA-Z0-9-_]/g, "");

    setIsUploading(true);

    await new Promise(resolve => setTimeout(resolve, 1500)); // simulate delay

    toast.success("Resume uploaded (mock)!");
    setViewUrl(`/resume/${username}/${safeFilename}`);
    setFile(null);
    setFilename("");
    setIsUploading(false);
  };

  return (
    <div className='w-full flex flex-col gap-4 mt-6'>
      <div className='w-full flex flex-col gap-2 bg-card p-3 rounded-xl shadow'>
        <label
          htmlFor='resume-selector'
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

        <input
          type='text'
          placeholder='Enter resume name (e.g. dev-cv)'
          value={filename}
          onChange={e => setFilename(e.target.value)}
          className='bg-input text-input-foreground py-3 px-2 border rounded-lg'
        />

        <div className='w-full h-12 flex items-center justify-between bg-blue-900/10 p-2 rounded-lg'>
          <File />
          <p className='w-[75%] text-center text-muted-foreground truncate'>
            {file ? file.name : "No Selected File"}
          </p>
          {file ? (
            <Trash
              color='red'
              className='cursor-pointer'
              onClick={() => setFile(null)}
              aria-label='Remove file'
            />
          ) : (
            <Trash className='text-muted' aria-label='No file selected' />
          )}
        </div>
      </div>

      {file && (
        <Button
          className='py-3 px-5'
          disabled={!file || !filename || isUploading}
          onClick={handleFileUpload}
        >
          <FileUp className='mr-2' />
          {isUploading ? "Uploading..." : "Upload Selected File"}
        </Button>
      )}

      {viewUrl && <ResumeLinksOutput viewUrl={viewUrl} />}
    </div>
  );
};

export default ResumeUploader;
