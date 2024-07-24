import Link from "next/link";
import { useSelector } from "react-redux";

const PinProfileTitle = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className=" md:mx-0 mx-[20px] mb-10">
      <div className="flex justify-between">
        <h2 className=" font-bold  flex text-grayText2">
          {language ? "الحسابات المميزة " : "premium accounts"}
        </h2>
        <Link href={"/agents"} className="underline  lg-text">
          {language ? "عرض المزيد" : "Show more"}
        </Link>
      </div>
    </div>
  );
};
export default PinProfileTitle;
