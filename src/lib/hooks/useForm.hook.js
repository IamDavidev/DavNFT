
import { useEffect, useState } from 'react'
import { INITIAL_STATE_FORM } from '../../constants';
import { isValidEmail, isValidForm, isValidName, isValidPassword, isValidPasswordConfirmation, isValidUsername } from '../../validations';
import useLogin from './useLogin.hook';

export function updateUser(form, isValidForm, signIn) {
  if (!isValidForm) return
  const { username, name, password, email } = form
  return signIn({ username: username.value, name: name.value, password: password.value, email: email.value })

}




export default function useForm() {
  const [form, setForm] = useState(INITIAL_STATE_FORM);
  const [formValid, setFormValid] = useState(false);
  const { SignIn } = useLogin()


  const ValidationsFiels = e => {
    e.preventDefault();

    const { password, email, confirmPassword, username, name } = e.target;

    !!name && isValidName(setForm, name)

    !!username && isValidUsername(setForm, username)

    !!password && isValidPassword(setForm, password);

    !!email && isValidEmail(setForm, email);

    !!confirmPassword && isValidPasswordConfirmation(setForm, password, confirmPassword);

  };

  useEffect(() => {
    isValidForm(setFormValid, form)
    if (formValid) SignIn({
      username: form.username.value,
      name: form.name.value,
      password: form.password.value,
      email: form.email.value,
      banner: "",
      profilePicture: "",
      verified: false,
      isLoggedIn: true,
    })
    console.log("Exuced useForm useEffect")
  }, [form, formValid])



  return {
    form,
    ValidationsFiels,
  };
}