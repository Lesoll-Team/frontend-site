import { cn } from "@/utils/cn";

const StepContainer = ({ children, className }) => {
  return (
    <div
      className={cn(
        "bg-bgGray md:w-[75%] min-h-[70vh] mx-auto px-5 sm:px-8 py-10 lg:px-32 rounded space-y-5",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default StepContainer;
