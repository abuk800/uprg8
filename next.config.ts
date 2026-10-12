import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [{ protocol: "https", hostname: "upgr8.org", pathname: "/wp-content/uploads/**" }],
  },
};

export default nextConfig;
