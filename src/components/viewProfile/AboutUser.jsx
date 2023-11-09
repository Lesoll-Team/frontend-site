import { CircularProgress } from "@nextui-org/react";
import { useSelector } from "react-redux";

const AboutUser = ({ totalProperties, userData }) => {
  const properites = {
    forSale: 25,
    forRent: 15,
    forInest: 7,
  };
  const propPercent = {
    forSale:
      (properites.forSale /
        (properites.forInest + properites.forRent + properites.forSale)) *
      100,
    forRent:
      (properites.forRent /
        (properites.forInest + properites.forRent + properites.forSale)) *
      100,
    forInest:
      (properites.forInest /
        (properites.forInest + properites.forRent + properites.forSale)) *
      100,
  };
  const language = useSelector((state) => state.GlobalState.languageIs);

  return (
    <div className="flex gap-5 lg:flex-row flex-col items-stretch">
      <div className="bg-white rounded-xl space-y-3 p-5 lg:w-5/12 w-full fade-in">
        <h3 className="text-2xl font-semibold">
          {language ? "العقارات" : "Properties"} : {totalProperties}
        </h3>
        <div className="flex  items-center justify-between py-2">
          <div className="bg- flex w-full flex-col gap-1 justify-center items-center rounded-xl">
            <CircularProgress
              classNames={{
                svg: "w-24 h-24 drop-shadow-md",
                indicator: "stroke-lightGreen",
                track: "stroke-gray-100",
                value: "text-xl font-semibold text-lightGreen",
              }}
              value={propPercent.forSale}
              strokeWidth={4}
              showValueLabel={true}
            />
            <p>{properites.forSale}</p>
            <p className="text-lightGreen text-base  font-bold ">
              {language ? "للبيع" : "For Sale"}
            </p>
          </div>
          <div className="bg- flex w-full flex-col gap-1 justify-center items-center rounded-xl">
            <CircularProgress
              classNames={{
                svg: "w-24 h-24 drop-shadow-md",
                indicator: "stroke-lightGreen",
                track: "stroke-gray-100",
                value: "text-xl font-semibold text-lightGreen",
              }}
              value={propPercent.forRent}
              strokeWidth={4}
              showValueLabel={true}
            />
            <p>{properites.forRent}</p>

            <p className="text-lightGreen  text-base  font-bold ">
              {language ? "للإيجار" : "For Rent"}
            </p>
          </div>
          <div className="bg- flex w-full flex-col gap-1 justify-center items-center rounded-xl">
            <CircularProgress
              classNames={{
                svg: "w-24 h-24 drop-shadow-md",
                indicator: "stroke-lightGreen",
                track: "stroke-gray-100",
                value: "text-xl font-semibold text-lightGreen",
              }}
              value={propPercent.forInest}
              strokeWidth={4}
              showValueLabel={true}
            />
            <p>{properites.forInest}</p>

            <p className="text-lightGreen   text-base font-bold ">
              {language ? "للإستثمار" : "For Investment"}
            </p>
          </div>
        </div>
        {/* <div className="flex flex-col justify-between gap-5">
          <div className="flex gap-2 items-center">
            <p className="text-lg font-medium">
              {language ? "للبيع" : "For Sale"}
            </p>
            <p>{properites.forSale}</p>
            <div
              style={{
                width: `${propPercent.forSale}%`,
              }}
              className={`h-2 w-[${propPercent.forSale}%] bg-lightOrange rounded-full`}
            ></div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-lg font-medium">
              {language ? "للإيجار" : "For Rent"}
            </p>
            <p>{properites.forRent}</p>
            <div
              style={{
                width: `${propPercent.forRent}%`,
              }}
              className={`h-2 w-[${propPercent.forSale}%] bg-lightOrange rounded-full`}
            ></div>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-lg font-medium">
              {language ? "للإستثمار" : "For Invest"}
            </p>
            <p>{properites.forInest}</p>
            <div
              style={{
                width: `${propPercent.forInest}%`,
              }}
              className={`h-2 w-[${propPercent.forSale}%] bg-lightOrange rounded-full`}
            ></div>
          </div>
        </div> */}
      </div>
      <div className="bg-white rounded-xl lg:w-7/12 p-5 space-y-2 fade-in">
        <h3 className="text-2xl font-semibold">
          {language ? "الوصف" : "Discription"}
        </h3>
        {false ? (
          <p className="line-clamp-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            saepe labore non enim numquam cum reprehenderit odit nostrum ab,
            architecto cupiditate obcaecati vitae dicta vero voluptates
            molestias assumenda atque tempora? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Tempore, saepe labore non enim numquam
            cum reprehenderit odit nostrum ab, architecto cupiditate obcaecati
            vitae dicta vero voluptates molestias assumenda atque tempora? Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Tempore, saepe
            labore non enim numquam cum reprehenderit odit nostrum ab,
            architecto cupiditate obcaecati vitae dicta vero voluptates
            molestias assumenda atque tempora? obcaecati vitae dicta vero
            voluptates molestias assumenda atque tempora? obcaecati vitae dicta
            vero voluptates molestias assumenda atque tempora?
          </p>
        ) : (
          <div className="flex w-full h-full justify-center items-center relative pb-5">
            <p className="lg:-mt-11 text-2xl text-slate-500">لا يوجد وصف</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutUser;
