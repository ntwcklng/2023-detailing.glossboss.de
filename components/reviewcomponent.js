import { cx } from '@/utils/all'
import Link from 'next/link'

export default function ReviewComponent(props) {
  const stars = props.stars || 0
  let i = 0
  return (
    <div className={cx('flex flex-col md:w-2/5 w-full m-3', props.className)}>
      <h3 className='m-0 mx-auto'>
        {props.name}
        <Link
          target='_blank'
          rel='noreferrer'
          href={props.originLink}
          className='block text-xs text-gray-500 text-center'>
          {' '}
          auf {props.origin}
        </Link>
      </h3>
      <div className='flex flex-row mx-auto'>
        {[...Array(props.stars)].map((review, i) => {
          return (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='w-5 h-5 text-amber-400'
              key={i + review}>
              <path
                fillRule='evenodd'
                d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z'
                clipRule='evenodd'
              />
            </svg>
          )
        })}
      </div>
      <p className='text-sm text-justify mt-2'>{props.review}</p>
      {props.children}
    </div>
  )
}
