/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "via.placeholder.com",
        port: "",
        pathname: "/**", 
      },
    ],
  },
  async redirects(input) {
    console.log(input, "redirect input console")
    return [
      // // Basic redirect
      // {
      //   source: '/dashboard',
      //   destination: '/',
      //   permanent: true,
      // },
    ]
  },
};

module.exports = nextConfig;
