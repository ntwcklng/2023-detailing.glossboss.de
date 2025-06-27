import { cx } from '@/utils/all'

export default function Container(props: any) {
  return (
    <div
      className={cx(
        'px-1 py-5 lg:py-8 mx-auto xl:px-5 max-w-(--breakpoint-lg)',
        props.className
      )}>
      {props.children}
    </div>
  )
}
