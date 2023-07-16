import Link from "next/link";
import { Fragment } from "react";
import { MdSell, MdOutlineRealEstateAgent, MdAddHome ,MdHomeFilled } from "react-icons/md";

export default function LinksNavbar() {
  const links = [
    { href: "/", label: "Home", id: 1 },
    { href: "/rent", label: "Rent", id: 2 },
    { href: "/buy", label: "Buy", id: 3 },
    { href: "/sell", label: "Sell", id: 4 },
  ];
  return (
    <Fragment>
      {links.map((link) => (
        <li key={link.id}>
          <Link
            className=" flex p-1  px-3  md:text-2xl text-xl rounded-3xl 
               duration-300 text-darkGray hover:bg-lightGreen hover:text-white  active:scale-95 items-center "
            href={link.href}
          >
            {link.label == "Home" ? <MdHomeFilled /> : ""}
            {link.label == "Rent" ? <MdSell /> : ""}
            {link.label == "Buy" ? <MdOutlineRealEstateAgent /> : ""}
            {link.label == "Sell" ? <MdAddHome /> : ""}
            <p>{link.label}</p>
          </Link>
        </li>
      ))}
    </Fragment>
  );
}
