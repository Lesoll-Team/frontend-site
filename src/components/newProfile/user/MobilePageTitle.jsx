import Link from "next/link";
import { FaArrowLeftLong } from "react-icons/fa6";

const MobilePageTitle = ({ title }) => {
  return (
    <div className={`md:hidden flex items-center justify-between   `}>
      <h3 className="text-lg font-bold text-baseGray">{title}</h3>
      <Link href={"/profile"}>
        <FaArrowLeftLong className="text-baseGray text-2xl" />
      </Link>
    </div>
  );
};
export default MobilePageTitle;
