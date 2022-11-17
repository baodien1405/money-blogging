import { yupResolver } from '@hookform/resolvers/yup'
import { useAuth } from 'contexts/auth-context'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink, useNavigate } from 'react-router-dom'
import AuthenticationPage from './AuthenticationPage'
import * as yup from 'yup'
import Field from 'components/field'
import Label from 'components/label'
import Input from 'components/input'
import { IconEyeClose, IconEyeOpen } from 'components/icon'
import Button from 'components/button'
import { toast } from 'react-toastify'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from 'firebaseApp/firebase-config'

const schema = yup.object({
  email: yup
    .string()
    .email('Please enter valid email address')
    .required('Please enter your email address'),
  password: yup.string().min(8, 'Your password must be at least 8 characters or greater')
})

function SignInPage() {
  const { userInfo } = useAuth()
  const navigate = useNavigate()
  const [togglePassword, setTogglePassword] = useState(false)
  const {
    control,
    formState: { isSubmitting, errors },
    handleSubmit
  } = useForm({
    resolver: yupResolver(schema)
  })

  useEffect(() => {
    if (userInfo?.email) navigate('/')
  }, [navigate, userInfo?.email])

  useEffect(() => {
    document.title = 'Login page'
    const arrError = Object.values(errors)
    if (arrError.length > 0) {
      toast.error(arrError[0]?.message, {
        pauseOnHover: false,
        delay: 0
      })
    }
  }, [errors])

  const handleSignUp = async (values) => {
    await signInWithEmailAndPassword(auth, values.email, values.password)
    toast.success('Login successfully!!!')
    navigate('/')
  }

  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignUp)}>
        <Field>
          <Label htmlFor="email">Email address</Label>
          <Input
            name="email"
            type="text"
            placeholder="Please enter your email address"
            control={control}
          />
        </Field>

        <Field>
          <Label htmlFor="password">Password</Label>
          <Input
            name="password"
            type={togglePassword ? 'text' : 'password'}
            placeholder="Please enter your password"
            control={control}
          >
            {!togglePassword ? (
              <IconEyeClose className="input-icon" onClick={() => setTogglePassword(true)} />
            ) : (
              <IconEyeOpen className="input-icon" onClick={() => setTogglePassword(false)} />
            )}
          </Input>
        </Field>

        <div className="have-account">
          You have had not an account? <NavLink to="/sign-up">Register now</NavLink>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          loading={isSubmitting}
          style={{
            width: '100%',
            maxWidth: '300px',
            margin: '0 auto'
          }}
        >
          Login
        </Button>
      </form>
    </AuthenticationPage>
  )
}

export default SignInPage
