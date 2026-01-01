/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        hostname: 'glossbossimages.voidroot.cc',
      },
      {
        hostname: 'glossbossimages.voidroot.cc',
      },
      {
        hostname: 'glossbossupload.voidroot.cc',
      },
      {
        hostname: 'glossboss.de',
      },
    ],
  },
}

export default nextConfig
