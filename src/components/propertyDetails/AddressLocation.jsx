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

 function AddressLocation() {
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
              <TableCell>1</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell className="font-bold">Bathroom</TableCell>
              <TableCell>1</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell className="font-bold">Property Type</TableCell>
              <TableCell>Residential</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell className="font-bold">
                Level/Number of Levels
              </TableCell>
              <TableCell>Ground</TableCell>
            </TableRow>
            <TableRow key="5">
              <TableCell className="font-bold">Furnished</TableCell>
              <TableCell> <MdCheckCircleOutline/></TableCell>
            </TableRow>
            <TableRow key="6">
              <TableCell className="font-bold">Finishing Option</TableCell>
              <TableCell>Super Lux</TableCell>
            </TableRow>
            <TableRow key="7">
              <TableCell className="font-bold">Building Year</TableCell>
              <TableCell>2016</TableCell>
            </TableRow>
            <TableRow key="8">
              <TableCell className="font-bold">Governorate</TableCell>
              <TableCell>Matrouh</TableCell>
            </TableRow>
            <TableRow key="9">
              <TableCell className="font-bold">City</TableCell>
              <TableCell>Hyena part</TableCell>
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