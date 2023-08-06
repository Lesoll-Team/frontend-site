import React, {  useState } from "react";//useEffect
import { useDispatch, useSelector } from "react-redux";
// import {getAllUserData}from "../../redux-store/features/globalState"

import {
  loginUserAsync
} from "../../redux-store/features/authSlice";
const LoginPage = () => {
  const dispatch = useDispatch();
  const isRegistering = useSelector((state) => state.Auth.isRegistering);
  const registrationError = useSelector((state) => state.Auth.registrationError);
  // const userToken = useSelector((state) => state.Auth.userToken);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = async (e) => {
    e.preventDefault();
      const userData = { email, password };
      dispatch(loginUserAsync(userData));
      setEmail("");
      setPassword("");
  };
// useEffect(()=>{
//    dispatch(getAllUserData(userToken))
// },[userToken,dispatch])
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
          disabled={isRegistering}
          className="rounded-3xl bg-lightOrange text-white mt-5  py-2  font-semibold  duration-300 hover:bg-lightOrangeHover md:active:scale-95"
        >
          {isRegistering ? "Logging In..." : "Login"}
        </button>
        {registrationError && <div>{registrationError}</div>}
      </form>
    </div>
  );
};

export default LoginPage;
