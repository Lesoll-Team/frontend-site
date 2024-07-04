import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import { MdCall } from "react-icons/md";
import { IoAlarm } from "react-icons/io5";
import Image from "next/image";
import { getLangBoolean } from "@/utils/getLangBoolean";
import { useTranslation } from "next-i18next";

const Contact = () => {
  const language = getLangBoolean();
  const { t } = useTranslation("common");
  return (
    <div className="min-h-[90dvh] w-full md:container mx-auto ">
      <Image
        src="/contact-us.png"
        width={400}
        height={100}
        alt="contact us"
        loading="lazy"
        placeholder="blur"
        blurDataURL="data:image/webp;base64,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"
        className="w-full  lg:max-h-[450px]  col-span-2  row-start-1 row-span-3 col-start-1 "
      />

      <div className="w-full flex-col-reverse lg:flex-row flex max-w-[90%] md:w-full mx-auto">
        <div className="w-full mb-3">
          <div className="flex justify-start my-8 gap-3">
            <FaLocationDot className="text-lightGreen text-2xl" />
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-800 font-bold">
                {" "}
                {t("Contact_Page.Address")}
              </h3>
              <p>{t("Contact_Page.Address_Details")}</p>
            </div>
          </div>
          <div className="flex justify-start my-8 gap-3">
            <MdCall className="text-lightGreen text-xl" />
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-800 font-bold"> {t("Call")}</h3>
              <p>01032362898</p>
            </div>
          </div>
          <div className="flex justify-start my-8 gap-3">
            <IoAlarm className="text-lightGreen text-xl" />
            <div className="flex flex-col gap-2">
              <h3 className="text-gray-800 font-bold"> {t("Working_Hours")}</h3>
              <p>{t("Contact_Page.Working_Hours_Details")}</p>
            </div>
          </div>
        </div>
        <div className="w-full  -mt-16 lg:-mt-72 lg:mb-10">
          {" "}
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
export default Contact;
