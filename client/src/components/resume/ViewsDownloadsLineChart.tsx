import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

type DataPoint = {
  day: string;
  views: number;
  downloads: number;
};

const data: DataPoint[] = [
  { day: "Mon", views: 30, downloads: 50 },
  { day: "Tue", views: 45, downloads: 60 },
  { day: "Wed", views: 60, downloads: 40 },
  { day: "Thu", views: 35, downloads: 70 },
  { day: "Fri", views: 50, downloads: 65 },
  { day: "Sat", views: 70, downloads: 90 },
  { day: "Sun", views: 80, downloads: 100 }
];

const CustomTooltip = ({
  active,
  payload,
  label
}: {
  active?: boolean;
  payload?: any;
  label?: string;
}) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg-background border rounded-lg p-2 shadow text-sm space-y-1'>
        <p className='font-semibold text-sm'>{label}</p>
        {payload.map((entry: any, index: number) => (
          <p
            key={`item-${index}`}
            className='text-sm text-gray-600 flex items-center gap-2'
            style={{ color: entry.color }}
          >
            <span className='capitalize'>{entry.name}</span>:
            <span>{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }

  return null;
};

const ViewsDownloadsLineChart = () => {
  return (
    <div className='relative w-full h-full'>
      <ResponsiveContainer
        width='100%'
        height='100%'
        className='!overflow-visible'
      >
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: -20, bottom: 5 }}
        >
          <CartesianGrid
            strokeDasharray='2 2'
            className='text-muted-foreground'
          />
          <XAxis
            dataKey='day'
            className='text-xs fill-background text-muted-foreground'
            tick={{ fontSize: 10 }}
          />
          <YAxis
            className='text-xs fill-background text-muted-foreground'
            tick={{ fontSize: 10 }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend wrapperStyle={{ fontSize: "12px" }} />
          <Line
            type='natural'
            dataKey='views'
            stroke='#8884d8'
            strokeWidth={1}
            dot={{ r: 3 }}
            name='Views'
            className='transition-all duration-300'
          />
          <Line
            type='natural'
            dataKey='downloads'
            stroke='#82ca9d'
            strokeWidth={1}
            dot={{ r: 3 }}
            name='Downloads'
            className='transition-all duration-300'
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ViewsDownloadsLineChart;
