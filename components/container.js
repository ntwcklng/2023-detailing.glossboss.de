import { cx } from '@/utils/all'

export default function Container(props) {
  return (
    <div
      className={cx(
        'px-2 py-5 lg:py-8 mx-auto xl:px-5 max-w-screen-lg',
        props.className
      )}>
      {props.children}
    </div>
  )
}
