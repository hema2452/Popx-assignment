import React from "react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <p className="welcome-heading">Welcome to PopX</p>
        <p className="welcome-paragraph">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        </p>
      
        <div className="welcome-button-container" >
          <button 
          onClick = {() => navigate("signup")} 
          className="welcome-button-account">
            Create Account
          </button>
    
          <button 
          onClick = {() => navigate("signin")} 
          className="welcome-button-signin">
            Already Registered?Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
