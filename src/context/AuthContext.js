import {createContext ,useState ,useEffect,useContext} from 'react';
import {EditUser, userObserver} from "../utils/firebase"


export const AuthContext = createContext();




const AuthContextProvider = ({children}) => {

  const [currentUser, setCurrentUser] = useState()


  const handleFavIcon = (e, data) => {
    e.stopPropagation();
    // console.log(data)
    if (!currentUser) {
      // toastWarnNotify("please login to like")
    } else {
        if (data.likedUserIds) {
          if (data.likedUserIds.includes(currentUser.uid)) {
            EditUser({ ...data, likedUserIds: data.likedUserIds.filter((item) => !(item === currentUser.uid)) })
            data.likedUserIds.filter((item) => !(item === currentUser.uid))
          } else {
            data.likedUserIds.push(currentUser.uid)
            EditUser({ ...data, likedUserIds: data.likedUserIds })
          }
        } else {
          EditUser({ ...data, likedUserIds: currentUser.uid.split(" ") })
        }
    }
  }



  useEffect(() => {
    //usser signin signout olduğunda takip eden fonk.
     userObserver(setCurrentUser);
    }, [])


  return (
    <AuthContext.Provider value={{currentUser,handleFavIcon}}>
        {children}
    </AuthContext.Provider>
  )
}



export const useAuthContext = ()=>{
  return useContext(AuthContext)
}





export default AuthContextProvider