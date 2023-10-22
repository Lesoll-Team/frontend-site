import "@/styles/globals.css";
import Layout from "@/Shared/layout";
import { Provider } from "react-redux";
import { store } from "../redux-store/store";
// import io from "socket.io-client";
import { NextUIProvider } from "@nextui-org/react";
import React, { useEffect } from "react";

function App({ Component, pageProps }) {
  // const userKey = parseInt(
  //   Math.ceil(Math.random() * Date.now())
  //     .toPrecision(16)
  //     .toString()
  //     .replace(".", "")
  // );
  
  // useEffect(() => {
  //     const socket = io(`${process.env.NEXT_PUBLIC_SOCKET_URL}`, {
  //       transports: ['websocket'],
  //       withCredentials: true,
  //     });
  //     if (!localStorage.getItem("local_storage_device_id")) {
  //       JSON.stringify(localStorage.setItem("local_storage_device_id", userKey));
  //       JSON.stringify(localStorage.setItem(`prompt_visit_${Math.floor(Math.random() * 10001) }`, new Date()))
  //     }
  //     socket.emit('users', { userRecord: JSON.parse(localStorage.getItem('local_storage_device_id')) })
  //   }, []);
  // const userKey = parseInt(
  //   Math.ceil(Math.random() * Date.now())
  //     .toPrecision(16)
  //     .toString()
  //     .replace(".","")
  // );
  // const socket = io('https://api.lesoll.com');
  // // const socket = io(`https://${process.env.NEXT_PUBLIC_SOCKET_URL}`);
  // useEffect(() => {
  //   if (!localStorage.getItem("user-key")) {
  //     localStorage.setItem("user-key", userKey);
  //   }
  //   socket.emit('users', { userRecord: JSON.parse(localStorage.getItem('user-key')) })
  // }, []);
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
