import { cx } from '@/utils/all'
import { Disclosure } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'

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
export default function Navbar(props) {
  const router = useRouter()
  const currentRoute = router.pathname
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
                      {item.external ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-3 h-3 ml-1 inline text-gray-50'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                          />
                        </svg>
                      ) : (
                        ''
                      )}
                    </Link>
                  ))}
                </div>
                <Disclosure.Button
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
                </Disclosure.Button>
              </div>
              <Disclosure.Panel>
                <div className='flex flex-col items-center justify-start order-2 w-full lg:hidden pb-8 gap-3 mt-3'>
                  {navLinks.map((item) => (
                    <Link
                      href={item.link}
                      key={item.link}
                      className='px-5 py-2 text-md font-medium text-gray-900 rounded-xl hover:bg-gray-100 transition-all'>
                      {item.name}{' '}
                      {item.external ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-3 h-3 ml-1 inline'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25'
                          />
                        </svg>
                      ) : (
                        ''
                      )}
                    </Link>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
