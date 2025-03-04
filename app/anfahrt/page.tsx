'use client'
import Button from '@/components/button'
import Heroheading from '@/components/heroheading'
import { useCookieConsent } from 'react-cookie-manager'
export default function Preise() {
	const { hasConsent, showConsentBanner } = useCookieConsent()
	return (
		<div className="prose-li:m-0">
			<Heroheading>Anfahrt</Heroheading>
			<p className="font-mono text-center text-sm md:text-lg leading-snug max-w-md lg:max-w-xl m-0 p-0 mx-auto">
				So findest du den weg zu uns.
			</p>
			{hasConsent ? (
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2474.199241144196!2d6.965941316445566!3d51.67449597966295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8f189d61acb17%3A0xfa99b3931c00c5ad!2sMarienstra%C3%9Fe+41%2C+46284+Dorsten!5e0!3m2!1sde!2sde!4v1490538417317"
					frameBorder="0"
					allowFullScreen
					className="mt-10 max-w-full w-[900px] border-none h-[400px]"
				/>
			) : (
				<div className="mt-10 mb-12">
					Google Maps kann nicht angezeigt werden, da Cookies deaktiviert sind.
					<Button onClick={showConsentBanner} className="mt-0" href="#">
						Cookie Einstellungen
					</Button>
				</div>
			)}

			<p>Marienstr. 41, 46284 Dorsten</p>
			<p>
				Bitte nur nach <strong>vorheriger</strong> Terminabsprache vorbeikommen!
			</p>
		</div>
	)
}
