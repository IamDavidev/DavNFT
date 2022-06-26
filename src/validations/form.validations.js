
export function checkingIsValidPassword(setPassword, password) {

  const value = password.value

  const setErrorPassword = msg => {
    setPassword(
      prev => ({
        ...prev,
        password: {
          message: msg,
          checkingIsValid: false
        }
      })
    )
    return false
  }


  if (value === '') return setErrorPassword('Password is required')

  if (value.length < 8) return setErrorPassword('Password must be at least 8 characters')

  if (value.length > 64) return setErrorPassword('Password must be less than 64 characters')

  if (value.search(/[a-z]/) === -1) return setErrorPassword('Password must contain at least one lowercase letter')

  if (value.search(/[A-Z]/) === -1) return setErrorPassword('Password must contain at least one uppercase letter')

  if (value.search(/[0-9]/) === -1) return setErrorPassword('Password must contain at least one number')

  setPassword(prev => ({
    ...prev,
    password: {
      message: null,
      checkingIsValid: true,
      value
    }
  }))
  return true
}

export function checkingIsValidPasswordConfirmation(setConfirmPassword, password, confirmPassword) {

  const value = confirmPassword.value
  const valuePassword = password.value

  const setErrorConfirmPassword = msg => {
    setConfirmPassword(prev => ({
      ...prev,
      confirmPassword: {
        message: msg,
        checkingIsValid: false,
      }
    }))
    return false
  }

  // if (!password) return setErrorConfirmPassword('Password is required')
  if (value === '') return setErrorConfirmPassword('Password confirmation is required')

  if (value !== valuePassword) return setErrorConfirmPassword("password doesn't match")


  setConfirmPassword(prev => ({
    ...prev,
    confirmPassword: {
      message: null,
      checkingIsValid: true,
      value
    }
  }))

  return true
}

export function checkingIsValidEmail(setEmail, email) {

  const value = email.value

  const setErrorEmail = msg => {
    setEmail(prev => ({
      ...prev,
      email: {
        message: msg,
        checkingIsValid: false,
      }
    }))
    return false
  }

  if (value === '') return setErrorEmail('Email is required')

  if (value.search(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/) === -1) return setErrorEmail('Email is not valid')

  if (value.length > 64) return setErrorEmail('Email must be less than 64 characters')

  setEmail(prev => ({
    ...prev,
    email: {
      message: null,
      checkingIsValid: true,
      value
    }
  }))
  return true
}

export function checkingIsValidUsername(setUserName, username) {

  const value = username.value

  const setErrorUserName = msg => {
    setUserName(prev => ({
      ...prev,
      username: {
        message: msg,
        checkingIsValid: false,
      }
    }))
    return false
  }


  if (value === '') return setErrorUserName('Username is required')

  if (value.length < 8) return setErrorUserName('Username must be at least 8 characters')

  if (value.length > 64) return setErrorUserName('Username must be less than 64 characters')

  if (value.search(/[a-z]/) === -1) return setErrorUserName('Username must contain at least one lowercase letter')

  //  search for spaces with regex
  if (value.search(/\s/) !== -1) return setErrorUserName('Username must not contain spaces')


  setUserName(prev => ({
    ...prev,
    username: {
      message: null,
      checkingIsValid: true,
      value
    }
  }))
  return true

}

export function checkingIsValidName(setName, name) {

  const value = name.value;

  const setErrorName = msg => {
    setName(prev => ({
      ...prev,
      name: {
        message: msg,
        checkingIsValid: false
      }
    }))
    return false
  }


  if (value === '') return setErrorName('Name is required')


  setName(prev => ({
    ...prev,
    name: {
      message: null,
      checkingIsValid: true,
      value
    }
  }))

  return true
}

