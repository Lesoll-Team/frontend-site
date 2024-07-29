import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const BlogCategories = ({ blogs }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const router = useRouter();
  const query = router.query;

  return (
    <div className="md:space-y-[32px]   ">
      <div className=" hidden md:block space-y-[8px]">
        <h2 className="text-gray-800 font-bold">
          {language ? "الفئات" : "Categories"}
        </h2>
        <div className="flex items-center">
          <div className="h-[2px] bg-lightGreen w-4/12"></div>
          <div className="h-[2px] bg-outLine w-8/12"></div>
        </div>
      </div>
      <div className="flex gap-4 overflow-auto no-scrollbar md:overflow-hidden px-3 md:px-0 bg-[#EDEDED] py-3 md:py-0  md:bg-white md:flex-col md:space-y-4 w-full ">
        {blogs.categories.map((item) => {
          const catNameLink = item.categoryNameEn.split(" ").join("-");
          const isActive = query?.category === catNameLink;
          return (
            <Link
              key={item._id}
              href={`?category=${catNameLink}&page=1`}
              className={`text-sm md:text-[19px] min-w-fit md:w-fit break-keep  md:hover:text-lightGreen duration-150 ${isActive ? "text-lightGreen" : "text-baseGray"}`}
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
