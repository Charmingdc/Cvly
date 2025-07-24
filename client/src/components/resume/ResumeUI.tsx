import { Link } from "react-router-dom";
import { View, ChartColumn } from "lucide-react";
import type { DisplayResume } from "@/types/index";

const ResumeUI = ({ resume }: { resume: DisplayResume }) => {
  const baseUrl = `${window.location.origin}`;

  return (
    <div className='w-full flex flex-col bg-card p-3 gap-3 rounded-lg shadow md:w-[19rem]'>
      <h2 className='font-chewy font-bold text-xl'> {resume.display_name} </h2>

      <p className='text-muted-foreground'>
        <strong className='text-foreground'>File Size: </strong>
        {resume.file_size / 1024}KB
      </p>
      <p className='text-muted-foreground -mt-3'>
        <strong className='text-foreground'> Last Updated: </strong>
        {resume.updated_at}
      </p>

      <div className='w-full flex flex-row items-center justify-center gap-2'>
        <Link
          to={`${baseUrl}/resume/${resume.storage_path}`}
          className='w-full flex flex-row items-center gap-2 py-2 px-4 border rounded-lg'
        >
          <View size={18} /> View
        </Link>

        <Link
          to={`${baseUrl}/analytics/${resume.storage_path}`}
          className='w-full flex flex-row items-center gap-2 py-2 px-4 border rounded-lg'
        >
          <ChartColumn size={18} /> Analytics
        </Link>
      </div>
    </div>
  );
};

export default ResumeUI;
