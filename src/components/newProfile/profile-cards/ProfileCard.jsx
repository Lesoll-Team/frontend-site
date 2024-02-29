import { localizedNumber } from "@/utils/localizedNumber";
import Image from "next/image";
import { useRouter } from "next/router";
import { LiaBedSolid, LiaVectorSquareSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import DeleteBtn from "./DeleteBtn";
import PropType from "./PropType";

import ProfileCardSkeleton from "./ProfileCardSkeleton";
import { propertyIsSold } from "@/utils/propertyAPI";

const ProfileCard = ({ data, type, onDelete }) => {
  const price = localizedNumber(data?.price);
  const router = useRouter();
  const propertyOnSold = async () => {
    try {
      await propertyIsSold({ propertyId: propertyDetails?._id });
      dispatch(onSold);
    } catch (error) {
      console.error("Error del prop:", error);
    }
  };
  const typeActive = type === "active" || type === "نشطة";
  if (data) {
    return (
      <div className="w-full max-w-[400px] md:min-w-[400px] flex flex-col gap-5 border drop-shadow rounded-md bg-white">
        <div className="w-full relative">
          <div className="flex w-full absolute items-center justify-between  top-4">
            <PropType type={type} />
            <DeleteBtn propId={data._id} />
          </div>
          <Image
            src={data?.thumbnail}
            width={400}
            height={150}
            alt="property image"
            className="w-full max-h-[150px] object-cover"
          />
        </div>
        <div className="px-2 mb-4 md:mb-7 md:px-5 flex-col space-y-3 md:space-y-6 ">
          <p className="text-sm text-baseGray md:text-xl font-bold font-inter ">
            {" "}
            {price} ج.م
          </p>

          <div className="space-y-5">
            <p className="text-xl font-bold text-baseGray line-clamp-1">
              {data.title}
            </p>

            <div className="flex items-center justify-between flex-wrap gap-2">
              <p className="text-baseGray text-sm md:text-base">
                {data.address.governrate}
                {data.address.region && ", " + data.address.region}{" "}
              </p>
              <div className="flex gap-3">
                <div className="flex gap-2">
                  <LiaBedSolid className="text-2xl" />
                  {data?.rooms}
                </div>
                |
                <div className="flex gap-2">
                  <PiBathtub className="text-2xl" />
                  {data?.bathRooms}
                </div>
                |
                <div className="flex gap-2">
                  <LiaVectorSquareSolid className="text-2xl" />
                  {data?.area} {}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full space-y-3">
            <button
              onClick={() => {
                router.push(`/editproperty/${data.slug}`);
              }}
              className="text-base text-lightGreen text-center w-full py-2 px-5 border-2 rounded-md"
            >
              تعديل
            </button>
            {typeActive && (
              <button
                onClick={() => {
                  router.push("/profile/edit");
                }}
                className="text-base bg-lightGreen text-center text-white w-full py-2 px-5 border border-lightGreen rounded-md"
              >
                تم البيع
              </button>
            )}
          </div>
        </div>
      </div>
    );
  } else {
    return <ProfileCardSkeleton />;
  }
};
export default ProfileCard;
