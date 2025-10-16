import { useState } from 'react';
import React from "react";
import { FaAsterisk } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';

const SignUp = (props) => {
  const navigate = useNavigate();
  const[fullname,setFullName] = useState("")
  const[phoneNumber,setPhoneNumber] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[companyName,setCompanyName] = useState("")

  console.log(props)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(fullname.length <=1) return window.alert("Full name should be greater than 1")
    else if(password.length <8) return window.alert("Password must contain 8 letters")
    else if(companyName.length <=1 ) return window.alert("Company name should be greater than 1")
    else if(phoneNumber.length !=10 ) return window.alert("Phone number must be 10 digits")
    else{

      props.user.setUserData((prev) => [ ...prev,{
        name:fullname,
        phoneNumber:phoneNumber,
        email:email,
        password:password,
        companyname:companyName

      }])

      const user = {name:fullname, email:email}
      navigate("/account" ,{state:user})
    }
    setFullName("")
    setPassword("")
    setPhoneNumber("")
    setCompanyName("")
    setEmail("")

  } 
  return (
    <div className="container">
      <div className="content">
        <div>
          <p className="heading">Create Your <br />PopX account</p>
        </div>
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <legend>Full Name <FaAsterisk style={{ color: 'red', width:"10px" }} /> </legend>
            <input type="text" id="fullName" placeholder="Enter your name" className="signup-input" value={fullname} onChange={(e) => setFullName(e.target.value)} required/>
          </fieldset>
          <fieldset className="fieldset">
            <legend>Phone Number <FaAsterisk style={{ color: 'red', width:"10px" }}/> </legend>
            <input type="mobile" id="phoneNumber" placeholder="Enter Phone Number" className="signup-input"  value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required/>
          </fieldset>
          <fieldset className="fieldset">
            <legend>Email <FaAsterisk style={{ color: 'red',  width:"10px" }} /> </legend>
            <input type="email" id="email" placeholder="Enter Email address " className="signup-input" value={email} onChange={(e) => setEmail(e.target.value)}  required />
          </fieldset>
          <fieldset className="fieldset">
            <legend>Password <FaAsterisk style={{ color: 'red',  width:"10px" }} /> </legend>
            <input type="password" id="password" placeholder="Enter Password" className="signup-input" value={password} onChange={(e) => setPassword(e.target.value)} required/>
          </fieldset>
          <fieldset className="fieldset">
            <legend>Company Name <FaAsterisk style={{ color: 'red',  width:"10px" }} /> </legend>
            <input type="text" id="company" placeholder="Enter Company name" className="signup-input" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required/>
          </fieldset>
          <fieldset style={{border:"none"}}>
            Are you an Agency?  <FaAsterisk style={{ color: 'red' ,  width:"10px"}} />
            <br />
            <input type="radio" name="selected" id="yes" required/>
            <label htmlFor="yes">Yes</label>
            <input type="radio" name="selected" id="no" required/>
            <label htmlFor="no">No</label>
          </fieldset>
          <br />
          <button className="signup-button">Create Account</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
