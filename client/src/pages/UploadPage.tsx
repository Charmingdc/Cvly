import ResumeUploader from "@/components/resume/ResumeUploader";

const UploadPage = () => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <h1 className='font-bold text-3xl'>New Resume</h1>

      <p className='text-muted-foreground -mt-1'>Upload a new resume to cvly</p>

      <ResumeUploader />
    </div>
  );
};

export default UploadPage;
