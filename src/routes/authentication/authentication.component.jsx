import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import { SignInForm } from "../../components/sign-in/sign-in-form.component";
import { SignUpForm } from "../../components/sign-up/sign-up-form.component";
import {
  auth,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils"

import { AuthenticationContainer } from "./authentication.styles.jsx";

export const Authentication = () => {

  useEffect(() => {
    (async function getAuthResult() {
      const response = await getRedirectResult(auth);
      if (response) {
        await createUserDocumentFromAuth(response.user);
      }
    })()
  }, [])

  return (
    <AuthenticationContainer className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  )
}