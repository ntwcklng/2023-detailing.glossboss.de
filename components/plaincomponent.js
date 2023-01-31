import { cx } from '@/utils/all'
import Button from './button'
import Card from './card'

export default function Plaincomponent(props) {
  return (
    <Card className={cx(props.className)} accent='indigo'>
      <h2 className={`mt-0 text-indigo-100`}>
        {props.heading}
        <span className='block text-sm text-gray-400 font-medium'>
          {props.subHeading}
        </span>
      </h2>
      {props.children}
    </Card>
  )
}
