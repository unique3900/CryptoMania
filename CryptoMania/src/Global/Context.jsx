import React, { createContext, useEffect, useState } from 'react'

export const Currency = createContext();
const Context = ({ children }) => {
    const [currency, setCurrency] = useState("INR");
    useEffect(() => {
        console.log(currency);
    }, [currency])
    
  return (
    <Currency.Provider value={{currency, setCurrency}}>
      {children}
    </Currency.Provider>
  )
}

export default Context
