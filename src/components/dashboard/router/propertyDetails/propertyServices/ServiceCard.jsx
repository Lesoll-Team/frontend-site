import { FaCheckCircle } from "react-icons/fa";

const ServiceCard = ({ service }) => {
  return (
    <div className="flex items-center gap-1 bg-gray-100 px-4 py-1 rounded-lg">
      <FaCheckCircle className="text-green-400" />
      <p>{service}</p>
    </div>
  );
};
export default ServiceCard;
