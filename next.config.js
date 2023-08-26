/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "res.lesoll-demo.site",
      "http://res.lesoll-demo.site/v0",
      "data:image/jpeg;base64,/",
    ], // Add the domain(s) of your image(s) here
  },
  //(http://res.lesoll-demo.site/v0/public/User/64c63fa6c5b3a76cba4f98c6-6738744505360000.webp
};

module.exports = nextConfig;
