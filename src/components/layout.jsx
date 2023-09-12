import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Head from "next/head";
import { Fragment, useCallback, useMemo } from "react";
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

  const dispatchFetchUserData = useCallback(() => {
    memoizedFetchUserData();
  }, [memoizedFetchUserData]);
  dispatchFetchUserData();
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
          <title>
            {language ? "ليسول | تسويق عقارى" : "Lesoll | RealEstate Hub"}
          </title>
          <meta
            name="description"
            content="ليسول هو موقع عقارات مصري متكامل يقدم خدمة التجربة الرقمية سواء لشراء أو بيع أو تأجير العقارات مع خدمة شاملة تقدم تفاصيل عن العقار من خلال خريطة تفاعلية"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            property="og:image"
            content="../../public/socialApperance.svg"
          />

          <meta
            property="og:description"
            content="ليسول هو موقع عقارات مصري متكامل يقدم خدمة التجربة الرقمية سواء لشراء أو بيع أو تأجير العقارات مع خدمة شاملة تقدم تفاصيل عن العقار من خلال خريطة تفاعلية"
          />
          <meta
            name="keywords"
            content="Real estate, Property listings, Homes for sale, Apartments for rent, Commercial properties, Realtor, Real estate agent, House hunting, Real estate market, Property management, Real estate investment, Rental properties, Property search, Buy a house, Sell a house, Foreclosures, Mortgage rates, Property valuation, Open house, Home inspection, عقارات, قائمة العقارات, منازل للبيع, شقق للإيجار, عقارات تجارية, وكيل عقاري, سوق العقارات, إدارة العقارات, استثمار العقارات, عقارات للإيجار, البحث عن عقار, شراء منزل, بيع منزل, العقارات المستصرفة, أسعار الرهن العقاري, تقييم العقار, منازل مفتوحة للزيارة, فحص المنزل"
          />
          {/* <meta
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
          /> */}
        </Head>
        <Navbar />
        <main dir={`${language ? "rtl" : ""}`}>{children}</main>
        <Footer dir={`${language ? "rtl" : ""}`} />
        <ScrollToTopButton />
      </div>
    </Fragment>
  );
}
