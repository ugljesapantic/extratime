import { NextRouter, useRouter } from "next/router"
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { supabase } from "../../config/supabase";

const PASSWORD_KEY = 'auth_password';

const extensionId = 'cnllcofkmmpfogkbengdmflgebmmnmgn';

export const loginWithSessionStorage = async (email: string) => {
  const password = sessionStorage.getItem(PASSWORD_KEY);
  if (!password) throw new Error('No password!');
  // return Auth.signIn(email, password);
}

// TODO
const Context = createContext<any | undefined>(undefined);

export const useAuth = () => useContext(Context);

export const AuthContext: React.FC<{isPublic?: boolean}> = ({children, isPublic}) => {
  // When null, its loading
  const [auth, setAuth] = useState<any | undefined | null>(null);

  const loadIt = useCallback(async () => {
    const session = supabase.auth.session()
    chrome.runtime?.sendMessage(extensionId, session) 
    setAuth(session?.user);
  }, [])

  useEffect(() => { 
    loadIt();
    supabase.auth.onAuthStateChange((ev, session) => {
      const user = session?.user;
      chrome.runtime?.sendMessage(extensionId, session) 
      setAuth(user);
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