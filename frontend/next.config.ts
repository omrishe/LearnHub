import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
//basically the above comment is for code editor auto complete suggestion
const nextConfig: NextConfig = {
  async redirects(){
    return [
      {
        source: '/',
        destination: '/home',
        permanent: true,
      },
    ]
  },
  /* config options here */
  reactCompiler: true,
  turbopack: {
    root: './', // relative to your Next.js project
  },
};

export default nextConfig;
