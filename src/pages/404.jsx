import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Custom404 = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  useEffect(() => {
    // Check if the path is '/Contact' and redirect to '/contact'
    if (router.asPath === "/Contact") {
      router.replace("/contact");
    }
    if (router.asPath === "/About") {
      router.replace("/about");
    }
    // if (router.asPath === "/Blogs") {
    //   router.replace("/blogs");
    // }
    if (router.asPath === "/Q_A") {
      router.replace("/faq");
    }
    if (
      router.asPath.includes("/SiteMap") ||
      router.asPath.includes("/Sitemap") ||
      router.asPath === "/Governrate" ||
      router.asPath.includes("Realties")
    ) {
      router.replace("/searching/offer=all");
    }

    if (
      router.asPath.includes("/search") ||
      router.asPath.includes("/Search")
    ) {
      router.replace("/searching/offer=all");
    }
    // if (router.asPath.includes("/Detail/")) {
    //   const parts = router.asPath.split("/");
    //   const codeID = parts[parts.length - 1];
    //   router.replace(`/property-details/${codeID}`);
    // }
  }, [router]);
  return (
    <>
      <Head>
        <title>{language ? "صفحة غير موجودة" : "Page Not Found"}</title>
      </Head>
      <div className="w-full h-[92dvh] grid place-content-center ">
        <img
          src="/404.webp"
          className="w-[95%] sm:w-[80%] md:w-[60%] mx-auto"
        />
        <h3 className="text-center font-bold text-lightOrange">
          {language ? "صفحة غير موجودة" : "Page not Found"}
        </h3>
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
export default Custom404;
