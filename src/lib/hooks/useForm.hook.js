
import { useState } from 'react'
import { INITIAL_STATE_FORM } from '../../constants';
import { validationFormEmail, validationFormPassword, validationFormPasswordConfirmation, validationFormUsername } from '../../validations';

// esvacio true 
const isEmpty = field => {

  if (!field) return true;
  if (field.value === '') return true;

  return false
}


export default function useForm() {
  const [form, setForm] = useState(INITIAL_STATE_FORM);

  const isValidationsFiels = e => {
    e.preventDefault();
    // console.log(e);
    const { password, email, confirmPassword, username } = e.target;

    !isEmpty(password) && validationFormPassword(setForm, password);

    !isEmpty(email) && validationFormEmail(setForm, email);

    !isEmpty(confirmPassword) && validationFormPasswordConfirmation(setForm, password, confirmPassword);

    !isEmpty() && validationFormUsername(setForm, username)


  };

  return {
    form,
    isValidationsFiels,
  };
}