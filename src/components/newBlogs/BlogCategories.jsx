import Link from "next/link";
import { useSelector } from "react-redux";

const BlogCategories = ({ blogs }) => {
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
      <div className="flex gap-4 overflow-auto no-scroll-bars md:overflow-hidden px-3 md:px-0 bg-[#EDEDED] py-3 md:py-0  md:bg-white md:flex-col md:space-y-[32px] w-full ">
        {blogs.categories.map((item) => {
          return (
            <Link
              key={item._id}
              href={`?category=${item.categoryNameEn}`}
              className="text-sm md:text-xl min-w-fit"
            >
              {language ? item.categoryNameAr : item.categoryNameEn}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default BlogCategories;
