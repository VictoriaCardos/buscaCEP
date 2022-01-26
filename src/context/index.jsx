import { React, useState, createContext } from 'react'

export const context = createContext()

export const ContextProvider = props => {
  const [cep, setCep] = useState({})

  return (
    <context.Provider
      value={{
        cep,
        setCep
      }}
    >
      {props.children}
    </context.Provider>
  )
}
