import Dropdown from "@/Shared/category/Dropdowns/Dropdown";
import { sortedData } from "@/Shared/search/dropdown/dataDropdown";
import React, { useEffect } from "react";
// import { IoIosStar } from 'react-icons/io';
// import { LuArrowDownUp } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
// import { saveSearchFilter } from '../shared/api';
// import ConfirmModule from '../shared/ConfirmModule';
import {
  sendMessageData,
  setConfirmSendMessage,
  setSaveSearchFilter,
} from "@/redux-store/features/category/categorySlice";
import { useRouter } from "next/router";

const SubBarTitle = ({ result }) => {
  const router = useRouter();

  const dispatch = useDispatch();
  // const userInfo = useSelector((state) => state.userProfile.userData);
  const {
    sort,
    // , messageData, confirmSendMessage, isSaved
  } = useSelector((state) => state.Category);

  const language = useSelector((state) => state.GlobalState.languageIs);
  // const [openSaveFilterInput, setOpenSaveFilterInput] = useState(false);
  useEffect(() => {
    dispatch(setSaveSearchFilter(false));
    dispatch(setConfirmSendMessage(false));
    dispatch(sendMessageData(""));
  }, [router]);

  return (
    <div className="md:container md:mx-auto mx-[20px] flex flex-wrap justify-between items-center  pb-[20px] md:py-[25px]  gap-y-[7px]">
      {/*title filter page */}
      <h1 className=" w-full text-[#4E4E4E] md:w-6/12 text-[17px] md:text-[19px] font-bold">
        {language
          ? result?.supTitleCategory?.ar ||
            "عقارات للبيع و للايجار في مصر (8377)"
          : result?.supTitleCategory?.en ||
            "Properties for sale or rent in Egypt (8377)"}
      </h1>
      {/*sorted and save search filter page */}
      <div className=" z-10    grid md:justify-items-end justify-items-start  w-full md:w-6/12">
        <div className="   w-fit ">
          <Dropdown
            stateName={"sort"}
            // baseIcon={<LuArrowDownUp />}
            data={sortedData}
            defaultValue={language ? "الاحدث" : "Recent"}
            value={sort}
            isSort
            dataOptions="text"
          />
        </div>
      </div>
    </div>
  );
};

export default SubBarTitle;
