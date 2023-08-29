import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Head from "next/head";
import { Fragment } from "react";
import { fetchUserData } from "@/redux-store/features/globalState";
import { useDispatch, useSelector } from "react-redux";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/core";
export default function Layout({ children }) {
  const language = useSelector((state) => state.GlobalState.languageIs);
  const dispatch = useDispatch();
  dispatch(fetchUserData());
  return (
    <Fragment>
      <div
        style={{
          minHeight: "100dvh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
        className="globalBody bg-gradient"
      >
        <Head>
          <meta
            name="Lesoll"
            content="
            Lesoll is a real estate firm specializing in the buying, 
            selling, and renting of commercial and residential properties. With years 
            of experience in the real estate industry, Lesoll Company has built a reputation for 
            providing exceptional service to its clients
            "
          />
          <meta
            name="Lesoll"
            description="Lesoll is a real estate firm specializing in the buying, 
            selling, and renting of commercial and residential properties. With years 
            of experience in the real estate industry, Lesoll Company has built a reputation for 
            providing exceptional service to its clients"
          />
        </Head>
        <Navbar />
        <main dir={`${language ? "rtl" : ""}`}>{children}</main>
        <Footer />
      </div>
    </Fragment>
  );
}
