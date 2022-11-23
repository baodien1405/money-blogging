import { IconEyeClose, IconEyeOpen } from 'components/icon'
import React, { Fragment, useState } from 'react'
import Input from './Input'

const InputPassword = ({ control }) => {
  const [togglePassword, setTogglePassword] = useState(false)
  if (!control) return null

  return (
    <Fragment>
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
    </Fragment>
  )
}

export default InputPassword
