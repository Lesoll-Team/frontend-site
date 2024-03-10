import { cn } from "@/utils/cn";

const Error = ({ className, children }) => {
  return (
    <div className={cn("text-sm text-red-500", className)}>{children}</div>
  );
};
export default Error;
