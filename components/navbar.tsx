'use client'
import { cx } from '@/utils/all'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible'
import { useState } from 'react'

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
	const [isOpen, setIsOpen] = useState(false)

	return (
		<div className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur-sm shadow-sm">
			<div className="mx-auto not-prose px-6 py-2 xl:py-0 xl:px-5 max-w-screen-lg">
				<Collapsible open={isOpen} onOpenChange={setIsOpen}>
					<div className="flex flex-wrap justify-between md:gap-10 md:flex-nowrap h-14">
						<Link href="/" className="flex items-center">
							<img src="/5-3d-1024px.png" className="h-8" alt="Logo" />
						</Link>
						<div className="flex-col items-center justify-around order-1 hidden w-full lg:flex lg:flex-row lg:justify-end lg:w-auto lg:order-none lg:flex-1">
							{navLinks.map((item) => (
								<Link
									href={item.link}
									key={item.link}
									className={cx(
										'px-3 py-1.5 text-sm font-medium text-gray-800 rounded-full hover:bg-white/60 transition-all relative',
										currentRoute === item.link
											? 'bg-white after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-indigo-500 after:rounded-full'
											: ''
									)}>
									{item.name}
								</Link>
							))}
						</div>
						<CollapsibleTrigger asChild>
							<button
								aria-label="Toggle Menu"
								className="px-2 py-1 ml-auto text-gray-700 rounded-md lg:hidden focus:outline-none">
								<svg
									className="w-6 h-6 fill-current"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24">
									{isOpen ? (
										<path
											fillRule="evenodd"
											clipRule="evenodd"
											d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
										/>
									) : (
										<path
											fillRule="evenodd"
											d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
										/>
									)}
								</svg>
							</button>
						</CollapsibleTrigger>
					</div>
					<CollapsibleContent>
						<div className="flex flex-col items-center justify-start order-2 w-full lg:hidden py-2 gap-1.5">
							{navLinks.map((item) => (
								<Link
									href={item.link}
									key={item.link}
									className={cx(
										'px-3 py-1.5 text-sm font-medium text-gray-800 rounded-full hover:bg-white/60 transition-all max-w-[200px] text-center',
										currentRoute === item.link
											? 'bg-white after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2 after:w-1 after:h-1 after:bg-indigo-500 after:rounded-full relative'
											: ''
									)}>
									{item.name}
								</Link>
							))}
						</div>
					</CollapsibleContent>
				</Collapsible>
			</div>
		</div>
	)
}
