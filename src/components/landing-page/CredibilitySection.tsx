import { Smile } from "lucide-react";

const CredibilitySection = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center text-center gap-6 mt-20'>
      <h3 className='font-chewy font-bold text-2xl transform rotate-[-1deg]'>
        For Professionals Who Cares About Details
      </h3>

      <p className='w-[85%] font-chewy text-muted-foreground transform rotate-[2deg] md:w-[60%]'>
        Whether you’re applying for jobs, pitching clients, or adding your
        resume to your personal site — CVly helps you look professional, stay
        organized, and know when your work gets seen.
      </p>

      <Smile className='w-32 h-32 text-muted-foreground -mt-2' />
    </div>
  );
};

export default CredibilitySection;
