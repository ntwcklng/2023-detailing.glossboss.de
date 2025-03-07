import Heroheading from '@/components/heroheading'
import Plaincomponent from '@/components/plaincomponent'
import ReviewComponent from '@/components/reviewcomponent'
import Image from 'next/image'

export default function Page() {
	return (
		<div className="">
			<Heroheading>GLOSSBOSS Detailing</Heroheading>
			<p className="font-mono text-center text-sm md:text-lg leading-snug max-w-md lg:max-w-xl m-0 p-0 mx-auto">
				Dein Ansprechpartner im Ruhrgebiet für{' '}
				<span className="font-bold text-purple-400">Detailing</span>,{' '}
				<span className="font-bold text-sky-400">Workshops</span> und
				<span className="font-bold text-indigo-400"> Pflegeprodukte</span>.
			</p>
			<Plaincomponent heading="Darf ich mich kurz vorstellen?" subHeading="">
				<Image
					src="https://glossboss.de/media/image/opc/lg/marvin_glossboss_shadow.png"
					width={256}
					height={256}
					className="w-64 mx-auto md:float-left"
					alt="Marvin Mieth"
				/>
				Mein Name ist Marvin Mieth und ich betreibe seit über{' '}
				<strong>14 Jahren</strong> die Fahrzeugaufbereitung auf höchstem Niveau.
				Dabei teste ich für diverse Hersteller Produkte die vor der
				Markteinführung stehen, schule Fachpersonal im Bereich Detailing und
				betreibe einige Info-Kanäle rund um das Thema Fahrzeugpflege wie z.B.
				diesen{' '}
				<a href="https://ad.glossboss.de/#abo" target="_blank" rel="noreferrer">
					Youtube-Kanal
				</a>{' '}
				und einen{' '}
				<a
					href="https://nass-und-schaumig.podigee.io"
					target="_blank"
					rel="noreferrer">
					Podcast
				</a>
				.<br />
				Die Aufbereitung von Kundenfahrzeugen bleibt dabei stets das
				Herzens-Projekt - und das merkt man auch: jedes Auto welches von mir
				gepflegt wird, ist ein Unikat. Keine Massenabfertigung und keine
				Kompromisse.
				<h3>Beratung steht an erster Stelle</h3>
				Bei einem persönlichen Beratungsgespräch finden wir das passende
				Pflegeprogramm für dein Fahrzeug. Dabei ist es mir besonders wichtig für{' '}
				<strong>dich</strong> das richtige zu finden. Vielleicht benötigst du
				bei deinem Fahrprofil nicht die teuerste und beste High-End
				Keramikversiegelung, sondern ein Carnaubawachs, welches stärker glänzt?
				Möglicherweise aber doch, da du Vielfahrer bist.{' '}
				<a href="https://ad.glossboss.de/#besichtigungstermin">
					Vereinbare gerne einen Besichtigungstermin
				</a>
				.
				<br />
				<h3>Zertifizierungen</h3>
				<p>
					Im laufe der 14 Jahre haben sich einige Zertifizierungen und
					Weiterbildungen angesammelt. Des weiteren bin ich{' '}
					<strong>Vorstandsmitglied bei der IDA</strong> - der International
					Detailing Association - einem Berufsverband für professionelle
					Aufbereiter und Detailer. Unsere Vision ist es die Detailing Industrie
					professioneller zu gestalten und Standards zu setzen.
				</p>
				<div className="flex flex-col justify-around items-center gap-1">
					<Image
						src="/IDA-MemberSticker_2025-01.png"
						width={384}
						height={200}
						className="max-w-sm"
						alt="IDA Member Sticker"
					/>
					<Image
						src="/gtechniq-logo.jpg"
						width={200}
						height={100}
						alt="gtechniq Logo"
					/>
					<Image
						src="/LogoLabocosmetica.jpg"
						width={200}
						height={100}
						alt="Labo Cometica Logo"
					/>
					<Image
						src="/maxprotect.jpg"
						width={200}
						height={100}
						alt="Max Protect Logo"
					/>
					<Image
						src="/NanolexApprovedDetailer_2018.svg"
						width={240}
						height={100}
						className="w-60"
						alt="Nanolex Approved Detailer"
					/>
				</div>
			</Plaincomponent>
			<Plaincomponent
				heading="Rezensionen"
				subHeading="das sagen unsere Kunden">
				<div className="flex md:flex-row flex-col justify-between mx-auto items-center md:items-start">
					<ReviewComponent
						name="Simon Detailing"
						stars={5}
						origin="Google"
						originLink="https://goo.gl/maps/FqdWHxJycYVKtPcu5"
						review="Super netter Kontakt, hohes Fachwissen, zudem sehr informativ. Absolut zu empfehlen. Jemand der seinen Job wirklich liebt."></ReviewComponent>
					<ReviewComponent
						name="Andy"
						stars={5}
						origin="Google"
						originLink="https://goo.gl/maps/CQKqx147D1Sd8s1f6"
						review="Marvin ist ein top Ansprechpartner in allen Sachen rund um die Autopflege. Ich hab bei ihm einen Workshop besucht, er hat eine sehr angenehme Art Wissen zu vermitteln und Erfahrungen weiterzugeben. Voll empfehlenswert!"></ReviewComponent>
					<ReviewComponent
						name="Philipp"
						stars={5}
						origin="Trustpilot"
						originLink="https://trstp.lt/6KDicUrny"
						review="Die Lieferung und Antwortzeiten waren sehr zügig. Man wurde selbst über Instagram beraten, nachdem man Fragen gestellt hat.
Ich kann Ihn nur empfehlen, wer sich für die Fahrzeugpflege interessiert und dem Auto was gutes tun mag."></ReviewComponent>
				</div>
			</Plaincomponent>
		</div>
	)
}
