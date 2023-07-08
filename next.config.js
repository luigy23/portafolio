/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'aicyybmzozncnibigfnz.supabase.co',
            port: '',
            pathname: '/storage/v1/object/public/proyectos/**',
          },
        ],
      },
}

module.exports = nextConfig
