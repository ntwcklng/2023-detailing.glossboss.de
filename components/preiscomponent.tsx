import { cx } from '@/utils/all'
import Card from './card'

export default function PreisComponent(props: {
  className?: string
  heading: string
  subHeading: string
  children?: React.ReactNode
}) {
  return (
    <Card className={cx(props.className)} accent='purple'>
      <h2 className={`mt-0 'text-gray-900`}>
        {props.heading}
        <span className='block text-sm text-gray-600 font-medium'>
          {props.subHeading}
        </span>
      </h2>
      {props.children}
      <span className='inline-block px-4 py-2 text-sm font-medium text-gray-400 bg-gray-100 rounded-full cursor-default'>
        Derzeit nicht buchbar
      </span>
    </Card>
  )
}
