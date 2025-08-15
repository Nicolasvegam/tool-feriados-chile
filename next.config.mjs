/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    experimental: {
        optimizeCss: true,
        optimizePackageImports: ['lucide-react', '@headlessui/react', '@radix-ui/react-*']
    },
    images: {
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 60,
    },
    compress: true,
    poweredByHeader: false,
    swcMinify: true,
    compiler: {
        removeConsole: process.env.NODE_ENV === 'production',
    },
    async redirects() {
        return [
            {
                source: '/feriados-chile-2025',
                destination: '/',
                permanent: true,
            }
        ];
    }
};
export default nextConfig;
