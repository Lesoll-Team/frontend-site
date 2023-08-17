import React, { memo, useState } from "react";
import { MdOutlineBathtub } from "react-icons/md";
import { RiHotelBedFill, RiPencilRuler2Line } from "react-icons/ri";
import { Button } from "@nextui-org/react";
import { MdCheckCircleOutline } from "react-icons/md";
import { BsCalendar3 } from "react-icons/bs";
import { BsSlashCircle } from "react-icons/bs";
import { GiHomeGarage } from "react-icons/gi";
// import { Splide, SplideSlide} from '@splidejs/react-splide';
import { Splide, SplideSlide } from "@splidejs/react-splide";

function OverviewDetails() {
  const [offerType, setOfferType] = useState("cash");
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
          <span className="md:text-md text-sm">April 4, 2020 at 5:18 pm</span>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <overview_container>
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
              <span className=" flex justify-center">1</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            <div className=" bg-gray-200 w-20 h-20 rounded-lg">
              <span className="flex justify-center">Bathroom</span>

              <MdOutlineBathtub className=" m-auto" />
              <span className=" flex justify-center">1</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            {" "}
            <div className=" bg-gray-200 w-20 h-20 rounded-lg">
              <span className="flex justify-center">Garage</span>

              <GiHomeGarage className=" m-auto" />
              <span className=" flex justify-center">1</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            {" "}
            <div className=" bg-gray-200 w-20 h-20 rounded-lg">
              <span className="flex justify-center">Sq Ft</span>

              <RiPencilRuler2Line className=" m-auto" />
              <span className=" flex justify-center">120</span>
            </div>
          </SplideSlide>
          <SplideSlide>
            {" "}
            <div className=" bg-gray-200 w-20 h-20 rounded-lg">
              <span className="flex justify-center">Year Built</span>
              <BsCalendar3 className=" m-auto" />
              <span className=" flex justify-center"> 2016</span>
            </div>
          </SplideSlide>
        </Splide>
        {/* <Splide hasTrack={ true }>
  <SplideTrack>
    <SplideSlide> <div className=" bg-gray-200 w-20 h-20 rounded-lg">
          <span className="flex justify-center">Year Built</span>
          <BsCalendar3 className=" m-auto" />
          <span className=" flex justify-center"> 2016</span>
        </div></SplideSlide>

  </SplideTrack>
</Splide> */}
      </overview_container>

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
            <table_payment className="md:flex  w-full  border-2 border-gray-200 rounded-xl min-h-[200px] items-center">
              <price_ className="md:border-r-large md:border-gray-200  flex justify-center items-center m-auto  md:min-h-[100px] min-h-auto  md:w-4/12 w-full">
                <div>
                  <div className="font-bold sm:text-3xl">Price</div>
                  <div className="flex">
                    <span className="font-bold sm:text-3xl">600</span>
                    <span className=" font-bold sm:text-3xl">EGP</span>
                  </div>
                </div>
              </price_>

              <continuer_table_details className=" min-h-[100px] flex md:w-7/12 w-full justify-center ">
                <table_details className="md:flex  w-11/12 justify-center ">
                  <colum_one className="w-6/12 m-auto ">
                    <div className=" flex sm:w-full w-9/12 m-auto py-3 ">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12 ">
                        {/*sm:w-7/12 w-5/12 */} Sale Option
                      </span>
                      <span className="sm:text-[10px] text-[8px] w-6/12 text-end">
                        Cash
                      </span>
                    </div>
                  </colum_one>

                  <colum_tow className="w-5/12 m-auto ">
                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12">
                        {/*sm:w-7/12 w-5/12 */}
                        Negotiable
                      </span>
                      <span className="w-6/12 flex justify-end">
                        <BsSlashCircle />
                      </span>
                    </div>
                  </colum_tow>
                </table_details>
              </continuer_table_details>
            </table_payment>
          ) : null}

          {offerType === "installment" ? (
            <table_payment className="md:flex  w-full  border-2 border-gray-200 rounded-xl min-h-[200px] items-center">
              <price_ className="md:border-r-large md:border-gray-200  flex justify-center items-center m-auto  md:min-h-[100px] min-h-auto  md:w-4/12 w-full">
                <div>
                  <div className="font-bold sm:text-3xl">Down Payment</div>
                  <div className="flex">
                    <span className="font-bold sm:text-3xl">250,000</span>
                    <span className=" font-bold sm:text-3xl">EGP</span>
                  </div>
                </div>
              </price_>

              <continuer_table_details className=" min-h-[100px] flex md:w-7/12 w-full justify-center ">
                <table_details className="md:flex  w-11/12 justify-center ">
                  <colum_one className="w-6/12 m-auto ">
                    <div className=" flex sm:w-full w-9/12 m-auto py-3 ">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12 ">
                        {/*sm:w-7/12 w-5/12 */} Sale Option
                      </span>
                      <span className="sm:text-[10px] text-[8px] w-6/12 text-end">
                        Installment,Cash
                      </span>
                    </div>

                    <div className=" flex sm:w-full  w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12  ">
                        {/*sm:w-7/12 w-5/12 */} installment Option
                      </span>
                      <span className="sm:text-[10px] text-[8px] w-6/12 text-end">
                        Yearly
                      </span>
                    </div>

                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12">
                        {/*sm:w-7/12 w-5/12 */}
                        installment Period
                      </span>
                      <span className="sm:text-[10px] text-[8px] w-6/12 items-center text-end">
                        10,000
                      </span>
                    </div>
                  </colum_one>

                  <colum_tow className="w-5/12  ">
                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12">
                        {/*sm:w-7/12 w-5/12 */}
                        installment Amount
                      </span>
                      <span className="w-6/12 text-end sm:text-[10px] text-[8px] ">
                        10,000 <span>EGP</span>
                      </span>
                    </div>

                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      {" "}
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12">
                        {/*sm:w-7/12 w-5/12 */}
                        Negotiable
                      </span>
                      <span className=" w-6/12 flex justify-end">
                        <BsSlashCircle />
                      </span>
                    </div>
                  </colum_tow>
                </table_details>
              </continuer_table_details>
            </table_payment>
          ) : null}
          {offerType === "period" ? (
            <table_payment className="md:flex  w-full  border-2 border-gray-200 rounded-xl min-h-[200px] items-center">
              <price_ className="md:border-r-large md:border-gray-200  flex justify-center items-center m-auto  md:min-h-[100px] min-h-auto  md:w-4/12 w-full">
                <div>
                  <div className="font-bold sm:text-3xl">Price</div>
                  <div className="flex">
                    <span className="font-bold sm:text-3xl">15,000</span>
                    <span className=" font-bold sm:text-3xl">/month</span>
                  </div>
                </div>
              </price_>

              <continuer_table_details className=" min-h-[100px] flex md:w-7/12 w-full justify-center ">
                <table_details className="md:flex  w-11/12 justify-center ">
                  <colum_one className="w-6/12 m-auto ">
                    <div className=" flex sm:w-full w-9/12 m-auto py-3 ">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12 ">
                        {/*sm:w-7/12 w-5/12 */} Insurance
                      </span>
                      <span className="sm:text-[10px] text-[8px] w-6/12 text-end">
                        {" "}
                        50,000 <span>EGP</span>
                      </span>
                    </div>

                    <div className=" flex sm:w-full  w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12  ">
                        {/*sm:w-7/12 w-5/12 */} Rental Period
                      </span>
                      <span className="sm:text-[10px] text-[8px] w-6/12 text-end">
                        Daily
                      </span>
                    </div>
                  </colum_one>

                  <colum_tow className="w-5/12 m-auto ">
                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12">
                        {/*sm:w-7/12 w-5/12 */}
                        Commission
                      </span>
                      <span className="w-6/12 text-end sm:text-[10px] text-[8px] ">
                        10<span>EGP</span>
                      </span>
                    </div>

                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      {" "}
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12">
                        {/*sm:w-7/12 w-5/12 */}
                        Negotiable
                      </span>
                      <span className=" w-6/12 flex justify-end">
                        <BsSlashCircle />
                      </span>
                    </div>
                  </colum_tow>
                </table_details>
              </continuer_table_details>
            </table_payment>
          ) : /*      
                      <li className="font-bold ">Insurance</li>
                      <li className="font-bold ">Rental Period</li>
                        50,000 <span>EGP</span>
                      <li className="">Daily</li>
 />*/

          null}
        </div>
      </div>
    </div>
  );
}
export default memo(OverviewDetails);

