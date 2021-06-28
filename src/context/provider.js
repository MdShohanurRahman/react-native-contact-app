import React, { createContext, useReducer } from "react";
import auth from "./reducers/auth";
import contacts from "./reducers/contacts";
import initialAuthState from "./initialState/authInitialState";
import contactsInitialState from "./initialState/contactsInitialState";

export const GlobalContext = createContext({})

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, initialAuthState)
  const [contactState, contactDispatch] = useReducer(contacts, contactsInitialState)
  return (
    <GlobalContext.Provider
      value={{authState, contactState, authDispatch, contactDispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
