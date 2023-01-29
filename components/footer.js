import Container from './container'
import Link from 'next/link'
export default function Footer(props) {
  return (
    <>
      <Container className='mt-10 border-t border-gray-500'>
        <div className='text-sm text-center'>
          Copyright © {new Date().getFullYear()} GLOSSBOSS <br />
          <Link href='/impressum'>Impressum - AGB - Datenschutz</Link> - Alle
          Preise inkl. MwSt.
        </div>
      </Container>
    </>
  )
}
