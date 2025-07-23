import { useParams, Link } from "react-router-dom";
import { FileText, View, Download } from "lucide-react";

const ResumePage = () => {
  const { username, resume_name } = useParams();

  return (
    <div className='w-full flex flex-col gap-2 py-2'>
      <h1 className='font-chewy font-extrabold text-2xl'>{resume_name}.pdf</h1>

      <div className='w-full flex flex-col gap-4 bg-card p-4 rounded-xl shadow mt-2'>
        <div className='w-full flex items-center justify-center h-[22rem] border border-dashed rounded-xl'>
          <FileText className='w-72 h-72 text-muted-foreground' />
        </div>

        <div className='w-full flex flex-col justify-center bg-background p-3 rounded-xl'>
          <p className='text-muted-foreground'>
            <span className='font-bold text-foreground'> File Uploader: </span>
            {username}
          </p>

          <p className='text-muted-foreground'>
            <span className='font-bold text-foreground'> File Name: </span>
            {resume_name}
          </p>

          <p className='text-muted-foreground'>
            <span className='font-bold text-foreground'> File Format: </span>
            PDF
          </p>

          <p className='text-muted-foreground'>
            <span className='font-bold text-foreground'> File Size: </span>
            421KB
          </p>
        </div>
      </div>

      <div className='w-full flex flex-row items-center justify-center gap-4 mt-3'>
        <Link
          to={`${window.location.origin}/${username}/${resume_name}.pdf`}
          className='w-fit flex flex-row gap-2 bg-card p-4 rounded-2xl shadow'
        >
          <View /> Open
        </Link>

        <a
          href={`${window.location.origin}/${username}/${resume_name}.pdf`}
          className='w-fit flex flex-row gap-2 bg-card p-4 rounded-2xl shadow'
          download={`${resume_name}.pdf`}
        >
          <Download /> Download
        </a>
      </div>
    </div>
  );
};

export default ResumePage;