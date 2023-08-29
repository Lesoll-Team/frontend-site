import React, { memo } from "react";
import {
  User,
  Checkbox,
  Link,
  Button,
  Input,
  Textarea,
  Chip,
} from "@nextui-org/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useSelector } from "react-redux";
import {ar} from "../../language/ar/common"
import {en} from "../../language/en/common"
function ConfirmAppointment() {
  const language = useSelector((state)=>state.GlobalState.languageIs)

  return (
    <div className=" py-5 mb-10 border-2 border-gray-200 rounded-3xl">
      <center>
        <h2 className="text-lg text-lightGreen pb-3">
          <b>
          {language?ar.property.cnfAppointment:en.property.cnfAppointment}
          {/* Confirm Appointment */}
          </b>
        </h2>
      </center>

      {/*user info module*/}
      <div className="">
        {/*user info*/}
        <div className="grid sm:grid-cols-2  grid-cols-1">
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
                    <div className="grid sm:grid-cols-1 grid-cols-2  sm:col-span-1 col-span-2   items-center justify-items-center">
            {/* <Chip
              className="border-none "
              color="default"
              variant="light"
            >
              2023/8/30
            </Chip> */}
            <Chip color="success" className="col-span-2 " variant="dot">Available all days</Chip>
            {/* <Chip
              color="default"
              variant="light"
              className="border-none "
            >
              2023/9/5
            </Chip> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 col-span-2 items-center justify-items-center">
          <div className="">
            <Chip
              className=""
              // color="success"
              variant="light"
            >
             From: 01:00 PM
            </Chip>
            </div>
            <div className="">

            <Chip
              // color="warning"
              variant="light"
              className=""
            >
              To: 06:00 PM
            </Chip>
            </div>

          </div>
        </div>
      </div>

      <div className="">

      </div>

      <div className="">
        <div>
          <form className="">
            <center className="my-2 ">
              <div className=" w-9/12 my-2">
                <Input
                  className=" rounded-md"
                  type="text"
                  size="sm"
                  label={language?ar.input.EName:en.input.EName}
                />

                {/* <input   type="text" placeholder="Name" /> */}
              </div>
              <div className=" w-9/12 my-2 ">
                <Input
                  type="number"
                  size="sm"
                  className=" rounded-md"
                  label={language?ar.input.EPhone:en.input.EPhone}
                />
                {/* <input className="" type="number" placeholder="Phone" /> */}
              </div>
              <div className=" w-9/12 my-2">
                {/* <input  type="email" placeholder="Email" /> */}
                <Input className="" type="email" size="sm" 
                label={language?ar.input.EEmail:en.input.EEmail}
                 />
              </div>
              <div className=" w-9/12">
                {/* <textarea placeholder="Massage" /> */}
                <Textarea
                  // label="Massage"
                  className="  border-lightGreenHover"
                  labelPlacement="outside"
                  // radius="none"
                  variant="bordered"
                  placeholder={language?ar.input.placMessage:en.input.placMessage}

                  // className="max-w-xs"
                />
              </div>
            </center>
            {/*Check box */}

            <div className=" w-9/12 flex justify-center">
              <Checkbox
                className="text-start text-xs w-8/12 "
                defaultChecked
                size="sm"
              >
                <span className="text-darkGray">
          {language?ar.property.submitting:en.property.submitting}

                  {/* submitting form I agree to */}
                </span>
                <Link
                  className="block"
                  href="/termsofservice"
                  size="sm"
                  isExternal
                >
          {language?ar.property.submittingTerms:en.property.submittingTerms}

                  {/* Terms of Use */}
                </Link>
              </Checkbox>
            </div>

            <center className=" ">
              <div className="my-2 ">
                <Button
                  radius="sm"
                  type="submit"
                  className="mr-2 bg-lightGreen text-white"
                >
                  <b>
                  {/* send Message */}
          {language?ar.property.sendMs:en.property.sendMs}
                  
                  </b>
                </Button>
                <Button
                  radius="sm"
                  variant="bordered"
                  className="border-2 border-lightGreen text-lightGreen"
                >
                  <b>
          {language?ar.property.sendCall:en.property.sendCall}
                  
                  {/* Call */}
                  </b>
                </Button>
              </div>
              <Button radius="sm" className="w-6/12 bg-green-400 text-white">
                <b>
                {/* WhatsApp */}
          {language?ar.property.sendWtsApp:en.property.sendWtsApp}
                
                </b>
              </Button>
            </center>
          </form>
        </div>
      </div>
    </div>
  );
}
export default memo(ConfirmAppointment);
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