import { generateRedirectDestination } from "@/Shared/generateRedirectDestination";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useSelector } from "react-redux";

const Custom404 = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <>
      <Head>
        <title>{language ? "صفحة غير موجودة" : "Page Not Found"}</title>
      </Head>
      <div className="w-full h-[92dvh] flex flex-col  lg:flex-row container mx-auto gap-5 lg:gap-20 items-center justify-center ">
        <Image
          src="/404.webp"
          className="min-w-fit object-cover w-[200px] h-[200px] lg:w-[435px] lg:h-[453px]"
          width={435}
          height={435}
        />
        <div className="flex flex-col gap-8 md:gap-14 lg:justify-start justify-center ">
          <div className="space-y-5 text-center lg:text-start">
            <h3 className=" text-2xl lg:text-4xl font-bold text-baseGray">
              {language ? "صفحة غير موجودة" : "Page not Found"}
            </h3>
            <p className="text-sm lg:text-xl">
              {language
                ? "الصفحة التي تبحث عنها قد تكون محذوفة او غير متوفرة مؤقتاً "
                : "The page you are looking for may be deleted or temporarily unavailable "}
            </p>
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
export default Custom404;
export async function getServerSideProps() {
  const destination = generateRedirectDestination();

  return {
    redirect: {
      destination: destination,
      statusCode: 308,
    },
  };
}
