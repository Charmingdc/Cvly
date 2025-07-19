import { useState } from "react";

import { Link } from "react-router-dom";
import { Menu, X, Gift } from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <nav>
      <div
        className='w-[90%] fixed top-2 left-1/2 -translate-x-1/2 flex
      flex-row items-center justify-between bg-card p-3 border rounded-xl z-20'
      >
        <h1 className='font-bold font-chewy  text-2xl'> Cvly </h1>

        <button
          className='p-2 border rounded-lg'
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <X /> : <Menu />}
        </button>
      </div>

      {openMenu && (
        <div
          className='w-[90%] fixed top-20 left-1/2 -translate-x-1/2 flex
        flex-col justify-center gap-6 p-4 bg-card rounded-xl z-20'
        >
          <Link to='/signup'>Sign Up</Link>
          <Link to='/signin'> Sign In </Link>

          <button className='w-full h-12 flex items-center justify-center gap-2 py-3 bg-background text-foreground rounded-2xl'>
            <Gift size={17} /> Donate
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
