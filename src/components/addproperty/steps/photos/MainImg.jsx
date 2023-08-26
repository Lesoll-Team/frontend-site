import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMainImg } from "@/redux-store/features/propertySlice";
import { BsTrash } from "react-icons/bs"; // Import the delete icon
import { IoIosAddCircle } from "react-icons/io";

function MainImg() {
  const [selectedImg, setSelectedImg] = useState(null); // Use null instead of an array
  const dispatch = useDispatch();
  const selectMainImg = useSelector((state) => state.Property.mainImg);

  const handleImageChange = (event) => {
    const file = event.target.files[0]; // Only accept the first selected image
    if (file) {
      setSelectedImg(file);

      const reader = new FileReader();
      reader.onload = (e) => {
        // Dispatch the base64 string to Redux state
        dispatch(setMainImg(e.target.result));
      };
      reader.readAsDataURL(file);

      // Reset input field after selecting an image
      event.target.value = "";
    }
  };

  const handleDeleteImage = () => {
    setSelectedImg(null);
    dispatch(setMainImg(null)); // Clear the single main image from Redux state
  };

  return (
    <div>
      <input
        type="file"
        id="main-img-input"
        hidden
        onChange={handleImageChange}
      />
      <div className="w-full bg-white drop-shadow-lg flex rounded-3xl items-center border border-lightGreen min-h-[150px] p-4 mb-3 justify-center flex-col">
        <div className="flex flex-col justify-center items-center mb-3">
          <IoIosAddCircle
            onClick={() => {
              document.querySelector("#main-img-input").click();
            }}
            className="text-6xl text-darkGreen cursor-pointer "
          />
          <h3 className="text-3xl text-darkGray">Main Image</h3>
        </div>
        {/* Display the main image from Redux state */}
        {selectMainImg && (
          <div className="flex justify-center  items-center gap-2">
            <div className="relative border-lightGreen">
              <img
                className="rounded-lg drop-shadow-xl"
                src={selectMainImg}
                alt="Main Image"
                style={{ maxWidth: "200px" }}
              />
              <button
                className="absolute top-1 right-1 bg-red-500 p-1 rounded-full"
                onClick={handleDeleteImage}
              >
                <BsTrash color="white" className="" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MainImg;
