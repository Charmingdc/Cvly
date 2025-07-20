import { Link, useLocation } from "react-router-dom";
import GoogleAuthButton from "./GoogleAuthButton";
import GitHubAuthButton from "./GitHubAuthButton";

const AuthForm = () => {
  const currentPath: string = useLocation().pathname;

  return (
    <form className='flex flex-col items-center justify-center text-center max-w-full w-full px-4 gap-3'>
      <h1 className='font-chewy font-extrabold text-2xl'>
        {currentPath === "/signup"
          ? "Get Started with Cvly"
          : "SignIn to your Cvly Account"}
      </h1>

      <p className='w-[85%] text-sm text-muted-foreground -mt-2 mb-4 md:w-[65%]'>
        {currentPath === "/signup"
          ? "Join Cvly to create a shareable resume link and track who’s viewing or downloading it."
          : "Welcome back! Check your resume views and downloads in one place."}
      </p>

      <GoogleAuthButton pathname={currentPath} />
      <GitHubAuthButton pathname={currentPath} />

      <p className='w-full flex flex-row items-center justify-center gap-2 p-2 mt-2'>
        Or,
        <Link
          to={`${currentPath === "/signup" ? "/signin" : "/signup"}`}
          className='text-blue-800 hover:underline'
        >
          {currentPath === "/signup" ? "Sign In Instead" : "Create an Account"}
        </Link>
      </p>
    </form>
  );
};

export default AuthForm;
