/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: `${process.env.NEXT_PUBLIC_API_DOMAIN || 'http://localhost:8080'}/:path*`
        }
      ];
    }
  };
  
  export default nextConfig;