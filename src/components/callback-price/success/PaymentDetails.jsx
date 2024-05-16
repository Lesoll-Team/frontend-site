import { usePeriodDate } from "@/Hooks/usePeriodType";

const PaymentDetails = ({ info, language }) => {
  return (
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
              <th className="w-32  ">{language ? "المده" : "Duration"}</th>
              <td className=" w-16  ">{usePeriodDate(info.expireDate)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default PaymentDetails;
