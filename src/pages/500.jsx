import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";

const Custom505 = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <Head>
        <title> {language ? "خطأ فى السيرفر" : "Server Error"} </title>
      </Head>
      {/* <div className="w-full h-[92dvh] grid place-content-center space-y-4 ">
        <img
          src="/500.svg"
          className="w-[95%] sm:w-[500px%] md:w-[500px] mx-auto"
        />
        <h2 className="text-center font-bold text-lightOrange">
          {language ? "حدث خطأ فى السيرفر" : "Server-side error occurred"}
        </h2>
        <Link
          title={language ? "العودة الى الصفحة الرئيسية" : "Back to home page"}
          href={"/"}
          className="text-center font-semibold text-lightGreen underline mt-5 "
        >
          {" "}
          {language ? "العودة الى الصفحة الرئيسية" : "Back to home page"}{" "}
        </Link>
      </div> */}
      <div className="w-full h-[92dvh] flex flex-col  lg:flex-row container mx-auto gap-5 lg:gap-20 items-center justify-center ">
        <Image
          src="/500-error.svg"
          className="min-w-fit object-cover w-[200px] h-[200px] lg:w-[375px] lg:h-[375px]"
          width={435}
          height={435}
        />
        <div className="flex flex-col gap-8 md:gap-14 lg:justify-start justify-center ">
          <div className="space-y-5 text-center lg:text-start">
            <h3 className=" text-2xl lg:text-4xl font-bold text-baseGray">
              {language ? "حدث خطأ فى السيرفر" : "Server-side error occurred"}
            </h3>
            {/* <p className="text-sm lg:text-xl">
              {language ? "حدث خطأ فى السيرفر" : "Server-side error occurred"}
            </p> */}
          </div>
          <Link
            title={
              language ? "العودة الى الصفحة الرئيسية" : "Back to home page"
            }
            href={"/"}
            className="text-sm md:text-base text-white text-center py-2 px-10 lg:px-20 bg-lightGreen rounded-md"
          >
            {" "}
            {language ? "العودة الى الصفحة الرئيسية" : "Back to home page"}{" "}
          </Link>
        </div>
      </div>
    </>
  );
};
export default Custom505;
