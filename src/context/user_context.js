import React, { useContext, useEffect, useState } from 'react'

const UserContext = React.createContext()

export const UserProvider = ({ children }) => {
  const [myUser, setMyUser] = useState(null)
  useEffect(() => {
    setMyUser('Finn')
  }, [])

  return (
    <UserContext.Provider value={{ myUser }}>{children}</UserContext.Provider>
  )
}

export const useUserContext = () => {
  return useContext(UserContext)
}
