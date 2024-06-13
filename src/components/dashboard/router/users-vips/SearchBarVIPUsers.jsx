import { useRef, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { downloadFileVipUsers } from "@/utils/dashboardApi/paymentDetailsAPI";

const SearchBar = ({
  setSearchByKeywords,
  setEndDate,
  setStartDate,
  startDate,
  endDate,
  setClickChange,
  clickChange,
}) => {
  const inputRef = useRef();
  const [isError, setIsError] = useState(false);
  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearchByKeywords(inputRef.current.value || "");
    setClickChange(!clickChange);
  };
  const formatDate = (inputDateString) => {
    const parsedDate = new Date(inputDateString);
    const year = parsedDate.getFullYear();
    const month = String(parsedDate.getMonth() + 1).padStart(2, "0"); // Months are 0-based, so add 1 and pad with '0' if needed
    const day = String(parsedDate.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const handleDownloadUsersVipsSheet = async ({ endDate, startDate }) => {
    const newEndDate = formatDate(endDate);
    const newStartDate = formatDate(startDate);
    if (newEndDate !== "NaN-NaN-NaN" || newStartDate !== "NaN-NaN-NaN") {
      setIsError(false);
      await downloadFileVipUsers({
        endDate: newEndDate,
        startDate: newStartDate,
      });
    } else {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 2000);
    }
  };
  return (
    <form
      onSubmit={handleSearchInput}
      className="w-full flex md:flex-row flex-col justify-between bg-gray-200 gap-4 p-2"
    >
      <div className="md:w-6/12 w-full flex items-center justify-center py-1 bg-white rounded-md gap-x-2 ">
        <input
          type="text"
          ref={inputRef}
          placeholder="Search by order id ... "
          className="w-full h-8 text-xl py-2 indent-2 focus:outline-none"
        />
        <IoSearchSharp className="mx-2 text-2xl" />
        <button
          onClick={() => setClickChange(!clickChange)}
          type="submit"
          className="p-2 bg-black text-white rounded-md"
        >
          search
        </button>
      </div>

      <div className="flex  md:w-fit w-full justify-between items-center space-x-4">
        <div className="flex md:flex-row flex-col">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            dateFormat="yyyy-MM-dd"
            placeholderText="Start date"
            className={`${isError ? "placeholder-red-600" : "placeholder-white"} border-1 rounded-lg indent-2 p-2 outline-none caret-transparent text-white bg-black placeholder-white cursor-pointer text-center placeholder-center font-bold`}
            isClearable={startDate}
          />
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            dateFormat="yyyy-MM-dd"
            className={`${isError ? "placeholder-red-600" : "placeholder-white"} border-1 rounded-lg indent-2 p-2 outline-none caret-transparent text-white bg-black  cursor-pointer text-center placeholder-center font-bold `}
            isClearable={endDate}
            placeholderText="End date"
          />
        </div>
        <button
          onClick={() => handleDownloadUsersVipsSheet({ endDate, startDate })}
          className="bg-white w-[40px] h-[40px] flex justify-center items-center rounded-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'><circle cx='20' cy='20' r='20' fill='none' stroke='black' stroke-width='4' stroke-dasharray='15,6'/></svg>")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "40px 40px",
          }}
        >
          <FaCloudDownloadAlt className="text-2xl" />
        </button>
      </div>
    </form>
  );
};
export default SearchBar;
