import Dropdown from '@/Shared/category/Dropdowns/Dropdown';
import { sortedData } from '@/Shared/search/dropdown/dataDropdown';
import React, { useEffect, useState } from 'react';
import { IoIosStar } from 'react-icons/io';
import { LuArrowDownUp } from 'react-icons/lu';
import { useDispatch, useSelector } from 'react-redux';
import { saveSearchFilter } from '../shared/api';
import ConfirmModule from '../shared/ConfirmModule';
import { sendMessageData, setConfirmSendMessage, setSaveSearchFilter } from '@/redux-store/features/category/categorySlice';
import { useRouter } from 'next/router';

const SubBarTitle = ({ result }) => {
    const router = useRouter();

    const dispatch = useDispatch()
    const userInfo = useSelector((state) => state.userProfile.userData);
    const { sort, messageData, confirmSendMessage, isSaved } = useSelector((state) => state.Category);

    const language = useSelector((state) => state.GlobalState.languageIs);
    const [openSaveFilterInput, setOpenSaveFilterInput] = useState(false);
    useEffect(() => {
        dispatch(setSaveSearchFilter(false))
        dispatch(setConfirmSendMessage(false))
        dispatch(sendMessageData(""))
    }, [router]);
    const handleSendSearchFilter = async () => {
        await saveSearchFilter({
            confirmSendMessage,
            messageData,
            slug: router.asPath,
        }).then(() => {
            setOpenSaveFilterInput(false);
        });
        setOpenSaveFilterInput(!openSaveFilterInput);
    };
    const saveName = () => {
        switch (language) {
            case true:
                return isSaved ? "تم حفظ البحث" : "حفظ البحث"
            case false:
                return isSaved ? "has been saved" : "Save search"
        }
    }
    return (
        <>
            {openSaveFilterInput && (
                <div className="z-[800] h-screen fixed  justify-center w-full flex items-center -mt-20">
                    <ConfirmModule

                        setOpenSaveFilterInput={setOpenSaveFilterInput}
                    />
                    <div className="h-screen absolute -mt-[0px] w-full bg-[#323232] z-[0] opacity-30" />
                </div>
            )}
            <div className="md:container md:mx-auto mx-[20px] flex flex-wrap justify-between items-center py-[30px]  gap-y-[10px]">
                {/*title filter page */}
                <h3 className=" w-full text-[#4E4E4E] md:w-6/12 ">
                    {language
                        ? result?.supTitleCategory?.ar
                        : result?.supTitleCategory?.en}
                </h3>
                {/*sorted and save search filter page */}
                <div className="flex z-10 gap-[2rem]  md:justify-end justify-between w-full md:w-6/12">
                    <div className="flex  whitespace-nowrap gap-x-3 items-center">
                        {/* <span className="text-[12px] md:text-[20px]">
                            {language ? "ترتيب :" : "Sort by"}
                        </span> */}
                        <Dropdown
                            stateName={"sort"}
                            baseIcon={<LuArrowDownUp />}
                            data={sortedData}
                            defaultValue={language ? "الاحدث" : "recent"}
                            value={sort}
                            isSort
                            dataOptions="text"
                        />
                    </div>
                    {userInfo && (
                        <button
                            disabled={isSaved}
                            onClick={handleSendSearchFilter}
                            className="indent-2 h-[24px] md:h-[40px] md:min-w-[8.438rem] min-w-[6rem]  rounded-[1vh] flex items-center gap-x-1 md:justify-between 
                    md:px-3 
                    text-[12px] md:text-[20px]
                    whitespace-nowrap
                    "
                        >
                            {saveName()}
                            <IoIosStar
                                className={`${isSaved
                                    ? "fill-lightGreen"
                                    : "fill-none stroke-[20px] stroke-black"
                                    } `}
                            />
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

export default SubBarTitle;
