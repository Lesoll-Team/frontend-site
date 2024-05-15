import { cn } from "@/utils/cn";

const Button = ({
  type,
  onClick,
  children,
  disabled,
  className,
  variant = "",
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn(
        `w-full p-3 h-12  flex items-center justify-center rounded-md border-lightGreen border-2   text-lg ${
          variant === "bordered"
            ? "bg-transparent text-lightGreen  "
            : "bg-lightGreen text-white "
        } ${disabled && "opacity-50"}`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
