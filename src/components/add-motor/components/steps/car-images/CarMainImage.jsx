import { useSelector } from "react-redux";
import Image from "next/image";
import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import ImageCard from "./ImageCard";
import Error from "@/Shared/ui/Error";
import useFormImages from "@/components/add-motor/hooks/useFormImages";
import { useEffect, useRef } from "react";

const CarMainImage = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { register, setValue, errors, watch, clearErrors, step, loading } =
    useAddMotorContext();
  const containerRef = useRef(null);

  const {
    deleteMainImage,
    handleMainImageChange,
    handleMainImageDragOver,
    handleMainImageDrop,
    mainImageRef,
    deleteThumbnail,
  } = useFormImages({ register, setValue, errors, watch, clearErrors });
  const handleErrorFoucs = () => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  };
  useEffect(() => {
    if (errors.mainImage) {
      handleErrorFoucs();
    }
  }, [errors?.multiImage]);
  const addMainImage = () => {
    if (mainImageRef.current) {
      mainImageRef.current.click();
    }
  };
  const showImage = watch("mainImage") || watch("thumbnail");
  return (
    <>
      <div
        ref={containerRef}
        className={`bg-white py-8 gap-5  border-2 flex flex-col items-center justify-center px-2 rounded-md ${errors.mainImage ? "border-red-500" : "border-white"}`}
        onDrop={handleMainImageDrop}
        onDragOver={handleMainImageDragOver}
      >
        {showImage ? (
          watch("thumbnail") ? (
            <ImageCard
              loading={loading}
              main
              onDelete={deleteThumbnail}
              src={watch("thumbnail")}
              alt="upload image"
              width={100}
              height={100}
            />
          ) : (
            <ImageCard
              loading={loading}
              main
              onDelete={deleteMainImage}
              src={URL.createObjectURL(watch("mainImage"))}
              alt="upload image"
              width={100}
              height={100}
            />
          )
        ) : (
          <>
            <button type="button" onClick={addMainImage}>
              <Image
                src={"/upload-image.svg"}
                alt="upload image"
                width={100}
                height={100}
              />
            </button>
            <div className="space-y-2 text-center">
              <h3>
                {language ? "أضف صورة الإعلان الرئيسية" : "Add car main image"}
              </h3>
              <p>
                {language
                  ? "جودة الصور المرفقة للسيارة تساعد في نشر إعلانك بشكل افضل"
                  : "The quality of the attached car images helps to promote your ad better."}
              </p>
            </div>
            <button
              type="button"
              className="bg-lightGreen py-2 text-white rounded-md min-w-[50%] px-4"
              onClick={addMainImage}
            >
              {language ? "أضف الصور" : "Upload images"}
            </button>
          </>
        )}
        <input
          type="file"
          accept="images/*"
          hidden
          ref={mainImageRef}
          onChange={handleMainImageChange}
        />
        <input
          hidden
          {...register("mainImage", {
            validate: {
              requierd: (value) => {
                if (step === 6) {
                  const image = Boolean(value) || Boolean(watch("thumbnail"));
                  const errorMessage = language
                    ? "يجب اضافة الصورة الرئيسية للعقار"
                    : "Main image is missing.";
                  return image || errorMessage;
                }
              },
            },
          })}
        />
      </div>
      {errors.mainImage && (
        <Error>
          {language
            ? "من فضلك ارفع الصورة الرئيسية"
            : "Please upload the main image"}
        </Error>
      )}
    </>
  );
};

export default CarMainImage;
