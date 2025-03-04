/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				hostname: 'glossbossimages.s3-eu-central-1.amazonaws.com',
			},
			{
				hostname: 'glossbossimages.s3.eu-central-1.amazonaws.com',
			},
			{
				hostname: 'glossbossuploader.s3.eu-central-1.amazonaws.com',
			},
			{
				hostname: 'glossboss.de',
			},
		],
	},
}

export default nextConfig
