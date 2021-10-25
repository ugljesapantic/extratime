import { NextRouter, useRouter } from "next/router"
import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { supabase } from "../../config/supabase";

const extensionId = 'cnllcofkmmpfogkbengdmflgebmmnmgn';

// TODO
const Context = createContext<any | undefined>(undefined);

export const useAuth = () => useContext(Context);

export const sendIt = (body: {email: string; password: string}) => {
  chrome.runtime?.sendMessage(extensionId, body);
}

export const AuthContext: React.FC<{isPublic?: boolean}> = ({children, isPublic}) => {
  // When null, its loading
  const [auth, setAuth] = useState<any | undefined | null>(null);

  const loadIt = useCallback(async () => {
    const session = supabase.auth.session()
    setAuth(session?.user);
  }, [])

  useEffect(() => { 
    loadIt();
    supabase.auth.onAuthStateChange((ev, session) => {
      const user = session?.user;
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