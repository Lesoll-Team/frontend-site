import Image from "next/image";
// import Link from "next/link";
import { memo } from "react";
// import { useSelector } from "react-redux";

const SimilarBlogs = ({ blog }) => {
  // const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="gap-x-3 m-1 ">
      <div className="flex">
        <Image
          src="/delete/bolgimg.webp"
          width={100}
          height={100}
          alt="similar image"
          className="h-[100px] w-[100px]"
        />
        <div className=" flex flex-col justify-center ">
          <span className="text-[20px]">شقق للبيع في مدينتي: تصميم فاخر</span>
          <span className="text-[20px] text-[#309DA0]">5 يناير 2024</span>
        </div>
      </div>
    </div>
  );
};
export default memo(SimilarBlogs);

//   return (
//     <div className="md:space-y-[32px]   ">
//       <div className=" hidden md:block space-y-[8px]">
//         <h3 className="text-2xl font-bold">
//           {language ? "الفئات" : "Categories"}
//         </h3>
//         <div className="flex items-center">
//           <div className="h-[2px] bg-lightGreen w-4/12"></div>
//           <div className="h-[2px] bg-outLine w-8/12"></div>
//         </div>
//       </div>
//       <div className="flex gap-4 overflow-auto no-scroll-bars md:overflow-hidden px-3 md:px-0 bg-[#EDEDED] py-3 md:py-0  md:bg-white md:flex-col md:space-y-[32px] w-full ">
//         {blogs.categories.map((item) => {
//           return (
//             <Link
//               key={item._id}
//               href={`?category=${item.categoryNameEn}`}
//               className="text-sm md:text-xl min-w-fit"
//             >
//               {language ? item.categoryNameAr : item.categoryNameEn}
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
