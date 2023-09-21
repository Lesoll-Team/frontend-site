import React, { memo } from "react";
import { MdOutlineBathtub } from "react-icons/md";
import { RiHotelBedFill, RiPencilRuler2Line } from "react-icons/ri";
import { MdCheckCircleOutline } from "react-icons/md";
import { SiLevelsdotfyi } from "react-icons/si";
import { BsCalendar3 } from "react-icons/bs";
import { BsSlashCircle } from "react-icons/bs";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { ar } from "../../language/ar/common";
import { en } from "../../language/en/common";
import { useSelector } from "react-redux";
import { FaLevelUpAlt } from "react-icons/fa";
function formatDate(dateString) {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return new Date(dateString).toLocaleString("en-US", options);
}
function OverviewDetails({ singleOverviewDetails }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
console.log(singleOverviewDetails);
  const formattedDate = formatDate(singleOverviewDetails?.createdAt);
  return (
    <div className="  p-5 lg:p-10  bg-gray-100 rounded-3xl">
      <div className="lg:flex justify-between ">
        <div className="flex justify-center items-center">
          <b className="sm:text-3xl text-lg">
            {language ? ar.property.overview : en.property.overview}
          </b>
        </div>
        <div className="flex items-center justify-center">
          <span className="flex">
            <BsCalendar3 className=" mx-2" />
          </span>
          <span className="sm:text-[19px] font-semibold text-[14px]">
            {formattedDate}
            <div></div>
          </span>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div>

        <div className=" flex flex-wrap items-center justify-center  gap-10 ">
          <div className="shadow-md bg-white w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
            <p className="items-center  text-center text-[15px] font-bold">
              {language ? ar.property.room : en.property.room}
            </p>
            <RiHotelBedFill className=" m-auto w-full my-1" />
            <p className=" items-center  text-center text-[15px] font-bold">
              {singleOverviewDetails?.rooms}
            </p>
          </div>
          
          <div className="shadow-md bg-white w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
            <p className="items-center  text-center text-[15px] font-bold">
              {" "}
              {language ? ar.property.bathroom : en.property.bathroom}
            </p>

            <MdOutlineBathtub className=" m-auto w-full my-1" />
            <p className=" items-center  text-center text-[15px] font-bold">
              {singleOverviewDetails?.bathRooms}
            </p>
          </div>
          <div className="shadow-md bg-white w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
            <p className="items-center  text-center text-[15px] font-bold">
              {language ? ar.property.SqFt : en.property.SqFt}
            </p>

            <RiPencilRuler2Line className=" m-auto w-full my-1" />
            <p className=" items-center  text-center text-[15px] font-bold">
              {singleOverviewDetails?.area}
            </p>
          </div>



          <div className={`${singleOverviewDetails?.level?"":"hidden"} shadow-md bg-white w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg`}>
            <p className="items-center  text-center text-[15px] font-bold">
              {language ? ar.property.level : en.property.level}
            </p>

            <FaLevelUpAlt className=" m-auto w-full my-1" />
            <p className=" items-center  text-center text-[15px] font-bold">
              {singleOverviewDetails?.level}
            </p>
          </div>

          <div className="shadow-md bg-white w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
            <p className="items-center  text-center text-[15px] font-bold">
              {language ? ar.property.furnished : en.property.furnished}
            </p>

            {/* <SiLevelsdotfyi className=" m-auto w-full my-1" /> */}
            <p className=" flex h-[50px] items-center justify-center text-center text-[15px] font-bold">
              {singleOverviewDetails?.isFurnished ? (
                <MdCheckCircleOutline />
              ) : (
                <BsSlashCircle />

              )}
            </p>
          </div>

          <div className="shadow-md bg-white w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
            <p className="items-center  text-center text-[15px] font-bold">
              {language ? ar.property.region : en.property.region}
            </p>

            {/* <SiLevelsdotfyi className=" m-auto w-full my-1" /> */}
            <p className=" flex h-[50px] items-center justify-center text-center text-[15px] font-bold">
              {singleOverviewDetails?.address.region}
            </p>
          </div>

          <div className={`${singleOverviewDetails?.unitType?"":"hidden"} shadow-md bg-white w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg`}>
            <p className="items-center  text-center text-[15px] font-bold">
              {language ? ar.property.uintType : en.property.uintType}
            </p>

            {/* <SiLevelsdotfyi className=" m-auto w-full my-1" /> */}
            <p className=" flex h-[50px] items-center justify-center text-center text-[15px] font-bold">
              {language?singleOverviewDetails?.unitType?.title.ar||"لم يحدد":singleOverviewDetails?.unitType?.title.en||"not selected"}
            </p>
          </div>



        </div>
      </div>

      <br />
      <hr />
      <br />
      <div className="">
        <div className="flex md:justify-normal justify-center items-center ">
          <p className="sm:text-3xl text-lg font-bold">
            {language ? ar.property.payment : en.property.payment}
          </p>
        </div>
        <div className="mt-5">
          {singleOverviewDetails?.saleOption[0] === "Cash" ||
          singleOverviewDetails?.saleOption[0] === "" ? (



            <div className="md:flex  w-full  bg-white shadow-md rounded-xl md:min-h-[200px] min-h-[auto] items-center">
              <div className="   flex justify-center items-center m-auto 
                              md:min-h-[100px] min-h-auto  md:w-4/12 w-full">
                <div className="md:block gap-3 flex items-center justify-center">
                  <div className="font-bold  sm:text-3xl text-lg">
                    {language ? ar.property.price : en.property.price}
                  </div>
                  <div className="flex">
                    <span className="font-bold sm:text-3xl">
                      {singleOverviewDetails?.price.toLocaleString()}
                    </span>
                    <span className=" font-bold sm:text-3xl">
                      {language ? ar.property.egy : en.property.egy}
                    </span>
                  </div>
                </div>
              </div>

              <div className="   flex md:w-7/12 w-full justify-center ">
                <div className=" md:flex w-11/12 justify-center ">
                  <div className=" md:w-6/12 w-full m-auto ">
                    <div className=" grid grid-cols-2 sm:w-full w-9/12 m-auto py-3 ">
                      <p className="font-bold sm:text-sm md:text-medium lg:text-lg text-xs  md:justify-normal justify-center flex items-center">
                        {/*sm:w-7/12 w-5/12 */}
                        {language
                          ? ar.property.saleOption
                          : en.property.saleOption}
                      </p>
                      <p className="font-bold sm:text-sm md:text-medium lg:text-lg text-xs  md:justify-normal justify-center flex items-center">Cash</p>
                    </div>
                  </div>

                  <div className=" md:w-5/12 w-full m-auto  ">
                    <div className="flex sm:w-full w-9/12  m-auto py-3">
                      <p className="font-bold  md:justify-normal  flex justify-center  sm:text-sm md:text-medium lg:text-lg text-xs w-6/12">
                        {/*sm:w-7/12 w-5/12 */}

                        {language
                          ? ar.property.negotiable
                          : en.property.negotiable}
                      </p>
                      <p className="lg:justify-normal  justify-center sm:text-sm md:text-medium lg:text-lg text-xs w-6/12  flex items-center  ">
                        {singleOverviewDetails?.negotiable ? (
                          <MdCheckCircleOutline className="mx-2 w-[23px] h-[23px]  text-lightGreen" />
                        ) : (
                          <BsSlashCircle className="mx-2 w-[23px] h-[23px] text-lightOrange" />
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>












          ) : null}
          {singleOverviewDetails?.saleOption[0] === "Installment" ? (
            <div  className="md:flex  w-full shadow-md  bg-white rounded-xl md:min-h-[200px] min-h-[auto] items-center">
              <div className="flex justify-center items-center  
                              md:min-h-[100px] min-h-auto  md:w-4/12  w-full">{/**m-auto */}
                <div className="md:block gap-3 flex items-center justify-center">
                  <div className=" font-bold  sm:text-sm md:text-medium lg:text-2xl text-sm ">
                    {language
                      ? ar.property.downPayment
                      : en.property.downPayment}
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold  sm:text-sm md:text-medium lg:text-2xl text-sm ">
                      {singleOverviewDetails?.downPayment.toLocaleString()}
                    </p>
                    <p className=" font-bold sm:text-sm md:text-medium lg:text-2xl text-sm ">
                      {" "}
                      {language ? ar.property.egy : en.property.egy}
                    </p>
                  </div>
                </div>

              </div>




              <div className=" min-h-[100px] flex  w-full justify-center ">
                <div className="md:flex  w-full justify-center  ">
                  <div className=" w-full m-auto ">{/**md:w-6/12 p-*/}
                    <div className=" flex sm:w-full  w-9/12 m-auto  ">
                      <p className=" font-semibold sm:text-sm md:text-medium lg:text-lg text-xs w-6/12 text-center md:text-start ">
                        {language
                          ? ar.property.saleOption
                          : en.property.saleOption}
                      </p>
                      <p className="  sm:text-sm md:text-medium lg:text-lg text-xs w-6/12 text-center">
                        {language
                          ? ar.property.installmentCash
                          : en.property.installmentCash}
                      </p>
                    </div>

                    <div className=" items-center flex sm:w-full  w-9/12 m-auto">
                      <p className="  font-semibold sm:text-sm md:text-medium lg:text-lg text-xs w-6/12 text-center md:text-start  ">
                        {language
                          ? ar.property.installmentOption
                          : en.property.installmentOption}
                      </p>
                      <p className=" sm:text-sm md:text-medium lg:text-lg text-xs w-6/12 text-center">
                        {singleOverviewDetails?.installmentOption.type}
                      </p>
                    </div>

                    <div className=" flex sm:w-full items-center w-9/12 m-auto">
                      <p className="  font-semibold sm:text-sm md:text-medium lg:text-lg text-xs w-6/12 text-center md:text-start">
                        {/*sm:w-7/12 w-5/12 */}

                        {language
                          ? ar.property.installmentPeriod
                          : en.property.installmentPeriod}
                      </p>
                      <p className="sm:text-sm md:text-medium lg:text-lg text-xs w-6/12 text-center ">
                        {singleOverviewDetails?.installmentOption.period}
                      </p>
                    </div>
                  </div>

                  <div className="w-full m-auto">
                    <div className=" flex sm:w-full items-center w-9/12 m-auto">
                      <p className="font-semibold sm:text-sm md:text-medium lg:text-lg text-xs w-6/12 text-center md:text-start">
                        {/*sm:w-7/12 w-5/12 */}

                        {language
                          ? ar.property.installmentAmount
                          : en.property.installmentAmount}
                      </p>
                      <div className="sm:text-sm md:text-medium lg:text-lg text-xs w-6/12  flex  justify-center">
                        <p>{singleOverviewDetails?.installmentOption.amount.toLocaleString()}</p>

                      <p className="mx-1">  EGP</p>
                      </div>
                    </div>

                    <div className=" flex sm:w-full items-center w-9/12 m-auto">
                      <p className="font-semibold sm:text-sm md:text-medium lg:text-lg text-xs w-6/12 text-center md:text-start">
                        {language
                          ? ar.property.negotiable
                          : en.property.negotiable}
                      </p>
                      <p className="sm:text-sm md:text-medium lg:text-lg text-xs w-6/12  flex  justify-center">
                        {singleOverviewDetails?.negotiable ? (
                          <MdCheckCircleOutline />
                        ) : (
                          <BsSlashCircle />
                        )}
                      </p>
                    </div>
                    
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
