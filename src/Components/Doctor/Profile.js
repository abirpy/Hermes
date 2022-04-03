import profilePic from "./profilePic.jpeg"
import { Link } from "react-router-dom"
import Button from 'react-bootstrap/Button'

const Profile = () => {
  return (
    <div>
      <div className="profilePic">
        <img src={profilePic} alt="Profile Picture" className="rounded-corners" />
        <h1 style={{color: "white", fontSize: "35px", marginTop: "25px"}}>Welcome András!</h1>
        <div style={{color: "white", textAlign: "left", lineHeight: "13px", marginTop: "18px"}}>
          <p>Age: 60</p>
          <p>Neurologist</p>
        </div>
        <Button variant="warning" size="lg">Update Profile</Button>"  "
        <Link to = {'/patients'}>
          <Button variant="warning" size="lg">Patient Lists</Button>
        </Link>
      </div>
    </div>
  )
}

export default Profile