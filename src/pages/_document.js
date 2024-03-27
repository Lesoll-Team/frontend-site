import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ar">
      <Head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-SSDSCSEGXD"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-SSDSCSEGXD');
        </script>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T876WFM');
          `,
          }}
        /> */}
      </Head>
      <body className="font-cairo">
        <Main />
        <NextScript />
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=G-SSDSCSEGXD"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="GTM"
        />
      </body>
    </Html>
  );
}
