
import { useState } from 'react'
import { INITIAL_STATE_FORM } from '../../constants';
import { validationFormEmail, validationFormPassword, validationFormPasswordConfirmation } from '../../validations';



export default function useForm() {
  const [form, setForm] = useState(INITIAL_STATE_FORM);

  const isValidationsFiels = e => {
    e.preventDefault();
    console.log(e);
    const { password, email, confirmPassword } = e.target;

    password && password.value !== '' && validationFormPassword(setForm, password);

    email && email.value !== '' && validationFormEmail(setForm, email);

    confirmPassword &&
      confirmPassword.value !== '' && validationFormPasswordConfirmation(setForm, password, confirmPassword);
  };

  return {
    form,
    isValidationsFiels,
  };
}