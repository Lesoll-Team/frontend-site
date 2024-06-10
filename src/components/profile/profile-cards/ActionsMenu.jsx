import ReactModal from "@/Shared/ui/ReactModal";
import { deleteProperty } from "@/utils/propertyAPI";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoIosRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { useSelector } from "react-redux";
import DeleteBtn from "./DeleteBtn";
const ActionsMenu = ({ propId, getProperties, isPending, propData }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const [deleteIsOpen, setDeleteIsOpen] = useState(false);
  // const [soldIsOpen, setSoldIsOpen] = useState(false);

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
  const handleDeleteClick = () => {
    setShowMenu(false);
    setDeleteIsOpen(true);
  };
  // const handleSoldClick = () => {
  //   setShowMenu(false);
  //   setSoldIsOpen(true);
  // };
  return (
    <div ref={menuRef} className="relative">
      <button
        onClick={toggleMenu}
        className=" w-9 h-9 rounded-full mx-5 bg-white flex items-center justify-center border drop-shadow-md duration-150"
      >
        <BsThreeDotsVertical />
      </button>

      {showMenu && (
        <div
          className={`absolute w-24 p-2 space-y-1 fade-in bg-white drop-shadow-md top-7 rounded ${language ? "left-7" : "right-7"}`}
        >
          <Link href={`/editproperty/${propData.slug}`}>
            {language ? "تعديل" : "Edit"}
          </Link>
          <hr />
          {/* {!isPending && (
                  <>
                     <button onClick={handleSoldClick}>
                        {language ? "تم البيع" : "Sold"}
                     </button>
                     <hr />
                  </>
               )} */}
          <button onClick={handleDeleteClick} className="text-red-500">
            {language ? "حذف" : "delete"}
          </button>
        </div>
      )}

      <ReactModal modalIsOpen={deleteIsOpen} setModalIsOpen={setDeleteIsOpen}>
        <DeleteBtn
          propId={propId}
          getProperties={getProperties}
          setDeleteIsOpen={setDeleteIsOpen}
        />
      </ReactModal>
    </div>
  );
};
export default ActionsMenu;
