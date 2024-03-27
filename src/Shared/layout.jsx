import dynamic from "next/dynamic";
const Footer = dynamic(() => import("../components/footer/Footer"));
const Navbar = dynamic(() => import("../components/navbar/Navbar"));
const ScrollToTopButton = dynamic(() => import("./ScrollToTopButton"));

import Head from "next/head";
import { setLang } from "@/redux-store/features/globalState";
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { getUserOffline } from "@/utils/userAPI";
import { useRouter } from "next/router";
import { getUserData } from "@/redux-store/features/auth/userProfileSlice";

export default function Layout({ children }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const userData = useSelector((state) => state.userProfile.userData);
  const dispatch = useDispatch();
  const router = useRouter();

  const userKey = parseInt(
    Math.ceil(Math.random() * Date.now())
      .toPrecision(16)
      .toString()
      .replace(".", "")
  );

  if (typeof window !== "undefined") {
    if (!localStorage.getItem("local_storage_device_id")) {
      localStorage.setItem("local_storage_device_id", userKey);
    }
  }

  useEffect(() => {
    if (!userData) {
      dispatch(getUserData());
    }
    getUserOffline({ url: `${router.asPath}` });
  }, [dispatch, language, children]);

  useEffect(() => {
    const isItemInLocalStorage = (key) => {
      return localStorage.getItem(key) !== null;
    };
    if (isItemInLocalStorage("language")) {
      const lang = JSON.parse(localStorage.getItem("language"));
      dispatch(setLang(lang));
    }
  }, []);
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="../../public/socialApperance.svg" />
      </Head>
      <Navbar />
      <main dir={language && "rtl"}>{children}</main>
      <Footer dir={language && "rtl"} />
      <ScrollToTopButton />
    </div>
  );
}
