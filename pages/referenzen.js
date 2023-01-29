import { NextSeo } from 'next-seo'
import Layout from '@/components/layout'
import Image from 'next/image'
import Container from '@/components/container'

import Heroheading from '@/components/heroheading'
import ModulComponent from '@/components/modulcomponent'
import ReferenzenComponent from '@/components/referenzencomponent'

export default function Referenzen() {
  return (
    <Layout
      url={`https://detailing.glossboss.de/referenzen`}
      title='referenzen@GLOSSBOSS'
      description='Vom Porsche bis Piaggio - Unsere Referenzen für hochwertige Fahrzeugpflege'>
      <div className='prose-li:m-0'>
        <Heroheading>Referenzen</Heroheading>
        <p className='font-mono text-center text-sm md:text-lg leading-snug max-w-md lg:max-w-xl m-0 p-0 mx-auto'>
          von <span className='line-through'>Pontius zu Pilatius</span> Porsche
          zu Piaggio - hier
          <span className='font-bold text-green-500'> durften</span> wir schon
          Hand anlegen.
        </p>
        <ReferenzenComponent
          heading='Mercedes EQS'
          subHeading='1 Stufig Poliert + Labocosmetica #STC + #HPC, Felgen Keramikversiegelung'
          img={[
            'https://glossbossuploader.s3.eu-central-1.amazonaws.com/c7Yay_bxZvyk2AY36RmeQ-eqs/DSC02551.jpg',
            'https://glossbossuploader.s3.eu-central-1.amazonaws.com/c7Yay_bxZvyk2AY36RmeQ-eqs/DSC02555.jpg',
            'https://glossbossuploader.s3.eu-central-1.amazonaws.com/c7Yay_bxZvyk2AY36RmeQ-eqs/DSC02559.jpg',
          ]}></ReferenzenComponent>
        <ReferenzenComponent
          heading='Porsche 991.2 Turbo S'
          subHeading='2 Stufig Poliert + Labocosmetica #SAM + #HPC'
          img={[
            'https://glossbossuploader.s3.eu-central-1.amazonaws.com/ArURdZXTScvKOY5VFOgmS-turbos/DSC01329.jpg',
            'https://glossbossuploader.s3.eu-central-1.amazonaws.com/ArURdZXTScvKOY5VFOgmS-turbos/DSC01330.jpg',
            'https://glossbossuploader.s3.eu-central-1.amazonaws.com/ArURdZXTScvKOY5VFOgmS-turbos/DSC01337.jpg',
          ]}></ReferenzenComponent>

        <ReferenzenComponent
          heading='Porsche 993 in Sonderlackierung'
          subHeading='Dieser Porsche 993 wurde mehrstufig poliert und anschließend mit einem Hochwertigen Wachs geschützt.'
          img={[
            'https://glossbossuploader.s3.eu-central-1.amazonaws.com/ijaxFCSSsdmk7-WsQyC1--993/DSC01130.jpg',
            'https://glossbossuploader.s3.eu-central-1.amazonaws.com/ijaxFCSSsdmk7-WsQyC1--993/DSC01134.jpg',
            'https://glossbossuploader.s3.eu-central-1.amazonaws.com/ijaxFCSSsdmk7-WsQyC1--993/DSC01146.jpg',
          ]}></ReferenzenComponent>

        <ReferenzenComponent
          heading='Corvette C7 Z06'
          subHeading='Diese Corvette wurde auf absolutem Hochglanz gebracht mit bis zu 3 Polierschritten. Anschließend wurde die neuentwickelte Keramikversiegelung Si3D MAX von Nanolex appliziert.'
          img={[
            'https://glossbossuploader.s3.eu-central-1.amazonaws.com/SFX-zOHYdRFSodzsx7iEc-corvette/DSC00417.jpg',
            'https://glossbossuploader.s3.eu-central-1.amazonaws.com/SFX-zOHYdRFSodzsx7iEc-corvette/DSC00423.jpg',
            'https://glossbossuploader.s3.eu-central-1.amazonaws.com/SFX-zOHYdRFSodzsx7iEc-corvette/DSC00426.jpg',
          ]}></ReferenzenComponent>

        <ReferenzenComponent
          heading='BMW M3 F80'
          subHeading='Tansanitblauer BMW M3 (F80) mit einem Luxuswachs aus dem Hause Swizöl veredelt.'
          img={[
            'https://glossbossuploader.s3.eu-central-1.amazonaws.com/1PlVSj-lvEIhNeQj6q2DR-f80m3/DSC00152.JPG',
            'https://glossbossuploader.s3.eu-central-1.amazonaws.com/1PlVSj-lvEIhNeQj6q2DR-f80m3/DSC00149.JPG',
            'https://glossbossuploader.s3.eu-central-1.amazonaws.com/W48xz9B3ga8vBm6_rfRMn-f80m3/DSC00133.jpg',
          ]}></ReferenzenComponent>
        <ReferenzenComponent
          heading='Porsche 996 Turbo'
          subHeading='Dieser Speedgelbe Porsche 996 Turbo wurde 2 Stufig poliert und anschließend mit Gtechniq Crystal Serum + Exo gepflegt'
          img={[
            'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/996turbo-bilder/DSC02067.jpg',
            'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/996turbo-bilder/DSC02070.jpg',
            'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/996turbo-bilder/DSC02063.jpg',
          ]}></ReferenzenComponent>
        <ReferenzenComponent
          heading='Porsche 911 G-Modell'
          subHeading='Dieses Irisblaue Porsche G-Modell wurde in mehreren Polierstufen wieder auf Hochglanz gebracht und anschließend mit einem Wax-Versiegelungs-Hybrid geschützt'
          img={[
            'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche_gmodell_1/DSC00550.jpg',
            'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche_gmodell_1/DSC00553.jpg',
            'https://glossbossimages.s3.eu-central-1.amazonaws.com/marvin/porsche_gmodell_1/DSC00546.jpg',
          ]}></ReferenzenComponent>
      </div>
    </Layout>
  )
}
