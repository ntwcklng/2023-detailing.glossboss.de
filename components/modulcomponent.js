import { cx } from '@/utils/all'
import Button from './button'
import Card from './card'

export default function ModulComponent(props) {
  const mailBody = `Hallo Marvin, ich würde gerne einen Termin für das Modul ${props.heading} bei dir anfragen.`
  return (
    <Card
      className={cx(props.className)}
      accent={`${props.business ? 'amber' : 'sky'}`}>
      <h2
        className={`mt-0 ${
          props.business ? 'text-amber-200' : 'text-sky-300'
        }`}>
        {props.heading}
        <span className='block text-sm text-gray-400 font-medium'>
          {props.subHeading}
        </span>
      </h2>
      {props.children}
      <Button
        target='_blank'
        rel='noreferrer'
        primary={props.shop ? 'true' : 'false'}
        href={`${
          props.shop
            ? props.shop
            : `mailto:marvin@glossboss.de?subject=Modul%20${
                props.heading
              }&body=${mailBody.replace(' ', '%20')}`
        }`}>
        {props.heading} {props.shop ? 'Buchen' : 'Termin Anfragen'}
      </Button>
    </Card>
  )
}
