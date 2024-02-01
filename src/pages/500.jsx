import Head from "next/head";
import Link from "next/link";
import { useSelector } from "react-redux";

const Custom505 = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <Head>
        <title> {language ? "خطأ فى السيرفر" : "Server Error"} </title>
      </Head>
      <div className="w-full h-[92dvh] grid place-content-center space-y-4 ">
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
      </div>
    </>
  );
};
export default Custom505;
