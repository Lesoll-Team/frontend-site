import { changePassword } from "@/utils/userAPI";
import { useState } from "react";

const EditPassword = () => {
  const [password, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const changeNewPassword =async (e) => {
    e.preventDefault();
    if (newPassword===confirmPassword) {
      const userNewPassword={password,newPassword}
 await changePassword(userNewPassword);
 setCurrentPassword("");
 setNewPassword("");
 setConfirmPassword("");
    }

  };
  return (
    <div className="w-full sm:max-w-[700px] mx-auto py-10 px-5 border-2 rounded-xl bg-white drop-shadow-lg space-y-5">
      <div className="border-b-2 py-4">
        <h3 className="text-2xl font-bold">Password</h3>
        <p>Please enter your current password to change password</p>
      </div>
      <form onSubmit={changeNewPassword} className="space-y-8">
        <div className=" ">
          <p className="font-semibold text-xl  mb-4 whitespace-nowrap">
            Current password
          </p>
          <input
          onChange={(e)=>setCurrentPassword(e.target.value)}
            type="password"
            placeholder="Current password"
            className="block placeholder:text-gray-500 focus:outline-none  font-medium focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
          />
        </div>
        <div className=" ">
          <p className="font-semibold text-xl   mb-4 whitespace-nowrap">
            New Password
          </p>
          <input
          onChange={(e)=>setNewPassword(e.target.value)}

            type="password"
            placeholder=" New Password"
            className="block placeholder:text-gray-500 w-full focus:outline-none  font-medium focus:border-lightGreen  border-2 rounded-md px-4 py-2"
          />
        </div>
        <div className=" ">
          <p className="font-semibold text-xl  mb-4 whitespace-nowrap">
            Confirm New Password
          </p>
          <input
          onChange={(e)=>setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Confirm New Password"
            className="block placeholder:text-gray-500 focus:outline-none font-medium focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
          />
        </div>
        <button
          type="submit"
          className="rounded-lg w-full bg-lightOrange text-white mt-5  py-2  font-semibold  duration-300 hover:bg-lightOrangeHover md:active:scale-95"
        >
          Update Password
        </button>
      </form>
    </div>
  );
};
export default EditPassword;
