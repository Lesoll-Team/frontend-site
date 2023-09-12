import Link from "next/link";
import { Fragment } from "react";
import {
  MdSell,
  MdOutlineRealEstateAgent,
  MdAddHome,
  MdHomeFilled,
} from "react-icons/md";
import { useSelector } from "react-redux";
export default function LinksNavbar() {
  let language = useSelector((state) => state.GlobalState.languageIs);
  return (
    <div className="flex">
      <Link
        className=" flex p-1  px-3   text-md rounded-3xl gap-1
                         duration-300 text-darkGray hover:bg-lightGreen
                          hover:text-white  active:scale-95 items-start "
        href="/"
      >
        <MdHomeFilled className="text-xl" />
       {language ? "الصفحة الرئيسية":"Home"}
      </Link>

      <Link
        className=" flex p-1  px-3   text-md rounded-3xl gap-1
                         duration-300 text-darkGray hover:bg-lightGreen
                          hover:text-white  active:scale-95 items-start "
        href="/rent/1"
      >
        <MdSell className="text-xl" />
        {/* {language ? ar.navbar.navRent : en.navbar.navRent} */}
        {language ? "للإيجار" : "Rent"}
      </Link>

      <Link
        className=" flex p-1  px-3   text-md rounded-3xl gap-1
                         duration-300 text-darkGray hover:bg-lightGreen
                          hover:text-white  active:scale-95 items-start "
        href="/buy/1"
      >
        <MdOutlineRealEstateAgent className="text-xl" />
        {/* {language ? ar.navbar.navBuy : en.navbar.navBuy} */}
        {language ? "للبيع" : "Buy"}
      </Link>

      <Link
        className=" flex p-1  px-3   text-md rounded-3xl gap-1
                         duration-300 text-darkGray hover:bg-lightGreen
                          hover:text-white  active:scale-95 items-start "
        href="/sell"
      >
        <MdAddHome className="text-xl" />
        {/* {language ? ar.navbar.navSell : en.navbar.navSell} */}
        {language ? "أضفة عقار" : "Sell"}
      </Link>
    </div>
  );
}
