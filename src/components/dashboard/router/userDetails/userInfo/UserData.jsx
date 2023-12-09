import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import { FaEdit, FaUser } from "react-icons/fa";
import InfoCard from "./InfoCard";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import DescriptionModal from "../../propertyDetails/description/DescriptionModal";

const UserData = ({ userData, favNum, deletedNum, totalPropNum }) => {
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

      return new Date(date).toLocaleString("ar-Eg", options);
    }
    setdate(formatDate(createdAt));
  }, [userData]);
  return (
    <section className="p-5 px-2 sm:p-8 space-y-5 bg-gray-100 rounded-lg w-full">
      <div className="flex md:flex-row flex-col gap-3  justify-between items-center ">
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <Avatar src={userData?.avatarUrl} className="w-28 h-28 text-large" />
          <div>
            <p className="text-3xl font-semibold md:text-start text-center">
              {userData?.fullname}
            </p>
            {/* <p>{userData?.username}</p> */}
          </div>
        </div>
        <div className="flex items-stretch justify-stretch gap-2">
          <DescriptionModal
            description={
              <span className="flex flex-col">
                <span className="w-full h-full flex justify-center items-center min-h-[250px] gap-1 text-3xl">
                  <span>تحت الإنشاء</span>
                  <span className="animate-bounce ">🛠️</span>{" "}
                </span>
              </span>
            }
          >
            <button
              // href={"/"}
              className="border-darkGreen border-2 text-sm md:text-md duration-150 px-4 py-2 rounded-lg hover:text-white hover:bg-darkGreen text-darkGreen flex items-center gap-2"
            >
              <FaEdit />
              تعديل
            </button>
          </DescriptionModal>
          <Link
            href={`/view-profile/${userData.username}`}
            className="border-darkGreen border-2 text-sm md:text-md duration-150 px-4 py-2 rounded-lg hover:text-white hover:bg-darkGreen text-darkGreen flex items-center gap-2"
          >
            <FaUser className="font-bold" />
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
