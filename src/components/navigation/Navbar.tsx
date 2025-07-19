import { useState } from "react";

import { Link } from "react-router-dom";
import { Menu, Gift } from "lucide-react";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <nav>
      <div className='w-screen flex flex-row items-center justify-between bg-card p-3 border-b-[.080rem]'>
        <h1 className='font-bold text-xl'> Cvly </h1>

        <button
          className='p-2 border rounded-lg'
          onClick={() => setOpenMenu(!openMenu)}
        >
          <Menu />
        </button>
      </div>

      {openMenu && (
        <div className='w-screen flex flex-col items-center justify-center'>
          <Link to='/signup'> Sign Up </Link>
          <Link to='/signin'> Sign In </Link>

          <button>
            <Gift /> Donate
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
