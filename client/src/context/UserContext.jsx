import { createContext, useContext } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null); //Aqui empiezo a poner todos mis estados globales
  
    return (
      <UserContext.Provider value={{ user, setUser }}> //esta es la salido 
        {children}
      </UserContext.Provider>
    );
  };
  
  export default UserProvider;
  
  export const useUserContext = () => useContext(UserContext);