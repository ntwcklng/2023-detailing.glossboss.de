import { cx } from '@/utils/all'

export default function Card({ children, className }: any) {
	return (
		<div className="transition-all relative rounded-2xl hover:shadow-lg">
			<div
				className={cx(
					'rounded-2xl p-6 my-8 bg-white/80 backdrop-blur-sm border border-gray-100 hover:bg-white transition-colors',
					className
				)}>
				{children}
			</div>
		</div>
	)
}
