import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from "../../redux-store/features/signinSlice";
import { loginUser } from "../../utils/api";

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.SignIn.isLoading);
  const loginError = useSelector((state) => state.SignIn.error);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      dispatch(loginStart());

      const userRespons = { email, password };
      const response = await loginUser(userRespons);
      console.log(response);
      const user = response.userData; // Assuming your API returns the user object after successful login

      // const {email,TypeOfUser,fullname,images,token}=user
      //  localStorage.setItem(userLocalData ,user )
      //     console.log(localStorage.getItem(userLocalData));

      dispatch(loginSuccess(user));

      // Clear form fields after successful login
      setEmail("");
      setPassword("");
    } catch (error) {
      dispatch(loginFailure("Invalid email or password"));
    }
  };

  return (
    <div>
      <form
        onSubmit={handleLogin}
        className="flex flex-col w-80 md:w-96  border-5 justify-center space-y-4"
      >
        <div>
          <input
            placeholder="Email"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
          />
        </div>
        <div>
          <input
            placeholder="Password"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block placeholder:text-gray-500 focus:outline-none   focus:border-lightGreen  w-full border-2 rounded-md px-4 py-2"
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="rounded-3xl bg-lightOrange text-white mt-5  py-2  font-semibold  duration-300 hover:bg-lightOrangeHover md:active:scale-95"
        >
          {isLoading ? "Logging In..." : "Login"}
        </button>
        {loginError && <div>{loginError}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
