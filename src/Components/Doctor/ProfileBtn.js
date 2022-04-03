import { Link } from "react-router-dom"
import profileIcon from "./profileIcon.png"

const ProfileBtn = ({ css }) => {
  return (
    <div>
      <Link to='/profile'>
        <button className={`btn ${css}`}>
          <img src={profileIcon} alt="Settings Icon" width="24px" height="26px" />
        </button>
      </Link>
    </div>
  )
}

export default ProfileBtn