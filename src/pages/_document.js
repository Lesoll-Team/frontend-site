import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ar">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-T876WFM');
          `,
          }}
        />
      </Head>
      <body className="font-cairo">
        <script
          dangerouslySetInnerHTML={{
            __html: `
              function loadGTM() {
                var gtmIframe = document.createElement('iframe');
                gtmIframe.src = 'https://www.googletagmanager.com/ns.html?id=GTM-T876WFM';
                gtmIframe.height = 0;
                gtmIframe.width = 0;
                gtmIframe.style.display = 'none';
                gtmIframe.style.visibility = 'hidden';
                document.body.appendChild(gtmIframe);
              }
              window.addEventListener('load', loadGTM);
            `,
          }}
        />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
// // `<!doctype html>`
// import Document, { Html, Head, Main, NextScript } from 'next/document';
// class MyDocument extends Document {
//   render() {
//     return (
//       <Html lang="ar" >{/**doctype='<!DOCTYPE html>' */}
//         <Head>
//         {/* <meta charset="UTF-8" /> */}
//         <script dangerouslySetInnerHTML={{ __html: `
//             (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//             new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//             j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//             'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//             })(window,document,'script','dataLayer','GTM-T876WFM');
//           `}} />
//         </Head>
//         <body>
//                <script
//            dangerouslySetInnerHTML={{
//              __html: `
//                function loadGTM() {
//                  var gtmIframe = document.createElement('iframe');
//                  gtmIframe.src = 'https:www.googletagmanager.com/ns.html?id=GTM-T876WFM';
//                  gtmIframe.height = 0;
//                  gtmIframe.width = 0;
//                  gtmIframe.style.display = 'none';
//                  gtmIframe.style.visibility = 'hidden';
//                  document.body.appendChild(gtmIframe);
//                }
//                window.addEventListener('load', loadGTM);
//              `,
//            }}
//          />
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     );
//   }
// }

// export default MyDocument;
