import { Link } from "react-router-dom"

const ProfileUpdate=()=>{
    return <div>
        Update Profile Page
        <Link to={"/settings/profile/password"}>Update</Link>
    </div>
}
export default ProfileUpdate