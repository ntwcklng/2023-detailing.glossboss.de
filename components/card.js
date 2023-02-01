import { cx } from '@/utils/all'

export default function Card(props) {
  return (
    <div className='transition-all relative '>
      <div
        className={cx(
          `absolute blur-[3px] inset-0 rounded-lg`,
          'transition-all bg-gradient-to-br from-sky-400 via-purple-700 to-black opacity-90'
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
