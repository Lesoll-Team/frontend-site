import { useUser } from "@/Shared/UserContext";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
// import { useSelector } from "react-redux";

const useIsAuth = () => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSubAdmin, setIsSubAdmin] = useState(false);
  const [isSuperAdmin, setIsSuperAdmin] = useState(false);
  const { data, status } = useUser();

  useEffect(() => {
    if (status === "failed") {
      setIsAuth(false);
      setIsAdmin(false);
      setIsSubAdmin(false);
      setIsSuperAdmin(false);
      router.push("/");
    } else if (status === "succeeded") {
      setIsAuth(true);
      setIsAdmin(data.isAdmin);
      setIsSubAdmin(data.supAdmin);
      setIsSuperAdmin(data.isSuperAdmin);
    }
  }, [status, data]);
  return { isAuth, isSubAdmin, isAdmin, isSuperAdmin };
};
export default useIsAuth;
