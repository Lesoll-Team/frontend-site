import { BiImageAdd } from "react-icons/bi";
import AddPropSectionContainer from "../AddPropSectionContainer";
import Image from "next/image";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { FaMinusCircle } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";

const PropertyImages = ({ errors, register, setValue, watch, clearErrors }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const mainImgInputRef = useRef(null);
  const multiImgInputRef = useRef(null);
  const [mainImage, setMainImage] = useState(watch("mainImage"));
  const [multiImage, setMultiImage] = useState(watch("multiImage"));
  const mainImgContainerRef = useRef(null);
  useEffect(() => {
    setValue("mainImage", mainImage);
    if (mainImage) {
      clearErrors("mainImage");
    }
  }, [mainImage]);
  useEffect(() => {
    setValue("multiImage", multiImage);
    if (multiImage && multiImage.length > 0) {
      clearErrors("mainImage");
    }
  }, [multiImage]);
  useEffect(() => {
    if (errors.mainImage) {
      mainImgContainerRef.current.focus();
    }
  }, [errors.mainImage]);
  const handleMainImageChange = (e) => {
    setMainImage(e.target.files[0]);
  };
  const deleteMainImage = () => {
    setMainImage(null);
  };

  const handleMultiImageChange = (event) => {
    const fileList = event.target.files;
    const newImages = Array.from(fileList);
    if (Array.isArray(multiImage)) {
      setMultiImage((prevImages) => [...prevImages, ...newImages]);
    } else {
      setMultiImage(newImages);
    }
    const photosnumber = newImages.length + multiImage.length;
    if (photosnumber >= 3) {
      clearErrors("multiImage");
    }
  };
  console.log(multiImage);
  const handleDeleteImage = (index) => {
    const newImages = multiImage.filter((_, i) => i !== index);
    console.log(newImages);
    if (newImages.length > 0) {
      setMultiImage(newImages);
    } else {
      setMultiImage(null);
    }
  };
  console.log(multiImage);

  return (
    <AddPropSectionContainer className={"flex flex-col"}>
      <div
        className={`w-full  bg-white border-dashed border-2  border-outLine py-10 px-5 flex flex-col items-center justify-center ${
          errors.mainImage && "border-red-500"
        }`}
      >
        <button
          ref={mainImgContainerRef}
          type="button"
          className="w-0 h-0 focus:outline-none focus:ring-0"
        ></button>
        {!mainImage ? (
          <>
            {" "}
            <Image
              onClick={() => {
                if (mainImgInputRef.current) {
                  mainImgInputRef.current.click();
                }
              }}
              width={100}
              height={100}
              src={"/icons/add-img.svg"}
              alt="add image icon"
              className="cursor-pointer"
            />
            <h3 className="text-center text-lg md:text-2xl text-darkGray font-bold">
              {language
                ? "اضف الصورة الرئيسية للعقار"
                : "Add main image for the property"}
            </h3>
            <p className="text-center text-xs md:text-sm text-outLine">
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
              onClick={deleteMainImage}
              className="absolute drop-shadow top-3 mx-2 px-2 py-1 rounded font-bold  text-red-500 bg-white"
            >
              {language ? "حذف" : "Delete"}
            </button>
            <Image
              alt="main-image"
              className="w-[420] rounded object-cover h-[300px] border-2 border-outLine"
              width={400}
              height={300}
              src={URL.createObjectURL(mainImage)}
            />
          </div>
        )}
        {errors.mainImage && <p>{errors.mainImage.message}</p>}
        <input
          type="text"
          hidden
          {...register("mainImage", {
            required: {
              value: true,
              message: language
                ? "يجب اضافة الصورة الرئيسية للعقار"
                : "Main image is missing.",
            },
          })}
        />
      </div>
      <div className="w-full space-y-2 bg-white border-dashed border-2 border-outLine py-10 px-5 flex flex-col items-center justify-center">
        <input
          ref={multiImgInputRef}
          className="hidden"
          multiple
          hidden
          type="file"
          accept="image/*"
          onChange={handleMultiImageChange}
        />
        {!multiImage ? (
          <>
            {" "}
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
            <h3 className="text-center text-lg md:text-2xl text-darkGray font-bold">
              {language ? "اضف الصور الأخرى" : "Add other photos"}
            </h3>
            <p className="text-center text-xs md:text-sm text-outLine">
              {language
                ? "عدد الصور المسموح بها من 3 إلى 20"
                : "Number of photos allowed from 3 to 20"}
            </p>
          </>
        ) : (
          <div className="flex flex-wrap justify-center items-center gap-3  ">
            {multiImage &&
              multiImage.map((image, index) => (
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
        <p>{errors?.multiImage?.message}</p>
        <input
          type="text"
          hidden
          {...register("multiImage", {
            required: {
              value: true,
              message: language
                ? "يجب اضافة الصور الأخرى للعقار"
                : "Main image is missing.",
            },
            validate: {
              min: (value) => {
                return value.length > 2 || "must be a at least 3 images";
              },
              max: (value) => {
                return value.length < 21 || "max is 20";
              },
            },
          })}
        />
      </div>
    </AddPropSectionContainer>
  );
};
export default PropertyImages;
