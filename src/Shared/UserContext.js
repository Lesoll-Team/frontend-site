import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";
import { useDispatch } from "react-redux";
import { getUserData } from "@/redux-store/features/auth/userProfileSlice";
import axiosInstance from "./axiosInterceptorInstance";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  // const data = useSelector((state) => state.userProfile.userData);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axiosInstance.get(`/user/profile`);
        console.log("reeeeeed", res);
        setData(res.data.userData);
        dispatch(getUserData());
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const contextValue = useMemo(
    () => ({
      data,
      loading,
    }),
    [data],
  );
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
