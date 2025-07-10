import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.lovvehomemart.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.creativeboom.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.creativeboom.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.creativeboom.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: '10web.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'alltimedesign.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'weandthecolor.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
