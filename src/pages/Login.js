import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { forgotPassword, signIn, signUpProvider } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";
import google from "../assests/google.png";
import nextForgot from "../assests/password.png";
import blog from "../assests/blog.png";


const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
    // console.log(email, password);
    navigate("/");
  };

  const handleProviderLogin = () => {
    signUpProvider(navigate);
  };

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
        <img src={blog} alt="blog" className="blogLogo" />
        <h1>── Login ──</h1>

        <form action="" onSubmit={handleSubmit}>
          <TextField
            sx={style}
            className="input"
            required
            id="outlined-required"
            label="Email"
            defaultValue=""
            onChange={(e) => setEmail(e.target.value)}
            type="email"
          />
          <TextField
            sx={style}
            required
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}
          />

          <Button variant="contained" className="registerButton" type="submit">
            Login
          </Button>
          <Button
            variant="contained"
            className="googleButton"
            onClick={handleProviderLogin}
          >
            WITH <img src={google} alt="google-logo"/>
          </Button>
        </form>

        <div style={{ fontFamily: "sans-serif", fontSize: "12px" }}>
          <p>
            Are you not registered?{" "}
            <Button onClick={() => navigate("/register")}>Register</Button>
          </p>
          <p>
            Do you forgot the password?{" "} 
            <Button onClick={() => forgotPassword(email)}>
            <img src={nextForgot} alt="nextForgot" />
              
            </Button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
