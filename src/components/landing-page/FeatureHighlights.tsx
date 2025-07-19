import { Link2, Download, BarChart3, RefreshCcw } from "lucide-react";

type Features = { icon: React.ReactNode; headline: string; desc: string };

const FeatureHighlights = () => {
  const features: Features[] = [
    {
      icon: Link2,
      headline: "One link to rule them all",
      desc: "No more uploading the same file to 10 different platforms."
    },
    {
      icon: Download,
      headline: "View or download — your choice",
      desc: "Give people options, with no extra friction."
    },
    {
      icon: BarChart3,
      headline: "Smart metrics",
      desc: "Track total views, downloads, and time stamps — effortlessly."
    },
    {
      icon: RefreshCcw,
      headline: "Always up to date",
      desc: "Upload a new version anytime. The link stays the same."
    }
  ];

  return (
    <div className='w-full flex flex-col items-center justify-center text-center gap-1'>
      <h3 className='font-chewy font-bold text-2xl'>
        Resumes, reimagined for how you actually works.
      </h3>

      <p className='w-[85%] text-muted-foreground'>
        Built for the way professionals apply, pitch, and connect today —
        smarter, simpler, and way more useful.
      </p>

      <div className='w-full flex flex-col items-center gap-2 md:flex-row md:flex-wrap md:justify-center md:gap-x-16 md:gap-y-4'>
        {features.map((feature, i) => {
          const Icon = feature.icon;
          const tilt = i % 2 === 0 ? "rotate-[-3deg]" : "rotate-[3deg]";

          return (
            <div
              key={i}
              className={`w-[90%] flex flex-col items-start justify-center text-left gap-5
              bg-card py-4 px-[5%] border-b border-dashed rounded-2xl mt-6
              shadow transform ${tilt} transition-all duration-500
              hover:rotate-0 md:w-[20rem] md:min-h-[20rem] md:py-6`}
            >
              <div className='w-fit bg-black/10 p-5 rounded-lg mb-4'>
                <Icon size={34} />
              </div>

              <h4 className='font-chewy font-bold text-xl'>
                {feature.headline}
              </h4>

              <p>{feature.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeatureHighlights;
