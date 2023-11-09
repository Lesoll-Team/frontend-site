import ContactBtnsModal from "@/Shared/models/ContactBtnsModal";
import { Avatar } from "@nextui-org/react";
import { AiTwotoneMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { useSelector } from "react-redux";

const Userdata = ({ userData, totalProperties }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userInfo = useSelector((state) => state.GlobalState.userData);
  console.log(userData);
  const message = `
  مساء الخير مهتم أعرف تفاصيل أكتر عن عقاراتك اللى تم نشرها على موقع ليسول
 `;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${
    userData?.code + userData?.phone
  }&text=${encodeURIComponent(message)}`;
  return (
    <aside className="p-5  py-8  mx-auto gap-5  flex lg:flex-row flex-col justify-between w-full  bg-white  items-center  border rounded-xl fade-in ">
      <div className="flex justify-center lg:flex-row flex-col items-center gap-4">
        <div className="relative">
          <Avatar
            src={userData?.avatarUrl}
            className="w-44 h-44 text-large border-4 drop-shadow-md"
          />
          {!userData?.isOnline && (
            <div className="w-7 h-7 bg-green-500 border-3 border-white absolute bottom-4 z-10 rounded-full left-3"></div>
          )}
        </div>
        <div className="text-center lg:text-start space-y-1">
          <h1 className="text-4xl font-semibold text-lightOrange capitalize">
            {userData?.fullname}
          </h1>
          {/* <p className="text-2xl text-slate-400">{userData?.username}</p> */}
        </div>
      </div>

      <div className=" flex  justify-center sm:flex-row  flex-wrap  gap-2 sm:gap-3 ">
        {/* call and whatsapp btns */}
        {!userInfo ? (
          <>
            {userData?.phone && (
              <>
                <ContactBtnsModal
                  signup={true}
                  description={
                    language
                      ? "لا يمكن التواصل مع المعلن فى حالة عدم تسجبل الدخول"
                      : "You can't contact with the seller with out signing in "
                  }
                >
                  <button className="border-2 w-full flex gap-3 justify-start items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer ">
                    <BsWhatsapp className="text-xl sm:text-4xl text-[#25D366]" />
                    <p className="text-sm">
                      {language ? "واتس اب" : "Whatsapp"}
                    </p>
                  </button>
                </ContactBtnsModal>

                <ContactBtnsModal
                  signup={true}
                  description={
                    language
                      ? "لا يمكن التواصل مع المستخدم فى حالة عدم تسجبل الدخول"
                      : "You can't contact with the user with out signing in "
                  }
                >
                  <button className="border-2 w-full flex gap-2 justify-start items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer ">
                    <BiPhoneCall className="text-xl sm:text-4xl" />
                    <p className="text-sm">{language ? "إتصال" : "Call"}</p>
                  </button>
                </ContactBtnsModal>
              </>
            )}

            <ContactBtnsModal
              signup={true}
              description={
                language
                  ? "لا يمكن التواصل مع المستخدم فى حالة عدم تسجبل الدخول"
                  : "You can't contact with the user with out signing in "
              }
            >
              <button className="border-2 w-full flex gap-2 justify-start items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer ">
                <AiTwotoneMail className="text-xl sm:text-4xl text-blue-500" />
                <p className="text-sm">
                  {language ? "البريد الإلكترونى" : "Email"}
                </p>
              </button>
            </ContactBtnsModal>
          </>
        ) : userInfo?.phone ? (
          <>
            {userData?.phone && (
              <>
                {" "}
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <button className="border-2 w-full flex gap-3 justify-start items-center p-2 sm:p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer">
                    <BsWhatsapp className="text-xl sm:text-4xl text-[#25D366]" />
                    <p className="text-sm">
                      {language ? "واتس اب" : "Whatsapp"}
                    </p>
                  </button>
                </a>
                <a href={`tel:${userData.code}${userData?.phone}`}>
                  <button className="border-2 w-full flex gap-2 justify-start items-center p-2 sm:p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer ">
                    <BiPhoneCall className="sm:text-[37px] text-xl" />
                    <p className="text-sm"> {language ? "إتصال" : "Call"}</p>
                  </button>
                </a>
              </>
            )}

            <a href={`mailto:${userData.email}`}>
              <button className="border-2 w-full flex gap-2 justify-start items-center p-2 sm:p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer ">
                <AiTwotoneMail className=" text-xl sm:text-4xl text-blue-500" />
                <p className="text-sm">
                  {language ? "البريد الإلكترونى" : "Email"}
                </p>
              </button>
            </a>
          </>
        ) : (
          <>
            {userData?.phone && (
              <>
                {" "}
                <ContactBtnsModal
                  phone={true}
                  description={
                    language
                      ? "لا يمكن التواصل مع المستخدم في حالة عدم تسجيل رقم هاتفك لدينا"
                      : "You can't contact with the user with out completeing your account phone number "
                  }
                >
                  <button className="border-2 w-full flex gap-2 justify-start items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer ">
                    <BsWhatsapp className="text-xl sm:text-4xl text-[#25D366]" />
                    <p className="text-sm">
                      {language ? "واتس اب" : "Whatsapp"}
                    </p>
                  </button>
                </ContactBtnsModal>
                <ContactBtnsModal
                  phone={true}
                  description={
                    language
                      ? "لا يمكن التواصل مع المستخدم في حالة عدم تسجيل رقم هاتفك لدينا"
                      : "You can't contact with the user with out completeing your account phone number "
                  }
                >
                  <button className="border-2 w-full flex gap-2 justify-start items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer ">
                    <BiPhoneCall className="text-xl sm:text-4xl" />
                    <p className="text-sm">{language ? "إتصال" : "Call"}</p>
                  </button>
                </ContactBtnsModal>
              </>
            )}

            <ContactBtnsModal
              phone={true}
              description={
                language
                  ? "لا يمكن التواصل مع المعلن فى حالة عدم تسجبل الدخول"
                  : "You can't contact with the seller with out signing in "
              }
            >
              <button className="border-2 w-full flex gap-2 justify-start items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer ">
                <BiPhoneCall className="text-xl sm:text-4xl" />
                <p className="text-sm">
                  {" "}
                  {language ? "البريد الإلكترونى" : "Email"}
                </p>
              </button>
            </ContactBtnsModal>
          </>
        )}
      </div>
    </aside>
  );
};

export default Userdata;
