import Image from "next/image";

const NoItems = ({ title }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[200px] gap-4">
      <Image
        src={"/no-items.svg"}
        width={370}
        height={320}
        className="object-cover"
        alt="no items image"
      />
      <p className="text-base md:text-2xl font-bold text-baseGray">{title}</p>
    </div>
  );
};
export default NoItems;
