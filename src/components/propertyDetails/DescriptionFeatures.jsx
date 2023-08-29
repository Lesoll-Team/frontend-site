import React, { memo } from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { MdCheckCircleOutline } from "react-icons/md";
import { ar } from "../../language/ar/common";
import { en } from "../../language/en/common";
import { BsSlashCircle } from "react-icons/bs";
import { useSelector } from "react-redux";

function DescriptionFeatures({ singleDescriptionFeatures }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  // {language?ar.property.cnfAppointment:en.property.cnfAppointment}
  return (
    <div className=" p-10 px-14 border-2 border-gray-200 rounded-3xl">
      <div>
        <h1 className="font-bold ">
          {/* Description */}
          {language ? ar.property.description : en.property.description}
        </h1>
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
        <b>
          {/* Features */}
          {language ? ar.property.features : en.property.features}
        </b>
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
          <TableBody>
            <TableRow key="1">
              <TableCell className="sm:text-[11px] text-[10px]">
                <span className=" flex items-center">
                  <MdCheckCircleOutline className="mx-2" />
                  {language ? ar.property.waterMeter : en.property.waterMeter}

                  {/* Water Meter */}
                </span>
              </TableCell>
              <TableCell className="sm:text-[11px] text-[10px]">
                <span className=" flex items-center">
                  <BsSlashCircle className="mx-2 text-lightOrangeHover" />
                  {language ? ar.property.parking : en.property.parking}

                  {/* Parking */}
                </span>
              </TableCell>
              <TableCell className="sm:text-[11px] text-[10px]">
                <span className=" flex items-center">
                  <MdCheckCircleOutline className="mx-2" />
                  {language ? ar.property.pool : en.property.pool}

                  {/* Pool */}
                </span>
              </TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell className="sm:text-[11px] text-[10px]">
                <span className=" flex items-center">
                  <MdCheckCircleOutline className="mx-2" />
                  {language ? ar.property.builtIKApp : en.property.builtIKApp}

                  {/* Built in Kitchen Appliances */}
                </span>
              </TableCell>
              <TableCell className="sm:text-[11px] text-[10px]">
                <span className=" flex items-center">
                  <MdCheckCircleOutline className="mx-2" />
                  {language ? ar.property.centralAC : en.property.centralAC}

                  {/* Central A/C */}
                </span>
              </TableCell>
              <TableCell className="sm:text-[11px] text-[10px]">
                <span className=" flex items-center">
                  <MdCheckCircleOutline className="mx-2" />
                  {language ? ar.property.naturalGas : en.property.naturalGas}

                  {/* Natural Gas */}
                </span>
              </TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell className="sm:text-[11px] text-[10px]">
                <span className=" flex items-center">
                  <BsSlashCircle className="mx-2 text-lightOrangeHover" />
                  {language ? ar.property.balcony : en.property.balcony}

                  {/* Balcony */}
                </span>
              </TableCell>
              <TableCell className="sm:text-[11px] text-[10px]">
                <span className=" flex items-center">
                  <MdCheckCircleOutline className="mx-2" />
                  {language
                    ? ar.property.electricityMeter
                    : en.property.electricityMeter}

                  {/* Electricity Meter */}
                </span>
              </TableCell>
              <TableCell className="sm:text-[11px] text-[10px]">
                <span className=" flex items-center">
                  <MdCheckCircleOutline className="mx-2" />
                  {language ? ar.property.security : en.property.security}

                  {/* Security */}
                </span>
              </TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell className="sm:text-[11px] text-[10px]">
                <span className=" flex items-center">
                  <MdCheckCircleOutline className="mx-2" />
                  {language ? ar.property.petsAllowed : en.property.petsAllowed}

                  {/* Pets Allowed */}
                </span>
              </TableCell>
              <TableCell className="sm:text-[11px] text-[10px]">
                <span className=" flex items-center">
                  <BsSlashCircle className="mx-2 text-lightOrangeHover" />
                  {language ? ar.property.landline : en.property.landline}

                  {/* Landline */}
                </span>
              </TableCell>
              <TableCell className="sm:text-[11px] text-[10px]">
                <span className=" flex items-center">
                  <MdCheckCircleOutline className="mx-2" />
                  {language ? ar.property.maidsRoom : en.property.maidsRoom}

                  {/* Maids Room */}
                </span>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="sm:text-[11px] text-[10px]">
                <span className=" flex items-center">
                  <MdCheckCircleOutline className="mx-2" />
                  {language ? ar.property.elevator : en.property.elevator}

                  {/* Elevator */}
                </span>
              </TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default memo(DescriptionFeatures);
