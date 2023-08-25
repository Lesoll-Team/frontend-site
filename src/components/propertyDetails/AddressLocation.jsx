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


 function AddressLocation({singleAddressLocation}) {
  return (
    <div className="lg:flex justify-between  items-center p-10 px-14 border-2 border-gray-200 rounded-3xl">
      <div className=" lg:w-6/12 ">
   <div className="font-bold mb-6 ml-5">     <h3>Address</h3>
   </div>
        <Table hideHeader aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>NAME</TableColumn>
            <TableColumn>ROLE</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell className="font-bold">Rooms</TableCell>
              <TableCell>{singleAddressLocation.rooms}</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell className="font-bold">Bathroom</TableCell>
              <TableCell>{singleAddressLocation.bathRooms}</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell className="font-bold">Property Type</TableCell>
              <TableCell>{singleAddressLocation.propType}</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell className="font-bold">
                Level/Number of Levels
              </TableCell>
              <TableCell>{singleAddressLocation.level}</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell className="font-bold">Furnished</TableCell>
              <TableCell>       {singleAddressLocation.isFurnished? <MdCheckCircleOutline /> : <BsSlashCircle /> }</TableCell>
            </TableRow>
            <TableRow key="6">
              <TableCell className="font-bold">Finishing Option</TableCell>
              <TableCell>{singleAddressLocation.finishingType}</TableCell>
            </TableRow>
            <TableRow key="7">
              <TableCell className="font-bold">Building Year</TableCell>
              <TableCell>{singleAddressLocation.buildingYear}</TableCell>
            </TableRow>
            <TableRow key="8">
              <TableCell className="font-bold">Governorate</TableCell>
              <TableCell>{singleAddressLocation.address.governrate}</TableCell>
            </TableRow>
            <TableRow key="9">
              <TableCell className="font-bold">City</TableCell>
              <TableCell> {singleAddressLocation.address.region}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className=" lg:w-5/12 ">
        <img
          src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_1600,c_limit/GoogleMapTA.jpg"
          className="rounded-3xl  "
          loading="lazy"
        />
      </div>
    </div>
  );
}
export default memo(AddressLocation)