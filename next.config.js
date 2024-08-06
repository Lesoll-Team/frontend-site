// module.exports = nextConfig;
module.exports = async () => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    images: {
      domains: ["cloud.lesoll.com", "lh3.googleusercontent.com", "fakeimg.pl"],
    },
    /* config options here */
    async redirects() {
      return [
        {
          source: "/Detail/:slug",
          destination: "/property-details/:slug",
          permanent: true,
        },
        {
          source: "/searching/searching/:slug",
          destination: "/properties/sale/residential/search?page=1",
          permanent: true,
        },
        {
          source: "/User/:slug",
          destination: "/",
          permanent: true,
        },
        {
          source: "/Governrate/:slug*",
          destination: "/properties/sale/residential/search?page=1",
          permanent: true,
        },
        {
          source: "/Q_A",
          destination: "/faq",
          permanent: true,
        },
        {
          source: "/Realties/:slug",
          destination: "/properties/sale/residential/search?page=1",
          permanent: true,
        },
        {
          source: "/SiteMap",
          destination: "/properties/sale/residential/search?page=1",
          permanent: true,
        },
        {
          source: "/SiteMap/:slug",
          destination: "/properties/sale/residential/search?page=1",
          permanent: true,
        },
        {
          source: "/Sitemap",
          destination: "/properties/sale/residential/search?page=1",
          permanent: true,
        },
        {
          source: "/Privacy",
          destination: "/privacypolicy",
          permanent: true,
        },
        {
          source: "/Terms",
          destination: "/termsofservice",
          permanent: true,
        },
        {
          source: "/MostView",
          destination: "/most-view/1",
          permanent: true,
        },
        {
          source: "/Contact",
          destination: "/contact-us",
          permanent: true,
        },
        {
          source: "/Blogs",
          destination: "/blog",
          permanent: true,
        },
        {
          source: "/Blogs/:slug",
          destination: "/blog/:slug",
          permanent: true,
        },
        {
          source: "/About",
          destination: "/about-us",
          permanent: true,
        },
        {
          source: "/search",
          destination: "/properties/sale/residential/search?page=1",
          permanent: true,
        },
        {
          source: "/search/:slug",
          destination: "/properties/sale/residential/search?page=1",
          permanent: true,
        },
      ];
    },
  };

  return nextConfig;
};
