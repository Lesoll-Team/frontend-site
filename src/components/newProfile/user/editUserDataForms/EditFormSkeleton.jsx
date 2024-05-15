import React from "react";
import InputSkeleton from "./InputSkeleton";
import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useSelector } from "react-redux";

const EditFormSkeleton = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="container mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-baseGray">
          {language ? "المعلومات الشخصية" : "Personal Info"}
        </h3>
        <Link href={"/profile"}>
          <FaArrowLeftLong className="text-baseGray text-2xl" />
        </Link>
      </div>
      <div className="flex flex-col gap-y-10">
        <div className="flex flex-col gap-y-8">
          <InputSkeleton />
          <InputSkeleton />
          <InputSkeleton />
          <InputSkeleton />
          <InputSkeleton />
        </div>
      </div>
    </div>
  );
};

export default EditFormSkeleton;
