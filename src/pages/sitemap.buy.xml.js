
const DATA_URL = `${process.env.NEXT_PUBLIC_API_URL}/admin/sitemap/sitemap-property-buy`;

function escapeXml(unsafe) {
  return unsafe.replace(/[<>&;]/g, (match) => {
    switch (match) {
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "&":
        return "&amp;";
      default:
        return match;
    }
  });
}

function generateSiteMap({ data }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://lesoll.com</loc>
       <lastmod>${data.data[2].created}</lastmod>
        <priority>1.00</priority>
     </url>    
     <url>
       <loc>https://lesoll.com/buy/1</loc>
       <lastmod>${data.data[2].created}</lastmod>
       <priority>0.80</priority>
     </url>
${data.data
  .map((post) => {
    return `
   <url>
       <loc>${escapeXml(post.Link)}</loc>
       <lastmod>${escapeXml(post.created)}</lastmod>
       <priority>0.80</priority>
   </url>
 `;
  })
  .join("")}
   </urlset>`;
}

async function getServerSideProps({ res }) {
  try {
    const request = await fetch(DATA_URL);

    if (!request.ok) {
      throw new Error(`Failed to fetch data. Status: ${request.status}`);
    }

    const data = await request.json();
    const sitemap = generateSiteMap({ data });

    res.setHeader("Content-Type", "text/xml");
    res.write(sitemap);
    res.end();

    return { props: {} };
  } catch (error) {
    console.error("Error generating sitemap:", error);
    res.status(500).end();
  }
}

export { getServerSideProps };
export default function SiteMap() {
  // This function should be exported for Next.js to recognize it as a valid getServerSideProps function.
  // It can be an empty function or contain other logic as needed.
  return null;
}

// const DATA_URL = `${process.env.NEXT_PUBLIC_API_URL}/admin/sitemap/sitemap-property-buy`;

// function generateSiteMap({ data }) {
//   return `<?xml version="1.0" encoding="UTF-8"?>
//    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
//      <!--We manually set the two URLs we know already-->
//      <url>
//        <loc>https://lesoll.com</loc>
//      </url>
//           <url>
//        <loc></loc>
//      </url>
//      <url>
//        <loc>https://lesoll.com/about-us</loc>
//      </url>
//      ${data.data
//        .map((post) => {
//          return `
//        <url>
//            <loc>${`${post.Link}`}</loc>
//            <lastmod>${post.created}</lastmod>
//            <priority>0.8</priority>
//        </url>
//      `;
//        })
//        .join("")}
//    </urlset>
//  `;
// }

// function SiteMap() {
//   // getServerSideProps will do the heavy lifting
// }

// export async function getServerSideProps({ res }) {
//   const request = await fetch(DATA_URL);

//   const data = await request.json();
//   const sitemap = generateSiteMap({ data });

//   res.setHeader("Content-Type", "text/xml");

//   res.write(sitemap);
//   res.end();

//   return {
//     props: {},
//   };
// }

// export default SiteMap;
