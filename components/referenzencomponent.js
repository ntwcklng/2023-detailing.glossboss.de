import { cx } from '@/utils/all'
import Link from 'next/link'
import Button from './button'
import Card from './card'
import Image from 'next/image'

export default function ReferenzenComponent(props) {
  return (
    <Card className={cx(props.className)} accent={`green`}>
      <h2 className={`mt-0 text-white`}>
        {props.heading}
        <span className='block text-sm text-gray-400 font-medium'>
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
