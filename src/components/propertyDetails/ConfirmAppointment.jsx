import React, { memo, useEffect, useState } from "react";
import {
  User,
  // Checkbox,
  Link,
  Button,
  // Input,
  // Textarea,
  Chip,
} from "@nextui-org/react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";
import { ar } from "../../language/ar/common";
import { en } from "../../language/en/common";
// import useFormatTime from "@/Hooks/useFormatTime";
import useFormatDate from "@/Hooks/useFormatDate";
import { useRouter } from "next/router";
function ConfirmAppointment({ userAppointment }) {
  const router = useRouter();
  console.log(router);
  const message = `مساء الخير مهتم أعرف تفاصيل أكتر عن عقارك اللى تم نشره على موقع ليسول `;
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${
    userAppointment?.connectPhoneNumber
  }&text=${encodeURIComponent(message)}`;
  console.log("ConfirmAppointment", userAppointment);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [formattedDateFrom, setformattedDateFrom] = useState(null);
  const [formattedDateTo, setformattedDateTo] = useState(null);

  useEffect(() => {
    const originalDateFrom = userAppointment?.appointments.from;
    const dateFrom = new Date(originalDateFrom);
    setformattedDateFrom(
      dateFrom.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    );

    const originalDateTo = userAppointment?.appointments.to || null;
    const dateTo = new Date(originalDateTo);
    setformattedDateTo(
      dateTo.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      })
    );
  }, []);

  const formattedStartDate = useFormatDate(
    userAppointment?.appointments.startDate
  );
  const formattedEndDate = useFormatDate(userAppointment?.appointments.endDate);

  return (
    <div className=" py-5 mb-10 border-2 border-gray-200 rounded-3xl">
      <center>
        <h2 className="text-lg text-lightGreen pb-3">
          <b className="sm:text-3xl text-lg">
            {language ? ar.property.cnfAppointment : en.property.cnfAppointment}
          </b>
        </h2>
      </center>
      {/*user info module*/}
      <div className="">
        {/*user info*/}
        <div className="grid sm:grid-cols-2  grid-cols-1">
        <div className="flex-col flex justify-items-center text-center  overflow-hidden">
          <User
            className="sm:mb-0 mb-5 "
            avatarProps={{
              size: "lg",
              src: userAppointment?.user.avatarUrl,
            }}
          />
          <p className="font-bold">{userAppointment?.user.fullname}</p>
          </div>
          <div className="grid grid-cols-1    sm:col-span-1 col-span-2   items-center justify-items-center">
            {/**userAppointment.appointments.allDays */}
            <div className=" w-full col-span-1  grid grid-cols-1  justify-items-center">
              <div className="flex bg-default-200 mb-1 w-[150px] rounded-2xl p-1 justify-around items-center font-semibold text-[14px]">
                <span>From:</span>{" "}
                <Chip className="bg-white" color="success" variant="dot">
                  {formattedDateFrom}
                </Chip>
              </div>
              <div className="flex bg-default-200 mb-1 rounded-2xl w-[150px] p-1 justify-around items-center font-semibold text-[14px]">
                <span>To:</span>{" "}
                <Chip className="bg-white" color="warning" variant="dot">
                  {formattedDateTo}
                </Chip>
              </div>
            </div>
          </div>
          {userAppointment.appointments.allDays ? (
            <div className="flex justify-center col-span-2">
              <Chip color="success" className="col-span-2 " variant="dot">
                Available all days
              </Chip>
            </div>
          ) : (
            <div className="grid grid-cols-2  col-span-2 justify-items-center ">
              <div className="flex bg-default-200   m-2 w-[150px] rounded-2xl p-1 justify-around items-center font-semibold text-[14px]">
                <span>From:</span>{" "}
                <Chip className="bg-white" variant="light">
                  {formattedStartDate}
                </Chip>
              </div>
              <div className="flex bg-default-200  m-2 w-[150px] rounded-2xl p-1 justify-around items-center font-semibold text-[14px]">
                <span>To:</span>{" "}
                <Chip className="bg-white" variant="light">
                  {formattedEndDate}
                </Chip>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className=""></div>

      <div className="">
        <div>
          {/* <form className=""> */}
          {/*Check box */}

          <center className=" ">
            <div className="my-2 ">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <Button
                  radius="sm"
                  type="submit"
                  className="mr-2 bg-lightGreen text-white"
                >
                  <b>
                    {/* send Message */}
                    {/* {language?ar.property.sendMs:en.property.sendMs} */}
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

                    {/* Call */}
                  </b>
                </Button>
              </a>
            </div>
            {/* <Button radius="sm" className="w-6/12 bg-green-400 text-white">
                <b>
                
          {language?ar.property.sendWtsApp:en.property.sendWtsApp}
                
                </b>
              </Button> */}
          </center>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}
export default memo(ConfirmAppointment);

// <center className="my-2 ">
// <div className=" w-9/12 my-2">
//   <Input
//     className=" rounded-md"
//     type="text"
//     size="sm"
//     label={language?ar.input.EName:en.input.EName}
//   />

//   {/* <input   type="text" placeholder="Name" /> */}
// </div>
// <div className=" w-9/12 my-2 ">
//   <Input
//     type="number"
//     size="sm"
//     className=" rounded-md"
//     label={language?ar.input.EPhone:en.input.EPhone}
//   />
//   {/* <input className="" type="number" placeholder="Phone" /> */}
// </div>
// <div className=" w-9/12 my-2">
//   {/* <input  type="email" placeholder="Email" /> */}
//   <Input className="" type="email" size="sm"
//   label={language?ar.input.EEmail:en.input.EEmail}
//    />
// </div>
// <div className=" w-9/12">
//   {/* <textarea placeholder="Massage" /> */}
//   <Textarea
//     // label="Massage"
//     className="  border-lightGreenHover"
//     labelPlacement="outside"
//     // radius="none"
//     variant="bordered"
//     placeholder={language?ar.input.placMessage:en.input.placMessage}

//     // className="max-w-xs"
//   />
// </div>
// </center>

// <div className=" w-9/12 flex justify-center">
// <Checkbox
//   className="text-start text-xs w-8/12 "
//   defaultChecked
//   size="sm"
// >
//   <span className="text-darkGray">
// {language?ar.property.submitting:en.property.submitting}

//     {/* submitting form I agree to */}
//   </span>
//   <Link
//     className="block"
//     href="/termsofservice"
//     size="sm"
//     isExternal
//   >
// {language?ar.property.submittingTerms:en.property.submittingTerms}

//     {/* Terms of Use */}
//   </Link>
// </Checkbox>
// </div>

// <Splide
//   id="thumbnails"
//   options={{
//     fixedWidth: 70,
//     gap: 10,
//     rewind: true,
//     pagination: false,
//   }}
//   aria-label="Thumbnails Carousel"
// >
//   <SplideSlide>
//     <button className=" bg-gray-300 w-16 h-20  rounded-lg">
//       <span className="flex justify-center">Aug</span>
//       <span className=" flex justify-center">3</span>
//     </button>
//   </SplideSlide>

//   <SplideSlide>
//     <button className=" bg-gray-300 w-16 h-20  rounded-lg">
//       <span className="flex justify-center">Aug</span>
//       <span className=" flex justify-center">3</span>
//     </button>
//   </SplideSlide>

//   <SplideSlide>
//     <button className=" bg-gray-300 w-16 h-20  rounded-lg">
//       <span className="flex justify-center">Aug</span>
//       <span className=" flex justify-center">3</span>
//     </button>
//   </SplideSlide>

//   <SplideSlide>
//     <button className=" bg-gray-300 w-16 h-20  rounded-lg">
//       <span className="flex justify-center">Aug</span>
//       <span className=" flex justify-center">3</span>
//     </button>
//   </SplideSlide>
// </Splide>

/**
         * 
         *  <div className="grid sm:grid-cols-2  grid-cols-1">
          <User
          className=""
            name=<b>Ahmed Gamal</b>
            description=<Link
              href="http://localhost:3000/profile"
              size="sm"
              isExternal
            >
              @A-Gamal123
            </Link>
            avatarProps={{
              size: "lg",
              src: "https://avatars.githubusercontent.com/u/124493176?v=4",
            }}
          />


         
        </div>
      </div>
         */
