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
    <div className="lg:flex justify-between  items-center p-2  rounded-3xl">
      <div className=" lg:w-[100%]  h-[300px]">
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
