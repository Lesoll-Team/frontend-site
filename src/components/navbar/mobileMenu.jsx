import { Fragment } from "react";
import Link from "next/link";
import {
  MdSell,
  MdOutlineRealEstateAgent,
  MdAddHome,
  MdHomeFilled,
} from "react-icons/md";
import { TiUserAdd } from "react-icons/ti";
import { ImQuestion } from "react-icons/im";
import { RiCustomerService2Fill } from "react-icons/ri";
import { ar } from "../../language/ar/common";
import { en } from "../../language/en/common";
import { useSelector } from "react-redux";

export default function MobileMenu({ onInputClick }) {
  const handleInputClick = () => {
    onInputClick(true);
  };
  const language = useSelector((state) => state.GlobalState.languageIs);

  const linksMenu = [
    {
      href: "/",
      label: `${language ? ar.navbar.navHome : en.navbar.navHome}`,
      id: 1,
    },
    {
      href: "/rent/1",
      label: `${language ? ar.navbar.navRent : en.navbar.navRent}`,
      id: 2,
    },
    {
      href: "/buy/1",
      label: `${language ? ar.navbar.navBuy : en.navbar.navBuy}`,
      id: 3,
    },
    {
      href: "/sell",
      label: `${language ? ar.navbar.navSell : en.navbar.navSell}`,
      id: 4,
    },
    {
      href: "/need",
      label: `${language ? ar.navbar.navNeed : en.navbar.navNeed}`,
      id: 5,
    },
    {
      href: "/about",
      label: `${language ? ar.navbar.navAbout : en.navbar.navAbout}`,
      id: 6,
    },
    {
      href: "/contact",
      label: `${language ? ar.navbar.navContact : en.navbar.navContact}`,
      id: 7,
    },
  ];
  return (
    <Fragment>
      {linksMenu.map((link) => (
        <li key={link.id} className="flex  justify-center">
          <Link
            className=" flex py-4 rounded-full w-10/12 my-2 shadow-md  justify-center duration-300 text-lightGreen hover:bg-gray-200 hover:text-darkGreen  active:scale-95"
            href={link.href}
            onClick={handleInputClick}
          >
            <b className="flex items-center">
              {link.id == 1 ? <MdHomeFilled /> : ""}
              {link.id == 2 ? <MdSell /> : ""}
              {link.id == 3 ? <MdOutlineRealEstateAgent /> : ""}
              {link.id == 4 ? <MdAddHome /> : ""}
              {link.id == 5 ? <TiUserAdd /> : ""}
              {link.id == 6 ? <ImQuestion /> : ""}
              {link.id == 7 ? <RiCustomerService2Fill /> : ""}
              <ul className="mx-2">{link.label}</ul>
            </b>
          </Link>
        </li>
      ))}
    </Fragment>
  );
}
