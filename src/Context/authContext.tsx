import React, {createContext, ReactNode, useState} from 'react'

interface AuthContextProps {
  authenticated: boolean;
}

interface AuthProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextProps)

export function AuthProvider({children}: AuthProps){

  const [authenticated, setAutheticated] = useState(false)

  function handleLogin(){
    
  }

  return(
    <AuthContext.Provider value={{ authenticated }}>
      {children}
    </AuthContext.Provider>
  )
}