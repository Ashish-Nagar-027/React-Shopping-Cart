import React, { createContext, useState } from 'react'

export const CartApi = createContext()

const Context = ({ children }) => {
    
    const [cart, setCart] = useState([])
     
  return <CartApi.Provider value={{cart, setCart}}>{children}</CartApi.Provider>
}

export default Context