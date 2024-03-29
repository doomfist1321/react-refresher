import { useState } from 'react';
import { createUserDocumentFromAuth, signInAuthUserWIthEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import { Button, BUTTON_TYPE_CLASSES } from '../button/button.component';
import { FormInput } from '../form-input/form-input.component';
import { ButtonsContainer, SignInContainer } from './sign-in-form.styles.jsx';


const defaultFields = {
  email: '',
  password: ''
}


export const SignInForm = () => {

  console.log('hit');

  const [formFields, setFormFields] = useState(defaultFields);
  const handleFormChange = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value })
  };
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  }

  const resetForm = () => {
    setFormFields(defaultFields);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { user } = await signInAuthUserWIthEmailAndPassword(email, password);
      resetForm();
    } catch (error) {
      console.error('Error in sign in: ', error);
    }
  }


  return (
    <SignInContainer >
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput label='Email' inputOptions={{ onChange: handleFormChange, value: email, name: "email", type: "email", required: true }} />
        <FormInput label='Password' inputOptions={{ onChange: handleFormChange, value: password, name: "password", type: "password", required: true }} />
        <ButtonsContainer >
          <Button type="submit">SIGN IN</Button>
          <Button type="button" buttonType={BUTTON_TYPE_CLASSES.google} onClick={signInWithGoogle} >GOOGLE SIGN IN</Button>
        </ButtonsContainer>
      </form>
    </SignInContainer>
  )
}