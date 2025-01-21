/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ["mongoose"], // Moved from experimental.serverComponentsExternalPackages
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    };
    return config;
  },
};

export default nextConfig;
