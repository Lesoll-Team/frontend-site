import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  const { locale } = props;
  return (
    <Html lang={locale}>
      <Head />
      <body className="font-cairo">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

Document.getInitialProps = async (ctx) => {
  const initialProps = await ctx.defaultGetInitialProps(ctx);
  const { locale } = ctx;

  return { ...initialProps, locale };
};

// // import Cookies from "js-cookie";
// import { Html, Head, Main, NextScript } from "next/document";

// export default function Document() {
//   // const lang = Cookies.get("lang");
//   // if (lang != "en" || lang != "ar") {
//   // const pathname = window.location.pathname;
//   // const segments = pathname.split("/");
//   // if (segments.length > 1 && (segments[1] === "ar" || segments[1] === "en")) {
//   //   langCode = segments[1];
//   // }
//   // console.log("in side if");
//   // }
//   // console.log("query::>", queryUrl);
//   return (
//     <Html>
//       <Head>
//         {/* <script
//           dangerouslySetInnerHTML={{
//             __html: `
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-T876WFM');
//           `,
//           }}
//         /> */}
//       </Head>
//       <body className="font-cairo">
//         <Main />
//         <NextScript />
//         {/* <iframe
//           src="https://www.googletagmanager.com/ns.html?id=GTM-T876WFM"
//           height="0"
//           width="0"
//           style={{ display: "none", visibility: "hidden" }}
//           title="GTM"
//         /> */}
//       </body>
//     </Html>
//   );
// }
// // export async function getServerSideProps({ params }) {
// //   return {
// //     props: {
// //       queryUrl: params,
// //     },
// //   };
// // }
