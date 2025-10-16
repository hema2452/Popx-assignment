import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = (props) => {

  const [email, setEmail] = useState("")
  const[password,setPassword] = useState("")
  const navigate = useNavigate()
  
  const handleLoginData = (e) => {
    e.preventDefault();
    if(email.length <=0 || password.length<=0) return alert("Enter email and password")
    const storedData = JSON.parse(localStorage.getItem("userData"))
  console.log(storedData)
    const findedUser = storedData.find((user) =>(
      user.email == email && user.password == password))

    if(findedUser){
      alert("Login Successful");
      const user = {name:findedUser.name, email:findedUser.email}
      navigate("/account" ,{state:user})
    }
    else{
      alert("Wrong Creditentials")
    }


  }
  return (
    <div className="container">
      <div className="content">
        <div>
          <p className="heading">
            Signin to your <br />
            PopX account
          </p>
          <p className="signin-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <form onSubmit={handleLoginData}>
          <fieldset className="fieldset">
            <legend className="signin-email">Email Address</legend>
            <input
              type="text"
              id="email"
              placeholder="Enter email address"
              className="signin-email-input"
              value={email}
              onChange={(e) =>setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="signin-password">Password</legend>
            <input
              type="text"
              id="password"
              placeholder="Enter password"
              className="sign-password-input"
              value = {password}
              onChange = {(e) => setPassword(e.target.value)}
            />
          </fieldset>
          <button className="signin-button">Login</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
