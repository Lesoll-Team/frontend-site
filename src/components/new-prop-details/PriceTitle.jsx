import useContactLinks from "@/Hooks/useContactLinks";
import { localizedNumber } from "@/utils/localizedNumber";
import Link from "next/link";
import { useMemo } from "react";
import { GoPencil } from "react-icons/go";
import { MdOutlineAnalytics } from "react-icons/md";
import { useSelector } from "react-redux";

const PriceTitle = ({ propertData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userData = useSelector((state) => state.userProfile.userData);
  const { WhatappLinkBtn } = useContactLinks({
    phoneNumber: propertData.user.code + propertData.user.phone,
  });
  const price = localizedNumber(propertData.price);
  const showEditBtn =
    userData && (userData._id === propertData.user._id || userData.supAdmin);
  const showAdminBtn = userData && userData.isAdmin;
  const sideInfoToPrice = useMemo(() => {
    if (propertData.offer === "For Sale") {
      if (propertData.RealEstateFinance) {
        return language
          ? "(متاح تمويل عقارى)"
          : "(RealEstate Finance Avilable)";
      } else if (propertData.negotiable) {
        language ? "(قابل للتفاوض)" : "(Negotiable)";
      }
    } else {
      return "";
    }
  }, [language, propertData]);

  return (
    <section className="space-y-1 md:space-y-4 md:border-b-1 md:pb-10">
      <h1 className="text-lg md:text-4xl font-bold text-darkGray  md:text-black md:font-medium">
        {propertData.title}{" "}
      </h1>
      <div className="flex justify-between items-center flex-wrap gap-2">
        {propertData.offer === "For Investment" ? (
          <h2 className="text-lg md:text-4xl font-bold text-lightGreen  ">
            {language ? "للإستثمار" : "For Investment "}
          </h2>
        ) : (
          <h2 className="text-lg md:text-4xl font-bold text-lightGreen  ">
            {price + " "} {language ? "ج.م " : "Egp "}
            {sideInfoToPrice && (
              <span className="text-sm md:text-2xl text-darkGray font-normal ">
                {sideInfoToPrice}
              </span>
            )}
          </h2>
        )}

        {showEditBtn && (
          <Link
            href={`/editproperty/${propertData.slug}`}
            className="flex gap-1 md:text-base text-xs items-center"
          >
            <GoPencil className=" text-base md:text-xl font-bold" />
            <span className="underline text-sm md:text-xl">
              {language ? "تعديل العقار" : "Edit Property"}
            </span>
          </Link>
        )}
        {showAdminBtn && (
          <Link
            href={`/dashboard/property-details/${propertData.slug}`}
            className="flex gap-1 md:text-base text-xs items-center"
          >
            <MdOutlineAnalytics className="text-base md:text-xl font-bold" />
            <span className="underline text-sm md:text-xl">
              {language ? "احصائيات العقار" : " Property analysis"}
            </span>
          </Link>
        )}
        {/* <WhatappLinkBtn
          className={
            "py-3 flex items-center justify-center w-full gap-2 bg-[#39AE41] text-white"
          }
        /> */}
      </div>
    </section>
  );
};
export default PriceTitle;
