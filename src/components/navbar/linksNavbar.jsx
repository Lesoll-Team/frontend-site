import Link from "next/link";
import { Fragment } from "react";
import { MdSell, MdOutlineRealEstateAgent, MdAddHome ,MdHomeFilled } from "react-icons/md";
import { useSelector } from "react-redux";
import {ar} from "../../language/ar/common"
import {en} from "../../language/en/common"
export default function LinksNavbar() {
  const language = useSelector((state)=>state.GlobalState.languageIs)

  const links = [
    { href: "/", label: language ? ar.navbar.navHome : en.navbar.navHome, id: 1 },
    { href: "/rent/1", label: language ? ar.navbar.navRent : en.navbar.navRent, id: 2 },
    { href: "/buy/1", label: language ? ar.navbar.navBuy : en.navbar.navBuy, id: 3 },
    { href: "/sell", label: language ? ar.navbar.navSell : en.navbar.navSell, id: 4 },
  ];
  return (
    <Fragment >
      {links.map((link) => (
        <li key={link.id} >
          <Link
            className=" flex p-1  px-3   text-md rounded-3xl 
               duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95 items-center "
            href={link.href}
          >
            {link.id == 1 ? <MdHomeFilled /> : ""}
            {link.id == 2 ? <MdSell /> : ""}
            {link.id == 3 ? <MdOutlineRealEstateAgent /> : ""}
            {link.id == 4 ? <MdAddHome /> : ""}
            <p>{link.label}</p>
          </Link>
        </li>
      ))}
    </Fragment>
  );
}
