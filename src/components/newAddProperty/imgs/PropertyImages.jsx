import AddPropSectionContainer from "../components/AddPropSectionContainer";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import Error from "@/Shared/ui/Error";
import { compressImage } from "@/utils/compressImage";

const PropertyImages = ({ errors, register, setValue, watch, clearErrors }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const mainImgInputRef = useRef(null);
  const multiImgInputRef = useRef(null);
  const thumbnail = watch("thumbnail") || "";
  // const [multiImage, setMultiImage] = useState(watch("multiImage"));
  const [album, setAlbum] = useState(watch("album"));
  const mainImgContainerRef = useRef(null);
  const showMultiImages = watch("multiImage") || watch("album")?.length > 0;
  const multiImages = watch("multiImage");
  useEffect(() => {
    setAlbum(watch("album"));
  }, [watch("album")]);

  useEffect(() => {
    if (watch("multiImage") && watch("multiImage").length > 0) {
      clearErrors("multiImage");
    }
  }, [watch("multiImage")]);
  useEffect(() => {
    if (errors.mainImage) {
      mainImgContainerRef.current.focus();
    }
  }, [errors.mainImage]);
  const handleMainImageChange = async (e) => {
    const originalFile = e.target.files[0];
    const compressedFile = await compressImage(originalFile);
    setValue("mainImage", compressedFile);
  };
  const deleteMainImage = () => {
    setValue("mainImage", null);
  };

  const handleMultiImageChange = async (event) => {
    const originalFiles = Array.from(event.target.files);
    const compressPromises = originalFiles.map(compressImage);
    const compressedFiles = await Promise.all(compressPromises);
    if (Array.isArray(watch("multiImage"))) {
      setValue("multiImage", [...multiImages, ...compressedFiles]);
    } else {
      setValue("multiImage", compressedFiles);
    }
  };

  const handleDeleteImage = (index) => {
    const newImages = watch("multiImage").filter((_, i) => i !== index);
    if (newImages.length > 0) {
      setValue("multiImage", newImages);
    } else {
      setValue("multiImage", null);
    }
  };
  const handleDeleteImageFromAlbum = (id) => {
    const newAlbum = album.filter((item) => item._id !== id);
    setValue("album", newAlbum);
  };
  const deleteThumbnail = () => {
    setValue("thumbnail", null);
  };
  const addMainImage = () => {
    if (!watch("mainImage") && !watch("thumbnail")) {
      if (mainImgInputRef.current) {
        mainImgInputRef.current.click();
      }
    }
  };
  const addMultiImage = () => {
    if (watch("multiImage")?.length > 0 || watch("album")?.length > 0) {
      return;
    } else {
      if (multiImgInputRef.current) {
        multiImgInputRef.current.click();
      }
    }
  };
  return (
    <AddPropSectionContainer className={"flex flex-col"}>
      <div
        onClick={addMainImage}
        className={`w-full  bg-white border-dashed border-2 gap-3 md:gap-5  border-outLine py-5 md:py-10 px-5 flex flex-col items-center justify-center ${
          errors.mainImage && "border-red-500"
        }`}
      >
        <button
          ref={mainImgContainerRef}
          type="button"
          className="w-0 h-0 focus:outline-none focus:ring-0"
        ></button>
        {!watch("mainImage") && !watch("thumbnail") ? (
          <>
            {" "}
            <Image
              width={100}
              height={100}
              src={"/icons/add-img.svg"}
              alt="add image icon"
              className="cursor-pointer"
            />
            <h2 className="text-center  text-darkGray font-bold">
              {language
                ? "اضف الصورة الرئيسية للعقار"
                : "Add main image for the property"}
            </h2>
            <p className="text-center  text-outLine">
              {language
                ? "جودة الصور المرفقة للعقار تساعد في نشر إعلانك بشكل افضل"
                : "The quality of the attached images of the property helps in spreading your ad better"}
            </p>
            <input
              ref={mainImgInputRef}
              className="hidden"
              type="file"
              accept="image/*"
              onChange={handleMainImageChange}
            />
          </>
        ) : (
          <div className="relative overflow-hidden">
            <button
              type="button"
              onClick={watch("mainImage") ? deleteMainImage : deleteThumbnail}
              className="absolute drop-shadow top-3 mx-2 px-2 py-1 rounded font-bold  text-red-500 bg-white"
            >
              {language ? "حذف" : "Delete"}
            </button>
            {watch("mainImage") && (
              <Image
                alt="main-image"
                className="max-w-[420] cursor-default rounded object-cover max-h-[300px] border-2 border-outLine"
                width={400}
                height={300}
                src={URL.createObjectURL(watch("mainImage"))}
              />
            )}
            {watch("thumbnail") && (
              <Image
                alt="main-image"
                className="max-w-[420] rounded object-cover max-h-[300px] border-2 border-outLine"
                width={400}
                height={300}
                src={watch("thumbnail")}
              />
            )}
          </div>
        )}
        {errors.mainImage && <Error>{errors.mainImage.message}</Error>}
        <input
          type="text"
          hidden
          {...register("mainImage", {
            // required: {
            //   value: true,
            //   message: language
            //     ? "يجب اضافة الصورة الرئيسية للعقار"
            //     : "Main image is missing.",
            // },'
            validate: {
              requierd: (value) => {
                const image = Boolean(value) || Boolean(thumbnail);
                return (
                  image ||
                  (language
                    ? "يجب اضافة الصورة الرئيسية للعقار"
                    : "Main image is missing.")
                );
              },
            },
          })}
        />
      </div>
      <div
        onClick={addMultiImage}
        className="w-full   bg-white border-dashed border-2 gap-3 md:gap-5 border-outLine py-5 md:py-10 px-5 flex flex-col items-center justify-center"
      >
        <input
          ref={multiImgInputRef}
          className="hidden"
          multiple
          hidden
          type="file"
          accept="image/*"
          onChange={handleMultiImageChange}
        />
        {!showMultiImages ? (
          <>
            {" "}
            <Image
              onClick={() => {
                if (multiImages?.length > 0 || watch("album")?.length > 0) {
                  if (multiImgInputRef.current) {
                    multiImgInputRef.current.click();
                  }
                }
              }}
              width={100}
              height={100}
              src={"/icons/add-img.svg"}
              alt="add image icon"
              className="cursor-pointer"
            />
            <h2 className="text-center  text-darkGray font-bold">
              {language ? "اضف الصور الأخرى" : "Add other photos"}
            </h2>
            <p className="text-center  text-outLine">
              {language
                ? "عدد الصور المسموح بها من 3 إلى 20"
                : "Number of photos allowed from 3 to 20"}
            </p>
          </>
        ) : (
          <div className="flex flex-wrap justify-center items-center gap-3  ">
            {/* {console.log(multiImages)} */}
            {watch("multiImage") &&
              Array.isArray(multiImages) &&
              watch("multiImage")?.map((image, index) => (
                <div key={index} className="relative">
                  <Image
                    alt={`multi-image-${index}`}
                    className="w-[210px] h-[150px]  rounded object-cover border-2 border-outline"
                    width={400}
                    height={300}
                    src={URL.createObjectURL(image)}
                  />
                  <button
                    type="button"
                    onClick={() => handleDeleteImage(index)}
                    className="absolute drop-shadow top-3 mx-2 px-1 text-xs py-1 rounded font-bold  text-red-500 bg-white"
                  >
                    {language ? "حذف" : "Delete"}
                  </button>
                </div>
              ))}

            {watch("album") &&
              watch("album").map((item, index) => {
                return (
                  <div key={index} className="relative">
                    <button
                      type="button"
                      onClick={() => handleDeleteImageFromAlbum(item._id)}
                      className="absolute drop-shadow top-3 mx-2 px-1 text-xs py-1 rounded font-bold  text-red-500 bg-white"
                    >
                      {language ? "حذف" : "Delete"}
                    </button>
                    <Image
                      alt={`multi-image-${index}`}
                      className="w-[210px] h-[150px]  rounded object-cover border-2 border-outline"
                      width={400}
                      height={300}
                      src={item.image}
                    />
                  </div>
                );
              })}
            <Image
              onClick={() => {
                if (multiImgInputRef.current) {
                  multiImgInputRef.current.click();
                }
              }}
              width={100}
              height={100}
              src={"/icons/add-img.svg"}
              alt="add image icon"
              className="cursor-pointer"
            />
          </div>
        )}
        <Error>{errors?.multiImage?.message}</Error>
        <input
          type="text"
          hidden
          {...register("multiImage", {
            validate: {
              min: (value) => {
                const totalPics = (value?.length || 0) + (album?.length || 0);
                return (
                  totalPics > 2 ||
                  (language
                    ? "يجب ان لا يقل عدد الصور الاخرى عن 3"
                    : " must be a at least 3 images")
                );
              },
              max: (value) => {
                return (
                  (value?.length || 0) + (album?.length || 0) < 21 ||
                  (language
                    ? "يجب الا يزيد عدد الصور عن 20"
                    : "only 20 images a re allowed")
                );
              },
            },
          })}
        />
      </div>
    </AddPropSectionContainer>
  );
};
export default PropertyImages;
