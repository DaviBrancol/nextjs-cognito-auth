import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { NextSeo } from 'next-seo'

// Application Import
import { useAuth } from '@context/Auth'

// Components Import
import { AuthLayout } from '@components/Layout'
import { Button, ButtonSize, ButtonState, TextField } from '@brancol-ui/react'

const SignUpSchema = Yup.object({
  name: Yup.string().required('This field is required.'),
  email: Yup.string().email('Invalid email').required('Email is required.'),
  password: Yup.string()
    .required('Password is required.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[=+\-^$*.[\]{}()?"!@#%&/\\,><':;|_~`])\S{8,99}$/,
      'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character'
    ),
})

export const RegisterScreen: React.FC = () => {
  const { state, operations } = useAuth()

  return (
    <AuthLayout>
      <NextSeo title="Register" />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="items-center bg-white rounded-2xl shadow-2xl flex flex-col py-16 px-8 w-96">
          <img src="/img/icon-512.png" className="w-28" alt="Brancol UI logo" />
          <div className="mt-6 text-2xl font-bold text-gray-800">Register</div>
          <div className="mt-1 text-lg text-gray-600">
            Access <span className="text-primary-600">Brancol UI</span> system with cognito
          </div>
          <div className="flex flex-col w-full">
            <Formik
              enableReinitialize
              validationSchema={SignUpSchema}
              initialValues={{
                name: '',
                email: '',
                password: '',
              }}
              onSubmit={operations.register}
            >
              <Form className="w-full">
                <TextField name="name" label="Name" />
                <TextField name="email" label="Email" />
                <TextField name="password" label="Password" type="password" />
                <div className="mt-6 w-full">
                  <Button
                    size={ButtonSize.full}
                    type="submit"
                    state={state.isSubmitting ? ButtonState.submitting : ButtonState.normal}
                  >
                    Register
                  </Button>
                </div>
              </Form>
            </Formik>
            <div className="flex w-full justify-center text-sm mt-8 text-sonicSilver-500 no-underline">
              <a
                className="text-sm mt-3 text-sonicSilver-500 no-underline"
                role="button"
                onClick={operations.moveToLogin}
              >
                Back to login
              </a>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
