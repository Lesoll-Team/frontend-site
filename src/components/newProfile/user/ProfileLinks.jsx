import { clearUserData } from "@/redux-store/features/auth/userProfileSlice";
import Link from "next/link";
import { useRouter } from "next/router";
import { BiEditAlt } from "react-icons/bi";
import { IoMdCard, IoMdHeartEmpty } from "react-icons/io";
import {
  MdOutlineAccountCircle,
  MdOutlineRealEstateAgent,
} from "react-icons/md";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

const ProfileLinks = ({ main }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userData = useSelector((state) => state.userProfile.userData);
  const isCompany = userData?.typeOfUser === "company";
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearUserData());
    localStorage.removeItem("userToken");
    localStorage.removeItem("userIsLogin");
    router.push("/signin");
  };
  const route = router.asPath;
  const isProfile = route === "/profile/edit" || route === "/profile";
  const isAds = route.includes("/profile/my-properties");
  const isSaved = route.includes("/profile/saved-items");
  const isNeeds = route.includes("/profile/needs");
  const isPackage = route.includes("/profile/my-subscriptions");
  return (
    <div
      className={`md:px-10 flex flex-col gap-5 mt-2 ${main && "md:hidden"} `}
    >
      <div className="flex flex-col gap-5">
        <Link
          href={"/profile/edit"}
          className={`text-baseGray md:hidden flex items-center gap-4 font-semibold text-[17px] w-fit `}
        >
          <MdOutlineAccountCircle className="md:text-2xl" />
          {language ? "المعلومات الشخصية" : "Personal Info"}
        </Link>
        <Link
          href={"/profile"}
          className={`text-baseGray hidden md:flex items-center gap-4 font-semibold text-[17px] w-fit ${isProfile && "md:text-lightGreen"} `}
        >
          {" "}
          <MdOutlineAccountCircle className="md:text-2xl" />
          {language ? "المعلومات الشخصية" : "Personal Info"}
        </Link>
        <hr />
      </div>
      <div className="flex flex-col gap-5">
        <Link
          href={"/profile/my-properties"}
          className={`text-baseGray font-semibold flex items-center gap-4  text-[17px] w-fit ${isAds && "md:text-lightGreen"}`}
        >
          <MdOutlineRealEstateAgent className="md:text-2xl" />
          {language ? "الإعلانات" : "Properties"}
        </Link>
        <hr />
      </div>
      <div className="flex flex-col gap-5">
        <Link
          href={"/profile/saved-items"}
          className={`text-baseGray font-semibold text-[17px] w-fit flex items-center gap-4 ${isSaved && "md:text-lightGreen"}`}
        >
          <IoMdHeartEmpty className="md:text-2xl" />
          {language ? "العناصر المحفوظة" : "Saved Items"}
        </Link>
        <hr />
      </div>
      {!isCompany && (
        <>
          <div className="flex flex-col gap-5">
            <Link
              href={"/profile/needs"}
              className={`text-baseGray font-semibold text-[17px] w-fit flex items-center gap-4 ${isNeeds && "md:text-lightGreen"} `}
            >
              <BiEditAlt className="md:text-2xl" />
              {language ? " الطلبات" : " Needs"}
            </Link>
            <hr />
          </div>
        </>
      )}
      <div className="flex flex-col gap-5">
        <Link
          href={"/profile/my-subscriptions"}
          className={`text-baseGray font-semibold text-[17px] w-fit flex items-center gap-4 ${isPackage && "md:text-lightGreen"}`}
        >
          <IoMdCard className="md:text-2xl" />
          {language ? " الباقات" : "Package"}
        </Link>
        <hr />
      </div>

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
