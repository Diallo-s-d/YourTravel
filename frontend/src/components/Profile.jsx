// Profile.js
import React from "react";
import "../styles/profile.css";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <div className="card_profile">
      <div className="profile">
        <div className="profile-details">
          <div className="user">
            <img src="src/assets/images/userR.jpg" alt="icone" />
          </div>
          <h1>Mon Profil</h1>
          <Link to="/updateUser">
            <h4> Modifier mon profil </h4>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;
