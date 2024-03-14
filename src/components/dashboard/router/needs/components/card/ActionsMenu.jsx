import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { RiMoreFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import {
  acceptNeed,
  deleteNeed,
  getActiveNeeds,
  getPendingNeeds,
} from "../../redux/pendingNeedsSlice";

const ActionsMenu = ({ needData, type }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const closeMenu = () => {
    setShowMenu(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    }

    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const accept = async () => {
    await dispatch(acceptNeed(needData?._id));
    dispatch(getPendingNeeds());
    closeMenu();
  };
  const deleteNeedById = async () => {
    await dispatch(deleteNeed(needData?._id));
    if (type === "active") {
      dispatch(getActiveNeeds());
    } else {
      dispatch(getPendingNeeds());
    }
    closeMenu();
  };
  return (
    <div ref={menuRef} className="relative">
      <button onClick={toggleMenu}>
        <RiMoreFill className="text-3xl" />
      </button>
      <div
        className={`absolute min-w-[150px] p-2 bg-white rounded-md drop-shadow-lg flex flex-col gap-2 md:bottom-7 ${type === "active" ? "-bottom-20" : "-bottom-32  "} ${showMenu ? "flex" : "hidden"} ${language ? "left-0 " : "right-0"}`}
      >
        {type !== "active" && (
          <>
            <button
              className="w-full py-1 text-green-400 hover:bg-lightNeutral duration-100"
              onClick={accept}
            >
              {language ? "قبول" : "Accept"}
            </button>
            <hr />
          </>
        )}
        <Link
          href={`/edit-need/${needData?._id}`}
          className="text-center hover:bg-lightNeutral duration-100"
          onClick={closeMenu}
        >
          {language ? "تعديل" : "Edit"}
        </Link>
        <hr />
        <button
          onClick={deleteNeedById}
          className="w-full py-1 text-red-500 hover:bg-lightNeutral duration-100"
        >
          {language ? "حذف" : "Delete"}
        </button>
      </div>
    </div>
  );
};

export default ActionsMenu;
