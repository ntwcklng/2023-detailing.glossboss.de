'use client'
import { cx } from '@/utils/all'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { link: '/preise', name: 'Preise' },
  {
    link: '/workshops',
    name: 'Workshops',
  },
  { link: '/referenzen', name: 'Referenzen' },
  { link: '/anfahrt', name: 'Anfahrt' },
  { link: 'mailto:marvin@glossboss.de', name: 'Kontakt' },
]
export default function Navbar() {
  const currentRoute = usePathname()
  return (
    <>
      <div className='bg-white rounded-2xl mx-auto px-3 py-1 not-prose mb-16'>
        <Disclosure>
          {({ open }) => (
            <>
              <div className='flex flex-wrap justify-around md:gap-10 md:flex-nowrap h-16'>
                <Link href='/'>
                  <img src='/5-3d-1024px.png' className='max-h-16 p-2 h-full' />
                </Link>
                <div className='flex-col items-center justify-around order-1 hidden w-full lg:flex lg:flex-row lg:justify-end lg:w-auto lg:order-none lg:flex-1 whitespace-nowrap md:gap-4'>
                  {navLinks.map((item) => (
                    <Link
                      href={item.link}
                      key={item.link}
                      className={cx(
                        'px-5 py-2 text-base  text-black rounded-xl hover:bg-gray-100 transition-all h-10',
                        `${
                          currentRoute == item.link
                            ? 'font-bold bg-gray-100'
                            : ''
                        }`
                      )}>
                      {item.name}{' '}
                    </Link>
                  ))}
                </div>
                <DisclosureButton
                  aria-label='Toggle Menu'
                  className='px-2 py-1 ml-auto text-gray-900 rounded-md lg:hidden focus:text-sky-500 focus:outline-none'>
                  <svg
                    className='w-6 h-6 fill-current'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'>
                    {open && (
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z'
                      />
                    )}
                    {!open && (
                      <path
                        fillRule='evenodd'
                        d='M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z'
                      />
                    )}
                  </svg>
                </DisclosureButton>
              </div>
              <DisclosurePanel>
                <div className='flex flex-col items-center justify-start order-2 w-full lg:hidden pb-8 gap-3 mt-3'>
                  {navLinks.map((item) => (
                    <Link
                      href={item.link}
                      key={item.link}
                      className='px-5 py-2 text-md font-medium text-gray-900 rounded-xl hover:bg-gray-100 transition-all'>
                      {item.name}{' '}
                    </Link>
                  ))}
                </div>
              </DisclosurePanel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
