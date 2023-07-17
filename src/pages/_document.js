
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
      }} >

        <Main />
        <NextScript />

      </body>
    </Html>
  );
}
