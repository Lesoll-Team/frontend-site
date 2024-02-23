import { useSelector } from "react-redux";

const BlogCategories = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="md:space-y-[32px]   ">
      <div className=" hidden md:block space-y-[8px]">
        <h3 className="text-2xl font-bold">
          {language ? "الفئات" : "Categories"}
        </h3>
        <div className="flex items-center">
          <div className="h-[2px] bg-lightGreen w-4/12"></div>
          <div className="h-[2px] bg-outLine w-8/12"></div>
        </div>
      </div>
      <div className="flex gap-4 overflow-auto md:overflow-hidden px-3 md:px-0 bg-[#EDEDED] py-3 md:py-0  md:bg-white md:block md:space-y-[32px] w-full">
        <p className="text-xl min-w-fit ">اخبار عقارية</p>
        <p className="text-xl min-w-fit">اخبار عقارية</p>
        <p className="text-xl min-w-fit">اخبار عقارية</p>
        <p className="text-xl min-w-fit">اخبار عقارية</p>
        <p className="text-xl min-w-fit ">اخبار عقارية</p>
      </div>
    </div>
  );
};
export default BlogCategories;
