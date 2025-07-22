import { useState, lazy } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Sidebar = lazy(() => import("@/components/navigation/Sidebar"));
const Menubar = lazy(() => import("@/components/navigation/Menubar"));

const Navbar = () => {
  const currentPath: string = useLocation().pathname;
  const isLandingPage: boolean = currentPath === "/";

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <nav>
      <div
        className={`${
          isLandingPage ? "w-[90%] top-2 border rounded-xl" : "w-screen top-0"
        } fixed left-1/2 -translate-x-1/2 flex flex-row items-center justify-between bg-card py-3 px-4 border-b border-background z-20`}
      >
        {isLandingPage && (
          <h1 className='font-bold font-chewy  text-2xl'> Cvly</h1>
        )}

        <button
          className='p-2 border rounded-lg'
          onClick={() => setOpenMenu(!openMenu)}
        >
          {openMenu ? <X /> : <Menu />}
        </button>

        {!isLandingPage && (
          <img
            src='https://ui-avatars.com/api/?name=CharmingDc&background=random&bold=true&size=128.png'
            alt='User avatar'
            width='40px'
            height='40px'
            className='border rounded-full'
          />
        )}
      </div>

      {openMenu && !isLandingPage && (
        <Sidebar currentPath={currentPath} openMenu={openMenu} />
      )}

      {openMenu && isLandingPage && <Menubar />}
    </nav>
  );
};

export default Navbar;
