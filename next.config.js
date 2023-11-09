/** @type {import('next').NextConfig} */
const nextConfig = {
    typescript: {
        // !! WARN !!
        // Dangerously allow production builds to successfully complete even if
        // your project has type errors.
        // !! WARN !!
        ignoreBuildErrors: true,
    },
    images: {
        dangerouslyAllowSVG: true,
        minimumCacheTTL: 200,
        remotePatterns: [
          {
            protocol: "https",
            hostname: "**",
          },
        ],
      },
}

module.exports = nextConfig
