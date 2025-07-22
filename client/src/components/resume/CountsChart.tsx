import { ChartColumn } from "lucide-react";

type Props = {
  title: string;
  desc: string;
  count: number;
};

const CountsChart = ({ title, desc, count }: Props) => {
  return (
    <div className='flex flex-col gap-2 bg-card p-3 border rounded-lg shadow'>
      <div className='w-full flex flex-row items-center justify-between'>
        <h2 className='font-bold'> {title} </h2>

        <ChartColumn />
      </div>

      <p className='text-muted-foreground text-sm -mt-2 mb-2'>{desc}</p>

      <div className='w-ful flex flex-col p-2 border rounded-lg'>
        <h3 className='font-extrabold text-[3rem]'> {count} </h3>
      </div>
    </div>
  );
};

export default CountsChart;
