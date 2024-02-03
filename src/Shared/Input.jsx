import { cn } from "@/utils/cn";

const Input = (props) => {
  return (
    <div className={`w-full mt-3 `}>
      <input
        {...props}
        className={cn(
          "block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2 ",
          ""
        )}
      />
    </div>
  );
};

export default Input;
