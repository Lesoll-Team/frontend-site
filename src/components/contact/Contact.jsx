import { sendUserMassage } from "@/redux-store/features/contactSlice";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Contact() {
  const dispatch = useDispatch();
  const isSending = useSelector((state) => state.Contact.sending);
  const errorMassage = useSelector((state) => state.Contact.errorMassage);
  const confirmMassage = useSelector((state) => state.Contact.massage);
  // dispatch(sendUserMassage)
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [massage, setMassage] = useState("");
  const handleConfirmMassage = async (e) => {
    e.preventDefault();
    const userMassage = { fullName, email, phone, subject, massage };
    dispatch(sendUserMassage(userMassage));

    setFullName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMassage("");
  };
  return (
    <Fragment>
      <div className="md:container mt-14 mb-14 mx-auto md:flex ">
        <div className="md:w-7/12 ">
          <h2 className="text-6xl mb-5 text-lightGreen">
            <b>Contact</b>
          </h2>
          <h6 className="text-lightGreen mb-5 ml-4">
            <b> Contact information </b>
          </h6>
          <form
            onSubmit={handleConfirmMassage}
            className=" flex flex-col justify-end items-start  gap-2"
          >
            <center className="flex flex-col gap-3 w-full">
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className=" placeholder:text-gray-500 focus:outline-none  w-[48%] focus:border-lightGreen border-2 rounded-xl px-4 py-2"
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="placeholder:text-gray-500 focus:outline-none   w-[48%] focus:border-lightGreen border-2 rounded-xl px-4 py-2"
                />
              </div>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="placeholder:text-gray-500 focus:outline-none   w-[48%] focus:border-lightGreen  border-2 rounded-xl px-4 py-2"
                />
                <input
                  type="text"
                  placeholder="Subject "
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="placeholder:text-gray-500 focus:outline-none  
                                 focus:border-lightGreen  border-2 rounded-xl px-4 py-2 w-[48%]"
                />
              </div>
            </center>
            {/* <input type='' placeholder='Massage'/> */}
            <center className=" w-full">
              <textarea
                placeholder="Massage"
                value={massage}
                onChange={(e) => setMassage(e.target.value)}
                className="placeholder:text-gray-500  focus:outline-none max-h-56 h-36  focus:border-lightGreen w-[97%] ml-2 border-2 rounded-2xl px-4 py-2"
              ></textarea>
              <button
                type="submit"
                disabled={isSending}
                className="rounded-3xl w-10/12  bg-lightOrange text-white mt-5  py-2  font-semibold  duration-300 hover:bg-lightOrangeHover md:active:scale-95"
              >
                {isSending ? "submitting In..." : "Submit"}
              </button>
              {errorMassage && <div>{errorMassage}</div>}
              {confirmMassage && <div>{confirmMassage}</div>}
            </center>
          </form>
        </div>
        <div className="w-5/12  p-2 md:flex hidden">
          <Image
            src="icons/contactImg.svg"
            width="500"
            height="500"
            alt="contact image"
            loading="lazy"
          />
        </div>
      </div>
    </Fragment>
  );
}
