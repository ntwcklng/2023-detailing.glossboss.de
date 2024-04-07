import { cx } from '@/utils/all'
import Button from './button'
import Card from './card'

export default function PreisComponent(props) {
  const mailBody = `Hallo Marvin, ich würde gerne einen Termin für folgende Leistung anfragen: ${props.heading}.`
  return (
    <Card className={cx(props.className)} accent='purple'>
      <h2 className={`mt-0 'text-gray-900`}>
        {props.heading}
        <span className='block text-sm text-gray-600 font-medium'>
          {props.subHeading}
        </span>
      </h2>
      {props.children}
      <Button
        target='_blank'
        rel='noreferrer'
        href='https://a.glossboss.de/besichtigungstermin'
        primary='true'>
        Termin Vereinbaren
      </Button>
    </Card>
  )
}
