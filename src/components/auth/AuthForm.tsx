import GoogleAuthButton from "./GoogleAuthButton";
import GitHubAuthButton from "./GitHubAuthButton"

const AuthForm = () => {
  return (
    <form>
      <GoogleAuthButton />
      <GitHubAuthButton />
    </form>
  );
};

export default AuthForm;
