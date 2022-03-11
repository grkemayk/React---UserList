import { createContext, useContext, useEffect, useState } from "react";

const UsersContext = createContext();

export const UsersProvider=({children})=>
{
    const [users, setUsers] = useState([]);
    
    const values = {
        users,
        setUsers,
    }
  
    return(<UsersContext.Provider value={values}>{children}</UsersContext.Provider>)
}
export const useUsers = () => useContext(UsersContext)
