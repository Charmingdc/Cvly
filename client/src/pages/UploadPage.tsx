import ResumeUploader from "@/components/resume/ResumeUploader";

const UploadPage = () => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <h1 className='font-bold text-3xl'>New Resume</h1>

      <p className='text-muted-foreground -mt-1'>
        Upload a new resume by clicking the box below to get a cvly link you can
        share anywhere.
      </p>

      <ResumeUploader />
    </div>
  );
};

export default UploadPage;
