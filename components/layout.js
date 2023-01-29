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
      <div className='bg-black mx-auto p-2 min-h-vh'>
        <div className=' mx-auto '>
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
