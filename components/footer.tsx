import Link from 'next/link'
import Contact from './contact'
export default function Footer() {
  return (
    <>
      <div className='mt-10'>
        <Contact />
        <div className='text-sm text-center'>
          Copyright © {new Date().getFullYear()} GLOSSBOSS (46284 Dorsten)
          <br />
          <Link href='/impressum'>Impressum - AGB - Datenschutz</Link> - Alle
          Preise inkl. MwSt.
        </div>
      </div>
    </>
  )
}
