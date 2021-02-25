import React, {createContext, ReactNode, useEffect, useState} from 'react'
import api from '../services/api'

interface AuthContextProps {
  handleAuth: () => void;
  handleLogout: () => void;
  authenticated: boolean;
}

interface AuthProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({children}: AuthProps){


  const [authenticated, setAutheticated] = useState(false)
  const [loading, setLoading] = useState(true)  
 

  useEffect(() => {
    const token = localStorage.getItem('token')

    if(token){
      api.defaults.headers.authorization = token
      setAutheticated(true)
    }

    setLoading(false)
  }, [])

  function handleAuth(){

    const token = localStorage.getItem('token')
    api.defaults.headers.authorization = token;
    setAutheticated(true)

  }

  function handleLogout(){

    setAutheticated(false)
    localStorage.removeItem('token')
    api.defaults.headers.authorization = undefined;

  }
  
  if(loading){
    return <h1>Loading ...</h1>
  }

  return(
    <AuthContext.Provider value={{
      authenticated, 
      handleAuth,
      handleLogout
      }}>
      {children}
    </AuthContext.Provider>
  )
}