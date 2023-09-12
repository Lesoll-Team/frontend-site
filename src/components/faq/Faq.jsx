// import Image from "next/image";
import { Image } from "@nextui-org/react";

import heroImg from "../../../public/faq.svg";
import React, { useMemo, useState } from "react";
import Question from "./Question";
import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
const Faq = () => {
  const [qType, setQType] = useState("buyer");

  const setGeneral = () => {
    setQType("general");
  };
  const setOwner = () => {
    setQType("owner");
  };
  const setBuyer = () => {
    setQType("buyer");
  };
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["text"]));
  const selectedValue = useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  console.log(selectedKeys);
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="py-10 min-h-screen">
      {/* <div className="flex flex-col md:flex-row relative justify-between ">
        <h2 className="text-7xl text-darkGreen font-bold order-2 md:order-1">
          Frequently Asked Questions
        </h2>
        <Image
          src={heroImg}
          width={"auto"}
          height={"auto"}
          className="w-[35%] order-1 md:order-2 md:relative md:-top-[100px] right-0"
        />
      </div> */}
      <div className="container mx-auto">
        {/* <div className="w-[%] md:w-[80%] mx-auto flex justify-center bg-white drop-shadow-xl rounded-full">
          <p
            onClick={setGeneral}
            className={`text-center cursor-pointer px-5 border border-r-0 border-lightGreen rounded-l-full text-xs sm:text-xl w-[33.3%] py-2 md:hover:bg-lightGreen md:hover:text-white font-semibold text-darkGreen duration-200 ${
              qType === "general" && "bg-lightGreen text-white"
            }`}
          >
            General
          </p>
          <p
            onClick={setOwner}
            className={`text-center cursor-pointer px-5 border border-lightGreen text-xs sm:text-xl w-[33.3%] py-2 md:hover:bg-lightGreen md:hover:text-white font-semibold text-darkGreen duration-200 ${
              qType === "owner" && "bg-lightGreen text-white"
            }`}
          >
            Owner
          </p>
          <p className="text-center px-5 border border-lightGreen">test</p>
          <p
            onClick={setBuyer}
            className={`text-center cursor-pointer px-5 border border-l-0 border-lightGreen rounded-r-full text-xs sm:text-xl w-[33.3%] py-2 md:hover:bg-lightGreen md:hover:text-white font-semibold text-darkGreen duration-200 ${
              qType === "buyer" && "bg-lightGreen text-white"
            }`}
          >
            Buyer
          </p>
        </div> */}
        <div dir="rtl" className="my-7 ">
          <Accordion variant="splitted">
            <AccordionItem
              className="py-3"
              key="1"
              aria-label="Accordion 1"
              title=" سؤال"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              className="py-3"
              key="2"
              aria-label="Accordion 2"
              title=" سؤال"
            >
              {defaultContent}
            </AccordionItem>
            <AccordionItem
              className="py-3"
              key="3"
              aria-label="Accordion 3"
              title=" سؤال"
            >
              {defaultContent}
            </AccordionItem>
          </Accordion>
        </div>
        <div className="flex gap-3 w-full">
          <Dropdown className="w-full">
            <DropdownTrigger>
              <div className="w-fullflex items-center p-2 border-[3px] w-[30%] text-center rounded-lg">
                {selectedValue}
              </div>
            </DropdownTrigger>
            <DropdownMenu
              className="w-full"
              aria-label="Single selection example"
              variant="shadow"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              <DropdownItem key="text">Text</DropdownItem>
              <DropdownItem key="number">Number</DropdownItem>
              <DropdownItem key="date">Date</DropdownItem>
              <DropdownItem key="single_date">Single Date</DropdownItem>
              <DropdownItem key="iteration">adadada</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown className="w-full">
            <DropdownTrigger>
              <div className="w-fullflex items-center p-2 border-[3px] w-[30%] text-center rounded-lg">
                {selectedValue}
              </div>
            </DropdownTrigger>
            <DropdownMenu
              className="w-full"
              aria-label="Single selection example"
              variant="shadow"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              <DropdownItem key="text">Text</DropdownItem>
              <DropdownItem key="number">Number</DropdownItem>
              <DropdownItem key="date">Date</DropdownItem>
              <DropdownItem key="single_date">Single Date</DropdownItem>
              <DropdownItem key="iteration">adadada</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown className="w-full">
            <DropdownTrigger>
              <div className="w-fullflex items-center p-2 border-[3px] w-[30%] text-center rounded-lg">
                {selectedValue}
              </div>
            </DropdownTrigger>
            <DropdownMenu
              className="w-full"
              aria-label="Single selection example"
              variant="shadow"
              disallowEmptySelection
              selectionMode="single"
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              <DropdownItem key="text">Text</DropdownItem>
              <DropdownItem key="number">Number</DropdownItem>
              <DropdownItem key="date">Date</DropdownItem>
              <DropdownItem key="single_date">Single Date</DropdownItem>
              <DropdownItem key="iteration">adadada</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <Image
          width={320}
          height={200}
          alt="NextUI hero Image with delay"
          src="https://app.requestly.io/delay/5000/https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </div>
    </div>
  );
};
export default Faq;
