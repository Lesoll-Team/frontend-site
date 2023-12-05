import { Avatar } from "@nextui-org/react";
// import { InfoBox } from "@react-google-maps/api";
import Link from "next/link";
import { FaEdit, FaUser } from "react-icons/fa";
import InfoCard from "./InfoCard";

const UserData = () => {
  return (
    <section className="p-8 space-y-5 bg-gray-100 rounded-lg w-full">
      <div className="flex md:flex-row flex-col gap-3  justify-between items-center ">
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <Avatar src={null} className="w-28 h-28 text-large" />
          <div>
            <p className="text-xl font-semibold">Abdelrahman Mostafa</p>
            <p>@Abdelrahmanmostafa123</p>
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
      <div className="flex gap-5 flex-wrap items-center ">
        <InfoCard title={"نوع   "} info={"فرد"} />
        <InfoCard title={"اسم المستخدم"} info={"@Abdelrahmanmostafa123"} />
        <div dir="ltr">
          <InfoCard title={" رقم الهاتف"} info={"+201146425301"} />
        </div>
        <InfoCard title={"ايميل"} info={"a.mostafa@lesoll.com"} />
      </div>
    </section>
  );
};

export default UserData;
