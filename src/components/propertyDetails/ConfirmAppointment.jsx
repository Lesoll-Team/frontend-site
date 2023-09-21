import React, { memo, useEffect, useState } from "react";
import {
  User,
  Button,
} from "@nextui-org/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";
import { ar } from "../../language/ar/common";
import { en } from "../../language/en/common";
import { useRouter } from "next/router";
function ConfirmAppointment({ userAppointment }) {
  const router = useRouter();

  const message = `
   مساء الخير مهتم أعرف تفاصيل أكتر عن عقارك اللى تم نشره على موقع ليسول
   ${process.env.NEXT_PUBLIC_API_LOCAL_DOMAIN+router.asPath} `;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${
    userAppointment?.connectPhoneNumber
  }&text=${encodeURIComponent(message)}`;

  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className=" m-2 p-3 bg-gray-100 rounded-3xl">
      <center>
        <h2 className="text-lg text-lightGreen pb-3">
          <b className="sm:text-3xl text-lg">
            {language ? "تواصل معي" : "contact with me"}
          </b>
        </h2>
      </center>
      {/*user info module*/}
      <div className="">
        {/*user info*/}
        <div className="grid  grid-cols-1">
          <div className=" flex items-center justify-center mt-1">{/**flex items-center text-center bg-blue-500 overflow-hidden */}
            <User
              // className=" "
              avatarProps={{
                size: "lg",
                src: userAppointment?.user.avatarUrl,
              }}
            />
            <div className="flex flex-col">
            <p className="font-bold">{userAppointment?.user.fullname}</p>
            <p className="text-default-700">{userAppointment?.user.email}</p>
            </div>
          </div>
          <center className=" ">
            <div className="mt-5">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  radius="sm"
                  type="submit"
                  className="mx-2 bg-lightGreen text-white">
                  <b>
                    {language ? ar.property.sendWtsApp : en.property.sendWtsApp}
                  </b>
                </Button>
              </a>

              <a href={`tel:${userAppointment?.connectPhoneNumber}`}>
                <Button
                  radius="sm"
                  variant="bordered"
                  className="border-2 border-lightGreen text-lightGreen"
                >
                  <b>
                    {language ? ar.property.sendCall : en.property.sendCall}
                  </b>
                </Button>
              </a>
            </div>
          </center>
        </div>
      </div>
    </div>
  );
}
export default memo(ConfirmAppointment);