/**      <overview_container className=" w-full  bg-red-200">
      <div className=" lg:flex justify-between">

        <div className=" bg-gray-300 w-20 h-20  rounded-lg">
          <span className="flex justify-center">bedroom</span>
          <RiHotelBedFill className=" m-auto" />
          <span className=" flex justify-center">1</span>
        </div>

        <div className=" bg-gray-300 w-20 h-20 rounded-lg">
          <span className="flex justify-center">Bathroom</span>

          <MdOutlineBathtub className=" m-auto" />
          <span className=" flex justify-center">1</span>
        </div>

        <div className=" bg-gray-300 w-20 h-20 rounded-lg">
          <span className="flex justify-center">Garage</span>

          <GiHomeGarage className=" m-auto" />
          <span className=" flex justify-center">1</span>
        </div>

        <div className=" bg-gray-300 w-20 h-20 rounded-lg">
          <span className="flex justify-center">Sq Ft</span>

          <RiPencilRuler2Line className=" m-auto" />
          <span className=" flex justify-center">120</span>
        </div>

        <div className=" bg-gray-300 w-20 h-20 rounded-lg">
          <span className="flex justify-center">Year Built</span>
          <BsCalendar3 className=" m-auto" />
          <span className=" flex justify-center"> 2016</span>
        </div>
        </div>
      </overview_container> */
