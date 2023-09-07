import { signupUserAsync } from "../../redux-store/features/authSlice";
import { useState } from "react"; //useEffect
import { useDispatch, useSelector } from "react-redux";
import "react-phone-input-2/lib/style.css";
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
  const [countryCode, setCountryCode] = useState("+20");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [typeOfUser, setTypeOfUser] = useState("");
  const [showForm, setShowForm] = useState(false);

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

  const handleRegistration = (e) => {
    e.preventDefault();

    const userData = {
      fullname,
      password,
      email,
      code: countryCode,
      phone: phoneNumber,
      typeOfUser,
    };
    // dispatch(getAllUserData())
    dispatch(signupUserAsync(userData));

    setFullname("");
    setEmail("");
    setPassword("");
    setCountryCode("");
    setPhoneNumber("");
    setTypeOfUser("");
    setShowForm("");
  };
  //   useEffect(()=>{
  //     dispatch(getAllUserData(userToken))
  //  },[userToken,dispatch])
  return (
    <div>
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
          {language ? "فردى" : "individual"}
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
        <form
          onSubmit={handleRegistration}
          className="flex flex-col w-80 md:w-96 py-5 justify-center space-y-4"
        >
          {/* <p>{typeOfUser}</p> */}
          <div>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder={language ? "الإسم" : "Name"}
              className="block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={language ? " البريد الإلكتروني" : "Email Address"}
              className="block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <input
              type="number"
              id="phoneNumber"
              value={phoneNumber}
              placeholder={language ? "رقم التليفون" : "Phone Number"}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-lg px-4 py-2"
            />
          </div>

          <div>
            <input
              type="password"
              id="password"
              value={password}
              placeholder={language ? "كلمة السر" : "Password"}
              onChange={(e) => setPassword(e.target.value)}
              className="block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-lg px-4 py-2"
            />
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
      )}
    </div>
  );
};

export default SignUpForm;
