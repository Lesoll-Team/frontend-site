import DeleteModal from "@/Shared/models/DeleteModal";
import { deleteProperty } from "@/utils/propertyAPI";
import { useState } from "react";
import { FiTrash2 } from "react-icons/fi";
import { IoIosRadioButtonOn, IoMdRadioButtonOff } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";

const DeleteBtn = ({ propId, onDelete }) => {
  const dispatch = useDispatch();
  const [reason, setReason] = useState("");
  const [selectedReason, setSelectedReason] = useState("");
  const [error, setError] = useState(false);
  const language = useSelector((state) => state.GlobalState.languageIs);

  const onReasonSelect = (selected, messege) => {
    setError(false);
    setSelectedReason(selected);
    setReason(messege);
  };
  const deleteProp = async () => {
    try {
      await deleteProperty(propId, reason);
      dispatch(onDelete);
    } catch (error) {
      console.error("Error del prop:", error);
    }
  };
  return (
    <DeleteModal
      selectedReason={selectedReason}
      OpenButton={
        <button className=" w-9 h-9 rounded-full mx-5 bg-white flex items-center justify-center border drop-shadow-md hover:text-red-500 duration-150">
          <FiTrash2 className="text-xl " />
        </button>
      }
      reason={reason}
      error={error}
      setError={setError}
      deleteProp={deleteProp}
    >
      <div className="flex flex-col items-start gap-3 mb-3">
        <h3 className="text-2xl fomt-semiBold">
          {language
            ? " ما سبب رغبتك في حذف هذا العقار؟"
            : "What is the reason you want to delete this property?"}
        </h3>
        <button
          onClick={() =>
            onReasonSelect("lesoll", "تم البيع / التأجير من خلال ليسول")
          }
          type="button"
          className="flex gap-2 items-center text-lg font-normal"
        >
          {selectedReason === "lesoll" ? (
            <IoIosRadioButtonOn className="text-lightGreen" />
          ) : (
            <IoMdRadioButtonOff className="text-lightGreen" />
          )}

          {language ? "تم البيع / التأجير من خلال ليسول" : ""}
        </button>
        <button
          onClick={() =>
            onReasonSelect("non-lesoll", "تم البيع / التأجير من خلال وسيط اخر")
          }
          type="button"
          className="flex gap-2 items-center text-lg font-normal"
        >
          {selectedReason === "non-lesoll" ? (
            <IoIosRadioButtonOn className="text-lightGreen" />
          ) : (
            <IoMdRadioButtonOff className="text-lightGreen" />
          )}
          {language ? "تم البيع / التأجير من خلال وسيط اخر" : ""}
        </button>
        <button
          onClick={() => {
            onReasonSelect("other", otherMessage);
          }}
          type="button"
          className="flex gap-2 items-center text-lg font-normal"
        >
          {selectedReason === "other" ? (
            <IoIosRadioButtonOn className="text-lightGreen" />
          ) : (
            <IoMdRadioButtonOff className="text-lightGreen" />
          )}
          {language ? "اخرى" : ""}
        </button>
        {selectedReason === "other" && (
          <textarea
            value={otherMessage}
            onChange={(e) => {
              setReason(e.target.value);
              setOtherMessage(e.target.value);
            }}
            className={`resize-none w-full p-2 border-[2px] md:border-[3px] rounded-md focus:ring-0 focus:border-lightGreen focus:outline-none animate-appearance-in ${
              selectedReason !== "other" && "animate-appearance-out"
            }`}
            placeholder={language ? "سبب أخر" : "Other reason"}
            name=""
            id=""
            cols="30"
            rows="5"
          ></textarea>
        )}
      </div>
    </DeleteModal>
  );
};
export default DeleteBtn;
