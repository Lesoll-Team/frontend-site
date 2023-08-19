import React,{memo} from "react";
import { User, Checkbox, Link ,Button,Input,Textarea} from "@nextui-org/react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
 function ConfirmAppointment() {
  return (

      <div className=" py-10 border-2 border-gray-200 rounded-3xl">
      <center>
        <h2 className="text-lg pb-7"><b>Confirm Appointment</b></h2>
        </center>

        {/*user info module*/}
        <div className=" pb-5">
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


        <div className="">{/**w-8/12 bg-red-200 overflow-hidden   */}

         {/*
        <div class="">
  <button className="w-20 h-20 m-1 text-4xl bg-gray-200 rounded-xl justify-center  ">01</button>
  <button className="w-20 h-20 m-1 text-4xl bg-gray-200 rounded-xl justify-center  ">02</button>
  <button className="w-20 h-20 m-1 text-4xl bg-gray-200 rounded-xl justify-center  ">03</button>
  <button className="w-20 h-20 m-1 text-4xl bg-gray-200 rounded-xl justify-center  ">04</button>
  <button className="w-20 h-20 m-1 text-4xl bg-gray-200 rounded-xl justify-center  ">05</button>
  <button className="w-20 h-20 m-1 text-4xl bg-gray-200 rounded-xl justify-center  ">06</button>
  <button className="w-20 h-20 m-1 text-4xl bg-gray-200 rounded-xl justify-center  ">07</button>

</div> 

       <div className="grid  grid-rows-4 overflow-auto date_slider">
        <button className="w-20 h-20 mx-1 flex text-4xl bg-gray-200 rounded-xl justify-center items-center ">1</button>
        <button className="w-20 h-20 mx-1 flex text-4xl bg-gray-200 rounded-xl justify-center items-center ">2</button>
        <button className="w-20 h-20 mx-1 flex text-4xl bg-gray-200 rounded-xl justify-center items-center ">3</button>
        <button className="w-20 h-20 mx-1 flex text-4xl bg-gray-200 rounded-xl justify-center items-center ">4</button>
        <button className="w-20 h-20 mx-1 flex text-4xl bg-gray-200 rounded-xl justify-center items-center ">5</button>
        <button className="w-20 h-20 mx-1 flex text-4xl bg-gray-200 rounded-xl justify-center items-center ">6</button>
      </div> */}
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
            <Button radius="sm" type="submit" className="mr-2 bg-lightGreenHover text-white">
        <b>send Message</b>
      </Button> 
      <Button radius="sm" variant="bordered"  className="border-2 border-lightGreenHover text-lightGreenHover">
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
