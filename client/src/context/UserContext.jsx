import { useContext, createContext, useState } from 'react';

export const UserContext = createContext();

const UserProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false) 
  

  return (
    <UserContext.Provider value={{setIsAuthenticated, isAuthenticated, user, setUser}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider;

export const useUserContext = () => useContext(UserContext)