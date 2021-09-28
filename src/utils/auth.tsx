import Auth, { CognitoUser } from "@aws-amplify/auth";
import { Hub } from "@aws-amplify/core";
import { NextRouter, useRouter } from "next/router"
import { createContext, useCallback, useContext, useEffect, useState } from "react";

const PASSWORD_KEY = 'auth_password';

const extensionId = 'cnllcofkmmpfogkbengdmflgebmmnmgn';

export const moveToCode = (router: NextRouter, email: string, password: string) => {
  router.push({pathname: 'confirm', query: { email }})
  sessionStorage.setItem(PASSWORD_KEY, password);
}

export const loginWithSessionStorage = async (email: string) => {
  const password = sessionStorage.getItem(PASSWORD_KEY);
  if (!password) throw new Error('No password!');
  return Auth.signIn(email, password);
}

const Context = createContext<CognitoUser | undefined>(undefined);

export const useAuth = () => useContext(Context);

export const AuthContext: React.FC<{isPublic?: boolean}> = ({children, isPublic}) => {
  // When null, its loading
  const [auth, setAuth] = useState<CognitoUser | undefined | null>(null);

  const loadIt = useCallback(async () => {
    try {
      const user = await Auth.currentAuthenticatedUser();
      chrome.runtime.sendMessage(extensionId, user) 
      setAuth(user);
    } catch (e) {
      setAuth(undefined);
      chrome.runtime.sendMessage(extensionId, undefined) 
    }
  }, [])

  useEffect(() => { 
    loadIt();
    Hub.listen('auth', (data) => {
      switch(data.payload.event) {
        case 'signIn':
          // Send data to extension
          chrome.runtime.sendMessage(extensionId, data.payload.data) 
          setAuth(data.payload.data);
          break;
        case 'signOut':
          setAuth(undefined);
          chrome.runtime.sendMessage(extensionId, undefined) 
          break;
      }
    })
  }, [loadIt])

  // return loading screen
  if (auth === null) return null;

  return <Context.Provider value={auth}>
    {children}
  </Context.Provider>
}

export const Redirect: React.FC<{path: string}> = ({path}) => {
  const router = useRouter();

  useEffect(() => {
    router.push(path)
  }, [path, router])

  // TODO return loading
  return null;
}