import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import Head from "next/head";
import { Fragment, useCallback, useEffect, useMemo } from "react";
import { fetchUserData } from "@/redux-store/features/globalState";
import { useDispatch, useSelector } from "react-redux";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
import ScrollToTopButton from "./ScrollToTopButton";
export default function Layout({ children }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();

  const memoizedFetchUserData = useMemo(() => {
    return () => dispatch(fetchUserData());
  }, [dispatch]);

  // const dispatchFetchUserData = useCallback(() => {
  //   memoizedFetchUserData();
  // }, [memoizedFetchUserData]);

  useEffect(() => {
    memoizedFetchUserData();
  }, [memoizedFetchUserData]);
  return (

      <div
        style={{
          minHeight: "100dvh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
        className="globalBody bg-gradient"
      >

        <Navbar />
        <main  dir={`${language ? "rtl" : ""}`}>{children}</main>
        <Footer dir={`${language ? "rtl" : ""}`} />
        <ScrollToTopButton />
      </div>
  );
}
