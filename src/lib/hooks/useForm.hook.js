
import { useEffect, useState } from 'react'
import { INITIAL_STATE_FORM } from '../../constants';
import { checkingIsValidEmail, checkingIsValidName, checkingIsValidPassword, checkingIsValidPasswordConfirmation, checkingIsValidUsername } from '../../validations';
import useAuth from './useAuth.hook';


// export function updateUser(form, isValidForm, signIn) {
//   if (!isValidForm) return
//   console.log("🚀 ~ file: useForm.hook.js ~ line 10 ~ updateUser ~ isValidForm", isValidForm)
//   const { username, name, password, email } = form
//   return signIn({ username: username.value, name: name.value, password: password.value, email: email.value })

// }

export function isValidForm({
  setForm,
  setFormValid,
  name,
  password,
  confirmPassword,
  username,
  email,
}) {

  const isValidName = checkingIsValidName(setForm, name)
  const isValidPassword = checkingIsValidPassword(setForm, password)
  const isValidConfirmPassword = checkingIsValidPasswordConfirmation(setForm, password, confirmPassword)
  const isValidUserName = checkingIsValidUsername(setForm, username)
  const isValidEmail = checkingIsValidEmail(setForm, email)



  const validForm = [isValidName, isValidPassword, isValidConfirmPassword, isValidUserName, isValidEmail]

  console.log("🚀 ~ file: useForm.hook.js ~ line 35 ~ validForm", validForm)

  if (validForm.includes(false)) return setFormValid(false)

  setFormValid(true)
}


export default function useForm() {

  const [form, setForm] = useState(INITIAL_STATE_FORM);
  const [formValid, setFormValid] = useState(false);
  console.log("🚀 ~ file: useForm.hook.js ~ line 47 ~ useForm ~ formValid", formValid)
  const { signUpWithGmailandPassword } = useAuth()

  const ValidationsFiels = e => {
    e.preventDefault();
    const { password, email, confirmPassword, username, name } = e.target;
    isValidForm({
      setForm,
      name,
      password,
      confirmPassword,
      username,
      email,
      setFormValid
    })
  };

  useEffect(() => {
    formValid && signUpWithGmailandPassword({
      email: form.email.value,
      password: form.password.value,
      userName: form.username.value,
      name: form.name.value,
      address: form.name.value,
      banner: form.banner.value,
      profilePicture: form.profilePicture.value,
      isLoggedIn: true,
      verified: false,
    })
    console.log("userEffect useForm")
  }, [form, formValid])



  return {
    form,
    ValidationsFiels,
  };
}