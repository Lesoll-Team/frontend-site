import React, { memo, useState } from "react";
import { MdOutlineBathtub } from "react-icons/md";
import { RiHotelBedFill, RiPencilRuler2Line } from "react-icons/ri";
import { Button } from "@nextui-org/react";
import { MdCheckCircleOutline } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
// import { BsSlashCircle } from "react-icons/bs";
import { GiHomeGarage } from "react-icons/gi";

function OverviewDetails() {
  const [offerType, setOfferType] = useState("cash");
  return (
    <div className=" lg:p-10 lg:px-14 border-2 border-gray-200 rounded-3xl">
      <div className="lg:flex justify-between ">
        <div className="flex justify-center items-center">
          <b>Overview</b>
        </div>
        <div className="flex items-center justify-center">
          <span className="flex"> <BsCalendar3 className=" mr-2" /> Updated:</span>
          <span className="md:text-md text-sm">April 4, 2020 at 5:18 pm</span>
        </div>
      </div>
      <br />
      <hr />
      <br />

      <div className="lg:flex justify-between ">
        <ul>
          <li className=" mb-3">
            <b>Apartment</b>
          </li>
          <li>
            <b>PropertyType</b>
          </li>
        </ul>

        <ul>
          <li className=" flex items-center mb-3">
            <RiHotelBedFill className=" mr-2" /> <span>1</span>
          </li>
          <li>Bedrooms</li>
        </ul>

        <ul>
          <li className=" flex items-center mb-3">
            <MdOutlineBathtub className=" mr-2" />
            <span>1</span>
          </li>
          <li>Bathroom</li>
        </ul>

        <ul>
          <li className=" flex items-center mb-3">
            <GiHomeGarage className=" mr-2" />
            <span>1</span>
          </li>
          <li>Garage</li>
        </ul>

        <ul>
          <li className=" flex items-center mb-3">
            <RiPencilRuler2Line className=" mr-2" />
            <span>120</span>
          </li>
          <li>Sq Ft</li>
        </ul>

        <ul>
          <li className=" flex items-center mb-3">
            <BsCalendar3 className=" mr-2" /> <span> 2016</span>
          </li>
          <li>Year Built</li>
        </ul>
      </div>

      <br />
      <hr />
      <br />
      <div>
        <h1>payment</h1>
        <Button onClick={() => setOfferType("cash")}>cash</Button>
        <Button onClick={() => setOfferType("installment")}>installment</Button>
        <Button onClick={() => setOfferType("period")}>period</Button>
        <div>
          {offerType === "cash" ? (
            <div className="lg:flex  w-full  border-2 border-gray-400 rounded-xl min-h-[200px] items-center">
              <div className="lg:border-r-large lg:border-gray-400  flex justify-center items-center m-auto  min-h-[150px]  lg:w-4/12 w-11/12">
                <div>
                  <div className="font-bold text-lg">Price</div>
                  <div className="flex">
                    <span className="font-bold text-3xl">15,000</span>
                    <span className=" font-bold text-3xl">/month</span>
                  </div>
                </div>
              </div>

              <div className=" flex lg:w-7/12 w-full justify-center ">

                <div className="lg:flex h-full lg:w-full  ">
                  <div className=" flex lg:w-6/12  lg:justify-around ">
                    <ul className=" ">
                      <li className="font-bold ">Sale Option</li>
                    </ul>
                    <ul className=" ">
                      <li className="">Cash</li>
                    </ul>
                  </div>

                  <div className=" flex lg:w-6/12  lg:justify-around ">
                    <ul>                      
                      <li className=" font-bold">Negotiable</li>
                    </ul>
                    <ul>
                      <li className="">
                        <MdCheckCircleOutline />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          ) : null}

          {offerType === "installment" ? (
            <div className="lg:flex  w-full  border-2 border-gray-400 rounded-xl min-h-[200px] items-center">
              <div className="lg:border-r-large lg:border-gray-400  flex justify-center items-center m-auto  min-h-[150px]  lg:w-4/12 w-11/12">
                <div>
                  <div className="font-bold text-lg">Down Payment</div>
                  <div>
                    {" "}
                    <span className="font-bold text-5xl">250,000</span>
                    <span className=" font-bold">EGP</span>
                  </div>
                </div>
              </div>

              <div className=" flex lg:w-7/12 w-full justify-center ">

                <div className="lg:flex h-full lg:w-full  ">
                  <div className=" flex lg:w-6/12  lg:justify-around ">
                    <ul className=" ">
                      <li className="font-bold ">Seal Option:</li>
                      <li className="font-bold ">installment Option:</li>
                      <li className="font-bold ">installment Period:</li>
                    </ul>
                    <ul className=" ">
                      <li className="">installment , Cash</li>
                      <li className="">Yearly</li>
                      <li className="">10,00</li>
                    </ul>
                  </div>

                  <div className=" flex lg:w-6/12  lg:justify-around ">
                    <ul>
                      <li className=" font-bold">installment Amount:</li>
                      
                      <li className=" font-bold">Negotiable:</li>
                    </ul>
                    <ul>
                      <li className="">
                        10,000 <span>EGP</span>
                      </li>
                      <li className="">
                        <MdCheckCircleOutline />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {offerType === "period" ? (
            <div className="lg:flex  w-full  border-2 border-gray-400 rounded-xl min-h-[200px] items-center">
              <div className="lg:border-r-large lg:border-gray-400  flex justify-center items-center m-auto  min-h-[150px]  lg:w-4/12 w-11/12">
                <div>
                  <div className="font-bold text-lg">Price</div>
                  <div>
                    <span className="font-bold text-5xl">15,000</span>
                    <span className=" font-bold">/month</span>
                  </div>
                </div>
              </div>

              <div className=" flex lg:w-7/12 w-full justify-center ">

                <div className="lg:flex h-full lg:w-full  ">
                  <div className=" flex lg:w-6/12  lg:justify-around ">
                    <ul className=" ">
                      <li className="font-bold ">Insurance</li>
                      <li className="font-bold ">Rental Period</li>
                    </ul>
                    <ul className=" ">
                      <li className="">50,000 <span>EGP</span></li>
                      <li className="">Daily</li>
                    </ul>
                  </div>

                  <div className=" flex lg:w-6/12  lg:justify-around ">
                    <ul>
                      <li className=" font-bold">Commission</li>
                      
                      <li className=" font-bold">Negotiable:</li>
                    </ul>
                    <ul>
                      <li className="">
                        10<span>EGP</span>
                      </li>
                      <li className="">
                        <MdCheckCircleOutline />
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default memo(OverviewDetails);
