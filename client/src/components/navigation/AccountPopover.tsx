import { Link } from "react-router-dom";
import { Settings, LogOut } from "lucide-react";

const AccountPopover = () => {
  return (
    <div className='min-w-48 fixed top-[4.5rem] right-[5%] flex flex-col gap-2 bg-card p-2 border rounded-lg z-30'>
      <div className='w-full flex flex-row items-center gap-2 pb-2 border-b'>
        <img
          src='https://ui-avatars.com/api/?name=CharmingDc&background=random&size=128.png'
          alt='User Avatar'
          width='38px'
          height='38px'
          className='border rounded-full'
        />

        <div className='flex flex-col justify-center'>
          <h2 className='font-bold'> Charming Dc </h2>
          <p className='text-sm text-muted-foreground -mt-1'>
            charmingdc002@gmail.com
          </p>
        </div>
      </div>

      <Link
        to='/settings'
        className='w-full bg-muted flex flex-row items-center gap-2 p-2 rounded-lg transition-all duration-500 hover:text-blue-900'
      >
        <Settings size={17} /> Account Settings
      </Link>

      <button className='w-full bg-red-900/10 flex flex-row items-center gap-2 p-2 rounded-lg'>
        <LogOut size={17} /> Signout
      </button>
    </div>
  );
};

export default AccountPopover;
