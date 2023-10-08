import { MdAddCircle } from "react-icons/md";
import { BsCheckCircle } from "react-icons/bs";
import { Fragment, useEffect, useRef, useState } from "react";
// import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { updateUserData } from "../../../redux-store/features/globalState";
import { deleteAccount } from "../../../redux-store/features/authSlice";
import { Avatar } from "@nextui-org/react";
import ConfirmModal from "@/Shared/models/ConfirmModal";
import { verifyEmail } from "@/utils/userAPI";
import EmailVerificationModal from "@/Shared/models/EmailVerificationModal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [countryCode, setCountryCode] = useState("");

  // const [emailVerified] = useState(false);
  const [modelVerified, setModelVerified] = useState(false);
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
    setPhonenumber(`${userInfo?.code + userInfo?.phone}`);
    setCountryCode(userInfo?.code);
  }, [dispatch, userInfo]);
  const phoneNumberwithoutCode = () => {
    if (phonenumber.startsWith(countryCode)) {
      // Remove the code by using the length of the code
      let result = phonenumber.substring(countryCode.length);
      return result;
    } else {
      return phonenumber;
    }
  };
  const handleFormSubmit = async () => {   
     const formData = new FormData();
    formData.append("img", selectedImage);
    formData.append("fullname", userName);
    formData.append("phone", phoneNumberwithoutCode());
    formData.append("code", countryCode);
    // console.log(formData);
    try {
      dispatch(
        updateUserData({
          userID: userDataInfo?._id,
          userToken: userDataInfo?.token,
          userUpdate: formData,
        })
      );
      // console.log(phoneNumberwithoutCode());
    } catch (error) {
      console.error(error);
    }
  };

  const handleVerifyEmail = async () => {
    const resVerify = await verifyEmail();
    if (resVerify.code === 200) {
      setModelVerified(true);
    }
    // console.log(resVerify);
  };

  const deleteUserAccount = () => {
    dispatch(
      deleteAccount({
        userID: userDataInfo?._id,
        userToken: userDataInfo?.token,
      })
    );
  };
  // console.log(userDataInfo);

  return (
    <Fragment>
      <div className="w-full sm:max-w-[700px] mx-auto py-10 px-5 border-2 rounded-xl bg-white drop-shadow-lg">
        <div className="space-y-10">
          <div className="flex justify-start items-center relative   ">
            <Avatar
              src={
                selectedImage
                  ? URL.createObjectURL(selectedImage)
                  : userDataInfo?.avatarUrl
              }
              className="w-24 h-24 text-large"
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
            <p className="font-semibold text-xl mb-2">
              {language ? "الأسم" : "Name"}
            </p>
            <input
              // type="text"
              name="Full Name"
              placeholder="Full Name"
              value={userName || ""}
              onChange={(e) => setUserName(e.target.value)}
              className="block placeholder:text-gray-500 focus:outline-none  font-medium focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
            />
          </div>
          {/* user name */}
          <div className="  ">
            <p className="font-semibold text-xl  mb-2">
              {language ? "أسم المستخدم" : "User Name"}
            </p>
            <p className="block  focus:outline-none text-gray-400  font-medium focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2">
              @{userDataInfo?.username}
              {/* @test1 */}
            </p>
          </div>
          {/* Email */}
          <div className=" relative ">
            <p className="font-semibold text-xl mb-2 ">
              {" "}
              {language ? "البريد الإلكتروني" : "Email"}
            </p>
            <div className="grid ">
              <p
                className="block items-center text-gray-400   font-medium
              overflow-x-auto w-full border-2 rounded-md px-4 py-2"
              >
                <span className="flex justify-between items-center">
                  {userDataInfo?.email}
                  {userDataInfo?.Verified !== false ? (
                    <BsCheckCircle className="text-lg text-lightGreen " />
                  ) : null}
                </span>
              </p>
              {userDataInfo?.Verified !== true ? (
                <button
                  className="bg-green-600  text-center justify-self-end items-end text-white mt-3 -mb-7 py-2 px-3 rounded-lg   "
                  // href={"/"}
                  onClick={handleVerifyEmail}
                >
                  {language ? "التحقق من البريد الإلكتروني" : "Verify Email"}
                </button>
              ) : null}
            </div>
          </div>
          {/* phone number */}
          <div className=" ">
            <p className="font-semibold text-xl  mb-2">
              {language ? "رقم الهاتف" : "Phone Number"}
            </p>
            {/* <input
              // type="number"
              name="Phone Number"
              placeholder="Phone"
              value={phonenumber || ""}
              onChange={(e) => setPhonenumber(e.target.value)}
              className="block placeholder:text-gray-500 focus:outline-none  font-medium focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
            /> */}
            <div dir="ltr">
              <PhoneInput
                inputStyle={{
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  height: "45px",
                  fontSize: "16px",
                  color: "#1b6e6d",
                  borderRadius: "8px",
                  border: "1px",
                }}
                buttonStyle={{
                  height: "45px",

                  backgroundColor: "white",
                }}
                containerStyle={{
                  border: "1px",
                  zIndex: "10000000000000",
                }}
                dropdownStyle={{
                  height: "150px",
                }}
                // disableCountryCode={true}
                autocompleteSearch={true}
                countryCodeEditable={false}
                placeholder={language ? "رقم الهاتف" : "Phone Number"}
                className=" z-30"
                enableSearch={true}
                country={"eg"}
                excludeCountries={["IL"]}
                value={phonenumber}
                onChange={(e, info) => {
                  setPhonenumber(e);
                  setCountryCode(info.dialCode);
                  console.log(info);
                  // if (e) {
                  //   setFormError({ ...formError, phoneNumberError: false });
                  // }
                }}
              />
            </div>
          </div>
          <span>{updateError}</span>

          <ConfirmModal
            title={"confirm update profile"}
            actinFunction={handleFormSubmit}
          >
            <button
              disabled={isUpdated}
              className="rounded-lg w-full bg-lightOrange text-white mt-5  py-2  font-semibold  duration-300 hover:bg-lightOrangeHover md:active:scale-95"
            >
              {language ? "حفظ التغييرات" : "Save Changes"}
            </button>
          </ConfirmModal>
        </div>
      </div>
      <div className="w-full sm:max-w-[700px] my-4 mx-auto py-10 px-5 border-2 rounded-xl  drop-shadow-2xl">
        <p className="text-red-500 ">
          <b>{language ? " حذف الحساب" : "Delete Account"}</b>
        </p>
        <p className="text-darkGray ">
          {language ? " سيتم فقد جميع البيانات والعقارات لديك عند إزالة الحساب"  : "All your data will be deleted including your properties"}
        </p>
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
            {language ? " حذف الحساب" : "Delete Account"}
          </button>
        </ConfirmModal>
      </div>
      {modelVerified && (
        <div className="modal-overlay">
          <EmailVerificationModal onClose={() => setModelVerified(false)} />
          {/* sssss */}
        </div>
      )}
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
