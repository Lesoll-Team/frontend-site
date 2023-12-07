import { Avatar } from "@nextui-org/react";
// import { InfoBox } from "@react-google-maps/api";
import Link from "next/link";
import { FaEdit, FaUser } from "react-icons/fa";
import InfoCard from "./InfoCard";
import { useEffect, useState } from "react";

import { useRouter } from "next/router";
import Userdata from "@/components/viewProfile/UserData";
import { useSelector } from "react-redux";

const UserData = ({
  userData,
  favNum,
  deletedNum,
  invstNum,
  rentNum,
  saleNum,
  totalPropNum,
  visitedPages,
}) => {
  const router = useRouter();
  const slug = router.query.id;
  console.log(slug);
  const language = useSelector((state) => state.GlobalState.languageIs);

  const userTypeLang = () => {
    switch (userData?.typeOfUser) {
      case "broker":
        return language ? "سمسار" : "broker";
        break;
      case "company":
        return language ? "مطور" : "Developer";
        break;
      case "individual":
        return language ? "فرد" : "Individual";
        break;
      default:
        return language ? "غير محدد" : "Not specified";
    }
  };
  const [date, setdate] = useState();
  useEffect(() => {
    const createdAt = userData?.createdAt;
    function formatDate(date) {
      const options = { year: "numeric", month: "numeric", day: "numeric" };
      if (language) {
        return new Date(date).toLocaleString("ar-Eg", options);
      } else {
        return new Date(date).toLocaleString("en-US", options);
      }
    }
    setdate(formatDate(createdAt));
    console.log(date);
  }, [userData]);
  return (
    <section className="p-5 sm:p-8 space-y-5 bg-gray-100 rounded-lg w-full">
      <div className="flex md:flex-row flex-col gap-3  justify-between items-center ">
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <Avatar src={userData?.avatarUrl} className="w-28 h-28 text-large" />
          <div>
            <p className="text-xl font-semibold">{userData?.fullname}</p>
            {/* <p>{userData?.username}</p> */}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link
            href={"/"}
            className="border-blue-400 border-2 duration-150 px-4 py-2 rounded-lg hover:text-white hover:bg-blue-400 text-blue-400 flex items-center gap-2"
          >
            <FaEdit />
            تعديل
          </Link>
          <Link
            href={"/"}
            className="border-blue-400 border-2 duration-150 px-4 py-2 rounded-lg hover:text-white hover:bg-blue-400 text-blue-400 flex items-center gap-2"
          >
            <FaUser className="font-bold" />
            الصفحة العامة
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3   2xl:grid-cols-4 items-center  ">
        <InfoCard title={"نوع   "} info={userTypeLang()} />
        <InfoCard title={"اسم المستخدم"} info={userData?.username} />

        <InfoCard
          title={" رقم الهاتف"}
          info={userData?.code + userData?.phone}
        />

        <InfoCard title={"ايميل"} info={userData?.email} />
        <InfoCard title={"انضم فى"} info={date} />
        <InfoCard title={"عدد العقارات للبيع"} info={saleNum || 0} />
        <InfoCard title={" عدد العقارات للإيجار"} info={rentNum || 0} />
        <InfoCard title={" عدد العقارات للاستثمار"} info={invstNum || 0} />
      </div>
    </section>
  );
};

export default UserData;
