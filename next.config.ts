import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/en/about",
        permanent: true
      },
      {
        source: "/contact",
        destination: "/en/contact",
        permanent: true
      },
      {
        source: "/faq",
        destination: "/en/faq",
        permanent: true
      },
      {
        source: "/privacy",
        destination: "/en/privacy",
        permanent: true
      },
      {
        source: "/services",
        destination: "/en/services",
        permanent: true
      },
      {
        source: "/services/individual-tax",
        destination: "/en/services/individual-tax",
        permanent: true
      },
      {
        source: "/services/business-tax",
        destination: "/en/services/business-tax",
        permanent: true
      },
      {
        source: "/services/ato-support",
        destination: "/en/services/ato-support",
        permanent: true
      },
      {
        source: "/insights",
        destination: "/en/insights",
        permanent: true
      },
      {
        source: "/insights/:slug",
        destination: "/en/insights/:slug",
        permanent: true
      }
    ];
  }
};

export default nextConfig;
