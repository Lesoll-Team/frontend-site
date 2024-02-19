import { localizedNumber } from "@/utils/localizedNumber";
import Link from "next/link";
import { GoPencil } from "react-icons/go";
import { MdOutlineAnalytics } from "react-icons/md";
import { useSelector } from "react-redux";

const PriceTitle = ({ propertData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userData = useSelector((state) => state.userProfile.userData);

  const price = localizedNumber(propertData.price);
  const showEditBtn = userData && userData._id === propertData.user._id;
  const showAdminBtn = userData && (userData.isAdmin || userData.supAdmin);
  return (
    <section className="space-y-1 md:space-y-4 md:border-b-1 md:pb-10">
      <h1 className="text-lg md:text-4xl font-bold text-darkGray  md:text-black md:font-medium">
        {propertData.title}{" "}
      </h1>
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h2 className="text-lg md:text-4xl font-bold text-lightGreen  ">
          {price + " "} {language ? "ج.م " : "Egp "}
          {!propertData.negotiable && (
            <span className="text-sm md:text-2xl text-darkGray font-normal ">
              {language ? "(قابل للتفاوض)" : "(Negotiable)"}
            </span>
          )}
        </h2>
        {showEditBtn && (
          <a href="#" className="flex gap-1 items-center">
            <GoPencil className="text-lg font-bold" />
            <span className="underline text-sm md:text-xl">
              {language ? "تعديل العقار" : "Edit Property"}
            </span>
          </a>
        )}
        {showAdminBtn && (
          <Link
            href={`/dashboard/property-details/${propertData.slug}`}
            className="flex gap-1 items-center"
          >
            <MdOutlineAnalytics className="text-xl font-bold" />
            <span className="underline text-sm md:text-xl">
              {language ? "احصائيات العقار" : " Property analysis"}
            </span>
          </Link>
        )}
      </div>
    </section>
  );
};
export default PriceTitle;
