import ConfirmModal from "@/Shared/models/ConfirmModal";
import { changePassword } from "@/utils/userAPI";
import { useRouter } from "next/router";
import { useState } from "react";
import { useSelector } from "react-redux";
const tost = {
  errorAr: "كلمة المرور الجديدة غير متشابهة مع تاكيد كلمة المرور ",
  errorEn: "The new password is not the same as the confirmed password ",
  messageEn: "Please enter your current password to change password ",
  messageAr: "الرجاء إدخال كلمة المرور الحالية لتغيير كلمة المرور ",
};
const EditPassword = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const [password, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messaged, setMessaged] = useState(false);
  //  const router=useRouter()
  const changeNewPassword = async () => {
    if (newPassword === confirmPassword) {
      // setMessaged("Please enter your current password to change password")

      const userNewPassword = { password, newPassword };
      const data = await changePassword(userNewPassword);
      setMessage(data);
      setCurrentPassword("");
      setNewPassword("");
      setConfirmPassword("");
      // router.push("/profile")
    }
    setMessaged(true);
  };

  return (
    <div className="w-full sm:max-w-[700px] mx-auto py-10 px-5 border-2 rounded-xl bg-white drop-shadow-lg space-y-5">
      <div className="border-b-2 py-4">
        <h3 className="text-2xl font-bold">{language?"كلمة المرور":"Password"}</h3>
        <p className="w-full text-lg text-red-500">
          {message?.code == null || undefined ? (
            messaged ? (
              language ? (
                tost.errorAr
              ) : (
                tost.errorEn
              )
            ) : (
              <span className="text-black">
                {language ? tost.messageAr : tost.messageEn}
              </span>
            )
          ) : null}
        </p>
        {message?.code === 201 ? (
          <p className="w-full text-lg text-success-600">
            {language ? "تم تغير كلمة المرور الخاصة بك" : message?.message}
          </p>
        ) : null}
        {message?.code == 401 ? (
          <div className="w-full text-lg text-red-500">
            {language ? "خطاء فى كلمة المرور الخاصة بك " : message?.message}
          </div>
        ) : null}
      </div>
      <div className="space-y-8">
        <div className=" ">
          <p className="font-semibold text-xl  mb-4 whitespace-nowrap">
          {`${language?"كلمة المرور الحالية ":"Current password"}`}
          </p>
          <input
            onChange={(e) => setCurrentPassword(e.target.value)}
            type="password"
            value={password}
            name="password"
            placeholder={`${language?"كلمة المرور الحالية ":"Current password"}`}
            className="block placeholder:text-gray-500 focus:outline-none  font-medium focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
              autoComplete="current-password"
          />
        </div>
        <div className=" ">
          <p className="font-semibold text-xl   mb-4 whitespace-nowrap">

          {`${language?"كلمة المرور الجديدة ":"New Password"}`}

          </p>
          <input
            onChange={(e) => setNewPassword(e.target.value)}
            type="password"
            value={newPassword}
            name="new-password"
            placeholder={`${language?"كلمة المرور الجديدة ":"New Password"}`}
            className="block placeholder:text-gray-500 w-full focus:outline-none  font-medium focus:border-lightGreen  border-2 rounded-md px-4 py-2"
                       autoComplete="new-password"
          />
        </div>
        <div className=" ">
          <p className="font-semibold text-xl  mb-4 whitespace-nowrap">
          {`${language?"تأكيد كلمة المرور ":"Confirm Password"}`}
          </p>
          <input
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            name="confirm-password"
            value={confirmPassword}
            placeholder={`${language?"تأكيد كلمة المرور الجديدة":"Confirm New Password"}`}
            className="block placeholder:text-gray-500 focus:outline-none font-medium focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
                       autoComplete="new-password"
          />
        </div>
        <ConfirmModal
          actinFunction={changeNewPassword}
          title={language?"تأكيد تغير كلمة المرور ":"Confirm password update"}
        >
          <button className="rounded-lg w-full bg-lightOrange text-white mt-5  py-2  font-semibold  duration-300 hover:bg-lightOrangeHover md:active:scale-95">

            {language?" تغير كلمة المرور ":" Update Password"}
          </button>
        </ConfirmModal>
      </div>
    </div>
  );
};
export default EditPassword;

// import ConfirmModal from "@/Shared/models/ConfirmModal";
// import { changePassword } from "@/utils/userAPI";
// // import { useRouter } from "next/router";
// import { useState } from "react";
// import { useSelector } from "react-redux";

