import { cx } from '@/utils/all'

export default function Heroheading(props: any) {
  return (
    <div className=''>
      <h1
        className={cx(
          'p-2 m-0 mx-auto block gradients_heroHeading font-extrabold tracking-[-.04em] leading-none text-[50px] md:text-6xl lg:text-[80px] max-w-lg md:max-w-xl lg:max-w-4xl text-center text-transparent ',
          props.className
        )}>
        {props.children}
      </h1>
    </div>
  )
}
