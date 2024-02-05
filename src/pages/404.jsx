import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, [router]);

  return (
    <div className="h-[90dvh] flex flex-col justify-center items-center">
      <h5>404 - Page Not Found</h5>
      <p> ... Redirecting to the home page</p>
    </div>
  );
};

export default NotFound;
// import Head from "next/head";
// import Link from "next/link";

// import { useSelector } from "react-redux";

// const Custom404 = () => {
//   const language = useSelector((state) => state.GlobalState.languageIs);

//   return (
//     <>
//       <Head>
//         <title>{language ? "صفحة غير موجودة" : "Page Not Found"}</title>
//       </Head>
//       <div className="w-full h-[92dvh] grid place-content-center ">
//         <img
//           src="/404.webp"
//           className="w-[95%] sm:w-[80%] md:w-[60%] mx-auto"
//         />
//         <h3 className="text-center font-bold text-lightOrange">
//           {language ? "صفحة غير موجودة" : "Page not Found"}
//         </h3>
//         <Link
//           title={language ? "العودة الى الصفحة الرئيسية" : "Back to home page"}
//           href={"/"}
//           className="text-center font-semibold text-lightGreen underline mt-5 "
//         >
//           {" "}
//           {language ? "العودة الى الصفحة الرئيسية" : "Back to home page"}{" "}
//         </Link>
//       </div>
//     </>
//   );
// };
// export default Custom404;
