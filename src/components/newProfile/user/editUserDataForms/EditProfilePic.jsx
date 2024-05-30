import React, { useRef, useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { FaXmark } from "react-icons/fa6";
import ReactModal from "@/Shared/ui/ReactModal";
import Cropper from "react-easy-crop";
import { useUser } from "@/Shared/UserContext";
import { getCroppedImg } from "@/utils/getCroppedImg ";
import { editUserData } from "../../apis/profileApis";
import { Ring } from "@uiball/loaders";

const EditProfilePic = ({ isOpen, setIsOpen }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { data, setUserData } = useUser();
  const inputRef = useRef(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [formStatus, setFormStatus] = useState("idle");
  const [serverError, setServerError] = useState(null);
  const [file, setFile] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const onCropComplete = useCallback((_, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleSave = async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
      const formData = new FormData();
      formData.append("img", croppedImage);
      await editUserData({
        data: formData,
        setFormStatus,
        setServerError,
        userId: data._id,
      });
    } catch (e) {
      console.error(e);
      const formData = new FormData();
      formData.append("img", file);
      await editUserData({
        data: formData,
        setFormStatus,
        setServerError,
        userId: data._id,
      });
    }
  };

  useEffect(() => {
    if (formStatus === "success") {
      setUserData();
      setFormStatus("idle");
      setIsOpen(false);
    }
  }, [formStatus, setUserData, setIsOpen]);

  return (
    <ReactModal
      modalIsOpen={isOpen}
      setModalIsOpen={setIsOpen}
      closeBtn={false}
    >
      <div className="min-w-[89vw] sm:min-w-[85vw] md:min-w-[500px] space-y-5">
        <div className="flex justify-between items-center">
          <h3>{language ? "الصورة الشخصية" : "Profile Picture"}</h3>
          <button onClick={() => setIsOpen(false)}>
            <FaXmark />
          </button>
        </div>
        <div className="bg-[#F8F8F8] w-full min-h-[140px] p-5 flex items-center justify-center rounded-md">
          {imageSrc ? (
            <div className="relative w-full h-[300px]">
              <Cropper
                image={imageSrc}
                crop={crop}
                zoom={zoom}
                aspect={1}
                onCropChange={setCrop}
                onZoomChange={setZoom}
                onCropComplete={onCropComplete}
              />
            </div>
          ) : (
            <button
              onClick={() => inputRef.current.click()}
              className="underline text-linkColor"
            >
              + {language ? "تحميل الصورة" : "Upload image"}
            </button>
          )}
          <input
            hidden
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            ref={inputRef}
          />
        </div>
        {imageSrc && (
          <div className="flex justify-center items-center gap-2">
            <button
              disabled={formStatus === "loading"}
              onClick={handleSave}
              className="bg-lightGreen flex items-center justify-center text-white px-4 py-2 disabled:opacity-80  border-lightGreen border min-w-[100px] rounded"
            >
              {formStatus === "loading" ? (
                <Ring size={24} color="#fff" />
              ) : language ? (
                "حفظ"
              ) : (
                "Save"
              )}
            </button>
            <button
              onClick={() => setIsOpen(false)}
              className="border-lightGreen border text-lightGreen px-4 py-2 min-w-[100px] rounded"
            >
              {language ? "إلغاء" : "Cancel"}
            </button>
          </div>
        )}
      </div>
    </ReactModal>
  );
};

export default EditProfilePic;
