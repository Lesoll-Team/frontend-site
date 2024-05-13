import { usePeriodDate } from "@/Hooks/usePeriodType";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
//<LuWallet /> wallet
//<RiBankLine /> Bank

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
    <div className=" min-h-[75dvh]  md:container md:mx-auto mx-[20px]  my-10 ">
      <div className="w-full  -mb-16 flex relative justify-center">
        <Image
          src={"/price/holding_debit.svg"}
          width={200}
          height={200}
          alt=" holding debit "
        />
      </div>
      <div className="bg-[#F8F8F8] p-6 w-full   md:mx-auto">
        <div className="text-center flex flex-col pt-20 items-center">
          <h2 className="mb-3 text-center">
            {language
              ? "تم الاشتراك في الباقة بنجاح! "
              : " You have successfully subscribed to the package!"}
          </h2>
          <p className="text-gray-600 my-2 lg-text">
            {language
              ? "مبروك! 🎉 أنت الآن جزء من مجتمعنا الحصري للمشتركين. استعد لفتح عالم من المحتوى الرائع، والعروض الخاصة، والتجارب المخصصة لك فقط!"
              : "Congrats! 🎉 You are now part of our exclusive community of subscribers. Get ready to unlock a world of amazing content, special offers, and experiences just for you!"}
          </p>
          <div className="sm:w-6/12  text-gray-600 text-start w-full  ">
            <p className="font-bold  mt-5 mb-3   text-center text-black lg-text">
              {language ? "بيانات الدفع" : "Payment details"}
            </p>
            <div className="  w-full">
              <table className="w-full sm-text ">
                <tbody className="flex flex-col gap-2">
                  <tr className="flex justify-around  w-full bg-[#D9D9D9] p-2 ">
                    <th className="w-32  ">
                      {language ? "اسم الباقة" : "Package name"}
                    </th>
                    <td className=" w-16  ">
                      {language ? info.PaymentAr : info.PaymentEn}
                    </td>
                  </tr>
                  <tr className="flex justify-around w-full p-2 ">
                    <th className="w-32  ">{language ? "السعر" : "Price"}</th>
                    <td className=" w-16  ">{info.price} EGP</td>
                  </tr>
                  <tr className="flex justify-around w-full bg-[#D9D9D9] p-2 ">
                    <th className="w-32  ">
                      {language ? "المده" : "Duration"}
                    </th>
                    <td className=" w-16  ">
                      {usePeriodDate(info.expireDate)}
                    </td>
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
