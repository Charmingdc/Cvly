import TotalResumeCount from "./TotalResumeCount";
import CountsChart from "./CountsChart";
import ViewsToDownloadsGraph from "./ViewsToDownloadsGraph";

const GeneralAnalytics = () => {
  return (
    <div className='w-full grid grid-cols-[repeat(auto-fit,minmax(19rem,1fr))]  grid-rows-[repeat(auto-fit, 1fr)] justify-center content-center gap-4'>
      {/** total uploaded resumes count **/}
      <TotalResumeCount count={4} />

      {/** this week resumes views count **/}
      <CountsChart
        title='Views Count Stats'
        desc='Number of views this week.'
        count={0}
      />

      {/** this week resumes downloads count **/}
      <CountsChart
        title='Downloads Count Stats'
        desc='Number of downloads this week.'
        count={0}
      />

      {/** total resumes downloads and views count comparison **/}
      <ViewsToDownloadsGraph />
    </div>
  );
};

export default GeneralAnalytics;
