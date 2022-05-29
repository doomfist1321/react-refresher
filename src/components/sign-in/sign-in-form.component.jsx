import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils';
import { Button } from '../button/button.component';
import { FormInput } from '../form-input/form-input.component';
import './sign-in-form.styles.scss';

const defaultFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

export const SignUpForm = () => {

  const [formFields, setFormFields] = useState(defaultFields);
  const handleFormChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value })
  };
  console.log(formFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetForm = () => {
    setFormFields(defaultFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    // validate
    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName: displayName });
      resetForm();
    } catch (error) {
      console.error('Error in sign up: ', error);
    }


  }


  return (
    <div className='sign-up-container'>
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Display Name' inputOptions={{ onChange: handleFormChange, value: displayName, name: "displayName", type: "text", required: true }} />
        <FormInput label='Email' inputOptions={{ onChange: handleFormChange, value: email, name: "email", type: "email", required: true }} />
        <FormInput label='Password' inputOptions={{ onChange: handleFormChange, value: password, name: "password", type: "password", required: true }} />
        <FormInput label='Confirm password' inputOptions={{ onChange: handleFormChange, value: confirmPassword, name: "confirmPassword", type: "password", required: true }} />
        <Button type="submit">SIGN UP</Button>
      </form>
    </div>
  )
}