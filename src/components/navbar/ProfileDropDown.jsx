import { clearUserData } from "@/redux-store/features/auth/userProfileSlice";
import { logoutUserToken } from "@/redux-store/features/authSlice";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useMemo, useRef, useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  MdOutlineAccountCircle,
  MdOutlineRealEstateAgent,
} from "react-icons/md";
import { RiDashboardLine, RiLogoutBoxLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const ProfileDropDown = () => {
  const [showMenu, setShowMenu] = useState(false);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userData = useSelector((state) => state.userProfile.userData);
  const menuRef = useRef(null);
  const router = useRouter();
  const dispatch = useDispatch();
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  const handleLogout = () => {
    dispatch(logoutUserToken());
    dispatch(clearUserData());
    localStorage.removeItem("userToken");
    localStorage.removeItem("userIsLogin");
    router.push("/signin");
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const isCompany = useMemo(() => {
    return userData.typeOfUser === "company";
  }, []);
  const showDashboard = useMemo(() => {
    if (userData.isAdmin || userData.superAdmin || userData.supAdmin) {
      return true;
    } else {
      return false;
    }
  }, []);
  return (
    <div className="relative" ref={menuRef}>
      <Image
        onClick={toggleMenu}
        src={userData?.avatarUrl || "/user-avatar-placeholder.png"}
        width={50}
        height={50}
        className="rounded-full object-cover h-7 cursor-pointer w-7 sm:w-[30px] sm:h-[30px] lg:h-[50px] lg:w-[50px]"
        alt="Profile image"
      />
      {showMenu && (
        <div
          className={`bg-white drop-shadow rounded-lg flex fade-in flex-col gap-4 absolute top-8 p-4 lg:p-8 lg:top-14 w-[210px] lg:w-[320px] ${
            language ? "-left-10 sm:-left-4 " : "-right-10 sm:-right-4"
          } `}
        >
          <Link
            onClick={closeMenu}
            href={"/profile/edit"}
            className="text-baseGray md:hidden flex items-center gap-4   text-sm "
          >
            <MdOutlineAccountCircle className="" />
            <span className=" whitespace-nowrap break-keep">
              {language ? "المعلومات الشخصية" : "Personal Info"}
            </span>
          </Link>
          <Link
            onClick={closeMenu}
            href={"/profile"}
            className="text-baseGray hidden md:flex items-center gap-4  text-sm lg:text-xl w-fit"
          >
            <MdOutlineAccountCircle className="" />
            {language ? "المعلومات الشخصية" : "Personal Info"}
          </Link>
          <hr />
          {showDashboard && (
            <>
              <Link
                onClick={closeMenu}
                href={"/dashboard"}
                className="text-baseGray flex items-center gap-4  text-sm lg:text-xl "
              >
                <RiDashboardLine />
                <span className=" whitespace-nowrap break-keep">
                  {language ? "لوحة القيادة" : "Dashboard"}
                </span>
              </Link>

              <hr />
            </>
          )}
          <Link
            onClick={closeMenu}
            href={"/profile/my-properties"}
            className="text-baseGray flex items-center gap-4  text-sm lg:text-xl "
          >
            <MdOutlineRealEstateAgent className="" />
            <span className=" whitespace-nowrap break-keep">
              {language ? "الإعلانات" : "Properties"}
            </span>
          </Link>

          <hr />

          <Link
            onClick={closeMenu}
            href={"/profile/saved-items"}
            className="text-baseGray flex items-center gap-4  text-sm lg:text-xl "
          >
            <IoMdHeartEmpty className="" />
            <span className=" whitespace-nowrap break-keep">
              {language ? "العناصر المحفوظة" : "Saved Items"}
            </span>
          </Link>

          <hr />
          {!isCompany && (
            <>
              <Link
                onClick={closeMenu}
                href={"/profile/needs"}
                className="text-baseGray flex items-center gap-4  text-sm lg:text-xl "
              >
                <BiEditAlt className="" />
                <span className=" whitespace-nowrap break-keep">
                  {language ? " الطلبات" : " Needs"}
                </span>
              </Link>
              <hr />
            </>
          )}
          <button
            onClick={handleLogout}
            className="text-red-500  text-sm  lg:text-xl w-fit flex items-center gap-4 "
          >
            <RiLogoutBoxLine />
            {language ? "تسجيل الخروج" : "Log out"}
          </button>
        </div>
      )}
    </div>
  );
};
export default ProfileDropDown;
