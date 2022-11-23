import Button from 'components/button'
import Field from 'components/field'
import Input from 'components/input'
import Label from 'components/label'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, db } from 'firebaseApp/firebase-config'
import { addDoc, collection } from 'firebase/firestore'
import { NavLink, useNavigate } from 'react-router-dom'
import AuthenticationPage from './AuthenticationPage'
import InputPassword from 'components/input/InputPassword'

const schema = yup.object({
  fullname: yup.string().required('Please enter your fullname'),
  email: yup
    .string()
    .email('Please enter valid email address')
    .required('Please enter your email address'),
  password: yup.string().min(8, 'Your password must be at least 8 characters or greater')
})

function SignUpPage() {
  const {
    control,
    formState: { isSubmitting, errors },
    handleSubmit
  } = useForm({
    resolver: yupResolver(schema)
  })
  const navigate = useNavigate()

  useEffect(() => {
    document.title = 'Register page'
    const arrError = Object.values(errors)
    if (arrError.length > 0) {
      toast.error(arrError[0]?.message, {
        pauseOnHover: false,
        delay: 0
      })
    }
  }, [errors])

  const handleSignIn = async (values) => {
    await createUserWithEmailAndPassword(auth, values.email, values.password)
    await updateProfile(auth.currentUser, {
      displayName: values.fullname
    })

    const colRef = collection(db, 'users')
    addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password
    })
    toast.success('Register successfully!!!')
    navigate('/')
  }

  return (
    <AuthenticationPage>
      <form className="form" onSubmit={handleSubmit(handleSignIn)}>
        <Field>
          <Label htmlFor="fullname">Fullname</Label>
          <Input
            name="fullname"
            type="text"
            placeholder="Please enter your fullname"
            control={control}
          />
        </Field>

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
          <InputPassword control={control} />
        </Field>

        <div className="have-account">
          You already have an account? <NavLink to="/sign-in">Login</NavLink>
        </div>

        <Button
          type="submit"
          kind="primary"
          disabled={isSubmitting}
          loading={isSubmitting}
          style={{
            width: '100%',
            maxWidth: '300px',
            margin: '0 auto'
          }}
        >
          Sign up
        </Button>
      </form>
    </AuthenticationPage>
  )
}

export default SignUpPage
