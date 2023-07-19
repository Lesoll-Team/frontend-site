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



export default function MobileMenu({ onInputClick }) {
  const handleInputClick = () => {
    onInputClick(true);
  };

  const linksMenu = [
    { href: "/", label: "Home", id: 1 },
    { href: "/rent", label: "Rent", id: 2 },
    { href: "/buy", label: "Buy", id: 3 },
    { href: "/sell", label: "Sell", id: 4 },
    { href: "/need", label: "Need", id: 5 },
    { href: "/about", label: "About Us", id: 6 },
    { href: "/contact", label: "Contact", id: 7 },
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
              {link.label == "Home" ? <MdHomeFilled /> : ""}
              {link.label == "Rent" ? <MdSell /> : ""}
              {link.label == "Buy" ? <MdOutlineRealEstateAgent /> : ""}
              {link.label == "Sell" ? <MdAddHome /> : ""}
              {link.label == "Need" ? <TiUserAdd /> : ""}
              {link.label == "About Us" ? <ImQuestion /> : ""}
              {link.label == "Contact" ? <RiCustomerService2Fill /> : ""}
              <ul className="mx-2">{link.label}</ul>
            </b>
          </Link>
        </li>
      ))}
    </Fragment>
  );
}
