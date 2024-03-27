import Image from "next/image";

const InfoCard = ({ src, title, onClick, alt }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      className="flex   flex-col items-center justify-center gap-2 w-full md:w-[160px] py-2 px-3 border rounded-md "
    >
      <Image
        src={src}
        width={40}
        height={40}
        className="md:w-[40px] md:h-[40px] h-[25px] w-[25px]"
        alt={alt}
      />
      <p className="text-black lg-text">{title}</p>
    </div>
  );
};
export default InfoCard;
