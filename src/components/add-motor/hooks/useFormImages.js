import { compressImage } from "@/utils/compressImage";
import { useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const useFormImages = ({ register, setValue, errors, watch, clearErrors }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const multiImagesRef = useRef(null);
  const mainImageRef = useRef(null);
  const multiImagesCount =
    (watch("album")?.length || 0) + (watch("multiImage")?.length || 0);
  useEffect(() => {
    register("multiImage", {
      validate: {
        min: (value) => {
          const totalPics =
            (value?.length || 0) + (watch("album")?.length || 0);
          return (
            totalPics > 2 ||
            (language
              ? "يجب ان لا يقل عدد الصور الاخرى عن 3"
              : " must be a at least 3 images")
          );
        },
        max: (value) => {
          return (
            (value?.length || 0) + (watch("album")?.length || 0) < 21 ||
            (language
              ? "يجب الا يزيد عدد الصور عن 20"
              : "only 20 images a re allowed")
          );
        },
      },
    });
    register("mainImage", {
      validate: {
        requierd: (value) => {
          const image = Boolean(value) || Boolean(watch("thumbnail"));
          const errorMessage = language
            ? "يجب اضافة الصورة الرئيسية للعقار"
            : "Main image is missing.";
          return image || errorMessage;
        },
      },
    });
  }, [register, language]);

  const handleMainImageChange = async (e) => {
    const originalFile = e.target.files[0];
    const compressedFile = await compressImage(originalFile);
    clearErrors("mainImage");
    setValue("mainImage", compressedFile);
  };
  const deleteMainImage = () => {
    setValue("mainImage", null);
  };

  const deleteThumbnail = () => {
    setValue("thumbnail", null);
  };
  const handleDeleteImageFromAlbum = (id) => {
    const newAlbum = watch("album").filter((item) => item._id !== id);
    setValue("album", newAlbum);
  };
  const handleDeleteImage = (index) => {
    const newImages = watch("multiImage").filter((_, i) => i !== index);
    if (newImages.length > 0) {
      setValue("multiImage", newImages);
    } else {
      setValue("multiImage", null);
    }
  };
  const handleMultiImageChange = async (event) => {
    const originalFiles = Array.from(event.target.files);
    const imageToTake = 20 - multiImagesCount;
    const compressPromises = originalFiles
      .slice(0, imageToTake)
      .map(compressImage);
    const compressedFiles = await Promise.all(compressPromises);
    const multiImages = watch("multiImage");
    clearErrors("multiImage");
    if (Array.isArray(watch("multiImage"))) {
      setValue("multiImage", [...multiImages, ...compressedFiles]);
    } else {
      setValue("multiImage", compressedFiles);
    }
  };
  const handleMainImageDrop = useCallback(
    async (event) => {
      event.preventDefault();
      clearErrors("mainImage");
      const file = event.dataTransfer.files[0];
      const compressedFile = await compressImage(file);
      if (compressedFile) {
        setValue("mainImage", compressedFile);
        if (mainImageRef.current) {
          mainImageRef.current.files = event.dataTransfer.files;
        }
      }
    },
    [setValue, clearErrors],
  );

  const handleMainImageDragOver = (event) => {
    event.preventDefault();
  };
  const handleMultiImagesDrop = useCallback(
    async (event) => {
      event.preventDefault();
      clearErrors("mainImage");
      if (event.dataTransfer.files) {
        const imageToTake = 20 - multiImagesCount;
        const originalFiles = Array.from(event.dataTransfer.files);
        const compressPromises = originalFiles
          .slice(0, imageToTake)
          .map(compressImage);
        const compressedFiles = await Promise.all(compressPromises);
        if (compressedFiles) {
          if (Array.isArray(watch("multiImage"))) {
            clearErrors("multiImage");
            const multiImages = watch("multiImage");
            setValue("multiImage", [...multiImages, ...compressedFiles]);
          } else {
            setValue("multiImage", compressedFiles);
          }
          if (multiImagesRef.current) {
            multiImagesRef.current.files = event.dataTransfer.files;
          }
        }
      }
    },
    [setValue, clearErrors],
  );
  const handleMultiImagesDragOver = (event) => {
    event.preventDefault();
  };

  return {
    handleMultiImageChange,
    handleDeleteImage,
    handleDeleteImageFromAlbum,
    deleteThumbnail,
    deleteMainImage,
    handleMainImageChange,
    handleMainImageDragOver,
    handleMainImageDrop,
    mainImageRef,
    multiImagesRef,
    handleMultiImagesDrop,
    handleMultiImageChange,
    handleMultiImagesDragOver,
    multiImagesCount,
  };
};

export default useFormImages;
