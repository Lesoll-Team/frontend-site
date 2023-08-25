import React,{memo} from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { MdCheckCircleOutline } from "react-icons/md";

import { BsSlashCircle } from "react-icons/bs";


function DescriptionFeatures({singleDescriptionFeatures}) {
  return (
    <div className=" p-10 px-14 border-2 border-gray-200 rounded-3xl">
    <div>
      <h1 className="font-bold ">Description</h1>
      <div>
        <p className=" sm:text-[16px] text-[13px] text-justify ">
{singleDescriptionFeatures.description}
        </p>
      </div>
    </div>
    <br />
    <hr />
    <br />
    <div className="">
      <b>Features</b>
      <Table
        hideHeader
        isStriped
        aria-label="Example static collection table"
      >
        '
        <TableHeader>
          <TableColumn></TableColumn>
          <TableColumn></TableColumn>
          <TableColumn></TableColumn>
        </TableHeader>
        <TableBody >
          <TableRow key="1" >
            <TableCell className="sm:text-[11px] text-[10px]">
              {" "}
              <span className=" flex items-center">
                <MdCheckCircleOutline className="mx-2" />
                Tony Reichert
              </span>
            </TableCell>
            <TableCell className="sm:text-[11px] text-[10px]">
              <span className=" flex items-center">
                <BsSlashCircle className="mx-2 text-lightOrangeHover" />
                CEO
              </span>
            </TableCell>
            <TableCell className="sm:text-[11px] text-[10px]">
              <span className=" flex items-center">
                <MdCheckCircleOutline className="mx-2" />
                Active
              </span>
            </TableCell>
          </TableRow>
          <TableRow key="2">
            <TableCell className="sm:text-[11px] text-[10px]">
              {" "}
              <span className=" flex items-center">
                <MdCheckCircleOutline className="mx-2" />
                Zoey Lang
              </span>{" "}
            </TableCell>
            <TableCell className="sm:text-[11px] text-[10px]">
              <span className=" flex items-center">
                <MdCheckCircleOutline className="mx-2" />
                Technical Lead
              </span>
            </TableCell>
            <TableCell className="sm:text-[11px] text-[10px]">
              <span className=" flex items-center">
                <MdCheckCircleOutline className="mx-2" />
                Paused
              </span>
            </TableCell>
          </TableRow>
          <TableRow key="3">
            <TableCell className="sm:text-[11px] text-[10px]">
              <span className=" flex items-center">
                <BsSlashCircle className="mx-2 text-lightOrangeHover" />
                Jane Fisher
              </span>
            </TableCell>
            <TableCell className="sm:text-[11px] text-[10px]">
              <span className=" flex items-center">
                <MdCheckCircleOutline className="mx-2" />
                Senior Developer
              </span>
            </TableCell>
            <TableCell className="sm:text-[11px] text-[10px]">
              <span className=" flex items-center">
                <MdCheckCircleOutline className="mx-2" />
                Active
              </span>
            </TableCell>
          </TableRow>
          <TableRow key="4">
            <TableCell className="sm:text-[11px] text-[10px]">
              <span className=" flex items-center">
                <MdCheckCircleOutline className="mx-2" />
                William Howard
              </span>
            </TableCell>
            <TableCell className="sm:text-[11px] text-[10px]">
              <span className=" flex items-center">
                <BsSlashCircle className="mx-2 text-lightOrangeHover" />
                Community Manager
              </span>
            </TableCell>
            <TableCell className="sm:text-[11px] text-[10px]">
              <span className=" flex items-center">
                <MdCheckCircleOutline className="mx-2" />
                Vacation
              </span>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  </div>
  )
}

export default memo(DescriptionFeatures)