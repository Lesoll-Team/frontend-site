import { BiPhoneCall, BiSolidBed } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";
import { FaBath } from "react-icons/fa";
import { useSelector } from "react-redux";

const NeedsCard = ({ need }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${
    need.userId[0]?.code + need.userId[0]?.phone
  }`;
  console.log(whatsappUrl);
  return (
    <div className="border-2  rounded-md drop-shadow-sm space-y-4 p-5">
      <div className=" justify-between items-center">
        {/* <p className="text-xl font-semibold w-full">
          {need.userId[0].fullname}
        </p> */}
        <p className="w-full text-2xl text-darkGreen font-semibold">
          {language ? need.unitType[0].title.ar : need.unitType[0].title.en}{" "}
          {need?.offer === "For Sale"
            ? language
              ? "للبيع"
              : "For Sale"
            : need?.offer === "For Rent"
            ? language
              ? "للإيجار"
              : "For Rent"
            : language
            ? "للإستثمار"
            : "For Investment"}{" "}
          {need?.governrate} {need?.region}
        </p>
      </div>
      <div className="flex md:flex-row flex-col md:items-center  gap-2">
        <p className="text-xl font-bold">{language ? "السعر" : "price"}</p>
        <div className="flex gap-12">
          <div className="flex gap-2 items-center">
            <p className="text-lightGreen text-lg">
              {language ? "من :" : "from :"}
            </p>
            <p className="font-semibold text-lg">{need.price.from}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-lightGreen text-lg">
              {language ? " الى:" : "to :"}
            </p>
            <p className="font-semibold text-lg">{need.price.to}</p>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center  gap-2">
        <p className="text-xl font-bold">{language ? "المساحة" : "area"}</p>
        <div className="flex gap-12">
          <div className="flex gap-2 items-center">
            <p className="text-lightGreen text-lg">
              {language ? "من :" : "from :"}
            </p>
            <p className="font-semibold text-lg">{need.area.from}</p>
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-lightGreen text-lg">
              {language ? " الى:" : "to :"}
            </p>
            <p className="font-semibold text-lg">{need.area.to}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-5">
        <p className="flex items-center">
          {language ? "عدد الغرف" : "Rooms number"}{" "}
          <BiSolidBed className=" text-darkGray" />: {need?.rooms}
        </p>
        <p className="flex items-center gap-1">
          {language ? "عدد الحمامات" : "Bathrooms number"}
          <FaBath className=" text-darkGray" /> : {need?.rooms}
        </p>
      </div>
      <p>{need.description}</p>
      <p className="font-semibold">
        {language ? "تواصل مع" : "Conatct with"} :{" "}
        <span className="text-base">{need.userId[0].fullname}</span>
      </p>
      <div className="flex flex-col sm:flex-row items-center gap-2">
        <a
          className="w-full text-center border py-2 flex items-center justify-center gap-2"
          href={`tel:${need.userId[0]?.code + need.userId[0]?.phone}`}
          target="_blank"
        >
          {language ? " اتصال" : "Call"}
          <BiPhoneCall className="text-e]" />
        </a>
        <a
          className="w-full text-center border py-2 flex items-center justify-center gap-2"
          href={whatsappUrl}
          target="_blank"
        >
          {language ? "واتس اب" : "Whatsapp"}
          <BsWhatsapp className="text- text-[#25D366]" />
        </a>
      </div>
    </div>
  );
};
export default NeedsCard;
