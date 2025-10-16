import React, { useEffect, useState } from "react";
import camera from "../assets/camera.svg";
import photo from "../assets/photo.png";
import { useLocation } from "react-router-dom";


const Account = () => {
    const location = useLocation();
    const user = location.state
    console.log(user)

 
  return (
    <div className="account-container">
      <div className="account-setting">
        <p>Account Settings</p>
      </div>
      <div className="image-info-container">
        <div className="image-container">
          <div className="profile-pic">
            <img src={photo} alt="" />
          </div>
          <div className="camera-pic">
            <img src={camera} alt="" />

          </div>

        </div>
        <div className="info-container">
          <span>{user.name.length > 0 ? user.name : "Name"}</span>
          <span>{user.email.length >0 ? user.email :"Email"}</span>
        </div>
      </div>
      <div className="content-container">
        <p>
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <div className="border"></div>
    </div>
  );
};

export default Account;
