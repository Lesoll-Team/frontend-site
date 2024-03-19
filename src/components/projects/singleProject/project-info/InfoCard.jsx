import Image from "next/image";

const InfoCard = ({ src, title }) => {
  return (
    <div className="flex md:flex-col items-center justify-center gap-2">
      <Image
        src={src}
        width={40}
        height={40}
        className="md:w-[40px] md:h-[40px] h-[25px] w-[25px]"
      />
      <p></p>
    </div>
  );
};
export default InfoCard;
