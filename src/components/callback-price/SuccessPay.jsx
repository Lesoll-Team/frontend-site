import { usePeriodDate } from "@/Hooks/usePeriodType";
// import { forIn } from "lodash";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// usePeriodDate;
const SuccessPay = ({ info }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [isTime, setIsTime] = useState(60);
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      if (isTime > 0) {
        setIsTime(isTime - 1);
      } else {
        clearInterval(timer);
        router.push("/packages");
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isTime, router]);
  return (
    <div className=" min-h-screen md:-my-10 flex md:items-center ">
      <div className="bg-gray-100  p-6 md:w-6/12 w-full   md:mx-auto">
        <svg
          viewBox="0 0 24 24"
          className="text-green-600 w-16 h-16 mx-auto my-3"
        >
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <div className="text-center flex flex-col items-center">
          <h2 className="mb-3 text-center">
            {language ? "تم الدفع ! " : " Payment Done !"}
          </h2>
          <p className="text-gray-600 my-2 lg-text">
            {language
              ? "نشكرك على إكمال عملية الدفع الآمنة عبر الإنترنت مع ليسول ."
              : "Thank you for completing your secure online payment with Lesoll."}
          </p>
          <p className="lg-text">
            {language ? "أتمنى لك يوماً عظيماً!" : " Have a great day!"}
          </p>
          <div className="sm:w-6/12 text-gray-600 text-start w-full  ">
            <p className="font-bold  mt-5 mb-3 text-black lg-text">
              {language ? "بيانات الدفع" : "Payment details"}
            </p>
            <div className="  w-full">
              <table className="w-full sm-text">
                <tbody className="flex flex-col gap-2">
                  <tr className="flex justify-between w-full border-b-1 border-slate-200">
                    <th>{language ? "اسم الباقة" : "Package name"}</th>
                    <td>{language ? info.PaymentAr : info.PaymentEn}</td>
                  </tr>
                  <tr className="flex justify-between w-full border-b-1 border-slate-200">
                    <th>{language ? "السعر" : "Price"}</th>
                    <td>{info.price} EGP</td>
                  </tr>
                  <tr className="flex justify-between w-full border-b-1 border-slate-200">
                    <th>{language ? "المده" : "Duration"}</th>
                    <td>{usePeriodDate(info.expireDate)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className=" text-center gap-y-3 my-5 flex  flex-col">
            <Link
              className="bg-lightGreen  px-6 py-2 rounded hover:bg-lightGreenHover mx-auto text-white "
              href="/profile/my-subscriptions"
            >
              {language ? "عرض جميع باقاتي" : "View my subscriptions"}
            </Link>
            <p className="xs-text">{`سيتم توجيهك الي الصفحة الشخصية خلال ${isTime} ثانية`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuccessPay;
