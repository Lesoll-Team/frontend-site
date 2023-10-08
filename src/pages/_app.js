

import "@/styles/globals.css";
import Layout from "@/Shared/layout";
import { Provider, useSelector } from "react-redux";
import { store } from "../redux-store/store";
// import io from 'socket.io-client'
import {NextUIProvider} from '@nextui-org/react'
// import { SessionProvider } from "next-auth/react";
// SessionProvider
function App({ Component,pageProps}) {
  // const userInfo = useSelector((state) => state.GlobalState.userData);

  // function App({ Component,   pageProps:{session,...pageProps} }) {
    // const socket = io(`http://ec2-184-73-152-95.compute-1.amazonaws.com:9000`);
    // socket.emit("online",{ userId:"651e7cb9a406c5030e971faf"});
    // socket.emit('online', { userId:"651e7cb9a406c5030e971faf"})
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
