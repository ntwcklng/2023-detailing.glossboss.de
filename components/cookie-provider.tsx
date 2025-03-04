'use client'

import dynamic from 'next/dynamic'
import 'react-cookie-manager/style.css'
const CookieManager = dynamic(
	() => import('react-cookie-manager').then((mod) => mod.CookieManager),
	{ ssr: false, loading: () => null }
)

// In your Providers component or layout
export function CookieProvider({ children }: { children: React.ReactNode }) {
	return (
		<CookieManager
			showManageButton={false}
			translations={{
				title: 'Cookies 🍪',
				message: 'Wir verwenden Cookies, um unsere Website zu verbessern.',
				buttonText: 'Akzeptieren',
				declineButtonText: 'Ablehnen',
				manageButtonText: 'Cookies verwalten',
			}}
			displayType="popup"
			cookieKey="glossboss.deCookie"
			theme="light">
			{children}
		</CookieManager>
	)
}
