import React, { memo, useEffect, useState } from "react";
import { User } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { ar } from "../../language/ar/common";
import { en } from "../../language/en/common";
// import { useRouter } from "next/router";
import { AiFillHeart, AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { AddToFavorites, CallBtn, WhatsAppBtn } from "@/utils/propertyAPI";
import Link from "next/link";
import ContactBtnsModal from "@/Shared/models/ContactBtnsModal";
import { BsWhatsapp } from "react-icons/bs";
import SocialMediaModal from "@/Shared/models/SocialMediaModal";
import { FcViewDetails } from "react-icons/fc";
import { LuFolderSearch2 } from "react-icons/lu";
import { getUserData } from "@/redux-store/features/auth/userProfileSlice";

function ConfirmAppointment({ userAppointment }) {
  // const router = useRouter();
  const message = `
  مساء الخير مهتم أعرف تفاصيل أكتر عن عقارك اللى تم نشره على موقع ليسول
   ${"https://lesoll.com/property-details/" + userAppointment?.slug} `;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${
    userAppointment?.connectPhoneNumber
      ? userAppointment?.connectPhoneNumber
      : userAppointment?.user?.code + userAppointment?.user?.phone
  }&text=${encodeURIComponent(message)}`;
  const language = useSelector((state) => state.GlobalState.languageIs);
  // const userInfo = useSelector((state) => state.userProfile.userData);
  function formatDate(dateString) {
    const options = { year: "numeric", month: "numeric", day: "numeric" };
    if (language) {
      return new Date(dateString).toLocaleString("ar-Eg", options);
    } else {
      return new Date(dateString).toLocaleString("en-US", options);
    }
  }
  const formattedDate = formatDate(userAppointment?.createdAt);

  const whatsBtnClick = () => {
    WhatsAppBtn(userAppointment._id);
  };
  const CallBtnClick = () => {
    CallBtn(userAppointment._id);
  };

  const [loved, setLoved] = useState(false);
  // const [isOutOfsale, setOutOfsale] = useState(true);

  const addToFAv = async () => {
    try {
      await AddToFavorites(userAppointment?._id);

      dispatch(getUserData());

      // Handle success (e.g., show a success message)
    } catch (error) {
      // Handle error (e.g., display an error message)
      console.error("Error add to fav :", error);
    }
  };
  const userInfo = useSelector((state) => state.userProfile.userData);
  useEffect(() => {
    if (userInfo?.favorites.includes(userAppointment?._id)) {
      setLoved(true);
    }
  }, [userInfo?.favorites]);
  // const openDirectionsInGoogleMaps = () => {
  //   const url = `https://www.google.com/maps/dir/?api=1&destination=${userAppointment?.address.latitude},${userAppointment?.address.longitude}`;
  //   window.open(url, "_blank");
  // };
  return (
    <aside className="  p-5 pt-6 bg-white drop-shadow-lg border rounded-xl md:sticky md:top-24 space-y-4 ">
      {!userAppointment?.isSold ? (
        <div>
          <div className="flex flex-col justify-center items-center mx-2">
            <Link href={`/view-profile/${userAppointment?.user?.username}`}>
              <User
                avatarProps={{
                  size: "lg",
                  src: userAppointment?.user?.avatarUrl,
                }}
              />
            </Link>

            <Link
              className="font-bold text-xl "
              href={`/view-profile/${userAppointment?.user?.username}`}
            >
              {userAppointment?.user?.fullname}
            </Link>
            {/* <p className="text-default-700">{userAppointment?.user.email}</p> */}
          </div>

          <div className="grid grid-cols-2  gap-3">
            {!userInfo ? (
              <>
                <ContactBtnsModal
                  signup={true}
                  description={
                    language
                      ? "لا يمكن التواصل مع المعلن فى حالة عدم تسجبل الدخول"
                      : "You can't contact with the seller with out signing in "
                  }
                >
                  <button className="border-2 w-full flex flex-col justify-center items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer ">
                    <BsWhatsapp className="text-2xl text-[#25D366]" />
                    <p className="font-semibold">
                      {language
                        ? ar.property.sendWtsApp
                        : en.property.sendWtsApp}
                    </p>
                  </button>
                </ContactBtnsModal>

                <ContactBtnsModal
                  signup={true}
                  description={
                    language
                      ? "لا يمكن التواصل مع المعلن فى حالة عدم تسجبل الدخول"
                      : "You can't contact with the seller with out signing in "
                  }
                >
                  <button className="border-2 w-full flex flex-col justify-center items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer ">
                    <BiPhoneCall className="text-[26px]" />
                    <p className="font-semibold">
                      {language ? ar.property.sendCall : en.property.sendCall}
                    </p>
                  </button>
                </ContactBtnsModal>
              </>
            ) : userInfo?.phone ? (
              <>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <button
                    onClick={() => {
                      whatsBtnClick();
                    }}
                    className="border-2 w-full flex flex-col justify-center items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer"
                  >
                    <BsWhatsapp className="text-2xl text-[#25D366]" />
                    <p className="font-semibold">
                      {language
                        ? ar.property.sendWtsApp
                        : en.property.sendWtsApp}
                    </p>
                  </button>
                </a>

                <a
                  href={`tel:${userAppointment.user?.code}${
                    userAppointment?.connectPhoneNumber ||
                    userAppointment?.user?.phone
                  }`}
                >
                  <button
                    onClick={() => {
                      CallBtnClick();
                    }}
                    className="border-2 w-full flex flex-col justify-center items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer "
                  >
                    <BiPhoneCall className="text-[26px]" />
                    <p className="font-semibold">
                      {language ? ar.property.sendCall : en.property.sendCall}
                    </p>
                  </button>
                </a>
              </>
            ) : (
              <>
                <ContactBtnsModal
                  phone={true}
                  description={
                    language
                      ? "لا يمكن التواصل مع المعلن في حالة عدم تسجيل رقم هاتفك لدينا"
                      : "You can't contact with the seller with out completeing your account phone number "
                  }
                >
                  <button className="border-2 w-full flex flex-col justify-center items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer ">
                    <BsWhatsapp className="text-2xl text-[#25D366]" />
                    <p className="font-semibold">
                      {language
                        ? ar.property.sendWtsApp
                        : en.property.sendWtsApp}
                    </p>
                  </button>
                </ContactBtnsModal>

                <ContactBtnsModal
                  phone={true}
                  description={
                    language
                      ? "لا يمكن التواصل مع المعلن فى حالة عدم تسجبل الدخول"
                      : "You can't contact with the seller with out signing in "
                  }
                >
                  <button className="border-2 w-full flex flex-col justify-center items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer ">
                    <BiPhoneCall className="text-[26px]" />
                    <p className="font-semibold">
                      {language ? ar.property.sendCall : en.property.sendCall}
                    </p>
                  </button>
                </ContactBtnsModal>
              </>
            )}

            {/* property share modale */}
            <SocialMediaModal
              slug={userAppointment?.slug}
              id={userAppointment?._id}
              title={language ? "مشاركة العقار" : "Share property"}
            >
              <button className="border-2 w-full flex flex-col justify-center items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer">
                <AiOutlineShareAlt className="text-3xl" />
                <p className="font-semibold">{language ? "مشاركة" : "Share"}</p>
              </button>
            </SocialMediaModal>

            {/* add to fav btn and logic */}
            {userInfo ? (
              <button
                onClick={() => {
                  addToFAv();

                  setLoved(!loved);
                }}
                className="border-2  flex flex-col justify-center items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer"
              >
                {loved ? (
                  <AiFillHeart className="text-red-500 text-3xl animate-appearance-in" />
                ) : (
                  <AiOutlineHeart className="text-red-500 text-3xl animate-appearance-in" />
                )}
                <p className="font-semibold">
                  {language ? "المفضلة" : "Favorite"}
                </p>
              </button>
            ) : (
              <ContactBtnsModal
                signup={true}
                description={
                  language
                    ? "سجل الدخول لتتمكن من إضافة العقار للمفضله"
                    : "You can't contact with the seller with out signing in "
                }
              >
                {" "}
                <button className="border-2 w-full  flex flex-col justify-center items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer ">
                  <AiOutlineHeart className="text-red-500  text-3xl  animate-appearance-in" />
                  <p className="font-semibold">Favorite</p>
                </button>
              </ContactBtnsModal>
            )}
          </div>
          <div className="flex justify-between flex-row-reverse items-center pt-2">
            {userInfo && userInfo.isAdmin && (
              <Link
                title={language ? " تفاصيل العقار" : "Edit Property"}
                href={`/dashboard/property-details/${userAppointment.slug}`}
                className="text-lightGreen font-bold text-lg hover:text-lightOrange duration-200"
              >
                <FcViewDetails />
              </Link>
            )}
            <p className="text-xs font-semibold">
              <span className=" text-sm tracking-widest"> {formattedDate}</span>
            </p>
          </div>
        </div>
      ) : (
        <center>
          <div className=" my-3">
            {language ? (
              <div className="flex flex-col">
                <span className="text-lightOrange text-4xl font-semibold mb-5 ">
                  تم بيع هذا إعلان{" "}
                </span>
                <div className="flex items-center justify-center gap-x-2 text-xl">
                  المالك:
                  <Link
                    className="font-bold text-xl "
                    href={`/view-profile/${userAppointment?.user?.username}`}
                  >
                    <span className="underline flex items-center gap-x-2">
                      {userAppointment?.user?.fullname} <LuFolderSearch2 />
                    </span>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="flex flex-col">
                <span>property has been sold</span>
                <div>
                  owner :
                  <Link
                    className="font-bold text-xl "
                    title={userAppointment?.user?.username}
                    href={`/view-profile/${userAppointment?.user?.username}`}
                  >
                    <span className="underline flex">
                      <LuFolderSearch2 /> {userAppointment?.user?.fullname}
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-center items-center mx-2">
            <dive className="text-xl ">
              {language ? (
                <div className="flex items-center">
                  <p> {` أبحث عن عقارات مشابهة من `}</p>

                  <Link
                    className="underline text-lightGreen"
                    title="أبحث عن عقارات مشابهة من هنا"
                    href="/searching/offer=all"
                  >
                    {` هنا `}
                  </Link>
                </div>
              ) : (
                "Search for similar properties from here"
              )}
            </dive>
          </div>
          <div className="flex justify-between flex-row-reverse items-center pt-2">
            {userInfo && userInfo.isAdmin && (
              <Link
                title={language ? " تفاصيل العقار" : "Edit Property"}
                href={`/dashboard/property-details/${userAppointment.slug}`}
                className="text-lightGreen font-bold text-lg hover:text-lightOrange duration-200"
              >
                <FcViewDetails />
              </Link>
            )}
            <p className="text-xs font-semibold">
              <span className=" text-sm tracking-widest"> {formattedDate}</span>
            </p>
          </div>
        </center>
      )}
    </aside>
  );
}
export default memo(ConfirmAppointment);
