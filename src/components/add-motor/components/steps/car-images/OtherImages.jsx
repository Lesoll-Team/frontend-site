import { useSelector } from "react-redux";
import Image from "next/image";
import { useAddMotorContext } from "@/components/add-motor/context/AddMotorContext";
import { useRef, useEffect } from "react";
import ImageCard from "./ImageCard";
import Error from "@/Shared/ui/Error";
import AddMoreImagesCard from "./AddMoreImagesCard";
import useFormImages from "@/components/add-motor/hooks/useFormImages";

const CarOtherImages = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { register, setValue, errors, watch, clearErrors, step, loading } =
    useAddMotorContext();
  const containerRef = useRef(null);
  const {
    multiImagesRef,
    handleMultiImageChange,
    handleMultiImagesDragOver,
    handleMultiImagesDrop,
    handleDeleteImageFromAlbum,
    handleDeleteImage,
    multiImagesCount,
  } = useFormImages({ register, setValue, errors, watch, clearErrors });

  const addMultiImages = () => {
    if (loading) {
      return;
    }
    if (multiImagesRef.current) {
      multiImagesRef.current.click();
    }
  };
  const handleErrorFoucs = () => {
    if (containerRef.current) {
      containerRef.current.focus();
    }
  };
  const showImages =
    watch("multiImage")?.length > 0 || watch("album")?.length > 0;
  useEffect(() => {
    if (errors.multiImage) {
      handleErrorFoucs();
    }
  }, [errors?.multiImage]);
  return (
    <>
      {showImages ? (
        <>
          <div
            ref={containerRef}
            className="grid bg-white px-5 py-5   grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-3 justify-items-center"
          >
            {watch("multiImage")?.map((image, index) => (
              <ImageCard
                loading={loading}
                key={index}
                onDelete={() => {
                  handleDeleteImage(index);
                }}
                alt={`multi-image-${index}`}
                src={URL.createObjectURL(image)}
              />
            ))}
            {watch("album")?.map((image, index) => (
              <ImageCard
                loading={loading}
                key={image._id}
                onDelete={() => {
                  handleDeleteImageFromAlbum(image._id);
                }}
                alt={`multi-image-${index}`}
                src={image.image}
              />
            ))}
            {multiImagesCount < 20 && (
              <AddMoreImagesCard onClick={addMultiImages} />
            )}
          </div>
        </>
      ) : (
        <div
          ref={containerRef}
          className={`bg-white py-8 gap-5  border-2 flex flex-col items-center justify-center px-2 rounded-md ${errors.multiImage ? "border-red-500" : "border-white"}`}
          onDrop={handleMultiImagesDrop}
          onDragOver={handleMultiImagesDragOver}
        >
          <button type="button" onClick={addMultiImages}>
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
          <button
            type="button"
            className="bg-lightGreen py-2 text-white rounded-md min-w-[50%] px-4"
            onClick={addMultiImages}
          >
            {language ? "أضف الصور" : "Upload images"}
          </button>
        </div>
      )}
      <input
        type="file"
        accept="images/*"
        hidden
        {...register("multiImage", {
          validate: {
            min: (value) => {
              if (step === 6) {
                const totalPics =
                  (value?.length || 0) + (watch("album")?.length || 0);
                return (
                  totalPics > 2 ||
                  (language
                    ? "يجب ان لا يقل عدد الصور الاخرى عن 3"
                    : " must be a at least 3 images")
                );
              }
            },
            max: (value) => {
              if (step === 6) {
                return (
                  (value?.length || 0) + (watch("album")?.length || 0) < 21 ||
                  (language
                    ? "يجب الا يزيد عدد الصور عن 20"
                    : "only 20 images a re allowed")
                );
              }
            },
          },
        })}
      />
      <input
        ref={multiImagesRef}
        type="file"
        accept="images/*"
        hidden
        multiple
        onChange={handleMultiImageChange}
      />
      {errors.multiImage && <Error>{errors?.multiImage?.message}</Error>}
    </>
  );
};

export default CarOtherImages;
