import React, { useEffect } from 'react'
import { Redirect, useAuth } from '../src/utils/auth';

const CheckAuthPage: React.FC = () => {

  const auth = useAuth();

  useEffect(() => {
    if (auth) window.close()
  }, [auth])

  if (!auth) return <Redirect path="/login" />
  
  // TODO Improve
  return null;
}


export default CheckAuthPage;