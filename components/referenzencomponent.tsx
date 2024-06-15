import { cx } from '@/utils/all'
import Link from 'next/link'
import Card from './card'

export default function ReferenzenComponent(props: {
  className?: string
  heading: string
  subHeading: string
  img: string[]
  children?: React.ReactNode
}) {
  return (
    <Card className={cx(props.className)} accent={`green`}>
      <h2 className={`mt-0 text-gray-900`}>
        {props.heading}
        <span className='block text-sm text-gray-600 font-medium'>
          {props.subHeading}
        </span>
      </h2>
      <div className='flex md:flex-row justify-center md:gap-10 gab-5 flex-col items-center'>
        {props.img.map((img) => (
          <Link href={img.replace('thumbnail/', '')} target='_blank' key={img}>
            <img
              className='hover:scale-105 transition-all rounded'
              src={img.replace('amazonaws.com/', 'amazonaws.com/thumbnails/')}
            />
          </Link>
        ))}
      </div>
      {props.children}
    </Card>
  )
}
