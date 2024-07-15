import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import InfoCard from "./InfoCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TiPinOutline } from "react-icons/ti";
import { FiUser } from "react-icons/fi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  pinUserProfileInHome,
  unpinUserProfileInHome,
} from "@/utils/dashboardApi/userDashbordAPI";
import { LuLoader2, LuPinOff } from "react-icons/lu";

const UserData = ({
  userData,
  favNum,
  deletedNum,
  totalPropNum,
  makeAction,
  setMakeAction,
}) => {
  // console.log("userData::>>", userData);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [loading, setLoading] = useState(false);
  const [date, setdate] = useState();
  const userTypeLang = () => {
    switch (userData?.typeOfUser) {
      case "broker":
        return language ? "سمسار" : "broker";
      case "company":
        return language ? "مطور" : "Developer";
      case "individual":
        return language ? "فرد" : "Individual";
      default:
        return language ? "غير محدد" : "Not specified";
    }
  };

  useEffect(() => {
    const createdAt = userData?.createdAt;
    function formatDate(date) {
      const options = { year: "numeric", month: "numeric", day: "numeric" };

      return new Date(date).toLocaleString("ar-Eg", options);
    }
    setdate(formatDate(createdAt));
  }, [userData]);
  const pinUserProfile = () => {
    setLoading(true);
    pinUserProfileInHome({ userId: userData._id })
      .then(() => {
        setMakeAction(!makeAction);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  const unpinUserProfile = () => {
    setLoading(true);

    unpinUserProfileInHome({ userId: userData._id })
      .then(() => {
        setMakeAction(!makeAction);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };
  return (
    <section className="p-5 px-2 sm:p-8 space-y-5 bg-gray-100 rounded-lg w-full">
      <div className="flex md:flex-row flex-col gap-3  justify-between items-center ">
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <Avatar src={userData?.avatarUrl} className="w-28 h-28 text-large" />
          <div>
            <p className="text-3xl font-semibold md:text-start text-center">
              {userData?.fullname}
            </p>
            <p>{userData?.username}</p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-stretch justify-stretch gap-2">
          {!userData.pinHome ? (
            <button
              onClick={unpinUserProfile}
              className="border-red-400 border-2 text-sm md:text-md duration-150 px-4 py-2 rounded-lg hover:text-white hover:bg-red-400  text-red-400 flex items-center gap-2"
            >
              {loading ? <LuLoader2 className="animate-spin" /> : <LuPinOff />}
              إزالة التثبيت
            </button>
          ) : (
            <button
              onClick={pinUserProfile}
              className="border-darkGreen border-2 text-sm md:text-md duration-150 px-4 py-2 rounded-lg hover:text-white hover:bg-darkGreen text-darkGreen flex items-center gap-2"
            >
              {loading ? (
                <LuLoader2 className="animate-spin" />
              ) : (
                <TiPinOutline />
              )}
              تثبيت الملف الشخصي
            </button>
          )}

          <Link
            href={`/dashboard/user-details/send-bundle/${userData._id}`}
            className="border-darkGreen border-2 text-sm md:text-md duration-150 px-4 py-2 rounded-lg hover:text-white hover:bg-darkGreen text-darkGreen flex items-center gap-2"
          >
            <MdOutlineDashboardCustomize />
            اضافة باقة مخصصة{" "}
          </Link>
          <Link
            href={`/view-profile/${userData.username}`}
            className="border-darkGreen border-2 text-sm md:text-md duration-150 px-4 py-2 rounded-lg hover:text-white hover:bg-darkGreen text-darkGreen flex items-center gap-2"
          >
            <FiUser className="font-bold" />
            الصفحة العامة
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-3 justify-stretch gap-1 gap-y-2  2xl:grid-cols-4 items-stretch  ">
        <InfoCard title={"نوع المستخدم   "} info={userTypeLang()} />

        <InfoCard
          title={" رقم الهاتف"}
          info={
            <a
              href={`tel:${userData?.code + userData?.phone}`}
              className="flex items-center gap-1 text-lightOrange"
            >
              {userData?.code + userData?.phone}
            </a>
          }
        />
        <InfoCard title={"اسم المستخدم"} info={userData?.username} />
        <InfoCard title={"ايميل"} info={userData?.email} />

        <InfoCard title={" عدد العقارات الكلى"} info={totalPropNum || 0} />
        <InfoCard title={" عدد العقارات المحذوفة"} info={deletedNum} />
        <InfoCard title={" عدد العقارات المفضلة"} info={favNum} />
        <InfoCard title={"انضم فى"} info={date} />
      </div>
    </section>
  );
};

export default UserData;
