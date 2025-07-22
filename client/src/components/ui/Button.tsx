type ButtonVariant = "primary" | "outline" | "destructive" | "link";

type Props = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  variant = "primary",
  className = "",
  disabled,
  ...rest
}: Props) => {
  const variants: Record<ButtonVariant, string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border hover:bg-gray-900",
    destructive: "bg-red-600 text-white hover:bg-red-700",
    link: "text-blue-600 underline hover:text-blue-800"
  };

  const disabledClasses = "opacity-50 cursor-not-allowed";

  return (
    <button
      disabled={disabled}
      className={`w-fit flex flex-row items-center justify-center gap-2 px-4 py-2 text-sm rounded-lg transition-all duration-300
        ${variants[variant]} 
        ${disabled ? disabledClasses : ""}
        ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
