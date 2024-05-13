import { useUser } from "@/Shared/UserContext";
import { clearUserData } from "@/redux-store/features/auth/userProfileSlice";
import Cookies from "js-cookie";
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
  const { data, logOutUserData } = useUser();
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
    dispatch(clearUserData());
    logOutUserData();
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
    return data.typeOfUser === "company";
  }, []);
  const showDashboard = useMemo(() => {
    return data.isAdmin || data.superAdmin || data.supAdmin;
  }, []);
  return (
    <div className="relative" ref={menuRef}>
      <Image
        onClick={toggleMenu}
        src={data?.avatarUrl || "/user-avatar-placeholder.png"}
        width={50}
        height={50}
        className="rounded-full object-cover h-7 cursor-pointer w-7 sm:w-[30px] sm:h-[30px] lg:h-[40px] lg:w-[40px] 2xl:h-[50px] 2xl:w-[50px]"
        alt="Profile image"
      />
      {showMenu && (
        <div
          className={`bg-white drop- rounded-lg flex fade-in flex-col border gap-4 absolute top-8 p-4 lg:p-8 lg:top-12 w-[230px] lg:w-[320px] ${
            language ? "-left-10 sm:-left-4 " : "-right-10 sm:-right-4"
          } `}
        >
          <Link
            onClick={closeMenu}
            href={"/profile/edit"}
            className="text-baseGray md:hidden flex items-center gap-4   text-[17px] md:text-[19px]"
          >
            <MdOutlineAccountCircle className="" />
            <span className=" whitespace-nowrap break-keep">
              {language ? "المعلومات الشخصية" : "Personal Info"}
            </span>
          </Link>
          <Link
            onClick={closeMenu}
            href={"/profile"}
            className="text-baseGray hidden md:flex items-center gap-4  text-[17px] lg:text-[19px] w-fit"
          >
            <MdOutlineAccountCircle className="" />
            {language ? "المعلومات الشخصية" : "Personal Info"}
          </Link>
          <hr />

          <Link
            onClick={closeMenu}
            href={"/profile/my-properties"}
            className="text-baseGray flex items-center gap-4  text-[17px] lg:text-[19px] "
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
            className="text-baseGray flex items-center gap-4  text-[17px] lg:text-[19px] "
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
                className="text-baseGray flex items-center gap-4  text-[17px] lg:text-[19px] "
              >
                <BiEditAlt className="" />
                <span className=" whitespace-nowrap break-keep">
                  {language ? " الطلبات" : " Needs"}
                </span>
              </Link>
              <hr />
            </>
          )}
          {showDashboard && (
            <>
              <Link
                onClick={closeMenu}
                href={"/dashboard"}
                className="text-baseGray flex items-center gap-4  text-[17px] lg:text-[19px] "
              >
                <RiDashboardLine />
                <span className=" whitespace-nowrap break-keep">
                  {language ? "لوحة القيادة" : "Dashboard"}
                </span>
              </Link>

              <hr />
            </>
          )}
          <button
            onClick={handleLogout}
            className="text-red-500  text-[17px] lg:text-[19px] w-fit flex items-center gap-4 "
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
