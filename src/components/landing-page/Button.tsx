type Props = {
  children: React.ReactNode;
  className?: string;
};

const Button = ({ children, className = "" }: Props) => {
  return (
    <button
      className={`w-fit flex flex-row items-center justify-center gap-2 bg-card
      font-chewy py-4 px-6 rounded-xl ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
