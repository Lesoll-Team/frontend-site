import "@/styles/globals.css";
import Layout from "@/Shared/layout";
import { Provider } from "react-redux";
import { store } from "../redux-store/store";
// import io from "socket.io-client";
import { NextUIProvider } from "@nextui-org/react";
import React from "react";

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

