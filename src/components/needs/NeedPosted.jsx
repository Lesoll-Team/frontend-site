import { resetData } from "@/redux-store/features/needsSlice";
import { AiFillCheckCircle } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

const NeedPosted = () => {
  const language = useSelector((state) => state.GlobalState.languageIs);

  const dispatch = useDispatch();
  return (
    <div className="w-full flex h-[80dvh] justify-center items-center ">
      <div className="max-w-[650px] border w-full flex flex-col rounded-lg  space-y-4 min-h-[300px] justify-center items-center p-5 bg-white drop-shadow-lg">
        <AiFillCheckCircle className="text-green-500 text-8xl  animate-appearance-in" />
        <h3 className="text-2xl font-semibold">
          {language ? "تم النشر" : "Need Posted"}
        </h3>
        <button
          onClick={() => {
            dispatch(resetData());
          }}
          className="text-lg px-4 font-semibold hover:bg-lightGreen hover:text-white duration-150 py-2 rounded-md border-2 border-lightGreen"
        >
          {language ? "ارسل طلب اخر" : "Post other need "}
        </button>
      </div>
    </div>
  );
};
export default NeedPosted;
