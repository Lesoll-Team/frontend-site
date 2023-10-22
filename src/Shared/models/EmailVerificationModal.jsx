import { sendCodeVerifyEmail } from "@/utils/userAPI";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const EmailVerificationModal = ({ onClose }) => {
  const router=useRouter()
  // Your modal content here
  const [sixNumber, setSixNumber] = useState("");
  const [codeError, setCodeError] = useState("");


  const handleSendCode=async()=>
  {
    const codeNumber={codenumber:sixNumber}
   const resSendCode =await sendCodeVerifyEmail(codeNumber);
   if (resSendCode.code===200) {
    setSixNumber(null)
    router.push("/profile/settings")
   }else{
    setCodeError(resSendCode.message)
   }
   

  }
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Modal background */}
      <div className="fixed inset-0 bg-black opacity-70"></div>

      {/* Modal content */}
      <div className="bg-white p-8 rounded-lg z-10">
        <p className="text-lightOrange font-semibold">Enter the verification code we sent over to your email</p>

        <div>
          <Input
          className="mt-5"
            type="text"
            color="primary"
            placeholder="### ###"
            name="email-veri"
            value={sixNumber}
            onChange={(e) => setSixNumber(e.target.value)}
          />
        </div>
<p className="text-red-500">{codeError}</p>
<div className="flex items-center justify-around">
        <Button className="bg-lightOrange text-white font-semibold mt-5" onClick={onClose}>Close</Button>
        <Button className="bg-lightGreen text-white font-semibold mt-5" onClick={handleSendCode}>Send</Button>
        </div>
      </div>
    </div>
  );
};

export default EmailVerificationModal;
