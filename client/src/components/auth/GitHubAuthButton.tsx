const GithubAuthButton = ({ pathname }: { pathname: string }) => {
  const page = pathname.split("/")[1];
  console.log(page);

  return (
    <button className='flex flex-row items-center justify-center gap-2 bg-card py-2 px-5 border border-dashed rounded-lg shadow'>
      <div className='bg-white/10 p-2 rounded-full'>
        <img
          src='/icons/github-icon.png'
          alt='Github Icon Png'
          width='20px'
          height='20px'
        />
      </div>
      Authenticate via Github
    </button>
  );
};

export default GithubAuthButton;
