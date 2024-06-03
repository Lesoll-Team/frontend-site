import ReactModal from "@/Shared/ui/ReactModal";
import { formatDate } from "@/utils/FormateData";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { deleteDraft } from "../apis/profileApis";
import { Ring } from "@uiball/loaders";
import Button from "@/Shared/ui/Button";

const DraftCard = ({ data, getDrafts }) => {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const { formattedDate } = formatDate(data.createdAt);
  const [isOpen, setIsOpen] = useState();
  const [apiStatus, setApiStatus] = useState("idle");
  const handleDelete = () => {
    deleteDraft({ id: data._id, setApiStatus });
  };
  useEffect(() => {
    if (apiStatus === "success") {
      setApiStatus("idle");
      getDrafts();
    }
  }, [apiStatus]);
  return (
    <>
      <div className="flex items-center justify-between w-full border rounded overflow-hidden h-[140px] md:h-[154px]">
        <Image
          width={"169"}
          height={"154"}
          src={data?.thumbnail}
          className="object-cover h-full w-[30%] md:w-[18%]"
        />
        <div className="w-full h-full px-6 py-5 flex flex-col justify-between">
          <div className="w-full flex items-start justify-between">
            <div>
              <h3 className="line-clamp-1">{data.title}</h3>
              <p>{formattedDate}</p>
            </div>
            <button onClick={() => setIsOpen(true)}>
              <FaRegTrashAlt />
            </button>
          </div>
          <div className="flex items-end h-full justify-end ">
            <Link
              href={`/add-property/${data._id}`}
              className="text-sm md:text-base  px-3 py-1.5 rounded-md bg-lightGreen text-white"
            >
              {language ? "استكمال الإعلان" : "resume draft"}
            </Link>
          </div>
        </div>
      </div>
      <ReactModal modalIsOpen={isOpen} setModalIsOpen={setIsOpen}>
        <div className="py-3 space-y-4 md:min-w-[500px] min-w-[89vw]">
          <h3>
            {language
              ? "هل انت متأكد من حذف الأعلان؟"
              : "Are you sure you want to delete the ad?"}
          </h3>
          <div className="flex justify-end items-center gap-2">
            <Button
              onClick={handleDelete}
              type="button"
              disabled={apiStatus === "loading"}
              className="border border-lightGreen w-fit bg-lightGreen "
            >
              {apiStatus === "loading" ? (
                <Ring size={24} color="#fff" />
              ) : language ? (
                "حذف"
              ) : (
                "Delete"
              )}
            </Button>
            <Button
              onClick={() => setIsOpen(false)}
              type="button"
              disabled={apiStatus === "loading"}
              className="border border-lightGreen w-fit bg-transparent text-lightGreen "
            >
              {language ? "إلغاء" : "Cancel"}
            </Button>
          </div>
        </div>
      </ReactModal>
    </>
  );
};

export default DraftCard;
