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
        <title>
          {language
            ? "بيع - شراء - إيجار العقارات فى مصر | ليسول"
            : "Lesoll Real Estate Hup Eg | Buy - Sell - Rent Properties"}
        </title>
        <meta
          name="description"
          content="موقع عقارات مصري متكامل. يساعدك في البحث عن العقار المناسب للبيع أو الإيجار شقة او فيلا او بيت وغيره من العقارات في القاهرة، الجيزة، الاسكندرية وجميع انحاء مصر"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:image" content="../../public/socialApperance.svg" />
        <meta
          property="og:description"
          content="موقع عقارات مصري متكامل. يساعدك في البحث عن العقار المناسب للبيع أو الإيجار شقة او فيلا او بيت وغيره من العقارات في القاهرة، الجيزة، الاسكندرية وجميع انحاء مصر"
        />
        <meta
          name="keywords"
          content="Real estate, Property listings, Homes for sale, Apartments for rent, Commercial properties, Realtor, Real estate agent, House hunting, Real estate market, Property management, Real estate investment, Rental properties, Property search, Buy a house, Sell a house, Foreclosures, Mortgage rates, Property valuation, Open house, Home inspection, عقارات, قائمة العقارات, منازل للبيع, شقق للإيجار, عقارات تجارية, وكيل عقاري, سوق العقارات, إدارة العقارات, استثمار العقارات, عقارات للإيجار, البحث عن عقار, شراء منزل, بيع منزل, العقارات المستصرفة, أسعار الرهن العقاري, تقييم العقار, منازل مفتوحة للزيارة, فحص المنزل"
        />
      </Head>
      <Navbar />
      <main dir={language ? "rtl" : "ltr"}>{children}</main>
      <Footer dir={language ? "rtl" : "ltr"} />
      <ScrollToTopButton />
    </div>
  );
}
