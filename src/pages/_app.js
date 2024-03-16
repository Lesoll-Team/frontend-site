import "@/styles/globals.css";
import Layout from "@/Shared/layout";
import { Provider, useSelector } from "react-redux";
import { store } from "../redux-store/store";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import ar from "javascript-time-ago/locale/ar.json";
TimeAgo.addDefaultLocale(ar);
TimeAgo.addLocale(en);
function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
    </Provider>
  );
}
export default App;
