import { cx } from '@/utils/all'
import Link from 'next/link'

export default function Button(props: any) {
	return (
		<div className="not-prose mt-12 mb-4">
			<Link
				{...props}
				href={props.href}
				className={cx(
					props.primary === 'true'
						? 'bg-indigo-500 text-white hover:bg-indigo-600'
						: 'bg-gray-100 text-gray-800 hover:bg-gray-200',
					'px-6 py-2.5 rounded-full text-sm font-medium transition-all inline-flex items-center gap-2 hover:shadow-md',
					props.className
				)}>
				{props.children}
			</Link>
		</div>
	)
}
