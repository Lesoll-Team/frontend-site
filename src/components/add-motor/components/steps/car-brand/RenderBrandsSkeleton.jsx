import React from "react";

const RenderBrandsSkeleton = () => {
  return (
    <>
      <BrandCardSeleton />
      <BrandCardSeleton />
      <BrandCardSeleton />
      <BrandCardSeleton />
      <BrandCardSeleton />
      <BrandCardSeleton />
      <BrandCardSeleton />
      <BrandCardSeleton />
      <BrandCardSeleton />
      <BrandCardSeleton />
      <BrandCardSeleton />
      <BrandCardSeleton />
    </>
  );
};

export default RenderBrandsSkeleton;

const BrandCardSeleton = () => {
  return (
    <div className="w-full flex flex-col items-center animate-pulse md:justify-center justify-start p-2 py-3 md:p-6  gap-3 rounded-md bg-white md:hover:-translate-y-1 md:hover:drop-shadow-sm duration-150">
      <div className="w-[100px] h-[100px]" />
      <p className="text-center h-2 w-[80%] bg-gray-200 rounded-lg animate-pulse">
        {" "}
      </p>
    </div>
  );
};
