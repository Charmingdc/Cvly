import GeneralAnalytics from "@/components/resume/GeneralAnalytics";

const Dashboard = () => {
  return (
    <div className='w-full flex flex-col gap-2'>
      <h1 className='font-bold text-3xl'>
        <span className='text-muted-foreground'> Welcome back </span>, <br />
        Charmingdc!
      </h1>

      <p className='text-muted-foreground -mt-1'>
        Manage and view your documents analytics
      </p>

      <h1 className='font-bold text-muted-foreground text-xl mt-8 mb-2'>
        General Analytics
      </h1>
      <GeneralAnalytics />
    </div>
  );
};

export default Dashboard;
