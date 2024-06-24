import "@/styles/globals.css";
import Layout from "@/Shared/layout";
import { Provider } from "react-redux";
import { store } from "../redux-store/store";
import { NextUIProvider } from "@nextui-org/react";
import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en.json";
import { UserProvider } from "@/Shared/UserContext";

TimeAgo.addDefaultLocale(en);

function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      const languageCode = url.split("/")[1];
      if (languageCode === "en" || languageCode === "ar") {
        Cookies.set("language", languageCode);
      } else Cookies.set("language", "ar");
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup on unmount
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

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

export default App;

// import "@/styles/globals.css";
// import Layout from "@/Shared/layout";
// import { Provider } from "react-redux";
// import { store } from "../redux-store/store";
// import { NextUIProvider } from "@nextui-org/react";
// import React from "react";
// import TimeAgo from "javascript-time-ago";
// import en from "javascript-time-ago/locale/en.json";
// import { UserProvider } from "@/Shared/UserContext";
// TimeAgo.addDefaultLocale(en);
// function App({ Component, pageProps }) {
//   return (
//     <Provider store={store}>
//       <NextUIProvider>
//         <UserProvider>
//           <Layout>
//             <Component {...pageProps} />
//           </Layout>
//         </UserProvider>
//       </NextUIProvider>
//     </Provider>
//   );
// }
// export default App;
