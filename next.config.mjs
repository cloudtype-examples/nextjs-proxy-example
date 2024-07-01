/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/users',
          destination: 'http://localhost:3001/api/users' 
        }
      ];
    }
  };
  
  export default nextConfig;