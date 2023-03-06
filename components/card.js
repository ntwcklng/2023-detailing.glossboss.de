import { cx } from '@/utils/all'

export default function Card(props) {
  return (
    <div className='transition-all relative rounded-lg cardBorderGradient'>
      <div className={cx('  p-8 my-16 bg-black', props.className)}>
        {props.children}
      </div>
    </div>
  )
}
