import Image from "next/image";
import React from "react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer
      style={{
        marginTop: "auto",
      }}
    >
      <div className="container mx-auto grid md:grid-cols-4 md:space-x-2">
        <div className="space-x-2">
          <Image
            width={100}
            height={100}
            className="object-fit"
            src="/icons/logoNavbar.png"
          />
          <p>
            © {new Date().getFullYear()},{` `}
            <a href="https://lesoll.com">Lesoll.com</a>
          </p>
          <p>
            Lesoll is an Egyptian RealEstate marketplace. lesoll offers
            customers a digital experiance for buying sending and renting
            properties with end to end service
          </p>
        </div>
        <div className="space-y-2 flex flex-col">
          <h3 className="text-1xl font-bold">Useful Links</h3>

          <Link href="/about">About</Link>

          <Link href="/about">About</Link>

          <Link href="/about">About</Link>

          <Link href="/about">About</Link>
        </div>
        <div className="space-x-2">
          <h3 className="text-1xl font-bold">Useful Links</h3>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
        <div className="space-x-2">
          <h3 className="text-1xl font-bold">Useful Links</h3>
          <ul>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
