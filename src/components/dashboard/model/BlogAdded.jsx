import Image from "next/image";
import Link from "next/link";
// import Link from "next/link";
import { useSelector } from "react-redux";

const BlogAdded = ({ setBlogCreated }) => {
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
        <div className="">
          <h3 className="font-bold text-lg md:text-3xl">
            {language ? "تم إضافة  المقال بنجاح" : "The blog has been add"}
          </h3>
        </div>
      </div>
      <button
        // href={"/"}
        onClick={() => setBlogCreated(false)}
        className="w-8/12 lg:max-w-[300px] py-2 bg-lightGreen rounded-md text-white mx-auto"
      >
        {language ? "اضف مقال اخر" : "Add Other blog"}{" "}
      </button>
    </div>
  );
};
export default BlogAdded;
