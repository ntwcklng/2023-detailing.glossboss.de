import Link from 'next/link'

export default function Footer() {
  return (
    <>
      <div className='mt-10'>
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
