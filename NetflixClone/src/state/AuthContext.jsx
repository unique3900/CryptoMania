import React, { createContext, useState } from 'react'

export const Auth = createContext();
const AuthContext = ({children}) => {
    const [user,setUser] = useState();
  return (
    <Auth.Provider value={{user,setUser}}>
        {children}
    </Auth.Provider>
  )
}

export default AuthContext
