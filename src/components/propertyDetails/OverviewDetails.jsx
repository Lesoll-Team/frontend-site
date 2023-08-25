import React, { memo } from "react";
import { MdOutlineBathtub } from "react-icons/md";
import { RiHotelBedFill, RiPencilRuler2Line } from "react-icons/ri";
import { MdCheckCircleOutline } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { BsCalendar3 } from "react-icons/bs";
import { BsSlashCircle } from "react-icons/bs";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function OverviewDetails({singleOverviewDetails}) {

  return (
    <div className=" lg:p-10 lg:px-14 border-2 border-gray-200 rounded-3xl">
      <div className="lg:flex justify-between ">
        <div className="flex justify-center items-center">
          <b>Overview</b>
        </div>
        <div className="flex items-center justify-center">
          <span className="flex">
            {" "}
            <BsCalendar3 className=" mr-2" /> Updated:
          </span>
          <span className="md:text-md text-sm">{singleOverviewDetails.createdAt}</span>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <overview-container>
        <Splide
          options={{
            rewind: true,
            // pagination  : false,
            fixedWidth  : 230,
            // perPage: 2,
            // arrows:false ,
            // gap: "1rem",
            // perMove: 0,
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <div className=" bg-gray-200 w-20 h-20  rounded-lg">
              <span className="flex justify-center">bedroom</span>
              <RiHotelBedFill className=" m-auto" />
              <span className=" flex justify-center">{singleOverviewDetails.rooms}</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className=" bg-gray-200 w-20 h-20 rounded-lg">
              <span className="flex justify-center">Bathroom</span>

              <MdOutlineBathtub className=" m-auto" />
              <span className=" flex justify-center">{singleOverviewDetails.bathRooms}</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            {" "}
            <div className=" bg-gray-200 w-20 h-20 rounded-lg">
              <span className="flex justify-center">level</span>

              <SiLevelsdotfyi className=" m-auto" />
              <span className=" flex justify-center">{singleOverviewDetails.level}</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            {" "}
            <div className=" bg-gray-200 w-20 h-20 rounded-lg">
              <span className="flex justify-center">Sq Ft</span>

              <RiPencilRuler2Line className=" m-auto" />
              <span className=" flex justify-center">{singleOverviewDetails.area}</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            {" "}
            <div className=" bg-gray-200 w-20 h-20 rounded-lg">
              <span className="flex justify-center">Year Built</span>
              <BsCalendar3 className=" m-auto" />
              <span className=" flex justify-center overflow-hidden text-center"> {singleOverviewDetails.buildingYear}</span>
            </div>
          </SplideSlide>
        </Splide>
      </overview-container>

      <br />
      <hr />
      <br />
      <div >
        <b>Payment</b>
        
        <div className="mt-5">
       {/*singleOverviewDetails.saleOption[0]*/}
          { singleOverviewDetails.saleOption[0]=== "Cash" ? (
            <table-payment className="md:flex  w-full  border-2 border-gray-200 rounded-xl min-h-[200px] items-center">
              <price- className="md:border-r-large md:border-gray-200  flex justify-center items-center m-auto  md:min-h-[100px] min-h-auto  md:w-4/12 w-full">
                <div>
                  <div className="font-bold sm:text-3xl">Price</div>
                  <div className="flex">
                    <span className="font-bold sm:text-3xl">{singleOverviewDetails.price}</span>
                    <span className=" font-bold sm:text-3xl">EGP</span>
                  </div>
                </div>
              </price->

              <continuer-table-details className=" min-h-[100px] flex md:w-7/12 w-full justify-center ">
                <table-details className="md:flex  w-11/12 justify-center ">
                  <colum-one className="w-6/12 m-auto ">
                    <div className=" flex sm:w-full w-9/12 m-auto py-3 ">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12 ">
                        {/*sm:w-7/12 w-5/12 */} Sale Option
                      </span>
                      <span className="sm:text-[10px] text-[8px] w-6/12 text-end">
                        Cash
                      </span>
                    </div>
                  </colum-one>

                  <colum-tow className="w-5/12 m-auto ">
                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12">
                        {/*sm:w-7/12 w-5/12 */}
                        Negotiable
                      </span>
                      <span className="w-6/12 flex justify-end">
                      {singleOverviewDetails.negotiable? <MdCheckCircleOutline />:<BsSlashCircle />}
                        {/* <BsSlashCircle /> */}
                      </span>
                    </div>
                  </colum-tow>
                </table-details>
              </continuer-table-details>
            </table-payment>
          ) : null}
          {singleOverviewDetails.saleOption[0] === "Installment" ? (
            <table-payment className="md:flex  w-full  border-2 border-gray-200 rounded-xl min-h-[200px] items-center">
              <price- className="md:border-r-large md:border-gray-200  flex justify-center items-center m-auto  md:min-h-[100px] min-h-auto  md:w-4/12 w-full">
                <div>
                  <div className="font-bold sm:text-3xl">Down Payment</div>
                  <div className="flex">
                    <span className="font-bold sm:text-3xl">{singleOverviewDetails.downPayment}</span>
                    <span className=" font-bold sm:text-3xl">EGP</span>
                  </div>
                </div>
              </price->

              <continuer-table-details className=" min-h-[100px] flex md:w-7/12 w-full justify-center ">
                <table-details className="md:flex  w-11/12 justify-center ">
                  <colum-one className="w-6/12 m-auto ">
                    <div className=" flex sm:w-full w-9/12 m-auto py-3 ">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12 ">
 Sale Option
                      </span>
                      <span className="sm:text-[10px] text-[8px] w-6/12 text-end">
                        Installment,Cash
                      </span>
                    </div>

                    <div className=" flex sm:w-full  w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12  ">
 installment Option
                      </span>
                      <span className="sm:text-[10px] text-[8px] w-6/12 text-end">
                      {singleOverviewDetails?.installmentOption.type}

                      </span>
                    </div>

                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12">
                        {/*sm:w-7/12 w-5/12 */}
                        installment Period
                      </span>
                      <span className="sm:text-[10px] text-[8px] w-6/12 items-center text-end">
                      {singleOverviewDetails?.installmentOption.period}
                        
                      </span>
                    </div>
                  </colum-one>

                  <colum-tow className="w-5/12  ">
                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12">
                        {/*sm:w-7/12 w-5/12 */}
                        installment Amount
                      </span>
                      <span className="w-6/12 text-end sm:text-[10px] text-[8px] ">
                        {singleOverviewDetails?.installmentOption.amount} <span>EGP</span>
                      </span>
                    </div>

                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12">
                        Negotiable
                      </span>
                      <span className=" w-6/12 flex justify-end">
                      {singleOverviewDetails.negotiable? <MdCheckCircleOutline />:<BsSlashCircle />}
                      </span>
                    </div>
                  </colum-tow>
                </table-details>
              </continuer-table-details>
            </table-payment>
          ) : null}

        </div>
      </div>
    </div>
  );
}
export default memo(OverviewDetails);
