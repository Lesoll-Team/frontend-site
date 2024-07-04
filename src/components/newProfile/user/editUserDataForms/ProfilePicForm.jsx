import React, { useMemo, useRef, useState } from "react";
import { Modal, ModalContent, useDisclosure } from "@nextui-org/react";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import Button from "@/Shared/ui/Button";
import {
  resetUpdateUserState,
  updateUser,
} from "@/redux-store/features/user/editUserDataSlice";
import { useUser } from "@/Shared/UserContext";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";

export default function ProfilePicForm({ openBtn }) {
  const { data, setUserData } = useUser();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const dispatch = useDispatch();
  const language = getLangBoolean();
  const { t } = useTranslation("common");
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
      setProfileImage(null);
      dispatch(resetUpdateUserState());
      setUserData();
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
                  {t("Edit_Profile_Photo")}
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
                      {t("Delete")}
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
