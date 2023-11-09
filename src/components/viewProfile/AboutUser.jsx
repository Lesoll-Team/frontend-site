import { useSelector } from "react-redux";

const AboutUser = () => {
  const properites = {
    forSale: 10,
    forRent: 15,
    forInest: 2,
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
      <div className="bg-white rounded-xl space-y-3 p-5 lg:w-5/12 w-full">
        <h3 className="text-2xl font-semibold">
          {language ? "العقارات" : "Properties"}
        </h3>
        <div className="flex flex-col justify-between gap-5">
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
        </div>
      </div>
      <div className="bg-white rounded-xl lg:w-7/12 p-5 space-y-2">
        <h3 className="text-2xl font-semibold">
          {language ? "الوصف" : "Discription"}
        </h3>
        <p className="line-clamp-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
          saepe labore non enim numquam cum reprehenderit odit nostrum ab,
          architecto cupiditate obcaecati vitae dicta vero voluptates molestias
          assumenda atque tempora? Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Tempore, saepe labore non enim numquam cum
          reprehenderit odit nostrum ab, architecto cupiditate obcaecati vitae
          dicta vero voluptates molestias assumenda atque tempora? Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Tempore, saepe labore non
          enim numquam cum reprehenderit odit nostrum ab, architecto cupiditate
          obcaecati vitae dicta vero voluptates molestias assumenda atque
          tempora? obcaecati vitae dicta vero voluptates molestias assumenda
          atque tempora? obcaecati vitae dicta vero voluptates molestias
          assumenda atque tempora?
        </p>
      </div>
    </div>
  );
};

export default AboutUser;
