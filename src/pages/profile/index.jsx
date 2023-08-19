import React, { useEffect, useState } from "react";
import Profile from "@/components/profile/Profile";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import Head from "next/head";
const ProfilePage = () => {
  const router=useRouter()

  // const isLoading = useSelector((state) => state.GlobalState.isLogin);
  const isLoading = useSelector((state) => state.Auth.isLoding);

  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    setLoading(isLoading)
    if (!isLoading) {
      router.push('/'); // This will navigate to the home page after login is complete
    }
//     console.log(isLoading);
// console.log(loading);
}, [isLoading, router]);
  return <>
      <Head><title>Lesoll Profile</title></Head> 

  {loading ?(

  <Profile />):(<div className="w-full flex justify-center items-center h-screen ">
  <b> You not have access...</b>
 </div>)}

  </>;
};

export default ProfilePage;
