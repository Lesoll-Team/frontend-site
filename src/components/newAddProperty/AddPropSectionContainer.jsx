import { cn } from "@/utils/cn";

const AddPropSectionContainer = ({ children, className }) => {
  return (
    <section
      className={cn(
        "bg-lightNeutral py-8 px-6 md:px-24 rounded-lg h-full grid lg:grid-cols-2 gap-y-10 gap-x-16",
        className
      )}
    >
      {children}
    </section>
  );
};
export default AddPropSectionContainer;
