import { useNavigate } from "react-router-dom";
import { FilePlus2, FileText, List } from "lucide-react";
import Button from "@/components/ui/Button";

const TotalResumeCount = ({ count }: { count: number }) => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-3 bg-card p-3 border rounded-lg'>
      <div className='w-full flex flex-row items-center justify-between'>
        <h2 className='font-bold'> Number of Resumes </h2>

        <FileText />
      </div>

      <p className='text-muted-foreground text-sm -mt-2 mb-2'>
        Total Number of Uploaded Resumes.
      </p>

      <div className='w-ful flex flex-col p-2 border rounded-lg'>
        <h3 className='font-extrabold text-[3rem]'> {count} </h3>

        <div className='flex flex-row gap-2'>
          <Button variant='outline' onClick={() => navigate("/new")}>
            <FilePlus2 size={17} /> New Resume
          </Button>
          <Button variant='outline' onClick={() => navigate("/resumes")}>
            <List size={17} /> View All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TotalResumeCount;
