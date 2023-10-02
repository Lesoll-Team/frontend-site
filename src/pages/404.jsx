import Link from "next/link";
import { useSelector } from "react-redux";

const Custom404 = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="w-full h-[92dvh] grid place-content-center ">
      <img src="/404.webp" />
      <h2 className="text-center font-bold text-lightOrange">
        {language ? "لم يتم العثور على الصفحة" : "Page not Found"}
      </h2>
      <Link
        href={"/"}
        className="text-center font-semibold text-lightGreen underline mt-5 "
      >
        {" "}
        {language ? "العودة الى الصفحة الرئيسية" : "Back to home page"}{" "}
      </Link>
    </div>
  );
};
export default Custom404;
