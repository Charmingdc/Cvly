import { useNavigate } from "react-router-dom";
import {
  FilePlus2,
  FileText,
  List,
  ChartColumn,
  ChartArea
} from "lucide-react";
import Button from "@/components/ui/Button";

const ResumesChart = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(19rem,1fr))] grid-rows-[repeat(auto-fit, 1fr)] justify-center content-center gap-5'>
      {/** total uploaded resumes count **/}
      <div className='flex flex-col gap-3 bg-card p-3 border rounded-lg'>
        <div className='w-full flex flex-row items-center justify-between'>
          <h2 className='font-bold'> Number of Resumes </h2>

          <FileText />
        </div>

        <p className='text-muted-foreground text-sm -mt-2 mb-2'>
          Total Number of Uploaded Resumes.
        </p>

        <div className='w-ful flex flex-col p-2 border rounded-lg'>
          <h3 className='font-extrabold text-[3rem]'> 0 </h3>

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

      {/** total resumes views count **/}
      <div className='flex flex-col gap-2 bg-card p-3 border rounded-lg'>
        <div className='w-full flex flex-row items-center justify-between'>
          <h2 className='font-bold'> Views Count Stats </h2>

          <ChartColumn />
        </div>

        <p className='text-muted-foreground text-sm -mt-2 mb-2'>
          Number of views this week.
        </p>

        <div className='w-ful flex flex-col p-2 border rounded-lg'>
          <h3 className='font-extrabold text-[3rem]'> 0 </h3>
        </div>
      </div>

      {/** total resumes downloads count **/}
      <div className='flex flex-col gap-2 bg-card p-3 border rounded-lg'>
        <div className='w-full flex flex-row items-center justify-between'>
          <h2 className='font-bold'> Downloads Count Stats </h2>

          <ChartColumn />
        </div>

        <p className='text-muted-foreground text-sm -mt-2 mb-2'>
          Number of downloads this week.
        </p>

        <div className='w-ful flex flex-col p-2 border rounded-lg'>
          <h3 className='font-extrabold text-[3rem]'> 0 </h3>
        </div>
      </div>

      {/** total resumes downloads and views count comparison **/}
      <div className='flex flex-col gap-2 bg-card p-3 border rounded-lg'>
        <div className='w-full flex flex-row items-center justify-between'>
          <h2 className='font-bold'> Views - Downloads Rates Graph </h2>

          <ChartArea />
        </div>

        <p className='text-muted-foreground text-sm -mt-2 mb-2'>
          Graphical comparison between views and downloads count.
        </p>

        <div className='w-ful flex flex-col p-2 border rounded-lg'>
          {/** graph will be here  **/}
        </div>
      </div>
    </div>
  );
};

export default ResumesChart;
