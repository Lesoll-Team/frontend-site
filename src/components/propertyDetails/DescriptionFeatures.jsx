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


function DescriptionFeatures() {
  return (
    <div className=" p-10 px-14 border-2 border-gray-200 rounded-3xl">
    <div>
      <h1 className="font-bold ">Description</h1>
      <div>
        <p className=" sm:text-[11px] text-[10px] text-justify ">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat
          volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
          ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
          consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate
          velit esse molestie consequat, vel illum dolore eu feugiat nulla
          facilisis at vero eros et accumsan et iusto odio dignissim qui
          blandit praesent luptatum zzril delenit augue duis dolore te feugait
          nulla facilisi. Nam liber tempor cum soluta nobis eleifend option
          congue nihil imperdiet doming id quod mazim placerat facer possim
          assum. Typi non habent claritatem insitam; est usus legentis in iis
          qui facit eorum claritatem. Investigationes demonstraverunt lectores
          legere me lius quod ii legunt saepius. Claritas est etiam processus
          dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est
          notare quam littera gothica, quam nunc putamus parum claram,
          anteposuerit litterarum formas humanitatis per seacula quarta decima
          et quinta decima. Eodem modo typi, qui nunc nobis videntur parum
          clari, fiant sollemnes in futurum.
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