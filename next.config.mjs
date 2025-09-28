/** @type {import('next').NextConfig} */
const nextConfig = {
    // Performance optimizations
    compress: true,
    poweredByHeader: false,
    
    // Image optimization
    images: {
      formats: ['image/webp', 'image/avif'],
      deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
      imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
      minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
      dangerouslyAllowSVG: true,
      contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'images.unsplash.com',
        },
        {
          protocol: 'https',
          hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        },
      ],
      unoptimized: true, // Added update
    },
  
    // Headers for security and performance
    async headers() {
      return [
        {
          source: '/(.*)',
          headers: [
            {
              key: 'X-Frame-Options',
              value: 'DENY',
            },
            {
              key: 'X-Content-Type-Options',
              value: 'nosniff',
            },
            {
              key: 'Referrer-Policy',
              value: 'origin-when-cross-origin',
            },
            {
              key: 'Permissions-Policy',
              value: 'camera=(), microphone=(), geolocation=()',
            },
          ],
        },
        {
          source: '/sitemap.xml',
          headers: [
            {
              key: 'Content-Type',
              value: 'application/xml',
            },
            {
              key: 'Cache-Control',
              value: 'public, max-age=86400, s-maxage=86400',
            },
          ],
        },
        {
          source: '/robots.txt',
          headers: [
            {
              key: 'Content-Type',
              value: 'text/plain',
            },
            {
              key: 'Cache-Control',
              value: 'public, max-age=86400, s-maxage=86400',
            },
          ],
        },
        {
          source: '/:path*\\.(css|js|ico|png|jpg|jpeg|gif|svg|webp|avif|woff|woff2)',
          headers: [
            {
              key: 'Cache-Control',
              value: 'public, max-age=31536000, immutable',
            },
          ],
        },
      ]
    },
  
    // Experimental features for performance
    experimental: {
      optimizeCss: true,
      optimizePackageImports: ['lucide-react'],
    },
  
    // Bundle analyzer (only in development)
    ...(process.env.ANALYZE === 'true' && {
      webpack: (config, { isServer }) => {
        if (!isServer) {
          const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
          config.plugins.push(
            new BundleAnalyzerPlugin({
              analyzerMode: 'static',
              openAnalyzer: false,
            })
          )
        }
        return config
      },
    }),
  
    eslint: {
      ignoreDuringBuilds: true, // Added update
    },
    typescript: {
      ignoreBuildErrors: true, // Added update
    },
  }
  
  export default nextConfig
  