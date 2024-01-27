import { cn } from "@/utils/cn";
const Button = ({ type, onClick, children, disabled, className }) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={cn(
        `w-full p-3 h-12  flex items-center justify-center rounded-md text-white bg-lightGreen text-xl ${
          disabled && "opacity-50"
        }`,
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
