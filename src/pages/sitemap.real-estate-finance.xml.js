const DATA_URL = `${process.env.NEXT_PUBLIC_API_URL}/admin/sitemap/sitemap-property-real-estate-finance`;

function generateSiteMap({ data }) {
  return `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://lesoll.com</loc>
       <lastmod>${data.data[2].created}</lastmod>
        <priority>1.00</priority>
     </url>
     <url>
       <loc>https://lesoll.com/searching/offer=all</loc>
       <lastmod>${data.data[2].created}</lastmod>
       <priority>0.80</priority>
     </url>
     ${data.data
       .map((post) => {
         return `
       <url>
           <loc>${`${post.Link}`}</loc>
           <lastmod>${post.created}</lastmod>
           <priority>0.80</priority>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const request = await fetch(DATA_URL);

  const data = await request.json();
  const sitemap = generateSiteMap({ data });

  res.setHeader("Content-Type", "text/xml");

  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
