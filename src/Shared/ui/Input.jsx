import { cn } from "@/utils/cn";

const Input = ({ error, errorMessage, className, ...props }) => {
  return (
    <>
      <input
        className={cn(
          ` w-full text-lg font-semibold  focus:outline-none focus:border-lightGreen placeholder:text-darkGray placeholder:opacity-60   border-2 rounded-md p-3 py-2 ${
            error && "border-red-500 focus:border-red-500"
          }`,
          className
        )}
        {...props}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </>
  );
};

export default Input;
