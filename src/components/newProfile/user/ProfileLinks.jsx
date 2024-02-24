import Link from "next/link";
import { BiEditAlt } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import {
  MdOutlineAccountCircle,
  MdOutlineRealEstateAgent,
} from "react-icons/md";
import { useSelector } from "react-redux";

const ProfileLinks = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="px-10 flex flex-col gap-5 mt-2">
      <div className="flex flex-col gap-5">
        <Link
          href={"/profile/edit"}
          className="text-baseGray md:hidden flex items-center gap-4 font-semibold text-xl w-fit"
        >
          <MdOutlineAccountCircle className="md:text-3xl" />
          {language ? "المعلومات الشخصية" : "Personal Info"}
        </Link>
        <Link
          href={"/profile/edit"}
          className="text-baseGray hidden md:flex items-center gap-4 font-semibold text-xl w-fit"
        >
          {" "}
          <MdOutlineAccountCircle className="md:text-3xl" />
          {language ? "المعلومات الشخصية" : "Personal Info"}
        </Link>
        <hr />
      </div>
      <div className="flex flex-col gap-5">
        <Link
          href={"/profile/my-properties"}
          className="text-baseGray font-semibold flex items-center gap-4  text-xl w-fit"
        >
          <MdOutlineRealEstateAgent className="md:text-3xl" />
          {language ? "الإعلانات" : "Properties"}
        </Link>
        <hr />
      </div>
      <div className="flex flex-col gap-5">
        <Link
          href={"/profile/saved-items"}
          className="text-baseGray font-semibold text-xl w-fit flex items-center gap-4 "
        >
          <IoMdHeartEmpty className="md:text-3xl" />
          {language ? "العناصر المحفوظة" : "Saved Items"}
        </Link>
        <hr />
      </div>
      <div className="flex flex-col gap-5">
        <Link
          href={"/profile/needs"}
          className="text-baseGray font-semibold text-xl w-fit flex items-center gap-4 "
        >
          <BiEditAlt className="md:text-3xl" />
          {language ? " الطلبات" : " Needs"}
        </Link>
        <hr />
      </div>
    </div>
  );
};
export default ProfileLinks;
