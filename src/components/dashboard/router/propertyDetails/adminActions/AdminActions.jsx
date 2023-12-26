import Link from "next/link";
import { CgWebsite } from "react-icons/cg";
import { FaEdit, FaRegUserCircle } from "react-icons/fa";

const AdminActions = ({ propertyDetails }) => {
  return (
    <div className="fixed left-0 top-[50%] z-50">
      <div className="bg-blue-500 p-2 sm:p-3 text-white">
        <Link
          href={`/editproperty/${propertyDetails.getProperty.slug}`}
          className="bg-blue-300 static"
        >
          <FaEdit className="text-xl md:text-2xl" />
        </Link>
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
