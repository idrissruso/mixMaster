import { Form } from 'react-router-dom'
import Input from '../components/Input'
import Button from '../components/Button'

function NewsLetter() {
  return (
    <div className="flex items-center justify-center">
      <Form className="flex flex-col min-w-[50%] bg-white drop-shadow-lg p-10 gap-4 mt-10">
        <Input name={'Name'} />
        <Input name={'Last Name'} />
        <Input name={'E-mail'} />
        <p></p>
        <Button type={'btn'}>Submit</Button>
      </Form>
    </div>
  )
}

export default NewsLetter
