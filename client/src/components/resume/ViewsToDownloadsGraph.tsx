import { ChartArea } from "lucide-react";
import ViewsDownloadsLineChart from "./ViewsDownloadsLineChart";

const ViewsToDownloadsGraph = () => {
  return (
    <div className='w-full flex flex-col gap-2 bg-card p-3 border rounded-lg shadow'>
      <div className='w-full flex flex-row items-center justify-between'>
        <h2 className='font-bold'> Views - Downloads Rates Graph </h2>

        <ChartArea />
      </div>

      <p className='text-muted-foreground text-sm -mt-2 mb-2'>
        Graphical comparison between views and downloads count.
      </p>

      <div className='w-full h-48 flex flex-col py-2 border rounded-lg'>
        <ViewsDownloadsLineChart />
      </div>
    </div>
  );
};

export default ViewsToDownloadsGraph;
