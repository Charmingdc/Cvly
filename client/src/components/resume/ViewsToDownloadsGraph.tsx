import { ChartArea } from "lucide-react";

const ViewsToDownloadsGraph = () => {
  return (
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
  );
};

export default ViewsToDownloadsGraph;
