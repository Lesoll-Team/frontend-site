import React, { useMemo, useRef, useState } from "react";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Button from "@/Shared/ui/Button";
import {
  resetUpdateUserState,
  updateUser,
} from "@/redux-store/features/user/editUserDataSlice";
import { getUserData } from "@/redux-store/features/auth/userProfileSlice";
import { useUser } from "@/Shared/UserContext";

export default function ProfilePicForm({ openBtn }) {
  const { data } = useUser();

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const language = useSelector((state) => state.GlobalState.languageIs);
  const formStatus = useSelector((state) => state.editUser.status);
  const imagInputRef = useRef(null);
  const [profileImage, setProfileImage] = useState(null);
  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("img", profileImage);
    dispatch(
      updateUser({
        userData: formData,
        id: data?._id,
      }),
    );

    if (formStatus === "succeeded") {
      dispatch(getUserData());
      dispatch(resetUpdateUserState());
      setProfileImage(null);
    }
    // resetUpdateUserState
  };
  const imgLink = useMemo(() => {
    if (profileImage) {
      return URL.createObjectURL(profileImage);
    }
  }, [profileImage]);
  return (
    <>
      <button onClick={onOpen}>{openBtn}</button>
      <Modal radius="sm" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {() => (
            <>
              <div
                dir="rtl"
                className="my-3 px-3 md:px-5 py-5 space-y-4 min-h-[200px] flex flex-col items-center justify-center"
              >
                <h3 className="w-full text-xl text-center">
                  {language ? "تعديل الصورة الشخصية" : "Edit Profile Photo"}
                </h3>
                <Image
                  src={
                    imgLink || data?.avatarUrl || "/user-avatar-placeholder.png"
                  }
                  width={100}
                  height={100}
                  alt="user avatar"
                  className="rounded-full object-cover w-[150px] h-[150px] md:w-[200px] md:h-[200px]"
                />

                <div className="flex items-center gap-3 w-full">
                  <Button
                    onClick={() => {
                      if (!profileImage) {
                        imagInputRef.current.click();
                      } else {
                        handleSubmit();
                      }
                    }}
                    className={"w-full"}
                  >
                    {profileImage
                      ? language
                        ? "تحديث"
                        : "update"
                      : language
                        ? "ارفع صورة"
                        : "Upload Image"}
                  </Button>
                  {profileImage && (
                    <Button
                      onClick={() => {
                        setProfileImage(null);
                      }}
                      className={"w-full bg-white text-red-500 border-red-500"}
                    >
                      {language ? "حذف الصورة" : "Upload Image"}
                    </Button>
                  )}
                </div>
              </div>
              <input
                onChange={(e) => {
                  setProfileImage(e.target.files[0]);
                }}
                type="file"
                accept="image/*"
                ref={imagInputRef}
                hidden
                className="hidden"
              />
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
