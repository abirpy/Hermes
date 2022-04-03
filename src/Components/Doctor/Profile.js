import profilePic from "./profilePic.jpeg"

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
        <button className="btn" style={{marginTop: "6px"}}>Update Profile</button>
      </div>
    </div>
  )
}

export default Profile