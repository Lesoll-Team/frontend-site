import { useUser } from "@/Shared/UserContext";
import { clearUserData } from "@/redux-store/features/auth/userProfileSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiEditAlt } from "react-icons/bi";
import { IoMdCard, IoMdHeartEmpty } from "react-icons/io";
import {
  MdOutlineAccountCircle,
  MdOutlineRealEstateAgent,
} from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import usePackageData from "../utils/usePackageData";
import { TbBrandGoogleAnalytics } from "react-icons/tb";

const ProfileLinks = ({ main }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { data, logOutUserData } = useUser();
  const isCompany = data?.typeOfUser === "company";
  const router = useRouter();
  const dispatch = useDispatch();
  const { haveDashboard } = usePackageData();
  const handleLogout = useCallback(() => {
    dispatch(clearUserData());
    logOutUserData();
  });
  const route = router.asPath;
  const isProfile = route === "/profile/edit" || route === "/profile";
  const isAds = route.includes("/profile/my-properties");
  const isSaved = route.includes("/profile/saved-items");
  const isNeeds = route.includes("/profile/needs");
  const isPackage = route.includes("/profile/my-subscriptions");
  const isAnalytics = route.includes("/profile/properties-analytics");
  const NavLink = ({ href, text, icon: Icon, active }) => (
    <Link
      href={href}
      className={`text-baseGray flex items-center gap-4 font-semibold text-[17px] w-fit ${active && "md:text-lightGreen"}`}
    >
      <Icon className="md:text-2xl" />
      {language ? text.ar : text.en}
    </Link>
  );
  return (
    <div
      className={`md:px-10 flex flex-col gap-5 mt-2 ${main ? "md:hidden" : ""} min-h-[50dvh]`}
    >
      <NavLink
        href="/profile/edit"
        text={{ en: "Personal Info", ar: "المعلومات الشخصية" }}
        icon={MdOutlineAccountCircle}
        active={isProfile}
      />
      <hr />
      <NavLink
        href="/profile/my-properties"
        text={{ en: "Properties", ar: "إعلاناتى" }}
        icon={MdOutlineRealEstateAgent}
        active={isAds}
      />
      <hr />
      <NavLink
        href="/profile/saved-items"
        text={{ en: "Saved Items", ar: "العناصر المحفوظة" }}
        icon={IoMdHeartEmpty}
        active={isSaved}
      />
      <hr />
      {!isCompany && (
        <>
          <NavLink
            href="/profile/needs"
            text={{ en: "Needs", ar: "طلباتى" }}
            icon={BiEditAlt}
            active={isNeeds}
          />
          <hr />
        </>
      )}
      <div className="flex flex-col gap-5">
        <Link
          href={"/profile/my-subscriptions"}
          className={`text-baseGray font-semibold text-[17px] w-fit flex items-center gap-4 ${isPackage && "md:text-lightGreen"}`}
        >
          <IoMdCard className="md:text-2xl" />
          {language ? " باقاتى" : "Package"}
        </Link>
        <hr />
      </div>
      {haveDashboard && (
        <div className="flex flex-col gap-5">
          <Link
            href={"/profile/properties-analytics"}
            className={`text-baseGray font-semibold text-[17px] w-fit flex items-center gap-4 ${isAnalytics && "md:text-lightGreen"}`}
          >
            <TbBrandGoogleAnalytics className="md:text-2xl" />
            {language ? "الإحصائيات" : "Analytics"}
          </Link>
          <hr />
        </div>
      )}
      <div className="flex flex-col gap-5">
        <button
          onClick={handleLogout}
          className="text-baseGray font-semibold text-[17px] w-fit flex items-center gap-4 "
        >
          <RiLogoutBoxLine className="md:text-2xl" />
          {language ? "تسجيل الخروج" : "Log out"}
        </button>
      </div>
    </div>
  );
};
export default ProfileLinks;
