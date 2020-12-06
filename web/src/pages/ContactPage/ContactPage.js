import BlogLayout from 'src/layouts/BlogLayout/BlogLayout'
import {
  FieldError,
  Form,
  FormError,
  Label,
  Submit,
  TextAreaField,
  TextField,
} from '@redwoodjs/forms'
import { useMutation } from '@redwoodjs/web'
import { useForm } from 'react-hook-form'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const ContactPage = () => {
  const formMethods = useForm()
  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      formMethods.reset()
      alert('Thank you for message!')
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
    console.log(data)
  }

  // , pattern: {value: /[^@]+@[^.]+\..+/}

  return (
    <BlogLayout>
      <Form
        onSubmit={onSubmit}
        validation={{ mode: 'onblur' }}
        formMethods={formMethods}
        error={error}
      >
        <Label name="name" errorClassName="error">
          Your name
        </Label>
        <TextField
          name="name"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError style={{ color: 'red' }} name="name" />

        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />

        <Label name="email" errorClassName="error">
          Your email
        </Label>
        <TextField
          name="email"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError style={{ color: 'red' }} name="email" />

        <Label name="message" errorClassName="error">
          Your message
        </Label>
        <TextAreaField
          name="message"
          errorClassName="error"
          validation={{ required: true }}
        />
        <FieldError style={{ display: 'block', color: 'red' }} name="message" />

        <Submit disabled={loading}>Save</Submit>
      </Form>
    </BlogLayout>
  )
}

export default ContactPage
