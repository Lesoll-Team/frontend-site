import Skeleton from "@/Shared/ui/Skeleton";
import { localizedNumber } from "@/utils/localizedNumber";
import { useEffect, useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteNeed,
  getUserNeeds,
} from "@/redux-store/features/user/userNeedsSlice";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";

const NeedsCard = ({ data }) => {
  const dispatch = useDispatch();

  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu((prev) => !prev);
  const menuRef = useRef(null);
  const language = getLangBoolean();
  const { t } = useTranslation("common");
  const priceFrom = localizedNumber(data?.price?.from);
  const priceTo = localizedNumber(data?.price?.to);

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
  const onDelete = async () => {
    await dispatch(deleteNeed(data._id));
    dispatch(getUserNeeds());
  };
  if (data) {
    return (
      <div className="p-4 border bg-white drop-shadow rounded space-y-4">
        <div className="flex items-center justify-between">
          <h3 className=" text-darkGray font-semibold">
            {language ? data?.title?.ar : data?.title?.en}
          </h3>
          <div className="relative" ref={menuRef}>
            <button onClick={toggleMenu}>
              <HiDotsVertical />
            </button>
            {showMenu && (
              <div className="absolute fade-in bg-white min-w-[130px] rounded-lg py-2  drop-shadow left-0 top-5 ">
                <button
                  onClick={() => {
                    setShowMenu(false);
                    onDelete();
                  }}
                  className="text-red-500 text-center w-full"
                >
                  {language ? "حذف" : "Delete"}
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <p> {language ? "السعر: " : "Price: "}</p>
            <p className="text-lightGreen font-bold">{priceFrom + t("Egp")} </p>
          </div>
          <div className="flex items-center gap-1">
            <p> {language ? "الى: " : "To: "}</p>
            <p className="text-lightGreen font-bold">{priceTo + t("Egp")} </p>
          </div>
        </div>
        <hr className="w-full md:w-1/2" />
        <div className="flex flex-col flex-wrap gap-4 md:gap-6 md:items-center  md:flex-row  ">
          <div className="flex items-center gap-4 md:gap-6">
            <p className="text-black">
              {t("Number_of_Rooms")}{" "}
              <span className=" text-darkGray">{data?.rooms}</span>
            </p>
            <p className="text-black">
              {t("Number_of_Bathrooms")}{" "}
              <span className=" text-darkGray">{data?.bathrooms}</span>
            </p>
          </div>
          <div className="flex items-center gap-2">
            <p className="text-black">
              {t("Area")}
              {": "}
              <span className="md:text-xl text-darkGray">
                {data?.area?.from + " "}
              </span>
              {language ? (
                <span>
                  م<sup>2</sup>
                </span>
              ) : (
                <span>
                  m<sup>2</sup>
                </span>
              )}
            </p>
            <p className="text-black">
              {t("To")}{" "}
              <span className="md:text-xl text-darkGray">
                {data?.area?.to + " "}
                {language ? (
                  <span>
                    م<sup>2</sup>
                  </span>
                ) : (
                  <span>
                    m<sup>2</sup>
                  </span>
                )}
              </span>
            </p>
          </div>
        </div>
        {data?.description && (
          <>
            <hr className="w-full md:w-1/2" />
            <div className="space-y-3">
              <h5 className="text-base">{t("More_Information")}</h5>
              <p className="text-gray-400 font-noto leading-relaxed">
                {data?.description}
              </p>
            </div>
          </>
        )}
      </div>
    );
  } else {
    return (
      <div className="p-4 border bg-white drop-shadow rounded space-y-4">
        <div className="flex items-center justify-between">
          <Skeleton className="w-4/12 h-4" />
          <HiDotsVertical />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="flex items-center gap-1 h-4 w-20"></Skeleton>
          <Skeleton className="flex items-center gap-1 h-4 w-20"></Skeleton>
        </div>
        <hr className="w-full md:w-1/2" />
        <div className="flex flex-col flex-wrap gap-4 md:gap-6 md:items-center  md:flex-row  ">
          <div className="flex items-center gap-4 md:gap-6">
            <Skeleton className="flex items-center gap-1 h-3   w-20"></Skeleton>

            <Skeleton className="flex items-center gap-1 h-3   w-20"></Skeleton>
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="flex items-center gap-1 h-3   w-20"></Skeleton>

            <Skeleton className="flex items-center gap-1 h-3   w-20"></Skeleton>
          </div>
        </div>

        <hr className="w-full md:w-1/2" />
        <div className="space-y-3">
          <Skeleton className="flex items-center gap-1 h-3   w-20"></Skeleton>

          <Skeleton className="flex items-center gap-1 h-2   w-6/12"></Skeleton>
          <Skeleton className="flex items-center gap-1 h-2   w-6/12"></Skeleton>
        </div>
      </div>
    );
  }
};
export default NeedsCard;
