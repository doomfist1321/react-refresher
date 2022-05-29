import { getRedirectResult } from "firebase/auth";
import { useEffect } from "react";
import { SignUpForm } from "../../components/sign-up/sign-up-form.component";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect
} from "../../utils/firebase/firebase.utils"

export const SignIn = () => {

  useEffect(() => {
    (async function getAuthResult() {
      const response = await getRedirectResult(auth);
      console.log(response);
      if (response) {
        await createUserDocumentFromAuth(response.user);
      }
    })()
  }, [])

  const logGoogleuser = async () => {
    const { user } = await signInWithGooglePopup();
    console.log("user", user);
    await createUserDocumentFromAuth(user)
  }

  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log("user", user);
    await createUserDocumentFromAuth(user)
  }

  return <div>
    <h1>Sign In page</h1>
    <button onClick={logGoogleuser}>Sign in with Google popup</button>
    <button onClick={logGoogleRedirectUser}>Sign in with Google redirect</button>
    <SignUpForm />
  </div>
}