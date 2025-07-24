import ResumeUI from "./ResumeUI";
import type { DisplayResume } from "@/types/index";

const ResumesList = () => {
  const resumes: DisplayResume[] = [
    {
      resume_name: "dev-cv",
      display_name: "Dev-cv",
      username: "Charmingdc",
      file_size: 20 * 1024, // 20KB
      storage_path: "Charmingdc/dev-cv",
      created_at: Date.now(),
      updated_at: Date.now()
    },
    {
      resume_name: "my-cv",
      display_name: "My-Cv",
      username: "Muis",
      file_size: 241 * 1024, // 241KB
      storage_path: "Muis/my-cv",
      created_at: Date.now(),
      updated_at: Date.now()
    },
    {
      resume_name: "frontend-resume",
      display_name: "Frontend Resume", // original, with space
      username: "Charmingdc",
      file_size: 381 * 1024, // 381KB
      storage_path: "Charmingdc/frontend-resume",
      created_at: Date.now(),
      updated_at: Date.now()
    },
    {
      resume_name: "template",
      display_name: "Template",
      username: "John",
      file_size: 241 * 1024, // 241KB
      storage_path: "John/template",
      created_at: Date.now(),
      updated_at: Date.now()
    }
  ];
  return (
    <div className='mt-4'>
      {resumes.length > 0 ? (
        resumes.map((resume, i) => <ResumeUI key={i} resume={resume} />)
      ) : (
        <p> No Resumes Uploaded Yet </p>
      )}
    </div>
  );
};

export default ResumesList;
