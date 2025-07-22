import { Link } from "react-router-dom";
import { Coffee } from "lucide-react";

const Menubar = () => {
  return (
    <div className='w-[90%] fixed top-20 left-1/2 -translate-x-1/2 flex flex-col justify-center gap-4 p-4 bg-card rounded-xl z-20'>
      <Link to='/signup' className='hover:text-blue-800'>
        Sign Up
      </Link>
      <Link to='/signin' className='hover:text-blue-800'>
        Sign In
      </Link>

      <a
        to='https://github.com/Charmingdc/cvly'
        target='_blank'
        className='w-full h-12 flex items-center justify-center gap-2 py-3 text-foreground border border-background rounded-2xl mt-2'
      >
        <img
          src='/icons/github-icon.png'
          alt='Github Icon Png'
          width='26px'
          height='26px'
        />
        View on Github
      </a>

      <button className='w-full h-12 flex items-center justify-center gap-2 py-3 bg-background text-foreground rounded-2xl -mt-2'>
        <Coffee size={17} /> Buy me a coffee
      </button>
    </div>
  );
};

export default Menubar;
