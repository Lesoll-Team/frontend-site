import { cn } from "@/utils/cn";
const DataWidget = ({ icon, title, data, className }) => {
  return (
    <div
      className={cn(
        "bg-[#F8F8F8] md:py-5 py-4 flex flex-col gap-2 justify-center items-center rounded-lg",
        className,
      )}
    >
      <div className="w-10 h-10 text-white bg-lightGreen text-2xl rounded-full flex items-center justify-center">
        {icon}
      </div>
      <p>
        {title}: <span className="font-bold">{data}</span>
      </p>
    </div>
  );
};

export default DataWidget;
