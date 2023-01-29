import { cx } from '@/utils/all'

export default function Card(props) {
  const colorVariantBackground = {
    purple: 'bg-purple-800',
    sky: 'bg-sky-800',
    amber: 'bg-yellow-700',
    green: 'bg-green-800',
    indigo: 'bg-indigo-700',
  }
  const colorVariantBorder = {
    purple: 'border-purple-900',
    sky: 'border-sky-900',
    amber: 'border-yellow-800',
    green: 'border-green-900',
    indigo: 'border-indigo-900',
  }
  return (
    <div className='relative'>
      <div
        className={cx(
          `absolute blur-sm inset-0 rounded-lg`,
          'bg-gradient-to-br from-neutral-300 via-neutral-600 to-black'
          // colorVariantBackground[props.accent]
        )}></div>
      <div
        className={cx(
          'relative rounded-xl p-6 my-16 bg-black',
          // 'border-gray-700',
          // colorVariantBorder[props.accent],
          props.className
        )}>
        {props.children}
      </div>
    </div>
  )
}
