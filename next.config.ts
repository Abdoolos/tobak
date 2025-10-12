import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  webpack: (config, { webpack }) => {
    config.plugins.push(new webpack.IgnorePlugin({
      resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
    }));
    return config;
  },
  async generateStaticParams() {
    return [];
  },
  async generateBuildId() {
    return 'tobakkhuset-build';
  },
};

export default nextConfig;
