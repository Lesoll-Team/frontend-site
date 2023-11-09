// module.exports = nextConfig;
module.exports = async () => {
  /**
   *
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
    async redirects() {
      return [
        {
          source: "/Detail/:slug",
          destination: "/property-details/:slug",
          permanent: true,
        },
        {
          source: "/User/:slug",
          destination: "/",
          permanent: true,
        },
        {
          source: "/Governrate/:slug*",
          destination: "/searching/offer=all",
          permanent: true,
        },
        {
          source: "/Q_A",
          destination: "/faq",
          permanent: true,
        },
        {
          source: "/Realties/:slug",
          destination: "/searching/offer=all",
          permanent: true,
        },
        {
          source: "/SiteMap",
          destination: "/searching/offer=all",
          permanent: true,
        },
        {
          source: "/SiteMap/:slug",
          destination: "/searching/offer=all",
          permanent: true,
        },
        {
          source: "/Sitemap",
          destination: "/searching/offer=all",
          permanent: true,
        },
        {
          source: "/Privacy",
          destination: "/privacypolicy",
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
          source: "/About",
          destination: "/about-us",
          permanent: true,
        },
        {
          source: "/search",
          destination: "/searching/offer=all",
          permanent: true,
        },
        {
          source: "/search/:slug",
          destination: "/searching/offer=all",
          permanent: true,
        },

        // {
        //   source: "/Blogs",
        //   destination: "/blogs",
        //   permanent: true,
        // },

        // {
        //   source: "/Contact",
        //   destination: "/contact",
        //   permanent: true,
        // },
        // {
        //   source: "/Contact",
        //   destination: "/contact",
        //   permanent: false,
        // },
      ];
    },
  };

  return nextConfig;
};
