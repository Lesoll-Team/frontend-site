import { IoShareSocialOutline } from "react-icons/io5";

const ShareBtn = () => {
  return (
    <button
      type="button"
      className="flex items-center justify-center h-9 w-9  bg-white rounded-full"
    >
      <IoShareSocialOutline className="text-xl" />
    </button>
  );
};
export default ShareBtn;
