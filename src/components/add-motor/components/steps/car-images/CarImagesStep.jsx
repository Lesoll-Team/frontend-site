import React from "react";
import StepContainer from "../../ui/StepContainer";
import { useSelector } from "react-redux";
import ImageCard from "./ImageCard";
import Image from "next/image";

const CarImagesStep = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const arr = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  return (
    <StepContainer className={"min-h-fit"}>
      <div className="space-y-3">
        <p className="font-bold">{language ? "الصور" : "Images"}</p>
        <p>
          {language ? "يمكنك إضافة حتى 20 صورة" : "You can add up to 20 Images"}
        </p>
        {/* <div className="grid bg-white px-5 py-5  grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 justify-items-center">
          {arr.map(() => {
            return (
              <>
                <ImageCard />
              </>
            );
          })}
        </div> */}
        <div className="bg-white py-8 gap-5 flex flex-col items-center justify-center px-2 rounded-md">
          <button>
            <Image
              src={"/upload-image.svg"}
              alt="upload image"
              width={100}
              height={100}
            />
          </button>
          <div className="space-y-2 text-center">
            <h3>{language ? "أضف صور السيارة" : "Add Car Images"}</h3>
            <p>
              {language
                ? "جودة الصور المرفقة للسيارة تساعد في نشر إعلانك بشكل افضل"
                : "The quality of the attached car images helps to promote your ad better."}
            </p>
          </div>
          <button className="bg-lightGreen py-2 text-white  rounded-md min-w-[50%] px-4">
            {language ? "أضف الصور" : "Upload images"}
          </button>
        </div>
      </div>
    </StepContainer>
  );
};

export default CarImagesStep;
