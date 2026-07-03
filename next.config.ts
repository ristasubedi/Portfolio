import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    localPatterns: [
      {
        pathname: "/profile.jpg",
        search: "?v=20260703",
      },
    ],
  },
};

export default nextConfig;
