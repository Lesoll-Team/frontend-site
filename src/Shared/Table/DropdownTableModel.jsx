import { memo } from "react";
import { IoMdCheckmark } from "react-icons/io";

const DropdownTableModel = ({
  list,
  setFilterSuccessOptions,
  filterSuccessOptions,
}) => {
  return (
    <div className="absolute top-[35px] drop-shadow-md rounded-b-md min-w-[100px] bg-white w-full px-2 ">
      {list.map((item, index) => (
        <button
          onClick={() => setFilterSuccessOptions(item.toLowerCase())}
          key={index}
          className="flex  items-center justify-between cursor-pointer w-full hover:bg-gray-100  p-1 "
        >
          {item}
          {filterSuccessOptions === item.toLowerCase() && <IoMdCheckmark />}
        </button>
      ))}
    </div>
  );
};
export default memo(DropdownTableModel);
