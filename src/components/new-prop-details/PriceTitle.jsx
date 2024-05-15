import { useUser } from "@/Shared/UserContext";
import { localizedNumber } from "@/utils/localizedNumber";
import Link from "next/link";
import { memo, useMemo } from "react";
import { GoPencil } from "react-icons/go";
import { MdOutlineAnalytics } from "react-icons/md";
import { useSelector } from "react-redux";

const PriceTitle = ({ propertData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { data } = useUser();

  const price = localizedNumber(propertData.price);
  const showEditBtn =
    data && (data._id === propertData.user._id || data.supAdmin);
  const showAdminBtn = data && data.isAdmin;
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
      <h1 className="text-xl md:text-4xl leading-relaxed font-bold text-darkGray  md:text-black md:font-medium">
        {propertData.title}{" "}
      </h1>
      <div className="flex justify-between items-center flex-wrap gap-2">
        {propertData.offer === "For Investment" ? (
          <h2 className=" text-[24px] md:text-[26px] font-bold text-lightGreen  ">
            {language ? "للإستثمار" : "For Investment "}
          </h2>
        ) : (
          <h2 className=" text-[24px] md:text-3xl font-bold text-lightGreen  ">
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
            className="flex gap-1 md:text-base text-xs items-center mx-2 mt-1"
          >
            <MdOutlineAnalytics className="text-base md:text-xl font-bold" />
            <span className="underline text-sm md:text-xl">
              {language ? "احصائيات العقار" : " Property analysis"}
            </span>
          </Link>
        )}
      </div>
    </section>
  );
};
export default memo(PriceTitle);
