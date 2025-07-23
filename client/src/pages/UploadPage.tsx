import ResumeUploader from "@/components/resume/ResumeUploader";

const UploadPage = () => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <h1 className='font-bold text-3xl'>New Resume</h1>

      <p className='text-muted-foreground -mt-1'>
        Upload your resume (CVs also welcome!) and get a personal link to share with employers.
      </p>

      <ResumeUploader />
    </div>
  );
};

export default UploadPage;
