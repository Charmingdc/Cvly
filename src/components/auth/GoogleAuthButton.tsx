const GoogleAuthButton = ({ pathname }: { pathname: string }) => {
  const page = pathname.split("/")[1];
  console.log(page);

  return (
    <button className='flex flex-row items-center justify-center gap-2 bg-card py-2 px-5 border border-dashed rounded-lg shadow'>
      <div className='bg-white/10 p-2 rounded-full'>
        <img
          src='/icons/google-icon.png'
          alt='Google Icon Png'
          width='18px'
          height='18px'
        />
      </div>
      Authenticate via Google
    </button>
  );
};

export default GoogleAuthButton;
