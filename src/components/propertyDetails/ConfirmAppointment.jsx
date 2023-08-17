import React,{memo} from "react";
import { User, Checkbox, Link ,Button,Input,Textarea} from "@nextui-org/react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
 function ConfirmAppointment() {
  return (

      <div className=" py-5 mb-10 border-2 border-gray-200 rounded-3xl">
      <center>
        <h2 className="text-lg text-lightGreen pb-3"><b>Confirm Appointment</b></h2>
        </center>

        {/*user info module*/}
        <div className="">
        {/*user info*/}
          <center>
            <User            
              name=<b>Ahmed Gamal</b>
              description=<Link href="http://localhost:3000/profile" size="sm" isExternal>
                  @A-Gamal123
                </Link>
              
               avatarProps=
              {
                {
                  size:"lg",
                src: "https://avatars.githubusercontent.com/u/124493176?v=4",
              }}
            />
          </center>
        </div>


        <div className="">
        <Splide className="" options={ {
    rewind: true,
    // width : "100%",
    // perPage: 3,
    fixedWidth  : 105,
    // arrows:false ,
    gap   : '1rem',
    // perMove:0,
  } } aria-label="My Favorite Images">
  <SplideSlide>
  <button className=" bg-gray-300 w-16 h-20  rounded-lg">
  <span className="flex justify-center">Aug</span>
          {/* <RiHotelBedFill className=" m-auto" /> */}
          <span className=" flex justify-center">3</span>
        </button>
  </SplideSlide>
  <SplideSlide>
  <button className=" bg-gray-300 w-16 h-20 rounded-lg">
          <span className="flex justify-center">Aug</span>

          {/* <MdOutlineBathtub className=" m-auto" /> */}
          <span className=" flex justify-center">4</span>
        </button>
  </SplideSlide>
  <SplideSlide>    <button className=" bg-gray-300 w-16 h-20 rounded-lg">
  <span className="flex justify-center">Aug</span>

          {/* <GiHomeGarage className=" m-auto" /> */}
          <span className=" flex justify-center">5</span>
        </button></SplideSlide>
  <SplideSlide>     <button className=" bg-gray-300 w-16 h-20 rounded-lg">
  <span className="flex justify-center">Aug</span>

          {/* <RiPencilRuler2Line className=" m-auto" /> */}
          <span className=" flex justify-center">6</span>
        </button></SplideSlide>
  <SplideSlide>        <button className=" bg-gray-300 w-16 h-20 rounded-lg">
  <span className="flex justify-center">Aug</span>
          {/* <BsCalendar3 className=" m-auto" /> */}
          <span className=" flex justify-center"> 7</span>
        </button></SplideSlide>

</Splide>
      </div>

        <div className="">
        <div>
          <form    className="">
          <center className="my-2 ">
          <div className=" w-9/12 my-2">
          <Input className=" rounded-md" type="text" size="sm"  label="Name" />

            {/* <input   type="text" placeholder="Name" /> */}
            </div>
          <div className=" w-9/12 my-2 ">
          <Input type="number" size="sm" className=" rounded-md"  label="Phone" />
            {/* <input className="" type="number" placeholder="Phone" /> */}
            </div>
            <div className=" w-9/12 my-2">

            {/* <input  type="email" placeholder="Email" /> */}
            <Input className="" type="email" size="sm"  label="Email" />
            </div>
            <div className=" w-9/12">

            {/* <textarea placeholder="Massage" /> */}
            <Textarea
      // label="Massage"
      className="  border-lightGreenHover"
      labelPlacement="outside"
      // radius="none"
      variant="bordered"
      placeholder="Enter your Massage"
      

      // className="max-w-xs"
    />
            </div>

            </center>
            {/*Check box */}

<div className=" w-9/12 flex justify-center" >
<Checkbox className="text-start text-xs w-8/12 " defaultChecked size="sm">
              <span className="text-darkGray">submitting form I agree to</span>
              <Link
                className="block"
                href="/termsofservice"
                size="sm"
                isExternal
              >
                Terms of Use
              </Link>
            </Checkbox>
</div>

            <center className=" ">
            <div className="my-2 ">
            <Button radius="sm" type="submit" className="mr-2 bg-lightGreen text-white">
        <b>send Message</b>
      </Button> 
      <Button radius="sm" variant="bordered"  className="border-2 border-lightGreen text-lightGreen">
        <b>Call</b>
      </Button> 
      </div>
      <Button radius="sm" className="w-6/12 bg-green-400 text-white">
        <b>WhatsApp</b>
      </Button> 
      </center>
          </form>
          </div>
        </div>
      </div>

  );
}
export default memo(ConfirmAppointment)
