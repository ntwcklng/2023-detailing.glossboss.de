import { NextSeo } from 'next-seo'
import Layout from '@/components/layout'
import Image from 'next/image'
import Container from '@/components/container'

import Heroheading from '@/components/heroheading'
import ModulComponent from '@/components/modulcomponent'

export default function Workshops() {
  return (
    <Layout
      url={`https://workshops.glossboss.de`}
      title='workshops@GLOSSBOSS'
      description='Die richtige Technik macht den Unterschied. Überzeuge deine Kunden mit hochwertiger Arbeit.'>
      <div className='prose-li:m-0'>
        <Heroheading>Detailing Module</Heroheading>
        <p className='font-mono text-center text-sm md:text-lg leading-snug max-w-md lg:max-w-xl m-0 p-0 mx-auto'>
          Die richtige Technik macht den Unterschied. Überzeuge deine Kunden mit
          <span className='font-bold text-sky-300'> hochwertiger</span> Arbeit.
        </p>
        <ModulComponent
          shop='https://glossboss.de/Polier-Workshop'
          heading='Polieren'
          subHeading='ca. 4 Stunden, 350€'
          className=''>
          <p>
            Der Lehrgang <strong>Polieren</strong> vermittelt Kenntnisse und
            Fähigkeiten im Umgang mit verschiedenen Tools und Techniken zur
            Politur von Oberflächen. Themen wie die Auswahl der geeigneten
            Produkte, die richtige Vorbereitung der Oberfläche, die Anwendung
            der Politur und die Wahl der richtigen Poliertechniken und
            -maschinen werden behandelt. Der Lehrgang richtet sich sowohl an
            Anfänger als auch an Fortgeschrittene, die ihre Kenntnisse und
            Fähigkeiten vertiefen möchten, und kann sowohl für den
            professionellen als auch für den privaten Gebrauch nützlich sein.
          </p>
          <ul>
            <li>Exzenter- und Rotationsmaschine</li>
            <li>Die richtige Pad/Politur Kombination</li>
            <li>ab wann ist der Lack durchpoliert?</li>
            <li>effektive Methoden um wirtschaftlich zu arbeiten</li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 mr-1 inline '>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z'
                />
              </svg>{' '}
              du und maximal 4 weitere Teilnehmer
            </li>
            <li>
              für alle geeignet! Privatanwender, Enthusiast oder
              Neben/Vollgewerbliche
            </li>
          </ul>
        </ModulComponent>
        <ModulComponent
          heading='Innenraum / Leder'
          subHeading='ca. 4 Stunden, 350€'>
          <p>
            Der Lehrgang <strong>Innenraum / Leder</strong> bietet eine
            umfassende Ausbildung in den Techniken und Methoden der Reinigung
            und Pflege von Fahrzeuginnenräumen und Leder. Themen wie die
            richtige Auswahl von Reinigungsprodukten, die Vorbereitung der
            Oberfläche, die Anwendung von Reinigungsmethoden und die Pflege von
            Leder werden behandelt. Dieser Lehrgang richtet sich an Personen,
            die in der Fahrzeugaufbereitung und Lederpflege tätig sind, wie z.B.
            Werkstätten, Detailer, Autosattler, und an jeden, der seine
            Kenntnisse und Fähigkeiten in diesem Bereich verbessern möchte.
          </p>
          <ul>
            <li>Textil- und Alcantarareinigung</li>
            <li>Lederreinigung inkl. pflegen und nachfärben</li>
            <li>streifenfreie Glasreinigung</li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 mr-1 inline '>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z'
                />
              </svg>{' '}
              du und maximal 4 weitere Teilnehmer
            </li>
            <li>
              für alle geeignet! Privatanwender, Enthusiast oder
              Neben/Vollgewerbliche
            </li>
          </ul>
        </ModulComponent>
        <ModulComponent
          shop='https://glossboss.de/Coating-Workshop'
          heading='Coating / Versiegelung'
          subHeading='2-4 Stunden, 200€'>
          <p>
            Der Lehrgang <strong>Coating</strong> befasst sich mit Techniken und
            Methoden zur Versiegelung von lackierten Oberflächen. Themen wie die
            Auswahl der geeigneten Produkte, die richtige Vorbereitung der
            Oberfläche, die Anwendung der Versiegelung und die Pflege von
            versiegelten Oberflächen werden behandelt. Der Lehrgang richtet sich
            an Personen, die ihre Kenntnisse und Fähigkeiten zum Thema
            Keramikversiegelungen vertiefen möchten. Er ist sowohl für
            Privatpersonen als auch für Gewerbliche Anwender geeignet.
          </p>
          <ul>
            <li>Übungsobjekt ist eine Testmotorhaube</li>
            <li>
              Coatings von namenhaften Herstellern - Nanolex, Labocosmetica,
              Gtechniq, Sonax, Neowax
            </li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-5 h-5 mr-1 inline '>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z'
                />
              </svg>{' '}
              du und maximal 4 weitere Teilnehmer
            </li>
            <li>
              für alle geeignet! Privatanwender, Enthusiast oder
              Neben/Vollgewerbliche
            </li>
          </ul>
          <div className='flex h-[500px] justify-between flex-row gap-3 overflow-x-auto after:absolute after:md:w-28 after:w-10 after:h-[500px] after:pointer-events-none after:bg-gradient-to-r after:from-black before:absolute before:md:w-28 before:w-10 before:h-[500px] before:pointer-events-none before:bg-gradient-to-l before:from-black before:right-0'>
            {[
              'https://glossbossimages.s3-eu-central-1.amazonaws.com/2023/labocosmetica-training/DSC02630.jpg',
              'https://glossbossimages.s3-eu-central-1.amazonaws.com/2023/labocosmetica-training/DSC02618.jpg',
              'https://glossbossimages.s3-eu-central-1.amazonaws.com/2023/labocosmetica-training/DSC02634.jpg',
              'https://glossbossimages.s3-eu-central-1.amazonaws.com/2023/labocosmetica-training/DSC02643.jpg',
              'https://glossbossimages.s3-eu-central-1.amazonaws.com/2023/labocosmetica-training/DSC02639.jpg',
            ].map((img, i) => {
              return <img src={img} className='rounded max-w-sm' key={i} />
            })}
          </div>
        </ModulComponent>
        <ModulComponent
          heading='Detailing Tagesworkshop'
          subHeading='ca. 6 Stunden, 750€'>
          <p>
            Der Lehrgang <strong>Detailing Tagesworkshop</strong> ist die ideale
            Chance, einen ganzen Tag voller Themen im Bereich Detailing zu
            behandeln. Egal worauf du deinen Schwerpunkt legen möchtest - der
            Tag gehört dir! Du kannst 2 weitere Personen mitnehmen und der Preis
            bleibt gleich.
          </p>
          <ul className=''>
            <li>Polieren</li>
            <li>Coatings</li>
            <li>Innenraum / Leder</li>
            <li>Vor- und Nachbereitung für Keramikversiegelungen</li>
            <li>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='currentColor'
                className='w-5 h-5 inline mr-1 '>
                <path
                  fillRule='evenodd'
                  d='M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z'
                  clipRule='evenodd'
                />
                <path d='M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z' />
              </svg>{' '}
              Nur du und deine Buddies!
            </li>
            <li>
              für alle geeignet! Privatanwender, Enthusiast oder
              Neben/Vollgewerbliche
            </li>
          </ul>
        </ModulComponent>
      </div>
      <div>
        <Heroheading>Business-Module</Heroheading>
        <p className='font-mono text-center text-sm md:text-lg leading-snug max-w-md lg:max-w-xl m-0 p-0 mx-auto'>
          Die Arbeit fernab der Halle wird immer{' '}
          <span className='font-bold text-amber-200'>wichtiger</span>. Neue
          Kunden informieren sich am liebsten auf Social Media über deine
          Arbeit.
        </p>
        <ModulComponent
          heading='Social Media'
          subHeading='4-6 Stunden, 400€'
          business={true}>
          <p>
            Der Lehrgang <strong>Social Media</strong> befasst sich mit der
            Nutzung von Online-Plattformen zur Kommunikation und Interaktion in
            sozialen Netzwerken. Themen wie die Erstellung von Inhalten, die
            Verwaltung von Communities, die Analyse von Daten und die Werbung in
            sozialen Medien werden behandelt. Der Lehrgang richtet sich an
            Personen, die ihre Kenntnisse und Fähigkeiten im Bereich Social
            Media erweitern möchten.
          </p>
          <ul>
            <li>Analyse: Ist-Zustand deiner aktuellen aktivitäten</li>
            <li>die idealen Zeiten um Content zu posten</li>
            <li>welche Zielgruppen sollte ich ansprechen?</li>
            <li>wie kann ich langfristig eine Bindung zu Kunden aufbauen?</li>
            <li>Wo und wie sollten Inhalte geteilt und gepostet werden?</li>
          </ul>
        </ModulComponent>
        <ModulComponent
          heading='Bild- und Videobearbeitung'
          subHeading='5-7 Stunden, 600€'
          business={true}>
          <p>
            Der Lehrgang <strong>Bild- und Videobearbeitung</strong> vermittelt
            Kenntnisse und Fähigkeiten im Umgang mit verschiedenen Tools und
            Techniken zur Bearbeitung von Bildern und Videos. Themen wie
            Bildkomposition, Farbkorrektur, Tonaufnahme, Schnitt und Montage
            werden behandelt. Der Lehrgang richtet sich sowohl an Anfänger als
            auch an Fortgeschrittene, die ihre Kenntnisse und Fähigkeiten in der
            Bild- und Videobearbeitung vertiefen möchten, und kann sowohl für
            die professionelle als auch für die private Nutzung von nützlich
            sein.
          </p>
          <ul>
            <li>
              Bilder und Videos für verschiedene Social Media Plattformen
              erstellen
            </li>
            <li>Kurzvideos (z.B. Shorts, Reels)</li>
            <li>die wichtigsten Formate in Photoshop und co</li>
          </ul>
        </ModulComponent>
        <ModulComponent
          heading='Administration'
          subHeading='4-6 Stunden, 400€'
          business={true}>
          <p>
            Der Lehrgang <strong>Administration</strong> befasst sich mit den
            Prinzipien und Methoden zur Erstellung von Angeboten und dem führen
            eines Autopflegebetriebs. Themen wie Kosten- und Preisberechnung,
            Erstellung von Angebotsdokumenten, Verhandlungstechniken und
            Risikoanalyse werden behandelt. Der Lehrgang richtet sich an
            Personen, die in ihrem Beruf mit der Erstellung von Angeboten
            befasst sind oder dies in Zukunft sein werden, und die ihre
            Kenntnisse und Fähigkeiten in diesem Bereich vertiefen möchten, wie
            z.B. kaufmännische Angestellte, Verkäufer, Projektleiter,
            Unternehmer und Selbstständige.
          </p>
          <ul>
            <li>wir ermitteln gemeinsam deinen Stundenverrechnungssatz</li>
            <li>Bedarfsanalyse: welche Buchhaltungsstoftware macht sinn?</li>
            <li>in welche Möglichkeiten sollte investiert werden?</li>
          </ul>
        </ModulComponent>
      </div>
    </Layout>
  )
}
