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
          source: "/Details/:slug",
          destination: "/property-details/:slug",
          permanent: true,
        },
        {
          source: "/User/:slug",
          destination: "/",
          permanent: true,
        },
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
