import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  registerStart,
  registerSuccess,
  registerFailure,
} from "../../redux-store/features/userSlice";
import { useQueryClient } from "react-query";
import { registerUser } from "../../utils/api";

const SignInForm = () => {
  const dispatch = useDispatch();
  const isRegistering = useSelector((state) => state.User.isRegistering);
  const registrationError = useSelector(
    (state) => state.User.registrationError
  );
  const queryClient = useQueryClient();

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [typeOfUser, setTypeOfUser] = useState("");
  const [showForm, setShowForm] = useState(false);
  // const [userType, setUserType] = useState("");
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

  const handleRegistration = async (e) => {
    // console.log(type);
    e.preventDefault();
    dispatch(registerStart());

    try {
      const userData = {
        fullname,
        password,
        email,
        countryCode,
        phoneNumber,
        typeOfUser,
      };
      const newUser = await registerUser(userData);
      dispatch(registerSuccess());

      // Assuming you want to invalidate the user list query to trigger a refetch
      queryClient.invalidateQueries("users");

      console.log("User registered:", newUser);

      // Clear the form fields after successful registration
      setFullname("");
      setPassword("");
      setEmail("");
      setCountryCode("");
      setPhoneNumber("");
      setTypeOfUser("");
    } catch (error) {
      dispatch(registerFailure(error.message));
    }
  };
  console.log(typeOfUser);

  return (
    <div>
      {/* <h2>User Registration</h2> */}
      <div className="flex justify-evenly w-80 md:w-96 md:gap-3 gap-1">
        <button
          onClick={setIndividual}
          className={`cursor-pointer border-2 border-lightGreen py-2 px-6  rounded-md md:duration-300 hover:bg-lightGreen hover:text-white ${
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
          individual
        </button>
        <button
          onClick={setBroker}
          className={`cursor-pointer border-2 border-lightGreen py-2 px-6 rounded-md md:duration-300 hover:bg-lightGreen hover:text-white ${
            typeOfUser === "broker"
              ? "bg-lightGreen text-white"
              : typeOfUser !== ""
              ? "border-gray-500 border-[1px] text-gray-600 opacity-50 hover:border-lightGreen hover:opacity-100 hover:text-black duration-300"
              : ""
          } ${
            typeOfUser !== "broker" || (typeOfUser === "" && "border-gray-600")
          }`}
        >
          Broker
        </button>
        <button
          onClick={setCompany}
          className={`cursor-pointer border-2 border-lightGreen py-2 px-6 rounded-md md:duration-300 hover:bg-lightGreen hover:text-white ${
            typeOfUser === "company"
              ? "bg-lightGreen text-white"
              : typeOfUser !== ""
              ? "border-gray-500 border-[1px] text-gray-600 opacity-50 hover:border-lightGreen hover:opacity-100 hover:text-black duration-300"
              : ""
          } ${
            typeOfUser !== "company" || (typeOfUser === "" && "border-gray-600")
          }`}
        >
          Developers
        </button>
      </div>
      <p className="text-center w-80 md:w-96 mt-2  text-gray-600">
        {typeOfUser === "individual"
          ? "you are the owner of a property and looking to list it for rent or sale."
          : typeOfUser === "broker"
          ? "you are a broker connecting property owners with potential buyers."
          : typeOfUser === "company"
          ? " you represent a real estate broker or developer Organization."
          : "To get started, please select your registration role from these options"}
      </p>
      {showForm && (
        <form
          onSubmit={handleRegistration}
          className="flex flex-col w-80 md:w-96  border-5 justify-center space-y-4"
        >
          <p>{typeOfUser}</p>
          <div>
            <input
              type="text"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              placeholder="Name"
              className="block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
              className="block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <input
              type="number"
              id="phoneNumber"
              value={phoneNumber}
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
            />
          </div>

          <div>
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              className="block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
            />
          </div>
          <button
            type="submit"
            disabled={isRegistering}
            className="rounded-3xl bg-lightOrange text-white mt-5  py-2  font-semibold  duration-300 hover:bg-lightOrangeHover md:active:scale-95"
          >
            {isRegistering ? "Signing Up..." : "Sign Up"}
          </button>
          {registrationError && <p>Error: {registrationError}</p>}
        </form>
      )}
    </div>
  );
};

export default SignInForm;
