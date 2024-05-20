import Image from "next/image";
import { useEffect, useState } from "react";
import { IoLink } from "react-icons/io5";
import { useSelector } from "react-redux";

const UserRow = ({ odd, data }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { code, phone, email, fullname, avatarUrl } = data;
  const [copied, setCopied] = useState(false);
  const handleCopyClick = () => {
    // Use the Clipboard API to write text to the clipboard
    navigator.clipboard
      .writeText(data?.code + data?.phone)
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };
  useEffect(() => {
    if (copied) {
      const timeoutId = setTimeout(() => {
        setCopied(false);
      }, 3000);

      // Clear the timeout if the effect runs again or the component unmounts
      return () => clearTimeout(timeoutId);
    }
  }, [copied]);
  return (
    <div
      className={`py-4 px-3 flex justify-between md:flex-row flex-col  items-center ${odd ? "bg-[#F8F8F8]" : "bg-white"} `}
    >
      <div className="w-full flex gap-2 items-center">
        <Image
          width={40}
          height={40}
          src={avatarUrl || "/user-avatar-placeholder.png"}
          alt={fullname}
          className="rounded-full object-cover"
        />
        <p>{fullname}</p>
      </div>
      <div className="w-full flex flex-wrap gap-3 md:justify-between items-center md:px-0 px-11">
        <p>{email}</p>
        <div className="relative">
          {copied && (
            <div className="absolute -top-8 left-[37%] fade-in bg-white rounded-xl border px-3 p-1.5 ">
              <p className="text-xs">{language ? "تم النسخ" : "Copied"}</p>
            </div>
          )}
          {phone ? (
            <p
              className="cursor-pointer underline text-linkColor flex items-center gap-2"
              onClick={handleCopyClick}
            >
              {code + phone} <IoLink className="text-2xl" />
            </p>
          ) : (
            <p className="opacity-70">
              {language ? "لا يتوفر رقم هاتف" : "no phone number available"}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserRow;
