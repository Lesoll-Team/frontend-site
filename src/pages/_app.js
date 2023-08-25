import "@/styles/globals.css";
import Layout from "@/components/layout";
import { Provider } from "react-redux";
import { store } from "../redux-store/store";
import { NextUIProvider } from "@nextui-org/react";

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
