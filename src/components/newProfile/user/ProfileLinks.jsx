import { useUser } from "@/Shared/UserContext";
import { clearUserData } from "@/redux-store/features/auth/userProfileSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { BiEditAlt } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  MdOutlineAccountCircle,
  MdOutlineRealEstateAgent,
} from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const ProfileLinks = ({ main }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { data, logOutUserData } = useUser();
  const isCompany = data?.typeOfUser === "company";
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(clearUserData());
    logOutUserData();
    // router.push("/signin");
  });
  const route = router.asPath;
  const isProfile = route === "/profile/edit" || route === "/profile";
  const isAds = route.includes("/profile/my-properties");
  const isSaved = route.includes("/profile/saved-items");
  const isNeeds = route.includes("/profile/needs");
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
        text={{ en: "Properties", ar: "الإعلانات" }}
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
            text={{ en: "Needs", ar: "الطلبات" }}
            icon={BiEditAlt}
            active={isNeeds}
          />
          <hr />
        </>
      )}
      <button
        onClick={handleLogout}
        className="text-baseGray flex items-center gap-4 font-semibold text-[17px]"
      >
        <RiLogoutBoxLine className="md:text-2xl" />
        {language ? "تسجيل الخروج" : "Log out"}
      </button>
    </div>
  );
};
export default ProfileLinks;
