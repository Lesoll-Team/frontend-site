// import { usePeriodDate } from "@/Hooks/usePeriodType";

import Link from "next/link";

const HentDetailsError = ({ language }) => {
  return (
    <ul className="sm:w-6/12  text-gray-600 text-start w-full  ">
      {language ? (
        <>
          <li>1- التحقق من تفاصيل الدفع والمحاولة مرة أخرى.</li>
          <li>2- التأكد من توفر الأموال الكافية في البطاقة.</li>
          <li>3- الاتصال بالبنك للتحقق من أي مشاكل في الحساب.</li>
          <li>
            4- إذا استمرت المشكلة، يُرجى{" "}
            <Link href={"/contact-us"} className="text-linkColor underline">
              التواصل معنا
            </Link>{" "}
            , شكرًا لتفهمك.
          </li>
        </>
      ) : (
        <>
          <li>1- Check payment details and try again.</li>
          <li>2- Ensure there are sufficient funds on the card.</li>
          <li>3- Contact the bank to check for any account issues.</li>
          <li>
            4- If the problem persists, please{" "}
            <Link href={"/contact-us"} className="text-linkColor underline">
              contact us
            </Link>{" "}
            , thank you for your understanding.
          </li>
        </>
      )}
    </ul>
  );
};
export default HentDetailsError;
