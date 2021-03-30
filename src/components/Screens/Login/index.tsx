// Modules Import
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import { NextSeo } from 'next-seo'

// Application Import
import { useAuth } from '@context/Auth'

// Components Import
import { AuthLayout } from '@components/Layout'
import { Button, ButtonSize, ButtonState, TextField } from '@brancol-ui/react'

const SignInSchema = Yup.object({
  username: Yup.string().email('Invalid email').required('Email is required.'),
  password: Yup.string().required('Password is required.'),
})

export const LoginScreen: React.FC = () => {
  const { state, operations } = useAuth()

  return (
    <AuthLayout>
      <NextSeo title="Login" />
      <div className="w-full h-screen flex justify-center items-center">
        <div className="items-center bg-white rounded-2xl shadow-2xl flex flex-col py-12 px-8 w-96">
          <img src="/img/icon-512.png" className="w-28" alt="Brancol UI logo" />
          <div className="mt-6 text-2xl font-bold text-gray-800">Login</div>
          <div className="mt-1 text-lg text-gray-600">
            Access <span className="text-primary-600">Brancol UI</span> system with cognito
          </div>
          <div className="flex flex-col mt-8 w-full">
            <Formik
              initialValues={{
                username: '',
                password: '',
              }}
              validationSchema={SignInSchema}
              onSubmit={operations.login}
            >
              <Form className="w-full">
                <TextField name="username" label="Username" />
                <TextField name="password" label="Password" type="password" />
                <div className="mt-8 w-full">
                  <Button
                    size={ButtonSize.full}
                    type="submit"
                    state={state.isSubmitting ? ButtonState.submitting : ButtonState.normal}
                  >
                    Login
                  </Button>
                </div>
              </Form>
            </Formik>
            <div className="flex justify-center w-full">
              <div className="text-sm mt-10 text-gray-400">{"Don't"} have an account?</div>
              <div className="text-sm mt-10 text-primary-500 font-bold ml-1">
                <a
                  className="text-sm mt-3 text-primary-500 no-underline"
                  role="button"
                  onClick={operations.moveToRegister}
                >
                  Sign up
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}
