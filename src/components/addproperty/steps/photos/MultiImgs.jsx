import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMultiImage } from "@/redux-store/features/propertySlice";
import { BsTrash } from "react-icons/bs"; // Import the delete icon
import { IoIosAddCircle } from "react-icons/io";

function MultiImgs() {
  const [selectedImages, setSelectedImages] = useState([]);
  const dispatch = useDispatch();
  const selectMultiImages = useSelector((state) => state.Property.multiImage);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const selectedImagesArray = Array.from(files).slice(0, 14); // Limit to the first 14 images
    setSelectedImages(selectedImagesArray);

    const readerPromises = selectedImagesArray.map((imageFile) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve(e.target.result);
        };
        reader.readAsDataURL(imageFile);
      });
    });

    Promise.all(readerPromises).then((base64Strings) => {
      // Dispatch the array of base64 strings to Redux state
      dispatch(setMultiImage(base64Strings));
    });
  };

  const handleDeleteImage = (index) => {
    const updatedImages = selectMultiImages.filter((_, i) => i !== index);

    if (updatedImages.length === 0) {
      dispatch(setMultiImage(null));
      setSelectedImages([]); // Reset selectedImages state
    } else {
      dispatch(setMultiImage(updatedImages));
    }
  };

  return (
    <div>
      <input
        type="file"
        id="multi-img-input"
        multiple
        hidden
        onChange={handleImageChange}
      />
      <div className="w-full bg-white drop-shadow-lg flex rounded-3xl items-center border  border-lightGreen min-h-[200px] p-4 mb-3 justify-center flex-col">
        <div className="flex flex-col justify-center items-center mb-3">
          <IoIosAddCircle
            onClick={() => {
              document.querySelector("#multi-img-input").click();
            }}
            className="text-6xl text-darkGreen cursor-pointer "
          />
          <h3 className="text-3xl text-darkGray">Sub Images</h3>
        </div>
        {/* Display images from Redux state */}
        {selectMultiImages && (
          <div className="flex flex-wrap justify-center  items-center gap-2">
            {selectMultiImages.map((base64String, index) => (
              <div key={index} className="relative  border-lightGreen">
                <img
                  className="rounded-lg drop-shadow-xl"
                  src={base64String}
                  alt={`Image ${index}`}
                  style={{ maxWidth: "200px" }}
                />
                <button
                  className="absolute top-1 right-1 bg-red-500 p-1 rounded-full"
                  onClick={() => handleDeleteImage(index)}
                >
                  <BsTrash color="white" className="" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MultiImgs;
