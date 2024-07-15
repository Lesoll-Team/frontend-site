import Link from "next/link";
import { useSelector } from "react-redux";

const PinProfileTitle = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="mb-10">
      <div className="flex justify-between">
        <h2 className=" text-grayText2">
          {language ? "افضل الوكلاء" : "Best Agents"}
        </h2>
        <Link href={"/agents"} className="underline">
          عرض المزيد
        </Link>
      </div>
      <p className="mt-2 text-[#666666]">
        {language ? "افضل وكلاء العقارات" : "Best real estate agents"}
      </p>
    </div>
  );
};
export default PinProfileTitle;
