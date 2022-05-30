import { useAuthContext } from "../context/AuthContext"


const Profile = () => {

    const {currentUser} = useAuthContext()


  return (
    <div>
        <p>User Name:{currentUser?.displayName}</p>
        <p>User Email:{currentUser?.email}</p>
    </div>
  )
}

export default Profile