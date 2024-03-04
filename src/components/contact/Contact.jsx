import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "./ContactForm";
import { useSelector } from "react-redux";
import { MdCall } from "react-icons/md";
import { IoAlarm } from "react-icons/io5";

const Contact = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="min-h-[90dvh] w-full md:container mx-auto ">
      <img
        src="/contact-us.png"
        className="w-full hidden lg:block lg:max-h-[450px] col-span-2  row-start-1 row-span-3 col-start-1 "
      />
      <img src="/contact-phone.png" className="w-full  lg:hidden  " />

      <div className="w-full flex-col-reverse lg:flex-row flex max-w-[90%] md:w-full mx-auto">
        <div className="w-full mb-3">
          <div className="flex justify-start my-8 gap-3">
            <FaLocationDot className="text-lightGreen text-2xl" />
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold">
                {" "}
                {language ? "العنوان" : "Address"}
              </h4>
              <p>
                {language
                  ? "12 عمارات العبور, صلاح سالم، مدينة نصر، محافظة القاهرة‬ 11811"
                  : "12 Al Obour Buildings, Salah Salem, Nasr City, Cairo, 11811"}
              </p>
            </div>
          </div>
          <div className="flex justify-start my-8 gap-3">
            <MdCall className="text-lightGreen text-xl" />
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold">
                {" "}
                {language ? "الإتصال" : "Call"}
              </h4>
              <p>01032362898</p>
            </div>
          </div>
          <div className="flex justify-start my-8 gap-3">
            <IoAlarm className="text-lightGreen text-xl" />
            <div className="flex flex-col gap-2">
              <h4 className="text-xl font-bold">
                {" "}
                {language ? "مواعيد العمل" : "Call"}
              </h4>
              <p>من الأحد الى الخميس 9 صباحاً : 5 مساءً</p>
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
