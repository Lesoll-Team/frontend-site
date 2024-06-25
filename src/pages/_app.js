import "@/styles/globals.css";
import Layout from "@/Shared/layout";
import { Provider } from "react-redux";
import { store } from "../redux-store/store";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { UserProvider } from "@/Shared/UserContext";
import { appWithTranslation } from "next-i18next";
// import { appWithTranslation } from "next-i18next";
import nextI18nextConfig from "../../next-i18next.config";
// import nextI18nextConfig from "../../next-i18next.config";
// import nextI18nextConfig from "../../next-i18next.config";

TimeAgo.addDefaultLocale(en);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <UserProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </UserProvider>
      </NextUIProvider>
    </Provider>
  );
}

export default appWithTranslation(App, nextI18nextConfig);
