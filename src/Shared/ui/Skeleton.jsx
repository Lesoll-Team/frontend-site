import { cn } from "@/utils/cn";

const Skeleton = ({ className }) => {
  return <div className={cn("animate-pulse bg-gray-200 ", className)} />;
};
export default Skeleton;
