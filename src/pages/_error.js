// import { generateRedirectDestination } from "@/Shared/generateRedirectDestination";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useSelector } from "react-redux";

const ErrorPage = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div className="w-full h-[92dvh] flex flex-col  lg:flex-row container mx-auto gap-5 lg:gap-20 items-center justify-center ">
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <Image
        src="/client-error.svg"
        className="min-w-fit object-cover w-[200px] h-[200px] lg:w-[375px] lg:h-[375px]"
        width={435}
        height={435}
      />
      <div className="flex flex-col gap-8 md:gap-14 lg:justify-start justify-center ">
        <div className="space-y-5 text-center lg:text-start">
          <h3 className=" text-2xl lg:text-4xl font-bold text-baseGray">
            {language ? "حدث خطأ" : "An error occurred"}
          </h3>
        </div>
        <Link
          title={language ? "العودة الى الصفحة الرئيسية" : "Back to home page"}
          href={"/"}
          className="text-sm md:text-base text-white text-center py-2 px-10 lg:px-20 bg-lightGreen rounded-md"
        >
          {" "}
          {language ? "العودة الى الصفحة الرئيسية" : "Back to home page"}{" "}
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
// export async function getServerSideProps() {
//   const destination = generateRedirectDestination();

//   return {
//     redirect: {
//       destination: destination,
//       statusCode: 308,
//     },
//   };
// }
