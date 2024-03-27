import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useIsAuth = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSubAdmin, setIsSubAdmin] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const userData = useSelector((state) => state.userProfile.status);
  const userDataStatus = useSelector((state) => state.userProfile.status);
  useEffect(() => {
    if (userDataStatus === "failed") {
      setIsAuth(false);
      setIsAdmin(false);
      setIsSubAdmin(false);
      setIsSuperAdmin(false);
      router.push("/");
    } else if (userDataStatus === "succeeded") {
      setIsAuth(true);
      setIsAdmin(userData.isAdmin);
      setIsSubAdmin(userData.supAdmin);
      setIsSuperAdmin(userData.isSuperAdmin);
    }
  }, [userDataStatus, userData]);
  return { isAuth, isSubAdmin, isAdmin, isSuperAdmin };
};
export default useIsAuth;
