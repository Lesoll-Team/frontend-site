import {
  deleteSavedSearch,
  getSavedSearch,
} from "@/redux-store/features/user/userSavedItemsSlice";
import { formatDate } from "@/utils/FormateData";
import { useDisclosure } from "@nextui-org/react";
import { useEffect, useRef, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import EditSearchModal from "./editSearchModal";
import { TbCheckbox } from "react-icons/tb";
import { RiCheckboxBlankLine } from "react-icons/ri";
import Skeleton from "@/Shared/ui/Skeleton";

const SavedSearchCard = ({ data }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { formattedDate } = formatDate(data?.createdAt);
  const dispatch = useDispatch();
  const onDelete = async () => {
    try {
      await dispatch(deleteSavedSearch(data?._id));
      dispatch(getSavedSearch());
    } catch (error) {}
  };
  useEffect(() => {
    // Function to handle clicks outside of the menu container
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        // Clicked outside of menu container, so hide the menu
        setShowMenu(false);
      }
    }

    // Add event listener to the document body when the menu is shown
    if (showMenu) {
      document.addEventListener("click", handleClickOutside);
    }

    // Cleanup function to remove event listener when component unmounts or menu is hidden
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);
  if (data) {
    return (
      <div className="w-full border-2 py-3 px-2 md:px-6 rounded-md space-y-6 md:space-y-8">
        {/* <button className="p-2 bg-red-500">delete</button> */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-baseGray font-inter text-xs md:text-base">
              {language ? data?.supTitlePageAr : data?.supTitlePageEn}
            </p>
            <div className="relative menu-container" ref={menuRef}>
              <button onClick={() => setShowMenu(!showMenu)}>
                <HiDotsVertical />
              </button>

              <div
                className={`absolute fade-in bg-white min-w-[130px] rounded-lg  drop-shadow left-1 top-5 ${
                  showMenu ? "block" : "hidden"
                }`}
              >
                <EditSearchModal>
                  <button className="text-xs font-semibold px-4 w-full text-center py-5">
                    {language ? "إعادة تسمية البحث" : "Rename Search"}
                  </button>
                </EditSearchModal>
                <hr />
                <button
                  onClick={onDelete}
                  className="text-xs  text-red-500 font-semibold px-4 w-full text-center py-5"
                >
                  {language ? "حذف" : "Delete"}
                </button>
              </div>
            </div>
          </div>
          <h4 className="text-sm  md:text-xl font-bold text-darkGray ">
            {data?.title}
          </h4>
        </div>
        <div className="flex items-center justify-between gap-5 flex-wrap">
          <div
            role="button"
            onClick={() => setIsChecked((prev) => !prev)}
            className={`flex items-center gap-1 ${
              isChecked && "text-lightGreen"
            }`}
          >
            {isChecked ? <TbCheckbox /> : <RiCheckboxBlankLine />}
            <p className="text-sm md:text-base">
              {language
                ? "تلقي رسائل عبر البريد الإلكتروني بالإعلانات الجديدة"
                : "Receive emails with new announcements"}
            </p>
          </div>
          <p className="text-xs md:text-xm text-baseGray">
            {language ? "تم الحفظ فى" : "Saved at"} {formattedDate}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="w-full border-2 py-3 px-2 md:px-6 rounded-md space-y-6 md:space-y-8">
        {/* <button className="p-2 bg-red-500">delete</button> */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <Skeleton className="w-3/12 h-2">
              {language ? data?.supTitlePageAr : data?.supTitlePageEn}
            </Skeleton>

            <HiDotsVertical />
          </div>
          <Skeleton className={"w-4/12 h-4"}></Skeleton>
        </div>
        <div className="flex items-center justify-between gap-5 flex-wrap">
          <Skeleton className={"w-5/12 h-3"}></Skeleton>
          <Skeleton className={"w-1/12 h-2"}></Skeleton>
        </div>
      </div>
    );
  }
};
export default SavedSearchCard;
