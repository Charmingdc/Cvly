import { FileText, Link2, BarChart3 } from "lucide-react";

type Steps = { icon: React.ReactNode; headline: string; desc: string };

const HowItWorks = () => {
  const steps: Steps[] = [
    {
      icon: FileText,
      headline: "Upload your resume",
      desc: "Select and upload your resume in PDF format."
    },
    {
      icon: Link2,
      headline: "Get your CVly link",
      desc: "Generate a clean, shareable link you can use anywhere — email, portfolio, or chat."
    },
    {
      icon: BarChart3,
      headline: "Track views and downloads",
      desc: "View real-time stats to see when your resume is viewed or downloaded."
    }
  ];

  return (
    <div className='w-full flex flex-col items-center justify-center text-center gap-1'>
      <h3 className='font-chewy font-bold text-2xl'>
        Share Smarter in 3 easy steps
      </h3>

      <p className='w-[85%] text-muted-foreground'>
        Turn your resume into a polished, shareable link in just a few seconds.
      </p>

      <div className='w-full flex flex-col items-center gap-2 md:flex-row md:flex-wrap md:justify-center md:gap-6'>
        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <div
              key={i}
              className='relative w-[90%] flex flex-col items-center gap-3
              bg-card py-8 px-[5%] shadow-md rounded-2xl transition duratiom-500
              mt-6 hover:shadow-none md:w-[22rem] md:min-h-[18rem]'
            >
              <div
                className='absolute top-[-12px] left-[-12px] w-10 h-10
                rounded-full bg-background flex items-center justify-center
                font-bold border-[.2rem] border-card'
              >
                {i + 1}
              </div>

              <div className='w-fit bg-black/10 p-5 rounded-lg mb-4'>
                <Icon size={34} />
              </div>

              <h4 className='font-chewy font-bold text-xl'>{step.headline}</h4>

              <p className='text-center text-muted-foreground'>{step.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HowItWorks;
