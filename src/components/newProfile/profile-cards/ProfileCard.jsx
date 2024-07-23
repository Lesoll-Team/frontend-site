import { localizedNumber } from "@/utils/localizedNumber";
import Image from "next/image";
import { LiaBedSolid, LiaVectorSquareSolid } from "react-icons/lia";
import { PiBathtub } from "react-icons/pi";
import PropType from "./PropType";
import ProfileCardSkeleton from "./ProfileCardSkeleton";
import { useSelector } from "react-redux";
import ActionsMenu from "./ActionsMenu";
import { useMemo } from "react";
import PaymentActions from "./PaymentActions";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Link from "next/link";
import { TbBrandGoogleAnalytics } from "react-icons/tb";
import { useUser } from "@/Shared/UserContext";
import usePackageData from "../utils/usePackageData";

const ProfileCard = ({
  data,
  type,
  getProperties,
  paymentDisabled,
  onHold,
}) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const price = localizedNumber(data?.price);
  const { haveDashboard, isFeatured } = usePackageData(data);
  const typePending = useMemo(() => {
    return type === "تحت المراجعة" || type === "Pending";
  }, [type]);

  const typeActive = useMemo(() => {
    return type === "نشطة" || type === "active";
  }, [type]);
  const typeOnHold = useMemo(() => {
    return type === "معلقة" || type === "onhold";
  }, [type]);
  const typeSold = type === "Sold" || type === "تم البيع";
  const isPinned = data?.makePin || data?.makePinHome;
  const showDashboard = haveDashboard && typeActive && isPinned;
  if (data) {
    return (
      <div className="w-full max-w-[400px] md:min-w-[400px] flex flex-col gap-5 border drop-shadow rounded-md bg-white">
        <div className="w-full relative">
          <div className="flex w-full absolute items-center justify-between  top-4">
            {isFeatured ? (
              <div
                className={`bg-white h-8 w-8 rounded-full lg-text text-baseGray  grid place-content-center mx-4 `}
              >
                <MdOutlineStarPurple500 className="text-lightOrange text-xl" />
              </div>
            ) : (
              <PropType type={type} />
            )}
            {!typeOnHold && (
              <ActionsMenu
                propData={data}
                isPending={typePending}
                isSold={typeSold}
                propId={data._id}
                getProperties={getProperties}
              />
            )}
          </div>
          {typeActive ? (
            <Link href={`/property-details/${data?.slug}`}>
              {" "}
              <Image
                src={data?.thumbnail}
                width={400}
                height={150}
                alt="property image"
                className="w-full max-h-[150px] object-cover"
              />
            </Link>
          ) : (
            <Image
              src={data?.thumbnail}
              width={400}
              height={150}
              alt="property image"
              className="w-full max-h-[150px] object-cover"
            />
          )}

          {showDashboard && (
            <div className="absolute bottom-0 left-0 bg-white border py-1 px-2">
              <Link
                href={`/profile/property-analytics/${data?.slug}`}
                className="flex gap-1 items-center text-linkColor underline"
              >
                <TbBrandGoogleAnalytics />{" "}
                {language ? "إحصائيات العقار" : "Property insights"}{" "}
              </Link>
            </div>
          )}
        </div>
        <div className="px-2 mb-4 md:mb-7 md:px-5 flex-col space-y-3 md:space-y-6 ">
          <p className="text-sm text-baseGray md:text-xl font-bold font-inter ">
            {" "}
            {price} {data?.currencies || "EGP"}
          </p>

          <div className="space-y-5">
            <p className=" font-bold  line-clamp-1">{data.title}</p>

            <div className="flex flex-col justify-between flex-wrap gap-2">
              <p className="text-baseGray text-sm md:text-base">
                {data.address.governrate}
                {data.address.region && ", " + data.address.region}{" "}
              </p>
              <div className="flex gap-3">
                <p className="flex gap-2">
                  <LiaBedSolid className="text-2xl" />
                  {data?.rooms}
                </p>
                |
                <p className="flex gap-2">
                  <PiBathtub className="text-2xl" />
                  {data?.bathRooms}
                </p>
                |
                <p className="flex gap-2">
                  <LiaVectorSquareSolid className="text-2xl" />
                  {data?.area}{" "}
                  {language ? (
                    <span>
                      م <sup>2</sup>
                    </span>
                  ) : (
                    <span>
                      m <sup>2</sup>
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>
          {!paymentDisabled && (
            <PaymentActions
              data={data}
              getProperties={getProperties}
              propId={data._id}
              disabled={paymentDisabled || isFeatured}
            />
          )}
        </div>
      </div>
    );
  } else {
    return <ProfileCardSkeleton />;
  }
};
export default ProfileCard;
