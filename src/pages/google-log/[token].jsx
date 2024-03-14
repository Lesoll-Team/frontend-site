import SelectBtn from "@/components/userTypeForm/SelectBtn";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegUser } from "react-icons/fa";
import { FaRegHandshake } from "react-icons/fa";
import { BsBuildings } from "react-icons/bs";
import { Button } from "@nextui-org/react";
import { signInWithGoogle } from "@/redux-store/features/authSlice";
import { updateGoogleData } from "@/utils/userAPI";
import Head from "next/head";
function index() {
  const dispatch = useDispatch();

  const router = useRouter();
  const token = router?.query?.token;

  useEffect(() => {
    if (token) {
      dispatch(signInWithGoogle(token));
      router.push("/");
    }
  }, [router]);

  return <div className="min-h-[100dvh]"></div>;
}
export default index;
