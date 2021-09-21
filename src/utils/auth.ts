import Auth from "@aws-amplify/auth";
import { NextRouter } from "next/router"

const PASSWORD_KEY = 'auth_password';

export const moveToCode = (router: NextRouter, email: string, password: string) => {
  router.push({pathname: 'confirm', query: { email }})
  sessionStorage.setItem(PASSWORD_KEY, password);
}

export const loginWithSessionStorage = async (email: string) => {
  const password = sessionStorage.getItem(PASSWORD_KEY);
  if (!password) throw new Error('No password!');
  return Auth.signIn(email, password);
}