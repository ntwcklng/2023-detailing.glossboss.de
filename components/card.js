import { cx } from '@/utils/all'

export default function Card(props) {
  return (
    <div className='transition-all relative rounded-xl cardBorderGradient'>
      <div className={cx('rounded-xl p-8 my-16 bg-white', props.className)}>
        {props.children}
      </div>
    </div>
  )
}
