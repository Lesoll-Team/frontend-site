import { signupUserAsync } from "../../redux-store/features/authSlice";
import { useState } from "react"; //useEffect
import { useDispatch, useSelector } from "react-redux";
import "react-phone-input-2/lib/style.css";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { Button, code } from "@nextui-org/react";
import PhoneInput from "react-phone-input-2";
import { signWithGoogle } from "@/utils/userAPI";
// import {getAllUserData}from "../../redux-store/features/globalState"

const SignUpForm = () => {
  const dispatch = useDispatch();

  const isRegistering = useSelector((state) => state.Auth.isRegistering);
  const language = useSelector((state) => state.GlobalState.languageIs);
  // const userToken = useSelector((state) => state.Auth.userToken);
  const registrationError = useSelector(
    (state) => state.Auth.registrationError
  );

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [typeOfUser, setTypeOfUser] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const [formError, setFormError] = useState({
    nameError: false,
    emailError: false,
    phoneNumberError: false,
    passwordError: false,
    validEmail: false,
  });
  const phoneNumberwithoutCode = () => {
    if (phoneNumber.startsWith(countryCode)) {
      // Remove the code by using the length of the code
      let result = phoneNumber.substring(countryCode.length);
      return result;
    } else {
      return phoneNumber;
    }
  };
  const setIndividual = () => {
    setTypeOfUser("individual");
    setShowForm(true);
  };
  const setBroker = () => {
    setTypeOfUser("broker");
    setShowForm(true);
  };
  const setCompany = () => {
    setTypeOfUser("company");
    setShowForm(true);
  };
  const toggleShowPassword = () => setShowPassword(!showPassword);

  const isValidEmail = (email) => {
    // Regular expression for a valid email address
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleRegistration = (e) => {
    e.preventDefault();

    const userData = {
      fullname,
      password,
      email,
      code: countryCode,
      phone: phoneNumberwithoutCode(),
      typeOfUser,
    };
    if (fullname && password && email && phoneNumber && isValidEmail(email)) {
      dispatch(signupUserAsync(userData));
      // console.log(userData);
    }
    if (!password) {
      setFormError({ ...formError, passwordError: true });
    }
    if (!phoneNumber) {
      setFormError({ ...formError, phoneNumberError: true });
    }
    if (!email) {
      setFormError({ ...formError, emailError: true });
    }
    if (!fullname) {
      setFormError({ ...formError, nameError: true });
    }
    if (email && !isValidEmail(email)) {
      setFormError({ ...formError, validEmail: true });
    }

    // dispatch(getAllUserData())

    // setFullname("");
    // setEmail("");
    // setPassword("");
    // setCountryCode("");
    // setPhoneNumber("");
    // setTypeOfUser("");
    // setShowForm("");
  };
  //   useEffect(()=>{
  //     dispatch(getAllUserData(userToken))
  //  },[userToken,dispatch])
  const handleGoogleAuth = async () => {
    // e.preventDefault();

    await signWithGoogle();
    // console.log(res);
  };
  return (
    <div className="animate-appearance-in ">
      <div className="flex justify-evenly w-80 md:w-96 md:gap-3 gap-1">
        <button
          onClick={setIndividual}
          className={`cursor-pointer font-semibold border-[1px] border-lightGreen py-2 text-xs w-[30%] text-center sm:text-base  rounded-lg md:duration-300 hover:bg-lightGreen hover:text-white ${
            typeOfUser === "individual"
              ? "bg-lightGreen text-white"
              : typeOfUser !== ""
              ? "border-gray-500 border-[1px] text-gray-600 opacity-50 hover:border-lightGreen hover:opacity-100 hover:text-black duration-300"
              : ""
          } ${
            typeOfUser !== "individual" ||
            (typeOfUser === "" && "border-gray-600")
          }`}
        >
          {language ? "فرد" : "individual"}
        </button>
        <button
          onClick={setBroker}
          className={`cursor-pointer border-[1px] font-semibold border-lightGreen py-2 text-xs w-[30%] text-center sm:text-base rounded-lg md:duration-300 hover:bg-lightGreen hover:text-white ${
            typeOfUser === "broker"
              ? "bg-lightGreen text-white"
              : typeOfUser !== ""
              ? "border-gray-500 border-[1px] text-gray-600 opacity-50 hover:border-lightGreen hover:opacity-100 hover:text-black duration-300"
              : ""
          } ${
            typeOfUser !== "broker" || (typeOfUser === "" && "border-gray-600")
          }`}
        >
          {language ? "سمسار" : "Broker"}
        </button>
        <button
          onClick={setCompany}
          className={`cursor-pointer border-[1px] font-semibold border-lightGreen py-2 text-xs w-[30%] text-center sm:text-base rounded-lg md:duration-300 hover:bg-lightGreen hover:text-white ${
            typeOfUser === "company"
              ? "bg-lightGreen text-white"
              : typeOfUser !== ""
              ? "border-gray-500 border-[1px] text-gray-600 opacity-50 hover:border-lightGreen hover:opacity-100 hover:text-black duration-300"
              : ""
          } ${
            typeOfUser !== "company" || (typeOfUser === "" && "border-gray-600")
          }`}
        >
          {language ? "مطور" : "Developer"}
        </button>
      </div>
      <p className="text-center w-80 md:w-96 mt-3 text-sm sm:text-base font-semibold text-gray-600">
        {typeOfUser === "individual"
          ? language
            ? "أنت مالك عقار وتتطلع إلى إدراجه للإيجار أو البيع."
            : "you are the owner of a property and looking to list it for rent or sale."
          : typeOfUser === "broker"
          ? language
            ? "أنت سمسار يربط أصحاب العقارات بالمشترين المحتملين."
            : "you are a broker connecting property owners with potential buyers."
          : typeOfUser === "company"
          ? language
            ? "أنت تمثل وسيطًا عقاريًا أو منظمة تطوير."
            : " you represent a real estate broker or developer Organization."
          : language
          ? "للبدء، يرجى تحديد دور التسجيل الخاص بك من هذه الخيارات"
          : "To get started, please select your registration role from these options"}
      </p>
      {showForm && (
        <div>
          <form
            onSubmit={handleRegistration}
            className="flex flex-col w-80 animate-appearance-in md:w-96 py-5 justify-center space-y-4"
          >
            {/* <p>{typeOfUser}</p> */}
            <div>
              <input
                type="text"
                id="fullname"
                name="fullname"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                  if (e.target.value) {
                    setFormError({ ...formError, nameError: false });
                  }
                }}
                placeholder={language ? "الإسم" : "Name"}
                className={`block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-lg px-4 py-2 ${
                  formError.nameError && "border-red-500"
                }`}
              />
              {formError.nameError && (
                <p className="text-red-500">please enter your name</p>
              )}
            </div>

            <div>
              <input
                id="email"
                value={email}
                name="email"
                onChange={(e) => {
                  if (e.target.value) {
                    setFormError({
                      ...formError,
                      emailError: false,
                      validEmail: false,
                    });
                  }
                  setEmail(e.target.value);
                }}
                placeholder={language ? " البريد الإلكتروني" : "Email Address"}
                className={`block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-lg px-4 py-2 ${
                  (formError.emailError || formError.validEmail) &&
                  "border-red-500"
                }`}
              />
              {formError.emailError && (
                <p className="text-red-500">please enter your email</p>
              )}
              {formError.validEmail && (
                <p className="text-red-500">please enter a valid email</p>
              )}
            </div>

            <div>
              {formError.phoneNumberError && (
                <p className="text-red-500">please enter your phone</p>
              )}
            </div>
            <div dir="ltr">
              {" "}
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
                value={phoneNumber}
                onChange={(e, info) => {
                  setPhoneNumber(e);
                  setCountryCode(info.dialCode);
                  // console.log(info);
                  if (e) {
                    setFormError({ ...formError, phoneNumberError: false });
                  }
                }}
              />
              {formError.phoneNumberError && (
                <p className="text-red-500">please enter your phone</p>
              )}
            </div>
            <div>
              <div className="flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  placeholder={language ? "كلمة السر" : "Password"}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    if (e.target.value) {
                      setFormError({ ...formError, passwordError: false });
                    }
                  }}
                  className={`block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-lg px-4 py-2 ${
                    formError.passwordError && "border-red-500"
                  }`}
                />
                {showPassword ? (
                  <AiOutlineEye
                    onClick={toggleShowPassword}
                    className="-mx-8 cursor-pointer text-darkGray text-xl"
                  />
                ) : (
                  <AiOutlineEyeInvisible
                    onClick={toggleShowPassword}
                    className="-mx-8 cursor-pointer text-darkGray text-xl"
                  />
                )}
              </div>
              {formError.passwordError && (
                <p className="text-red-500">please enter your password</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isRegistering}
              className="rounded-3xl bg-lightOrange text-white mt-5  py-2  font-semibold  duration-300 hover:bg-lightOrangeHover md:active:scale-95"
            >
              {isRegistering
                ? language
                  ? "...جارى التسجيل "
                  : "Signing Up..."
                : language
                ? "التسجيل"
                : "Sign Up"}
            </button>
            {registrationError && <p>Error: {registrationError}</p>}
          </form>
          <div className="flex items-center  px-14 ">
            <hr className=" border-[1px] w-full border-default-300" />
            <span className="px-2 font-medium">{language ? "او" : "or"}</span>
            <hr className=" border-[1px] w-full border-default-300" />
          </div>
          <div className="flex items-center px-4 justify-center">
            <Button
              onClick={handleGoogleAuth}
              variant="bordered"
              isIconOnly
              radius="sm"
              className="w-full py-5 text-lg mt-3 "
            >
              <span>
                {language ? "تسجيل الدخول بجوجل" : "Log In With Google"}
              </span>
              <FcGoogle className="text-2xl mx-3" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SignUpForm;