// const tost = {
//   errorAr: "كلمة المرور الجديدة غير متشابهة مع تاكيد كلمة المرور ",
//   errorEn: "The new password is not the same as the confirmed password ",
//   messageEn: "Please enter your current password to change password ",
//   messageAr: "الرجاء إدخال كلمة المرور الحالية لتغيير كلمة المرور ",
// };

// const EditPassword = () => {
//   const language = useSelector((state) => state.GlobalState.languageIs);

//   const [password, setCurrentPassword] = useState("");
//   const [newPassword, setNewPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [message, setMessage] = useState(null);
//   const [messaged, setMessaged] = useState(false);

//   // const router = useRouter();

//   const changeNewPassword = async () => {


//     if (newPassword === confirmPassword) {
//       const userNewPassword = { password, newPassword };
//       const data = await changePassword(userNewPassword);
//       setMessage(data);
//       setCurrentPassword("");
//       setNewPassword("");
//       setConfirmPassword("");
//     }
//     setMessaged(true);
//   };

//   return (
//     <form onSubmit={changeNewPassword}>
//       <div className="w-full sm:max-w-[700px] mx-auto py-10 px-5 border-2 rounded-xl bg-white drop-shadow-lg space-y-5">
//         <div className="border-b-2 py-4">
//           <h3 className="text-2xl font-bold">
//             {language ? "كلمة المرور" : "Password"}
//           </h3>
//           <p className="w-full text-lg text-red-500">
//             {message?.code == null || undefined ? (
//               messaged ? (
//                 language ? (
//                   tost.errorAr
//                 ) : (
//                   tost.errorEn
//                 )
//               ) : (
//                 <span className="text-black">
//                   {language ? tost.messageAr : tost.messageEn}
//                 </span>
//               )
//             ) : null}
//           </p>
//           {message?.code === 201 ? (
//             <p className="w-full text-lg text-success-600">
//               {language ? "تم تغير كلمة المرور الخاصة بك" : message?.message}
//             </p>
//           ) : null}
//           {message?.code == 401 ? (
//             <div className="w-full text-lg text-red-500">
//               {language ? "خطاء فى كلمة المرور الخاصة بك " : message?.message}
//             </div>
//           ) : null}
//         </div>
//         <div className="space-y-8">
//           <div className=" ">
//             <p className="font-semibold text-xl  mb-4 whitespace-nowrap">
//               {`${language ? "كلمة المرور الحالية " : "Current password"}`}
//             </p>
//             <input
//               onChange={(e) => setCurrentPassword(e.target.value)}
//               type="password"
//               value={password}
//               placeholder={`${
//                 language ? "كلمة المرور الحالية " : "Current password"
//               }`}
//               className="block placeholder:text-gray-500 focus:outline-none  font-medium focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
//               autoComplete="current-password"
//             />
//           </div>
//           <div className=" ">
//             <p className="font-semibold text-xl   mb-4 whitespace-nowrap">
//               {`${language ? "كلمة المرور الجديدة " : "New Password"}`}
//             </p>
//             <input
//               onChange={(e) => setNewPassword(e.target.value)}
//               type="password"
//               value={newPassword}
//               placeholder={`${
//                 language ? "كلمة المرور الجديدة " : "New Password"
//               }`}
//               className="block placeholder:text-gray-500 w-full focus:outline-none  font-medium focus:border-lightGreen  border-2 rounded-md px-4 py-2"
//               autoComplete="new-password"
//               />
//           </div>
//           <div className=" ">
//             <p className="font-semibold text-xl  mb-4 whitespace-nowrap">
//               {`${language ? "تأكيد كلمة المرور " : "Confirm Password"}`}
//             </p>
//             <input
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               type="password"
//               value={confirmPassword}
//               placeholder={`${
//                 language ? "تأكيد كلمة المرور الجديدة" : "Confirm New Password"
//               }`}
//               className="block placeholder:text-gray-500 focus:outline-none font-medium focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
//               autoComplete="new-password"
//             />
//           </div>
//           <ConfirmModal
//             actinFunction={changeNewPassword}
//             title={
//               language ? "تأكيد تغير كلمة المرور " : "Confirm password update"
//             }
//           >
//             <button
//               type="submit"
//               className="rounded-lg w-full bg-lightOrange text-white mt-5  py-2  font-semibold  duration-300 hover:bg-lightOrangeHover md:active:scale-95"
//             >
//               {language ? " تغير كلمة المرور " : " Update Password"}
//             </button>
//           </ConfirmModal>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default EditPassword;

