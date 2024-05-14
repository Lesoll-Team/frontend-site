import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from "react";

import axiosInstance from "./axiosInterceptorInstance";
//"idle" | "loading" | "succeeded" |"failed"
const UserContext = createContext({
  data: null,
  status: "idle",
}); // Providing a default structure

export const useUser = () => useContext(UserContext);
export const UserProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const [logout, setLogout] = useState(false);
  const [status, setStatus] = useState("idle");
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setStatus("loading");
        const res = await axiosInstance.get(`/user/profile`);
        setData(res.data.userData);
        setStatus("succeeded");
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        setStatus("failed");
      }
    };

    if (logout) {
      setStatus("idle");
      setData(null);
    } else fetchUser();
  }, [logout, refreshing]);

  const contextValue = useMemo(
    () => ({
      data,
      status,
      setUserData: () => setRefreshing(!refreshing),
      logOutUserData: () => {
        setLogout(true);
        window.location.replace("/");
        window.location.reload();
      },
    }),
    [data],
  );
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
