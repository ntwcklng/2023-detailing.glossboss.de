import { NextSeo } from 'next-seo'
import Layout from '@/components/layout'
import Image from 'next/image'

import Container from '@/components/container'

import Heroheading from '@/components/heroheading'
import PreisComponent from '@/components/preiscomponent'
import Link from 'next/link'

export default function Preise() {
  return (
    <Layout
      url={`https://workshops.glossboss.de`}
      title='preise@GLOSSBOSS'
      description='Übersicht über unsere Preise und Leistungen'>
      <div className='prose-li:m-0'>
        <Heroheading>Leistungen und Preise</Heroheading>
        <p className='font-mono text-center text-sm md:text-lg leading-snug max-w-md lg:max-w-xl m-0 p-0 mx-auto'>
          Der
          <span className='font-bold text-purple-300'> Wert</span> einer
          Dienstleistung ist nicht ihr Preis.
        </p>
        <PreisComponent
          heading='Polieren / Keramikversiegelung'
          subHeading='min. 12 Stunden, ab 900€'
          className=''>
          <p>
            Das Standard-Paket für Neu- und Gebrauchtwagen. Bevor wir deinen
            Lack mit einer Keramikversiegelung schützen können, müssen wir
            diesen Polieren. Nur so können wir eine gewisse Haftung und
            Performance garantieren. Durch einen 1-Stufigen Polierdurchgang
            werden leichte Kratzer (auch Swirls genannt) entfernt und dein Lack
            wird brillanter.
            <br />
            Falls dein Lack stärker verswirlt ist, sind unter Umständen weitere
            Polierdurchgänge nötig. Wie viele das sind lässt sich am besten bei
            einem leckeren Espresso bei uns in Dorsten klären.
            <br />
          </p>
        </PreisComponent>
      </div>
      <div>
        <Heroheading>Du machst es lieber selbst?</Heroheading>
        <p className='font-mono text-center text-sm md:text-lg leading-snug max-w-md lg:max-w-xl m-0 p-0 mx-auto'>
          Gerne! Durch unsere <Link href='/workshop'>Workshops</Link> und die
          Produktempfehlungen aus dem{' '}
          <Link href='https://glossboss-shop.de' target='_blanks'>
            GLOSSBOSS-SHOP
          </Link>{' '}
          steht dem nichts im wege.
        </p>
      </div>
      <div>
        <PreisComponent
          heading='Lederpflege- und Reparatur'
          subHeading='min. 3 Stunden, ab 250€'
          className=''>
          <p>
            Egal ob speckiges Leder oder eingerissene Sitzwange, wir können es
            reparieren. Dein Leder wird wieder geschmeidiger und fühlt sich
            wieder natürlicher an. Die Regelmäßige Lederpflege ist unheimlich
            wichtig für den Werterhalt deines Schmuckstückes.
          </p>
        </PreisComponent>
        <PreisComponent
          heading='Textil- und Alcantara'
          subHeading='min. 3 Stunden, ab 250€'
          className=''>
          <p>
            Flecken aus Stoff- oder Alcantaraoberflächen entfernen wir entweder
            komplett Chemiefrei mit Trockendampf, oder schonend mit einer milden
            Reinigungslösung. Damit die gereinigte Oberfläche auch langfristig
            vor neuen Verschmutzungen geschützt ist, wird diese nach der
            Reinigung imprägniert.
            <br />
          </p>
        </PreisComponent>
        <PreisComponent
          heading='Felgenversiegelung'
          subHeading='min. 2 Stunden, ab 200€'
          className=''>
          <p>
            Versiegelte Felgen lassen sich einfacher reinigen und glänzen
            besser. Der heiße Bremsstaub kann sich außerdem nicht so schnell in
            den Lack der Felge einbrennen. Für die Felgenbeschichtung nehmen wir
            ausschließlich die Widerstandsfähigsten Keramikversiegelungen.{' '}
            <br />
          </p>
        </PreisComponent>
      </div>
    </Layout>
  )
}
