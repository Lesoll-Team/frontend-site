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
function formatDate(dateString) {
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return new Date(dateString).toLocaleString("en-US", options);
}
function OverviewDetails({ singleOverviewDetails }) {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const formattedDate = formatDate(singleOverviewDetails?.createdAt);
  return (
    <div className=" lg:p-10 lg:px-14 border-2 border-gray-200 rounded-3xl">
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
          <span className="sm:text-[19px] text-[14px]">
            {formattedDate}
            <div></div>
          </span>
        </div>
      </div>
      <br />
      <hr />
      <br />
      <div>
        <Splide
          className="sm:hidden"
          id="thumbnails"
          options={{
            fixedWidth: 100,
            gap: 10,
            rewind: true,
            pagination: false,
          }}
          aria-label="Thumbnails Carousel"
        >
          <SplideSlide>
            <div className=" bg-gray-200 w-[90px] h-[80px]  rounded-lg">
              <b className="items-center  text-center sm:text-[19px] text-[14px] font-bold">
                {language ? ar.property.room : en.property.room}
              </b>
              <RiHotelBedFill className=" m-auto w-full my-1" />
              <b className=" items-center  text-center sm:text-[19px] text-[14px] font-bold">
                {singleOverviewDetails?.rooms}
              </b>
            </div>
          </SplideSlide>

          <SplideSlide>
            {" "}
            <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
              <b className="items-center  text-center sm:text-[19px] text-[14px] font-bold">
                {language ? ar.property.SqFt : en.property.SqFt}
              </b>

              <RiPencilRuler2Line className=" m-auto w-full my-1" />
              <h3 className=" items-center  text-center sm:text-[19px] text-[14px] font-bold">
                {singleOverviewDetails?.area}
              </h3>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
              <h2 className="items-center  text-center sm:text-[19px] text-[14px] font-bold">
                {language ? ar.property.bathroom : en.property.bathroom}
              </h2>

              <MdOutlineBathtub className=" m-auto w-full my-1" />
              <h3 className=" items-center  text-center sm:text-[19px] text-[14px] font-bold">
                {singleOverviewDetails?.bathRooms}
              </h3>
            </div>
          </SplideSlide>

          <SplideSlide>
            {" "}
            <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
              <h2 className="items-center  text-center sm:text-[19px] text-[14px] font-bold">
                {language ? ar.property.furnished : en.property.furnished}
              </h2>
              <h3 className=" flex h-[50px] items-center justify-center text-center sm:text-[19px] text-[14px] font-bold">
                {singleOverviewDetails?.isFurnished ? (
                  <BsSlashCircle />
                ) : (
                  <MdCheckCircleOutline />
                )}
              </h3>
            </div>
          </SplideSlide>
        </Splide>
        <div className=" hidden sm:flex flex-wrap justify-center gap-10 ">
          <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
            <p className="items-center  text-center text-[15px] font-bold">
              {language ? ar.property.room : en.property.room}
            </p>
            <RiHotelBedFill className=" m-auto w-full my-1" />
            <p className=" items-center  text-center text-[15px] font-bold">
              {singleOverviewDetails?.rooms}
            </p>
          </div>


          <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
            <p className="items-center  text-center text-[15px] font-bold">
              {language ? ar.property.SqFt : en.property.SqFt}
            </p>

            <RiPencilRuler2Line className=" m-auto w-full my-1" />
            <p className=" items-center  text-center text-[15px] font-bold">
              {singleOverviewDetails?.area}
            </p>
          </div>
          <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
            <p className="items-center  text-center text-[15px] font-bold">
              {" "}
              {language ? ar.property.bathroom : en.property.bathroom}
            </p>

            <MdOutlineBathtub className=" m-auto w-full my-1" />
            <p className=" items-center  text-center text-[15px] font-bold">
              {singleOverviewDetails?.bathRooms}
            </p>
          </div>
          <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
            <p className="items-center  text-center text-[15px] font-bold">
              {language ? ar.property.furnished : en.property.furnished}
            </p>

            {/* <SiLevelsdotfyi className=" m-auto w-full my-1" /> */}
            <p className=" flex h-[50px] items-center justify-center text-center text-[15px] font-bold">
              {singleOverviewDetails?.isFurnished ? (
                <BsSlashCircle />
              ) : (
                <MdCheckCircleOutline />
              )}
            </p>
          </div>
        </div>
      </div>

      <br />
      <hr />
      <br />
      <div>
      <div className="flex md:justify-normal justify-center items-center ">
        <p className="sm:text-3xl text-lg font-semibold">
          {language ? ar.property.payment : en.property.payment}
        </p>
</div>
        <div className="mt-5">
          {singleOverviewDetails?.saleOption[0] === "Cash" ||
          singleOverviewDetails?.saleOption[0] === "" ? (
            <div className="md:flex  w-full   border-2 border-gray-200 rounded-xl min-h-[200px] items-center">
              <div className="md:border-r-large md:border-gray-200  flex justify-center items-center m-auto  md:min-h-[100px] min-h-auto  md:w-4/12 w-full">
                <div>
                  <div className="font-bold sm:text-3xl text-lg" >
                    {language ? ar.property.price : en.property.price}
                  </div>
                  <div className="flex">
                    <span className="font-bold sm:text-3xl">
                      {singleOverviewDetails?.price}
                    </span>
                    <span className=" font-bold sm:text-3xl">
                      {language ? ar.property.egy : en.property.egy}
                    </span>
                  </div>
                </div>
              </div>

              <div className=" min-h-[100px] flex md:w-7/12 w-full justify-center ">
                <div className=" md:flex  w-11/12 justify-center ">
                  <div className=" w-6/12 m-auto ">
                    <div className=" flex sm:w-full w-9/12 m-auto py-3 ">
                      <span className="font-bold sm:text-xl text-sm w-6/12 ">
                        {/*sm:w-7/12 w-5/12 */}
                        {language
                          ? ar.property.saleOption
                          : en.property.saleOption}
                      </span>
                      <span className=" w-6/12  flex items-center">
                        Cash
                      </span>
                    </div>
                  </div>

                  <div className=" w-5/12 m-auto  ">
                    <div className="flex sm:w-full w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-xl text-sm w-6/12">
                        {/*sm:w-7/12 w-5/12 */}

                        {language
                          ? ar.property.negotiable
                          : en.property.negotiable}
                      </span>
                      <span className="  w-6/12  flex items-center  ">
                        {singleOverviewDetails?.negotiable ? (
                          <MdCheckCircleOutline className="mx-2 w-[23px] h-[23px] text-lightGreen" />
                        ) : (
                          <BsSlashCircle className="mx-2 w-[23px] h-[23px] text-lightOrange"/>
                        )}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
          {singleOverviewDetails?.saleOption[0] === "Installment" ? (
            <div className="md:flex  w-full  border-2 border-gray-200 rounded-xl min-h-[200px] items-center">
              <div className="md:border-r-large md:border-gray-200  flex justify-center items-center m-auto  md:min-h-[100px] min-h-auto  md:w-4/12 w-full">
                <div className="">
                  <div className=" font-bold sm:text-xl text-sm w-full ">
                    {language
                      ? ar.property.downPayment
                      : en.property.downPayment}
                  </div>
                  <div className="flex">
                    <span className="font-bold sm:text-xl text-sm w-full ">
                      {singleOverviewDetails?.downPayment}
                    </span>
                    <span className=" font-bold sm:text-xl mx-2 text-sm w-full ">
                      {" "}
                      {language ? ar.property.egy : en.property.egy}
                    </span>
                  </div>
                </div>
              </div>

              <div className=" min-h-[100px] flex md:w-7/12 w-full justify-center ">
                <div className="md:flex  w-11/12 justify-center ">
                  <div className="w-6/12 m-auto ">
                    <div className=" flex sm:w-full w-9/12 m-auto py-3 ">
                      <span className="  sm:text-xl text-sm w-6/12 ">
                        {language
                          ? ar.property.saleOption
                          : en.property.saleOption}
                      </span>
                      <span className="sm:text-[16px] text-[12px] w-6/12 items-center">
                        {language
                          ? ar.property.installmentCash
                          : en.property.installmentCash}
                      </span>
                    </div>

                    <div className=" flex sm:w-full  w-9/12 m-auto py-3">
                      <span className="  sm:text-xl text-sm w-6/12  ">
                        {language
                          ? ar.property.installmentOption
                          : en.property.installmentOption}
                      </span>
                      <span className="sm:text-[16px] text-[12px] w-6/12 items-center">
                        {singleOverviewDetails?.installmentOption.type}
                      </span>
                    </div>

                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      <span className="  sm:text-xl text-sm w-6/12">
                        {/*sm:w-7/12 w-5/12 */}

                        {language
                          ? ar.property.installmentPeriod
                          : en.property.installmentPeriod}
                      </span>
                      <span className="sm:text-[16px] text-[12px] w-6/12 items-center ">
                        {singleOverviewDetails?.installmentOption.period}
                      </span>
                    </div>
                  </div>

                  <div className="w-6/12 m-auto ">
                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      <span className="  sm:text-xl text-sm w-6/12">
                        {/*sm:w-7/12 w-5/12 */}

                        {language
                          ? ar.property.installmentAmount
                          : en.property.installmentAmount}
                      </span>
                      <span className="w-6/12 items-center sm:text-[16px] text-[12px] ">
                        {singleOverviewDetails?.installmentOption.amount}{" "}
                        <span>EGP</span>
                      </span>
                    </div>

                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      <span className="  sm:text-xl text-sm w-6/12">
                        {language
                          ? ar.property.negotiable
                          : en.property.negotiable}
                      </span>
                      <span className=" w-6/12 sm:text-[16px] text-[12px] flex items-center">
                        {singleOverviewDetails?.negotiable ? (
                          <MdCheckCircleOutline />
                        ) : (
                          <BsSlashCircle />
                        )}
                      </span>
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
