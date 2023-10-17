
import "@/styles/globals.css";
import Layout from "@/Shared/layout";
import { Provider } from "react-redux";
import { store } from "../redux-store/store";
import {NextUIProvider} from '@nextui-org/react'
import io from 'socket.io-client'


function App({ Component,pageProps}) {

    const userKey = parseInt(
      Math.ceil(Math.random() * Date.now())
        .toPrecision(16)
        .toString()
        .replace(".", "")
    );
    const socket = io('ws://api.lesoll.com')
    React.useEffect(() => {
      if (!localStorage.getItem("user-key")) {
        localStorage.setItem("user-key", userKey);
      }
      socket.emit('users', { userRecord: JSON.parse(localStorage.getItem('user-key')) })
    }, []);
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
