import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";

import { MdOutlineRemoveCircle } from "react-icons/md";
import { IoAddCircle } from "react-icons/io5";
const Gallery = ({ propertyDetils, setData, propErrors, setPropErrors }) => {
  const [imgMaxError, setImgMaxError] = useState(false);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const mainImageInputRef = useRef(null);
  const multiImageInputRef = useRef(null);
  const handleDeleteMainImage = () => {
    setData({
      ...propertyDetils,
      mainImage: null,
    });
    if (mainImageInputRef.current) {
      mainImageInputRef.current.value = null;
    }
  };
  console.log(propertyDetils.multiImage);
  const handleDeleteMultiImage = (index) => {
    const updatedMultiImage = Array.from(propertyDetils.multiImage);
    updatedMultiImage.splice(index, 1);

    if (updatedMultiImage.length === 0) {
      setData({
        ...propertyDetils,
        multiImage: null,
      });
      multiImageInputRef.current.value = null;
    } else {
      setData({
        ...propertyDetils,
        multiImage: updatedMultiImage,
      });
    }
  };
  const handleAddMultiImage = (e) => {
    const newFiles = e.target.files;
    if (
      newFiles.length +
        (propertyDetils.multiImage ? propertyDetils.multiImage.length : 0) >=
      2
    ) {
      setPropErrors((prevErrors) => ({ ...prevErrors, multiImage: false }));
    }
    // Check if the total number of selected files is greater than 14
    if (
      newFiles.length +
        (propertyDetils.multiImage ? propertyDetils.multiImage.length : 0) >
      14
    ) {
      setImgMaxError(true);
    } else {
      // Continue to add images to the state
      setImgMaxError(false);
      if (propertyDetils.multiImage) {
        const updatedMultiImage = [
          ...Array.from(propertyDetils.multiImage),
          ...newFiles,
        ];
        setData({
          ...propertyDetils,
          multiImage: updatedMultiImage,
        });
      } else {
        setData({
          ...propertyDetils,
          multiImage: newFiles,
        });
      }
    }
  };
  console.log(propertyDetils.multiImage?.length);

  return (
    <div className="space-y-7">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {language ? "صور العقار" : "Property Photos"}
      </h3>
      <div className="flex flex-col items-center gap-4 justify-between">
        {/* Add Main Image */}
        <div
          className={`w-full border-[3px]  rounded-lg flex flex-col justify-center gap-4 items-center p-5 bg ${
            propErrors.mainImage && "border-red-500"
          } `}
        >
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => {
              if (mainImageInputRef.current) {
                mainImageInputRef.current.click();
              }
            }}
          >
            <IoAddCircle className="text-5xl text-darkGreen" />
            <p className="text-slate-500 font-medium">
              {language ? "أضف الصورة الرئيسية" : "Add Main Image"}
            </p>
          </div>
          <input
            hidden
            type="file"
            name="file-img"
            accept="image/*"
            ref={mainImageInputRef}
            onChange={(e) => {
              setData({
                ...propertyDetils,
                mainImage: e.target.files[0],
              });
              setPropErrors((prevErrors) => ({
                ...prevErrors,
                mainImage: false,
              }));
            }}
          />
          {propertyDetils.mainImage && (
            <div className="relative  max-w-[250px] max-h-[250px]  overflow-hidden">
              <img
                className="w-full h-full object-cover  rounded-lg"
                src={URL.createObjectURL(propertyDetils.mainImage)}
              />
              <MdOutlineRemoveCircle
                className="absolute text-center fle text-3xl  top-1 right-1   text-red-500  rounded-full  cursor-pointer"
                onClick={handleDeleteMainImage}
              />
            </div>
          )}
        </div>
        {propErrors?.mainImage && (
          <p className="text-red-500">{language ? "  مطلوب " : " Requird"}</p>
        )}
        {/* Add Multi Images */}
        <div
          className={`w-full border-[3px]  rounded-lg flex flex-col justify-center gap-4 items-center min-h-[200px] p-5 bg ${
            propErrors.multiImage && "border-red-500"
          }`}
        >
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => {
              if (multiImageInputRef.current) {
                multiImageInputRef.current.click();
              }
            }}
          >
            <IoAddCircle className="text-5xl text-darkGreen" />
            <p className="text-slate-500 font-medium">
              {language ? "أضف الصور الاخرى" : "Add Sub Images"}
            </p>
          </div>
          <input
            hidden
            max={14}
            name="file-img"
            ref={multiImageInputRef}
            type="file"
            multiple
            accept="image/*"
            label="multi Images"
            onChange={handleAddMultiImage}
          />

          {propertyDetils.multiImage && (
            <div className="flex justify-center flex-wrap gap-4 ">
              {Array.from(propertyDetils.multiImage).map((image, index) => (
                <div
                  key={index}
                  className="relative w-[200px] h-[200px]  overflow-hidden"
                >
                  <img
                    className="object-cover rounded-lg w-full h-full "
                    src={URL.createObjectURL(image)}
                  />
                  <MdOutlineRemoveCircle
                    className="absolute text-center fle text-3xl  top-1 right-1 text-red-500 rounded-full cursor-pointer"
                    onClick={() => handleDeleteMultiImage(index)}
                  />
                </div>
              ))}
            </div>
          )}
          {imgMaxError && (
            <p className="text-red-500">
              Please select a maximum of 14 images.
            </p>
          )}
        </div>
        {propErrors?.multiImage && (
          <p className="text-red-500">
            {language
              ? "  يجب الا يقل عدد الصور الاخرى عن 2 "
              : " The number of other photos must not be less than 2"}
          </p>
        )}
      </div>
    </div>
  );
};

export default Gallery;
