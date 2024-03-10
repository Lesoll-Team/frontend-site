const DATA_URL = `${process.env.NEXT_PUBLIC_API_URL}/admin/sitemap/sitemap-main`;

function generateSiteMap({ data }) {
  return `
  <sitemapindex
  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
  xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
  xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/siteindex.xsd">
  ${data.data
    .map((post) => {
      return `
  <sitemap>
    <loc>${post.link}</loc>
    <lastmod>${post.time}</lastmod>
  </sitemap> `;}).join("")}
</sitemapindex>
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
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
