import { cx } from '@/utils/all'

export default function Card(props) {
  return (
    <div className='transition-all relative group'>
      <div
        className={cx(
          `absolute blur-sm inset-0 rounded-lg`,
          'transition-all bg-gradient-to-br from-neutral-300 via-neutral-600 to-black group-hover:opacity-0 duration-300'
        )}></div>
      <div
        className={cx(
          `absolute blur-sm inset-0 rounded-lg`,
          'transition-all opacity-0 bg-gradient-to-br from-sky-300 via-purple-800 to-black group-hover:opacity-100 duration-300'
        )}></div>
      <div
        className={cx(
          'relative rounded-xl p-6 my-16 bg-black',
          props.className
        )}>
        {props.children}
      </div>
    </div>
  )
}
