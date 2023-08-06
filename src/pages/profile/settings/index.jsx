import React, { useEffect, useState } from "react";
import UserSettings from "@/components/profile/settings/UserSettings";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const index = () => {
  const router=useRouter()
  // const isLoading = useSelector((state) => state.GlobalState.isLogin);
  const isLoading = useSelector((state) => state.Auth.isLoding);


  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(isLoading)
    if (!isLoading) {
      router.push('/'); // This will navigate to the home page after login is complete
    }
}, [isLoading, router]);

  return <>{loading?(<UserSettings />):(<div className="w-full flex justify-center items-center h-screen ">
  <b> You not have access...</b>
 </div>)}</>;
};
export default index;
