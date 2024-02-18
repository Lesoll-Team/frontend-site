import { FaRegHeart } from "react-icons/fa";

const FavBtn = () => {
  return (
    <button
      type="button"
      className="flex items-center justify-center h-9 w-9 bg-white rounded-full"
    >
      <FaRegHeart className="text-lg" />
    </button>
  );
};
export default FavBtn;
