import { NextSeo } from 'next-seo'
import Navbar from '@/components/navbar'
import Container from '@/components/container'
import Footer from '@/components/footer'

export default function Layout(props) {
  const { children } = props
  return (
    <>
      <NextSeo
        title={props.title}
        description={props.description}
        canonical={props.url}
        openGraph={{
          url: props.url,
          title: props.title,
          description: props.description,
          images: [
            {
              url: '',
              alt: props.title,
            },
          ],
          site_name: props.title,
        }}
      />
      <div className='bg-black mx-auto p-2 min-h-vh relative'>
        <div className='relative isolate z-10'>
          <div className='absolute inset-x-0 top-4 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]'>
            <svg
              className='h-[60rem] w-[100rem] flex-none stroke-gray-500 opacity-30'
              aria-hidden='true'>
              <defs>
                <pattern
                  id='e9033f3e-f665-41a6-84ef-756f6778e6fe'
                  width={100}
                  height={100}
                  x='50%'
                  y='50%'
                  patternUnits='userSpaceOnUse'
                  patternTransform='translate(-100 0)'>
                  <path d='M.5 200V.5H200' fill='none' />
                </pattern>
              </defs>
              <svg x='50%' y='50%' className='overflow-visible fill-blue-50/10'>
                <path
                  d='M-300 0h201v201h-201Z M300 200h201v201h-201Z'
                  strokeWidth={0}
                />
              </svg>
              <rect
                width='100%'
                height='100%'
                strokeWidth={0}
                fill='url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)'
              />
            </svg>
          </div>
        </div>
        <div className=' mx-auto relative z-20 '>
          <Container className='prose prose-invert prose-lg prose-a:text-sky-400 prose-a:no-underline hover:prose-a:underline'>
            <Navbar />
            {children}
            <Footer />
          </Container>
        </div>
      </div>
    </>
  )
}
