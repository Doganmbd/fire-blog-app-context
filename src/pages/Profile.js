import { useAuthContext } from "../context/AuthContext"
import "./styles/profile.css";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const Profile = () => {

    const {currentUser} = useAuthContext()


  return (
    <div className="profilContainer">
        <AccountCircleRoundedIcon className="profileIcon" />
        <p>User Name  :  {currentUser?.displayName}</p>
        <p>User Email  :  {currentUser?.email}</p>
    </div>
  )
}

export default Profile