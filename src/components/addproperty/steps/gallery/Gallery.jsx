import React, { useState, useRef } from "react";
import { TiDelete } from "react-icons/ti";
import { useSelector } from "react-redux";
import Compressor from "compressorjs";
import { MdOutlineRemoveCircle } from "react-icons/md";
import { GrAddCircle } from "react-icons/gr";
import { IoAddCircle } from "react-icons/io5";
const Gallery = ({ propertyDetils, setData }) => {
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
  };

  // console.log(propertyDetils);

  return (
    <div className="space-y-7">
      <h3 className="text-2xl text-darkGreen font-bold mb-1">
        {language ? "Property Photos" : "صور العقار"}
      </h3>
      <div className="flex flex-col items-center gap-4 justify-between">
        {/* Add Main Image */}
        <div className="w-full border-[3px]  rounded-lg flex flex-col justify-center gap-4 items-center p-5 bg">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => {
              if (mainImageInputRef.current) {
                mainImageInputRef.current.click();
              }
            }}
          >
            <IoAddCircle className="text-5xl text-darkGreen" />
            <p className="text-slate-500 font-medium">Add Main Image</p>
          </div>
          <input
            hidden
            type="file"
            ref={mainImageInputRef}
            onChange={(e) => {
              setData({
                ...propertyDetils,
                mainImage: e.target.files[0],
              });
            }}
          />
          {propertyDetils.mainImage && (
            <div className="relative">
              <img
                className="md:w-[300px] w-[250px] rounded-lg"
                src={URL.createObjectURL(propertyDetils.mainImage)}
              />
              <MdOutlineRemoveCircle
                className="absolute text-center fle text-3xl  top-1 right-1   text-red-500  rounded-full  cursor-pointer"
                onClick={handleDeleteMainImage}
              />
            </div>
          )}
        </div>

        {/* Add Multi Images */}
        <div className="w-full border-[3px]  rounded-lg flex flex-col justify-center gap-4 items-center min-h-[200px] p-5 bg">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => {
              if (multiImageInputRef.current) {
                multiImageInputRef.current.click();
              }
            }}
          >
            <IoAddCircle className="text-5xl text-darkGreen" />
            <p className="text-slate-500 font-medium">Add Main Image</p>
          </div>
          <input
            hidden
            ref={multiImageInputRef}
            type="file"
            multiple
            accept="image/*"
            label="multi Images"
            onChange={handleAddMultiImage}
          />
          {propertyDetils.multiImage && (
            <div className="flex justify-center flex-wrap gap-4">
              {Array.from(propertyDetils.multiImage).map((image, index) => (
                <div key={index} className="relative">
                  <img
                    className="md:w-[300px] w-[250px] rounded-lg "
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
        </div>
      </div>
    </div>
  );
};

export default Gallery;
