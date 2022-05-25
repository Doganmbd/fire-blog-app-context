import {createContext ,useState ,useEffect,useContext} from 'react';
import {userObserver} from "../utils/firebase"


const AuthContext = createContext();




const AuthContextProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState()



  useEffect(() => {
    //usser signin signout olduğunda takip eden fonk.
     userObserver(setCurrentUser);
    }, [])


  return (
    <AuthContext.Provider value={{currentUser}}>
        {children}
    </AuthContext.Provider>
  )
}



export const useAuthContext = ()=>{
  return useContext(AuthContext)
}





export default AuthContextProvider