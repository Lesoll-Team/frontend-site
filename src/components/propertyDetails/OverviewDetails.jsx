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
function formatBuildDate(dateString) {
  const options = { year: "numeric" };
  return new Date(dateString).toLocaleString("en-US", options);
}
function OverviewDetails({ singleOverviewDetails }) {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const formattedDate = formatDate(singleOverviewDetails?.createdAt);
  const formattedBuildDate = formatBuildDate(
    singleOverviewDetails?.buildingYear
  );
  return (
    <div className=" lg:p-10 lg:px-14 border-2 border-gray-200 rounded-3xl">
      <div className="lg:flex justify-between ">
        <div className="flex justify-center items-center">
          <b>            {language ? ar.property.overview : en.property.overview}
</b>
        </div>
        <div className="flex items-center justify-center">
          <span className="flex">
            {" "}
            <BsCalendar3 className=" mr-2" />
            {language ? ar.property.updated : en.property.updated}
            {/* Updated: */}
          </span>
          <span className="md:text-md text-sm">
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
          className="md:hidden"
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
              <h2 className="items-center  text-center text-sm font-bold">
                {language ? ar.property.room : en.property.room}
              </h2>
              <RiHotelBedFill className=" m-auto w-full my-1" />
              <h3 className=" items-center  text-center text-sm font-bold">
                {singleOverviewDetails?.rooms}
              </h3>
            </div>
          </SplideSlide>

          <SplideSlide>
            {" "}
            <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
              <h2 className="items-center  text-center text-sm font-bold">
                {language ? ar.property.SqFt : en.property.SqFt}
              </h2>

              <RiPencilRuler2Line className=" m-auto w-full my-1" />
              <h3 className=" items-center  text-center text-sm font-bold">
                {singleOverviewDetails?.area}
              </h3>
            </div>
          </SplideSlide>

          <SplideSlide>
            <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
              <h2 className="items-center  text-center text-sm font-bold">
                {language ? ar.property.bathroom : en.property.bathroom}
              </h2>

              <MdOutlineBathtub className=" m-auto w-full my-1" />
              <h3 className=" items-center  text-center text-sm font-bold">
                {singleOverviewDetails?.bathRooms}
              </h3>
            </div>
          </SplideSlide>

          
          <SplideSlide>
            {" "}
            <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
              <h2 className="items-center  text-center text-sm font-bold">
                
                {language ? ar.property.furnished : en.property.furnished}
              </h2>

              {/* <SiLevelsdotfyi className=" m-auto w-full my-1" /> */}
              <h3 className=" flex h-[50px] items-center justify-center text-center text-sm font-bold">
                {singleOverviewDetails?.isFurnished?<BsSlashCircle/>:<MdCheckCircleOutline/>}
              </h3>
            </div>
          </SplideSlide> 
          {/* <SplideSlide>
            {" "}
            <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
              <h2 className="items-center  text-center text-xs font-bold ">
                {language ? ar.property.buildingYear : en.property.buildingYear}
              </h2>
              <BsCalendar3 className=" m-auto w-full my-1" />
              <h3 className=" items-center  text-center text-sm font-bold">
                {" "}
                {formattedBuildDate}
              </h3>
            </div>
          </SplideSlide> */}
{/* 
          <SplideSlide>
            {" "}
            <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
              <h2 className="items-center  text-center text-sm font-bold">
                
                {language ? ar.property.level : en.property.level}
              </h2>

              <SiLevelsdotfyi className=" m-auto w-full my-1" />
              <h3 className=" items-center  text-center text-sm font-bold">
                {singleOverviewDetails?.level}
              </h3>
            </div>
          </SplideSlide> */}
          {/* <SplideSlide>
            {" "}
            <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
              <h2 className="items-center  text-center text-xs font-bold ">
                {language ? ar.property.buildingYear : en.property.buildingYear}
              </h2>
              <BsCalendar3 className=" m-auto w-full my-1" />
              <h3 className=" items-center  text-center text-sm font-bold">
                {" "}
                {formattedBuildDate}
              </h3>
            </div>
          </SplideSlide> */}
        </Splide>
        {/* <div className=" md:grid grid-cols-5 items-center justify-between justify-items-center hidden"> */}
        <div className=" hidden md:flex flex-wrap justify-center gap-10 ">
          <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
            <h2 className="items-center  text-center text-sm font-bold">
              {language ? ar.property.room : en.property.room}
            </h2>
            <RiHotelBedFill className=" m-auto w-full my-1" />
            <h3 className=" items-center  text-center text-sm font-bold">
              {singleOverviewDetails?.rooms}
            </h3>
          </div>{" "}
          <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
            <h2 className="items-center  text-center text-sm font-bold">
              {language ? ar.property.SqFt : en.property.SqFt}
            </h2>

            <RiPencilRuler2Line className=" m-auto w-full my-1" />
            <h3 className=" items-center  text-center text-sm font-bold">
              {singleOverviewDetails?.area}
            </h3>
          </div>
          <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
            <h2 className="items-center  text-center text-sm font-bold">
              {" "}
              {language ? ar.property.bathroom : en.property.bathroom}
            </h2>

            <MdOutlineBathtub className=" m-auto w-full my-1" />
            <h3 className=" items-center  text-center text-sm font-bold">
              {singleOverviewDetails?.bathRooms}
            </h3>
          </div>
          <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
              <h2 className="items-center  text-center text-sm font-bold">
                
                {language ? ar.property.furnished : en.property.furnished}
              </h2>

              {/* <SiLevelsdotfyi className=" m-auto w-full my-1" /> */}
              <h3 className=" flex h-[50px] items-center justify-center text-center text-sm font-bold">
                {singleOverviewDetails?.isFurnished?<BsSlashCircle/>:<MdCheckCircleOutline/>}
              </h3>
            </div>

            <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
              <h2 className="items-center  text-center text-sm font-bold">
                
                {language ? ar.property.furnished : en.property.furnished}
              </h2>

              {/* <SiLevelsdotfyi className=" m-auto w-full my-1" /> */}
              <h3 className=" flex h-[50px] items-center justify-center text-center text-[12px] font-bold">
                {singleOverviewDetails?.propType}
              </h3>
            </div>
          {/* <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
            <h2 className="items-center  text-center text-sm font-bold">
              {" "}
              {language ? ar.property.level : en.property.level}
            </h2>

            <SiLevelsdotfyi className=" m-auto w-full my-1" />
            <h3 className=" items-center  text-center text-sm font-bold">
              {singleOverviewDetails?.level}
            </h3>
          </div>{" "} */}
          {/* <div className=" bg-gray-200 w-[90px] h-[80px] flex-col p-1 justify-center items-center rounded-lg">
            <h2 className="items-center  text-center text-xs font-bold">
              {" "}
              {language ? ar.property.buildingYear : en.property.buildingYear}
            </h2>
            <BsCalendar3 className=" m-auto w-full my-1" />
            <h3 className=" items-center  text-center text-sm font-bold">
              {" "}
              {formattedBuildDate}
            </h3>
          </div> */}
        </div>
      </div>

      <br />
      <hr />
      <br />
      <div>
        <b>
          
          {language ? ar.property.payment : en.property.payment}
        </b>

        <div className="mt-5">
          {singleOverviewDetails?.saleOption[0] === "Cash" ||
          singleOverviewDetails?.saleOption[0] === "" ? (
            <div className="md:flex  w-full   border-2 border-gray-200 rounded-xl min-h-[200px] items-center">
              <div className="md:border-r-large md:border-gray-200  flex justify-center items-center m-auto  md:min-h-[100px] min-h-auto  md:w-4/12 w-full">
                <div>
                  <div className="font-bold sm:text-3xl">
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
                <div className="md:flex  w-11/12 justify-center ">
                  <div className="w-6/12 m-auto ">
                    <div className=" flex sm:w-full w-9/12 m-auto py-3 ">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12 ">
                        {/*sm:w-7/12 w-5/12 */}
                        {language
                          ? ar.property.saleOption
                          : en.property.saleOption}
                      </span>
                      <span className="sm:text-[10px] text-[8px] w-6/12 text-end">
                        Cash
                      </span>
                    </div>
                  </div>

                  <div className="w-5/12 m-auto ">
                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12">
                        {/*sm:w-7/12 w-5/12 */}

                        {language
                          ? ar.property.negotiable
                          : en.property.negotiable}
                      </span>
                      <span className="w-6/12 flex justify-end">
                        {singleOverviewDetails?.negotiable ? (
                          <MdCheckCircleOutline />
                        ) : (
                          <BsSlashCircle />
                        )}
                        {/* <BsSlashCircle /> */}
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
                  <div className="font-bold sm:text-3xl">
                    {language
                      ? ar.property.downPayment
                      : en.property.downPayment}
                  </div>
                  <div className="flex">
                    <span className="font-bold sm:text-3xl">
                      {singleOverviewDetails?.downPayment}
                    </span>
                    <span className=" font-bold sm:text-3xl">
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
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12 ">
                      {language
                          ? ar.property.saleOption
                          : en.property.saleOption}
                      </span>
                      <span className="sm:text-[10px] text-[8px] w-6/12 text-end">
                      {language
                          ? ar.property.installmentCash
                          : en.property.installmentCash}
                      </span>
                    </div>

                    <div className=" flex sm:w-full  w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12  ">
                
                        {language
                          ? ar.property.installmentOption
                          : en.property.installmentOption}
                      </span>
                      <span className="sm:text-[10px] text-[8px] w-6/12 text-end">
                        {singleOverviewDetails?.installmentOption.type}
                      </span>
                    </div>

                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12">
                        {/*sm:w-7/12 w-5/12 */}
                        
                        {language
                          ? ar.property.installmentPeriod
                          : en.property.installmentPeriod}
                      </span>
                      <span className="sm:text-[10px] text-[8px] w-6/12 items-center text-end">
                        {singleOverviewDetails?.installmentOption.period}
                      </span>
                    </div>
                  </div>

                  <div className="w-5/12  ">
                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12">
                        {/*sm:w-7/12 w-5/12 */}
                        
                        {language
                          ? ar.property.installmentAmount
                          : en.property.installmentAmount}
                      </span>
                      <span className="w-6/12 text-end sm:text-[10px] text-[8px] ">
                        {singleOverviewDetails?.installmentOption.amount}{" "}
                        <span>EGP</span>
                      </span>
                    </div>

                    <div className=" flex sm:w-full w-9/12 m-auto py-3">
                      <span className="font-bold sm:text-[11px] text-[10px] w-6/12">
                      {language
                          ? ar.property.negotiable
                          : en.property.negotiable}
                      </span>
                      <span className=" w-6/12 flex justify-end">
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
