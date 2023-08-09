import { MdAddCircle } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
import userImg from "../../../../public/userimg.webp";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const PersonalInfo = () => {
  const [userName, setUserName] = useState("Abdelrahman Mostafa");
  const [phonenumber, setPhonenumber] = useState("01146425301");
  const [emailVerified] = useState(false);

  return (
    <div className="w-full sm:max-w-[700px] mx-auto py-10 px-5 border-2 rounded-xl bg-white drop-shadow-lg">
      <form
        className="space-y-10"
        onSubmit={(e) => {
          e.preventDefault();

          console.log(userName);
          console.log(phonenumber);
        }}
      >
        <div className="flex justify-start items-center relative   ">
          <Image
            src={userImg}
            alt=""
            width={"auto"}
            height={"auto"}
            className="w-[150px] h-[150px] object-cover rounded-full"
          />
          <div className=" bg-lightGreen right-10 top-11 rounded-full w-10 h-10 flex justify-center items-center relative overflow- cursor-text overflow-hidden border-gray-300 ">
            <input
              type="file"
              accept="image/"
              className="scale-[2] right-5 bottom-0 absolute  top-2 cursor-pointer"
            />
            <MdAddCircle className="w-full text-2xl text-white" />
          </div>
        </div>
        {/* name */}
        <div className=" ">
          <p className="font-semibold text-xl mb-2">Name</p>
          <input
            type="text"
            placeholder="Full Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            className="block placeholder:text-gray-500 focus:outline-none  font-medium focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
          />
        </div>
        {/* user name */}
        <div className="  ">
          <p className="font-semibold text-xl  mb-2">User Name</p>
          <p className="block  focus:outline-none text-gray-400  font-medium focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2">
            @abdo5001
          </p>
        </div>
        {/* Email */}
        <div className=" relative ">
          <p className="font-semibold text-xl mb-2 ">Email</p>
          <div className="grid">
            <p className="block text-gray-400   font-medium focus:border-lightGreen overflow-x-auto w-full border-2 rounded-md px-4 py-2">
              abdelrahman@gmail.com
            </p>
            {emailVerified === true ? (
              <BsCheckCircle className="absolute right-3 bottom-[13px] text-lg text-green-600" />
            ) : (
              <Link
                className="bg-green-600 w-28 text-center justify-self-end items-end text-white mt-3 -mb-7 py-2 px-3 rounded-lg   "
                href={"/"}
              >
                Verify Email
              </Link>
            )}
          </div>
        </div>
        {/* phone number */}
        <div className=" ">
          <p className="font-semibold text-xl  mb-2">Phone Number</p>
          <input
            type="number"
            placeholder="Phone"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
            className="block placeholder:text-gray-500 focus:outline-none  font-medium focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
          />
        </div>
        {/* <div className="space-y-3 ">
          <p className="font-semibold text-xl  mb-2">
            Contact method
          </p>

          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="appearance-none  rounded-sm border-2 w-5 h-5 border-lightGreen p-1 checked:border-white checked:bg-lightGreen checked:ring-1 checked:ring-lightGreen "
            />
            <label htmlFor="">Phone Call</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="appearance-none  rounded-sm border-2 w-5 h-5 border-lightGreen p-1 checked:border-white checked:bg-lightGreen checked:ring-1 checked:ring-lightGreen "
            />
            <label htmlFor="">Whatsapp</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="appearance-none  rounded-sm border-2 w-5 h-5 border-lightGreen p-1 checked:border-white checked:bg-lightGreen checked:ring-1 checked:ring-lightGreen "
            />
            <label htmlFor="">Lesoll Chat</label>
          </div>
        </div> */}
        <button className="rounded-lg w-full bg-lightOrange text-white mt-5  py-2  font-semibold  duration-300 hover:bg-lightOrangeHover md:active:scale-95">
          Save Changes
        </button>
      </form>
    </div>
  );
};
export default PersonalInfo;
