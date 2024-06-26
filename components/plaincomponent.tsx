import { cx } from '@/utils/all'
import Button from './button'
import Card from './card'

export default function Plaincomponent(props: {
  heading: string
  subHeading: string
  className?: string
  children?: React.ReactNode
}) {
  return (
    <Card className={cx(props.className)} accent='indigo'>
      <h2 className={`mt-0 text-gray-900`}>
        {props.heading}
        <span className='block text-sm text-gray-600 font-medium'>
          {props.subHeading}
        </span>
      </h2>
      {props.children}
    </Card>
  )
}
