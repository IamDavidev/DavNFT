
export function validationFormPassword(setPassword, password) {


  const value = password.value

  const setErrorPassword = msg => setPassword(
    prev => ({
      ...prev,
      password: {
        message: msg,
        isValid: false
      }
    })
  )


  if (value === '') return setErrorPassword('Password is required')

  if (value.length < 8) return setErrorPassword('Password must be at least 8 characters')

  if (value.length > 64) return setErrorPassword('Password must be less than 64 characters')

  if (value.search(/[a-z]/) === -1) return setErrorPassword('Password must contain at least one lowercase letter')

  if (value.search(/[A-Z]/) === -1) return setErrorPassword('Password must contain at least one uppercase letter')

  if (value.search(/[0-9]/) === -1) return setErrorPassword('Password must contain at least one number')



  console.log("validationPassword", value)
  return setPassword(prev => ({
    ...prev,
    password: {
      message: "success",
      isValid: true
    }
  }))
}


export function validationFormPasswordConfirmation(setConfirmPassword, password, confirmPassword) {

  const value = confirmPassword.value
  const valuePassword = password.value

  const setErrorConfirmPassword = msg => setConfirmPassword(prev => ({
    ...prev,
    confirmPassword: {
      message: msg,
      isValid: false
    }
  }))


  if (value !== valuePassword) return setErrorConfirmPassword("password doesn't match")


  return setConfirmPassword(prev => ({
    ...prev,
    confirmPassword: {
      message: "success",
      isValid: true
    }
  }))

}


export function validationFormEmail(setEmail, email) {

  const value = email.value

  const setErrorEmail = msg => {
    setEmail(prev => ({
      ...prev,
      email: {
        message: msg,
        isValid: false
      }
    }))
  }

  if (value === '') return setErrorEmail('Email is required')

  if (value.search(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) === -1) return setErrorEmail('Email is not valid')

  if (value.length > 64) return setErrorEmail('Email must be less than 64 characters')

  return setEmail(prev => ({
    ...prev,
    email: {
      message: "success",
      isValid: true
    }
  }))
}