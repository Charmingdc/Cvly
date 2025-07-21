import { useState } from "react";

import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  LayoutDashboard,
  FilePlus2,
  Settings,
  Coffee
} from "lucide-react";

const Navbar = () => {
  const currentPath: string = useLocation().pathname;
  const isLandingPage: boolean = currentPath === "/";

  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const paths: { icon: React.ReactNode; text: string; url: string }[] = [
    { icon: LayoutDashboard, text: "Dashboard", url: "/dashboard" },
    { icon: FilePlus2, text: "New Resume", url: "/new" },
    { icon: Settings, text: "Settings", url: "/settings" }
  ];

  return (
    <nav>
      <div
        className={`${
          isLandingPage ? "w-[90%] top-2 border rounded-xl" : "w-screen top-0"
        } fixed left-1/2 -translate-x-1/2 flex flex-row items-center justify-between bg-card py-3 px-4 border-b border-background z-20`}
      >
        <h1 className='font-bold font-chewy  text-2xl'> Cvly </h1>

        <button
          className='p-2 border rounded-lg'
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <X /> : <Menu />}
        </button>
      </div>

      {openMenu && !isLandingPage && (
        <aside>
          <div
            className={`w-[50%] h-[94vh] fixed ${
              openMenu ? "left-[0%]" : "-left-[50%]"
            } flex flex-col bg-card pt-16 border-r transition-all duration-500 ease-in-out`}
          >
            {paths.map((path, i) => {
              const Icon = path.icon;

              return (
                <Link
                  to={path.url}
                  className={`${
                    currentPath === path.url
                      ? "text-blue-800"
                      : "text-foreground-muted"
                  } flex flex-row gap-2 p-4 border-b`}
                >
                  <Icon /> {path.text}
                </Link>
              );
            })}
          </div>
        </aside>
      )}

      {openMenu && isLandingPage && (
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
      )}
    </nav>
  );
};

export default Navbar;
