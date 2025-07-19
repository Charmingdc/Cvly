import { Link } from "react-router-dom";

const CallOut = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center text-center gap-6 mt-12'>
      <h3 className='font-chewy font-bold text-2xl transform'>
        Your resume deserves more than a PDF attachment
      </h3>

      <p className='w-[85%] text-muted-foreground'>
        Create your free, professional resume link today - and see what happens
        after you hit <strong> send </strong>
      </p>

      <Link
        to='/signup'
        className='w-fit bg-card font-chewy p-4 border border-dashed rounded-xl'
      >
        Create an Account
      </Link>
    </div>
  );
};

export default CallOut;
