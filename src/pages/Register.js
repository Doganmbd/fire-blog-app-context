import React,{useState} from "react";
import blogLogo from "../assests/blog.png";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import googleLogo from "../assests/google.png";
import {createUser,signUpProvider} from "../utils/firebase";
import {useNavigate} from "react-router-dom";


const Register = () => {
  const [email,setEmail] = useState();
  const [password, setPassword] = useState()
  const [fullName, setFullName] = useState();
  const navigate=useNavigate()


  const handleSubmit = (e)=> {
    const displayName=fullName;
    e.preventDefault();
    createUser(email,password,displayName,navigate);
  }


  const handleRegister = ()=> {
    signUpProvider(navigate)
  }

  const style = {
    "& label.Mui-focused": {
      color: "#e84224",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#ef6f59",
      },
    },
  };

  return (
    <div className="registerMain">
      <div className="registerContainer">
        <img src={blogLogo} alt="blog-logo" className="blogLogo" />
        <h1>── Register ──</h1>

        <form action="" onSubmit={handleSubmit} >
          <TextField
            sx={style}
            name="fullName"
            required
            id="outlined-required"
            label="Full Name"
            defaultValue=""
            onChange={(e)=> setFullName(e.target.value)}
            
          />

          <TextField
            sx={style}
            name="email"
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
            onChange={(e) => setEmail(e.target.value)}
            
          />
          <TextField
            sx={style}
            name="password"
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e)=> setPassword(e.target.value)}

            
          />

          <Button variant="contained" type="submit" className="registerButton">
            Register
          </Button>
          <Button variant="contained" className="googleButton" onClick={handleRegister} >
            WITH <img src={googleLogo} alt="google-logo" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Register;