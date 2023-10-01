

import "@/styles/globals.css";
import Layout from "@/Shared/layout";
import { Provider } from "react-redux";
import { store } from "../redux-store/store";
// import { SessionProvider } from 'next-auth/react'
// SessionProvider
// import { NextUIProvider } from "@nextui-org/react";
import {NextUIProvider} from '@nextui-org/react'
// import { SessionProvider } from "next-auth/react";
// SessionProvider
function App({ Component,pageProps}) {
  // function App({ Component,   pageProps:{session,...pageProps} }) {
  return (
    <Provider store={store}>
      {/* <SessionProvider  session={session}> */}
      <NextUIProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </NextUIProvider>
      {/* </SessionProvider> */}
    </Provider>
  );
}
export default App;
