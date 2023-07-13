import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        style={{
          minHeight: "100dvh",
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* <Navbar className="" /> */}
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
