/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

const output = "export";

const rewrites = () => {
  return [
    {
      source: "/api/:path*",
      destination: "http://localhost:4000/api/:path*",
    },
  ];
};

if (process.env.NODE_ENV === "development") {
  nextConfig.rewrites = rewrites;
} else {
  nextConfig.output = output;
}

module.exports = nextConfig;
