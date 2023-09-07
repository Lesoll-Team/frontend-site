import { MdAddCircle } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { updateUserData } from "../../../redux-store/features/globalState";
import { deleteAccount } from "../../../redux-store/features/authSlice";
import { Avatar } from "@nextui-org/react";
import ConfirmModal from "@/Shared/models/ConfirmModal";
const PersonalInfo = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [emailVerified] = useState(false);
  const userInfo = useSelector((state) => state.GlobalState.userData);
  const isUpdated = useSelector((state) => state.GlobalState.isUpdated);
  const updateError = useSelector((state) => state.GlobalState.updateError);
  const [userDataInfo, setUserDataInfo] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const isRegistering = useSelector((state) => state.Auth.isRegistering);
  const addImgRef = useRef(null);
  const language = useSelector((state) => state.GlobalState.languageIs);
  useEffect(() => {
    setUserDataInfo(userInfo);
    setUserName(userInfo?.fullname);
    setPhonenumber(userInfo?.phone);
  }, [dispatch, userInfo]);

  const handleFormSubmit = async (e) => {
  
    const formData = new FormData();
    formData.append("img", selectedImage);
    formData.append("fullname", userName);
    formData.append("phone", phonenumber);
    // console.log(formData);
    try {
      dispatch(
        updateUserData({
          userID: userDataInfo?._id,
          userToken: userDataInfo?.token,
          userUpdate: formData,
        })
      );
    } catch (error) {
      console.error(error);
    }
  };

  const deleteUserAccount = (e) => {

    dispatch(
      deleteAccount({
        userID: userDataInfo?._id,
        userToken: userDataInfo?.token,
      })
    );
  };

  return (
    <Fragment>
      <div className="w-full sm:max-w-[700px] mx-auto py-10 px-5 border-2 rounded-xl bg-white drop-shadow-lg">
        <div className="space-y-10">
          {/*img user */}
          <div className="flex justify-start items-center relative   ">
            {/* <img
              // src={userImg}
              src={userDataInfo?.avatarUrl}
              alt="user img"
              className="w-[150px] h-[150px] object-cover rounded-full"
            /> */}
            <Avatar
              src={userDataInfo?.avatarUrl}
              className="w-24 h-24 text-large"
              // showFallback
            />
            <div
              onClick={() => {
                if (addImgRef.current) {
                  addImgRef.current.click();
                }
              }}
              className={` bg-lightGreen  z-10 top-8 rounded-full w-10 h-10 flex justify-center items-center relative overflow- cursor-pointer overflow-hidden border-gray-300 ${
                language ? "left-8" : "right-8"
              }`}
            >
              <input
                hidden
                type="file"
                ref={addImgRef}
                // accept="image/"
                onChange={(e) => setSelectedImage(e.target.files[0])}
                className="scale-[2] right-5 bottom-0 absolute  top-2 cursor-pointer"
              />
              <MdAddCircle className="w-full text-2xl text-white" />
            </div>
          </div>
          {/* name */}
          <div className=" ">
            <p className="font-semibold text-xl mb-2">Name</p>
            <input
              // type="text"
              placeholder="Full Name"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="block placeholder:text-gray-500 focus:outline-none  font-medium focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
            />
          </div>
          {/* user name */}
          <div className="  ">
            <p className="font-semibold text-xl  mb-2">User Name</p>
            <p className="block  focus:outline-none text-gray-400  font-medium focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2">
              @{userDataInfo?.username}
              {/* @test1 */}
            </p>
          </div>
          {/* Email */}
          <div className=" relative ">
            <p className="font-semibold text-xl mb-2 ">Email</p>
            <div className="grid">
              <p className="block text-gray-400   font-medium focus:border-lightGreen overflow-x-auto w-full border-2 rounded-md px-4 py-2">
                {userDataInfo?.email}
                {/* test@email.com */}
              </p>
              {emailVerified === true ? (
                <BsCheckCircle className="absolute right-3 bottom-[13px] text-lg text-green-600" />
              ) : (
                <Link
                  className="bg-green-600 w-28 text-center justify-self-end items-end text-white mt-3 -mb-7 py-2 px-3 rounded-lg   "
                  href={"/"}
                >
                  Verify Email
                </Link>
              )}
            </div>
          </div>
          {/* phone number */}
          <div className=" ">
            <p className="font-semibold text-xl  mb-2">Phone Number</p>
            <input
              // type="number"
              placeholder="Phone"
              value={phonenumber}
              onChange={(e) => setPhonenumber(e.target.value)}
              className="block placeholder:text-gray-500 focus:outline-none  font-medium focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
            />
          </div>
          <span>{updateError}</span>

          <ConfirmModal title={"confirm update profile"} actinFunction={handleFormSubmit}>
          <button
            disabled={isUpdated}
            className="rounded-lg w-full bg-lightOrange text-white mt-5  py-2  font-semibold  duration-300 hover:bg-lightOrangeHover md:active:scale-95"
          >
            Save Changes
          </button>
          </ConfirmModal>
        </div>
      </div>
      <div className="w-full sm:max-w-[700px] my-4 mx-auto py-10 px-5 border-2 rounded-xl ">
        <h2 className="text-red-500 ">
          <b>Delete Account</b>
        </h2>
        <h4 className="text-darkGray ">
          {" "}
          The door misses a camel || الباب يفوت جمل
        </h4>
        <ConfirmModal
          title={language ? "تأكيد إزالة الحساب" : "Confirm Account Deletion "}
          description={
            language
              ? "سيتم فقد جميع البيانات والعقارات لديك عند إزالة الحساب"
              : "All your data will be deleted including your properties "
          }
          actinFunction={deleteUserAccount}
        >
          <button
            disabled={isRegistering}
            className="rounded-lg px-3 bg-red-600 text-white mt-5  py-2  font-semibold
        duration-300 hover:bg-red-500 md:active:scale-95"
          >
            Delete Account
          </button>
        </ConfirmModal>
      </div>
    </Fragment>
  );
};
export default PersonalInfo;

/* <div className="space-y-3 ">
          <p className="font-semibold text-xl  mb-2">
            Contact method
          </p>

          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="appearance-none  rounded-sm border-2 w-5 h-5 border-lightGreen p-1 checked:border-white checked:bg-lightGreen checked:ring-1 checked:ring-lightGreen "
            />
            <label htmlFor="">Phone Call</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="appearance-none  rounded-sm border-2 w-5 h-5 border-lightGreen p-1 checked:border-white checked:bg-lightGreen checked:ring-1 checked:ring-lightGreen "
            />
            <label htmlFor="">Whatsapp</label>
          </div>
          <div className="flex gap-2 items-center">
            <input
              type="checkbox"
              className="appearance-none  rounded-sm border-2 w-5 h-5 border-lightGreen p-1 checked:border-white checked:bg-lightGreen checked:ring-1 checked:ring-lightGreen "
            />
            <label htmlFor="">Lesoll Chat</label>
          </div>
        </div> */
