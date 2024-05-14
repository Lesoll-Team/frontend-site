import Image from "next/image";
// import Link from "next/link";
import { useSelector } from "react-redux";

const SubmitedCard = ({ setSended }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="w-full md:min-h-[322px] text-center gap-16 px-3 bg-lightNeutral py-16 grid place-content-center  justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-y-5">
        <Image
          src={"/done-icon.png"}
          width={85}
          height={85}
          alt="check done mark"
          className="mx-auto"
        />
        <div className="text-center space-y-2">
          <h3 className="font-bold text-lg md:text-3xl">
            {language ? "تم إضافة  المشروع بنجاح" : "The Project has been add"}
          </h3>
          <p className="text-base md:text-2xl text-baseGray">
            {language
              ? "سنقوم بمراجعة عقارك والرد في اسرع وقت"
              : "We will review your property and respond as soon as possible"}
          </p>
        </div>
      </div>
      <button
        href={"/"}
        onClick={() => {
          setSended(false);
        }}
        className="w-8/12 lg:max-w-[300px] py-2 bg-lightGreen rounded-md text-white mx-auto"
      >
        {language ? "اضف مشروع اخر" : "Add Other Project"}{" "}
      </button>
    </div>
  );
};
export default SubmitedCard;
