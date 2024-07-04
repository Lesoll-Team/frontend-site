import { getLangBoolean } from "@/utils/getLangBoolean";
import React from "react";
import { TbVirusSearch } from "react-icons/tb";

const ResultNotFound = () => {
  const language = getLangBoolean();

  return (
    <div className="w-full  min-h-[75dvh] text-2xl text-default-500 text-center ">
      {language ? (
        <div>
          <h3 className="text-2xl md:text-3xl">لا توجد نتائج </h3>
          <div
            className={` justify-around bg-sky-100 rounded-xl py-10 px-4 items-center md:flex-row flex-col flex m-10`}
          >
            <div
              className={`
                                md:items-start
                           flex flex-col items-center justify-center`}
            >
              <h4 className="font-semibold mb-3 text-lightGreen text-xl md:text-3xl">
                لتحسين البحث
              </h4>
              <p className=" flex  text-start  md:text-xl text-lg">
                1- تأكد من الكلمات المستخدمة في البحث أو استخدم عبارات أخرى أو
                حاول بحث بعبارات أخرى للحصول على المحتوى المطلوب
              </p>
              <p className=" flex text-start  md:text-xl text-lg">
                2- الحقل الاول مخصص للمناطق والمحافظات : تأكد من ادخال اسم
                المنطقة/المحافظة بشكل صحيح
              </p>
              <p className=" flex text-start  md:text-xl text-lg">
                3- الحقل الثانى مخصص للكلمات المفتاحية : تأكد من ادخال الكلمات
                بشكل صحيح
              </p>
            </div>
            <div>
              <TbVirusSearch className="text-8xl text-lightGreen" />
            </div>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-2xl md:text-3xl">NO SEARCH RESULTS</h3>
          <div
            className={` justify-around bg-sky-100 rounded-xl py-10 px-4 items-center md:flex-row flex-col flex m-10`}
          >
            <div
              className={`
                                md:items-start
                           flex flex-col items-center justify-center`}
            >
              <h4 className="font-semibold mb-3 text-lightGreen text-xl md:text-3xl">
                To Enhance your search
              </h4>
              <p className=" flex  text-start  md:text-xl text-lg">
                1- Double check your spelling, use more generic terms or try
                different keywords to find what you’re looking for
              </p>
              <p className=" flex text-start  md:text-xl text-lg">
                2- The first field is dedicated to regions and governorates:
                Make sure to enter the name of the region/governorate correctly
              </p>
              <p className=" flex text-start  md:text-xl text-lg">
                3- The second field is dedicated to keywords: Make sure you
                enter the words correctly
              </p>
            </div>
            <div>
              <TbVirusSearch className="text-8xl text-lightGreen" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResultNotFound;
