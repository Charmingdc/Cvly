import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  List,
  ChevronUp,
  ChevronDown,
  FileText,
  View,
  Download
} from "lucide-react";
import CountsChart from "@/components/resume/CountsChart";

const AnalyticsPage = () => {
  const { username, resume_name } = useParams();
  const [openViewsLog, setOpenViewsLog] = useState<boolean>(false);
  const [openDownloadsLog, setOpenDownloadsLog] = useState<boolean>(false);

  return (
    <div className='w-full flex flex-col gap-2 py-2'>
      <h1 className='font-extrabold text-3xl'>Analytics</h1>

      <p className='text-muted-foreground -mt-1'>
        Manage and view analytics for <strong> {resume_name} </strong>
        {/**
      resume name without safe parsing will be here later **/}
      </p>

      {/** Today's Entries logs **/}
      <div className='w-full flex flex-col gap-2 p-3 bg-card rounded-lg shadow mt-6 mb-6'>
        <h2 className='font-bold text-xl'> Today's Logs </h2>

        <p className='text-muted-foreground -mt-1'>
          View today's logs for each resume view and download.
        </p>

        <div className='w-full flex flex-row items-center justify-between gap-2 p-3 border rounded-lg'>
          <List /> Views Logs Entries
          <button
            onClick={() => {
              setOpenViewsLog(!openViewsLog);
              setOpenDownloadsLog(false);
            }}
          >
            {openViewsLog ? <ChevronUp size={30} /> : <ChevronDown size={30} />}
          </button>
        </div>

        <div className='w-full flex flex-row items-center justify-between gap-2 p-3 border rounded-lg'>
          <List /> Downloads Logs Entries
          <button
            onClick={() => {
              setOpenDownloadsLog(!openDownloadsLog);
              setOpenViewsLog(false);
            }}
          >
            {openDownloadsLog ? (
              <ChevronUp size={30} />
            ) : (
              <ChevronDown size={30} />
            )}
          </button>
        </div>
      </div>

      {/** Resume Views and Downloads count **/}
      <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(19rem,1fr))]  grid-rows-[repeat(auto-fit, 1fr)] justify-center content-center gap-5'>
        {/** Today's Anayltics  **/}
        <div className='w-full flex flex-col gap-3 p-3 bg-card rounded-lg shadow'>
          <h2 className='font-bold text-xl mb-2'> Today's Anayltics </h2>
          <CountsChart
            title='Views Count Stats'
            desc='Number of views today.'
            count={0}
          />

          <CountsChart
            title='Downloads Count Stats'
            desc='Number of downloads today.'
            count={0}
          />
        </div>

        {/** This Week Anayltics  **/}
        <div className='w-full flex flex-col gap-3 p-3 bg-card rounded-lg shadow'>
          <h2 className='font-bold text-xl mb-2'> This Week Anayltics </h2>
          <CountsChart
            title='Views Count Stats'
            desc='Number of views this week.'
            count={0}
          />

          <CountsChart
            title='Downloads Count Stats'
            desc='Number of downloads this week.'
            count={0}
          />
        </div>

        {/** All Time Anayltics  **/}
        <div className='w-full flex flex-col gap-3 p-3 bg-card rounded-lg shadow'>
          <h2 className='font-bold text-xl mb-2'> All Time Anayltics </h2>
          <CountsChart
            title='Views Count Stats'
            desc='Total Number of Views.'
            count={0}
          />

          <CountsChart
            title='Downloads Count Stats'
            desc='Total Number of Downloads.'
            count={0}
          />
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;
