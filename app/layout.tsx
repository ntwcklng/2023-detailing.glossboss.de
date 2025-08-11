import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Container from '@/components/container'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import Script from 'next/script'
import { CookieProvider } from '@/components/cookie-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'GLOSSBOSS Detailing in 46284 Dorsten',
	description:
		'Dein Ansprechpartner für hochwertiges Detailing in 46284 Dorsten',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="de">
			<body
				className={`antialiased bg-linear-to-tr from-white to-gray-200 min-h-screen ${inter.className}`}>
				<CookieProvider>
					<Navbar />
					<Container>
						<main className="prose prose-slate max-w-none py-8">
							{children}
						</main>
						<Footer />
					</Container>
					<Script
						async
						defer
						src="https://umami.glossboss.de/script.js"
						data-website-id="e2bb8d81-87f6-4e00-8b52-ec09663e4cfa"
					/>
				</CookieProvider>
			</body>
		</html>
	)
}
