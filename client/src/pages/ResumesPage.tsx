import ResumesList from "@/components/resume/ResumesList";

const ResumesPage = () => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <h1 className='font-bold text-3xl'> Resumes </h1>

      <p className='text-muted-foreground -mt-1'>
        Manage and view your uploaded resumes
      </p>

      <ResumesList />
    </div>
  );
};

export default ResumesPage;
