/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverComponentsExternalPackages: ['@acme/ui'],
      },
      env: {
        MONGODB_URI: 'mongodb+srv://harshilambliya15:Zyj3hO6SD2IhFdO3@cluster0.prnubag.mongodb.net/crud_user',
      }
}

module.exports = nextConfig
