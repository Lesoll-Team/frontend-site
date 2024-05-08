import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegUser, FaRegHandshake } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import SelectBtn from "./SelectBtn";
import { updateUserData } from "@/redux-store/features/globalState";
import { getUserData } from "@/redux-store/features/auth/userProfileSlice";

const UserTypeForm = () => {
  const userInfo = useSelector((state) => state.GlobalState.userData);
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();
  const [userType, setUserType] = useState("");
  const [error, setError] = useState(false);
  const selectUserType = (userType) => {
    setUserType(userType);
    setError(false);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (userType) {
      const formData = new FormData();
      formData.append("typeOfUser", userType);
      try {
        dispatch(
          updateUserData({
            userID: userInfo?._id,
            userUpdate: formData,
          }),
        );
        dispatch(getUserData());
      } catch (error) {
        console.error(error);
      }
    } else {
      setError(true);
    }
  };
  return (
    <main className="min-h-[94dvh] container mx-auto flex flex-col items-center justify-center">
      <form
        onSubmit={onSubmit}
        className=" space-y-10 md:space-y-16 flex-col items-center flex  "
      >
        <h1 className="text-3xl md:text-5xl text-center font-semibold">
          {language ? "حدد هل انت؟" : "You Are?"}
        </h1>
        <div className="flex md:flex-row flex-col gap-3 items-stretch">
          <SelectBtn
            btnUserType={"individual"}
            title={language ? "فرد" : "individual"}
            description={"أنت مالك عقار وتتطلع إلى إدراجه للإيجار أو البيع."}
            onSelect={selectUserType}
            icon={<FaRegUser className="text-4xl md:text-7xl text-darkGreen" />}
            useType={userType}
          />
          <SelectBtn
            btnUserType={"broker"}
            title={language ? "سمسار" : "Broker"}
            description={
              " أنت سمسار يربط أصحاب العقارات بالمشترين والمستأجرين المحتملين"
            }
            onSelect={selectUserType}
            icon={
              <FaRegHandshake className="text-4xl md:text-7xl text-darkGreen" />
            }
            useType={userType}
          />
          <SelectBtn
            btnUserType={"company"}
            title={language ? "مطور" : "Developer"}
            description={"أنت تمثل شركة وساطة عقارية أو منظمة تطوير."}
            onSelect={selectUserType}
            icon={
              <BsBuildings className="text-4xl md:text-7xl text-darkGreen" />
            }
            useType={userType}
          />
        </div>
        {error && (
          <p className="text-red-500">
            {language ? "من فضلك قم بالأختيار اولا" : "Please select your type"}
          </p>
        )}
        <button
          className="text-center w-full rounded-lg md:w-80 bg-lightGreen p-3 text-xl font-semibold text-white hover:bg-lightGreenHover duration-150 active:scale-95  border mx-auto"
          type="submit"
        >
          {language ? "التالى" : "Next"}
        </button>
      </form>
    </main>
  );
};
export default UserTypeForm;
