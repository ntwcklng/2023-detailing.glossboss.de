import { cx } from '@/utils/all'
import Link from 'next/link'

export default function Button(props) {
  return (
    <div className='not-prose mt-16 mb-4'>
      <Link
        {...props}
        href={props.href}
        className={cx(
          `${props.primary === 'true' && 'bg-slate-50 text-slate-800'}`,
          'px-5 py-3 cursor-pointer rounded-lg min-w-24  text-base font-semibold hover:bg-slate-200 hover:text-slate-600 hover:no-underline transition-all',
          props.className
        )}>
        {props.children}
      </Link>
    </div>
  )
}
