import Container from './container'
import Link from 'next/link'
import Contact from './contact'
export default function Footer(props) {
  return (
    <>
      <div className='mt-10'>
        <Contact />
        <div className='text-sm text-center'>
          Copyright © {new Date().getFullYear()} GLOSSBOSS <br />
          <Link href='/impressum'>Impressum - AGB - Datenschutz</Link> - Alle
          Preise inkl. MwSt.
        </div>
      </div>
    </>
  )
}
