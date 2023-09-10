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
import { BsSlashCircle } from "react-icons/bs";
import { useSelector } from "react-redux";
import { ar } from "../../language/ar/common";
import { en } from "../../language/en/common";
import ShowMap from "@/Shared/map/ShowMap";

function AddressLocation({ singleAddressLocation }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  // console.log(singleAddressLocation);
  return (
    <div className="lg:flex justify-between  items-center p-10 px-10 border-2 border-gray-200 rounded-3xl">
      <div className=" lg:w-6/12 ">
        <div className="font-bold mb-6 ml-5">
          {" "}
          <b className="sm:text-3xl text-lg">
            {language ? ar.property.address : en.property.address}
          </b>
        </div>
        <Table hideHeader aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME </TableColumn>
            <TableColumn>ROLE</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell className="font-bold">
                {language ? ar.property.room : en.property.room}
              </TableCell>
              <TableCell>{singleAddressLocation.rooms}</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell className="font-bold">
                {language ? ar.property.bathroom : en.property.bathroom}{" "}
              </TableCell>
              <TableCell>{singleAddressLocation.bathRooms}</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell className="font-bold">
                {" "}
                {language ? ar.property.pType : en.property.pType}
              </TableCell>
              <TableCell>{singleAddressLocation.propType}</TableCell>
            </TableRow>

            <TableRow key="5">
              <TableCell className="font-bold">
                {language ? ar.property.furnished : en.property.furnished}

                {/* Furnished */}
              </TableCell>
              <TableCell>
                {" "}
                {singleAddressLocation.isFurnished ? (
                  <MdCheckCircleOutline />
                ) : (
                  <BsSlashCircle />
                )}
              </TableCell>
            </TableRow>
            <TableRow key="6">
              <TableCell className="font-bold">
                {/* Finishing Option */}
                {language ? ar.property.furnishedOp : en.property.furnishedOp}
              </TableCell>
              <TableCell>{singleAddressLocation.finishingType}</TableCell>
            </TableRow>

            <TableRow key="8">
              <TableCell className="font-bold">
                {/* Governorate */}
                {language ? ar.property.governorate : en.property.governorate}
              </TableCell>
              <TableCell>{singleAddressLocation.address.governrate}</TableCell>
            </TableRow>
            <TableRow key="9">
              <TableCell className="font-bold">
                {/* City */}
                {language ? ar.property.city : en.property.city}
              </TableCell>
              <TableCell> {singleAddressLocation.address.region}</TableCell>
            </TableRow>
            <TableRow key="7">
              <TableCell className="font-bold">
                {/* Building Year */}
                {/* {language ? ar.property.buildingYear : en.property.buildingYear} */}
              </TableCell>
              <TableCell>{/* {.buildingYear} */}</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell className="font-bold">
                {/* {language ? ar.property.level : en.property.level} */}
                {/* Level/Number of Levels */}
              </TableCell>
              <TableCell>{/* {singleAddressLocation.level} */}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className=" lg:w-[45%] mt-10 h-[300px]">
        {/* <img
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_1600,c_limit/GoogleMapTA.jpg"
          className="rounded-3xl  "
          loading="lazy"
        /> */}
        {/* {console.log({
        lat:singleAddressLocation?.address.latitude,
      lng:singleAddressLocation?.address.longitude
      })} */}
        <ShowMap
          center={{
            lat: parseFloat(singleAddressLocation.address.latitude),
            lng: parseFloat(singleAddressLocation.address.longitude),
          }}
        />
      </div>
    </div>
  );
}
export default memo(AddressLocation);
