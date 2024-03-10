import {
  DropdownAction,
  ItemDropdown,
} from "@/components/dashboard/model/DropdownAction";
import { propertyIsSold } from "@/utils/propertyAPI";
import Link from "next/link";
// import { useEffect, useState } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaEdit, FaRegUserCircle } from "react-icons/fa";
// import { TbBrandCashapp } from "react-icons/tb";

const AdminActions = ({ propertyDetails, isSoldChange, setIsSoldChange }) => {
  const handleSoldOutProperty = async (propertyId) => {
    try {
      await propertyIsSold({ propertyId }).then(() =>
        setIsSoldChange(!isSoldChange)
      );
    } catch (error) {
      console.error("Error deleting property handleSoldOutProperty:", error);
    }
  };

  return (
    <div className="fixed right-0 top-[50%] z-50">
      <div className="bg-blue-500 p-2 sm:p-3 text-white">
        <DropdownAction iconIs={<FaEdit />}>
          <ItemDropdown
            label={"Edit"}
            href={`/editproperty/${propertyDetails.getProperty.slug}`}
            action={null}
            id={propertyDetails.getProperty._id}
          />

          <ItemDropdown
            label={
              propertyDetails.getProperty.isSold ? "Sold In ?" : "Sold Out ?"
            }
            href={null}
            action={() =>
              handleSoldOutProperty(propertyDetails.getProperty._id)
            }
            title="تأكيد ان هذا العقار قد تم بيعة "
            description="  تأكيد بيع العقار  الى الارشيف "
          />
        </DropdownAction>
        {/* <Link
          href={`/editproperty/${propertyDetails.getProperty.slug}`}
          className="bg-blue-300 static"
        >
          <FaEdit className="text-xl md:text-2xl" />
        </Link> */}
      </div>
      <div className="bg-lightGreen p-2 sm:p-3 text-white">
        <Link
          href={`/property-details/${propertyDetails.getProperty.slug}`}
          className="bg-blue-300 static"
        >
          <CgWebsite className="text-xl md:text-2xl" />
        </Link>
      </div>
      <div className="bg-lightOrange p-2 sm:p-3 text-white">
        <Link
          href={`/dashboard/user-details/${propertyDetails.getProperty.user.username}`}
          className="bg-blue-300 static"
        >
          <FaRegUserCircle className="text-xl md:text-2xl" />
        </Link>
      </div>
    </div>
  );
};
export default AdminActions;
