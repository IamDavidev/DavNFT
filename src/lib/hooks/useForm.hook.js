
import { useState } from 'react'
import { INITIAL_STATE_FORM } from '../../constants';
import { validationFormEmail, validationFormName, validationFormPassword, validationFormPasswordConfirmation, validationFormUsername } from '../../validations';

// esvacio true  
const isEmpty = field => !field;


export default function useForm() {
  const [form, setForm] = useState(INITIAL_STATE_FORM);

  const isValidationsFiels = e => {
    e.preventDefault();

    const { password, email, confirmPassword, username, name } = e.target;

    !isEmpty(password) && validationFormPassword(setForm, password);

    !isEmpty(email) && validationFormEmail(setForm, email);

    !isEmpty(confirmPassword) && validationFormPasswordConfirmation(setForm, password, confirmPassword);

    !isEmpty(username) && validationFormUsername(setForm, username)

    !isEmpty(name) && validationFormName(setForm, name)

    console.log(name)


  };

  return {
    form,
    isValidationsFiels,
  };
}