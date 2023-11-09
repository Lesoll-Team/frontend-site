import ContactBtnsModal from "@/Shared/models/ContactBtnsModal";
import { Avatar } from "@nextui-org/react";
import { AiTwotoneMail } from "react-icons/ai";
import { BiPhoneCall } from "react-icons/bi";
import { BsFillBuildingsFill, BsWhatsapp } from "react-icons/bs";
import { useSelector } from "react-redux";

const Userdata = ({ userData, totalProperties }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userInfo = useSelector((state) => state.GlobalState.userData);

  const message = `
  مساء الخير مهتم أعرف تفاصيل أكتر عن عقارك اللى تم نشره على موقع ليسول
 `;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${
    userData?.code + userData?.phone
  }&text=${encodeURIComponent(message)}`;
  return (
    <aside className="p-5  py-8  mx-auto gap-5  flex lg:flex-col flex-col justify-between w-full  bg-white  items-center  border rounded-xl animate-appearance-in">
      <div className="flex flex-col justify-center  items-center gap-4">
        <div className="relative">
          <Avatar
            src={userData?.avatarUrl}
            className="w-44 h-44 text-large border-4 drop-shadow-md"
          />
          {!userData?.isOnline && (
            <div className="w-7 h-7 bg-green-600 absolute bottom-4 z-10 rounded-full right-3"></div>
          )}
        </div>
        <div className="text-center ">
          <h1 className="text-4xl font-semibold">{userData?.fullname}</h1>
          <p className="text-2xl text-slate-400">{userData?.username}</p>
        </div>
      </div>
      <div className="text-center -mt-3">
        <p className="flex items-center gap-1 text-xl">
          {" "}
          <BsFillBuildingsFill className="text-lightOrange" /> اجمالى العقارات
        </p>
        <div>{totalProperties}</div>
      </div>
      <div className=" flex  justify-center sm:flex-row  flex-wrap  gap-2 sm:gap-3 ">
        {/* call and whatsapp btns */}
        {!userInfo ? (
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
                <BsWhatsapp className="text-4xl text-[#25D366]" />
                {/* <p className="text-2xl">{language ? "واتس اب" : "Whatsapp"}</p> */}
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
                <BiPhoneCall className="text-4xl" />
                {/* <p className="text-2xl">{language ? "إتصال" : "Call"}</p> */}
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
                <AiTwotoneMail className="text-4xl text-blue-500" />
                {/* <p className="text-2xl">
                  {language ? "البريد الإلكترونى" : "Email"}
                </p> */}
              </button>
            </ContactBtnsModal>
          </>
        ) : userInfo?.phone ? (
          <>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <button className="border-2 w-full flex gap-3 justify-start items-center p-2 sm:p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer">
                <BsWhatsapp className="text-xl sm:text-4xl text-[#25D366]" />
                <p className="text-sm">{language ? "واتس اب" : "Whatsapp"}</p>
              </button>
            </a>

            <a href={`tel:${userData.code}${userData?.phone}`}>
              <button className="border-2 w-full flex gap-2 justify-start items-center p-2 sm:p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer ">
                <BiPhoneCall className="sm:text-[35px] text-xl" />
                <p className="text-sm"> {language ? "إتصال" : "Call"}</p>
              </button>
            </a>
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
            <ContactBtnsModal
              phone={true}
              description={
                language
                  ? "لا يمكن التواصل مع المستخدم في حالة عدم تسجيل رقم هاتفك لدينا"
                  : "You can't contact with the user with out completeing your account phone number "
              }
            >
              <button className="border-2 w-full flex gap-2 justify-start items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer ">
                <BsWhatsapp className="text-4xl text-[#25D366]" />
                {/* <p className="text-2xl">{language ? "واتس اب" : "Whatsapp"}</p> */}
              </button>
            </ContactBtnsModal>

            <ContactBtnsModal
              phone={true}
              description={
                language
                  ? "لا يمكن التواصل مع المعلن فى حالة عدم تسجبل الدخول"
                  : "You can't contact with the seller with out signing in "
              }
            >
              <button className="border-2 w-full flex gap-2 justify-start items-center p-3 rounded-lg  bg-white drop-shadow-lg md:hover:scale-105 duration-150 cursor-pointer ">
                <BiPhoneCall className="text-4xl" />
                {/* <p className="text-2xl">
                  {" "}
                  {language ? "البريد الإلكترونى" : "Email"}
                </p> */}
              </button>
            </ContactBtnsModal>
          </>
        )}

        {/* property share modale */}

        {/* add to fav btn and logic */}
      </div>

      {/* <div>
        <div className="flex gap-2 items-center ">
          <div className="relative">
            <Avatar
              src={userData?.avatarUrl}
              className="w-32 h-32 text-large border-2 "
            />
            {userData?.isOnline && (
              <div className="w-5 h-5 bg-green-600 absolute bottom-2 z-10 rounded-full right-1"></div>
            )}
          </div>
          <div>
            <h1 className="text-2xl font-bold">{userData?.fullname}</h1>
            <p>{userData?.username}</p>
          </div>
        </div>
        <div className="">
          <p className="font-semibold text-darkGreen text-lg">
            {language ? " عدد العقارات" : " properties number"}
          </p>
          <p>{totalProperties}</p>
        </div>
      </div> */}
    </aside>
  );
};

export default Userdata;
