import useContactLinks from "@/Hooks/useContactLinks";
import Image from "next/image";
import { useSelector } from "react-redux";
import UserProperties from "./UserProperties";

const ViewUser = ({ user, properties, params }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const phoneNumber = user.getUser.code + user.getUser.phone;
  const { CallLinkBtn, WhatappLinkBtn } = useContactLinks({
    phoneNumber: phoneNumber,
  });

  return (
    <div className="container mx-auto py-5 md:py-20 space-y-6 md:space-y-20">
      <div className="flex justify-between items-center flex-wrap gap-5">
        <div className="flex gap-4 md:gap-8 items-center">
          <Image
            width={140}
            height={140}
            src={user.getUser?.avatarUrl || "/user-avatar-placeholder.png"}
            className="rounded-full object-cover w-[50px] h-[50px] md:w-[140px] md:h-[140px]"
          />
          <div className="flex flex-col gap-2 md:gap-4">
            <h3 className="text-sm md:text-2xl font-bold">
              {user.getUser?.fullname}
            </h3>
            <p className="text-xs md:text-xl text-lightGreen font-bold">
              {user.resultConfirmed}{" "}
              {language ? "عدد العقارات" : "Properties numbers"}
            </p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-8 ">
          <CallLinkBtn
            className={
              "flex items-center md:px-14 text-xl  max-w-[250px] gap-5  py-2 rounded bg-lightNeutral text-[#5F98D1]"
            }
          />
          <WhatappLinkBtn
            className={
              "flex items-center md:px-14 text-xl  max-w-[250px]  gap-5 py-2 rounded bg-[#39AE41] text-white"
            }
          />
        </div>
      </div>
      <div className="space-y-6 md:space-y-8">
        {user.getUser.Bio && (
          <div className="space-y-3">
            <h4 className="text-base md:text-2xl font-bold text-darkGray">
              {language ? "عن" : "About"} {user.getUser.fullname}
            </h4>
            <p className="text-sm md:text-xl text-baseGray">
              {/* {user.getUser.Bio}{" "} */}
              {user.getUser.Bio}
            </p>
          </div>
        )}
        {user.getUser?.workingHours && (
          <div className="space-y-3">
            <h4 className="text-base md:text-2xl font-bold text-darkGray">
              {language ? "مواعيد العمل" : "Working Hours"}{" "}
            </h4>
            <p className="text-sm md:text-xl text-baseGray">
              {/* {user.getUser.Bio}{" "} */}
              {user.getUser?.workingHours}
            </p>
          </div>
        )}
        {user.getUser?.companyAddress && (
          <div className="space-y-3">
            <h4 className="text-base md:text-2xl font-bold text-darkGray">
              {language ? "عنوان الشركة" : "Company Address"}{" "}
            </h4>
            <p className="text-sm md:text-xl text-baseGray">
              {/* {user.getUser.Bio}{" "} */}
              {user.getUser?.companyAddress}
            </p>
          </div>
        )}
        {/* {!user.getUser?.companyAddress && (
          <div className="space-y-3">
            <h4 className="text-base md:text-2xl font-bold text-darkGray">
              {language ? " مواقع التواصل" : "Social media"}{" "}
            </h4>
            <div className="flex items-center gap-6 md:gap-10">
              {!user.getUser.faceLink && (
                <a href={user.getUser?.faceLink}>
                  <Image
                    src={"/social-icons/facebook.svg"}
                    width={48}
                    height={48}
                    className="object-cover w-6 h-6 md:w-12 md:h-12"
                    alt="facebook icon"
                  />
                </a>
              )}
              {!user.getUser.faceLink && (
                <Image
                  src={"/social-icons/instagram.svg"}
                  width={48}
                  height={48}
                  className="object-cover w-6 h-6 md:w-12 md:h-12"
                  alt="facebook icon"
                />
              )}
              {!user.getUser.faceLink && (
                <Image
                  src={"/social-icons/x.svg"}
                  width={48}
                  height={48}
                  className="object-cover w-6 h-6 md:w-12 md:h-12"
                  alt="facebook icon"
                />
              )}
              {!user.getUser.faceLink && (
                <Image
                  src={"/social-icons/linkedin.svg"}
                  width={48}
                  height={48}
                  className="object-cover w-6 h-6 md:w-12 md:h-12"
                  alt="facebook icon"
                />
              )}
              {!user.getUser.faceLink && (
                <Image
                  src={"/social-icons/tiktok.svg"}
                  width={48}
                  height={48}
                  className="object-cover w-6 h-6 md:w-12 md:h-12"
                  alt="facebook icon"
                />
              )}
            </div>
          </div>
        )} */}
      </div>
      <UserProperties user={user} properties={properties} params={params} />
    </div>
  );
};
export default ViewUser;
