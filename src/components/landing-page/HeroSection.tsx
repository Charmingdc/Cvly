import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className='w-full flex flex-col items-center text-center gap-3 mt-20'>
      <h2 className='font-chewy font-extrabold text-3xl md:mt-12'>
        Cvly - A smarter way to share your resume
      </h2>

      <p className='w-[82%] text-muted-foreground md:w-[55%]'>
        CVly turns your resume into a professional, shareable link that works
        everywhere, with built-in insights so you know exactly when it’s viewed
        or downloaded.
      </p>

      <Link
        to='/signup'
        className='w-fit bg-card font-chewy py-4 px-7 shadow rounded-xl mt-4'
      >
        Get Started
      </Link>

      <p className='w-[55%] font-chewy text-muted-foreground text-xs -mt-2'>
        Join <strong> 1200+ </strong> job seekers who know when their resume
        gets seen
      </p>
    </div>
  );
};

export default HeroSection;
