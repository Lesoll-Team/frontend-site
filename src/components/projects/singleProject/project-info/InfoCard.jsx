import Image from "next/image";

const InfoCard = ({ src, title }) => {
  return (
    <div className="flex md:flex-col items-center justify-center gap-2">
      <Image
        src={src}
        width={40}
        height={40}
        className="md:w-[25px] h-[25px]"
      />
    </div>
  );
};
export default InfoCard;
