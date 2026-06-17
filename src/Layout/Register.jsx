import React, { useState } from "react";
import { Link } from "react-router-dom";
import RegisterImage from "../assets/registration.jpg";
import Heading from "../Component/Heading";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";


function Register() {

  let [show, setShow] = useState(false)
  let [email, setEmail] = useState("")
  let [emailerror, setEmailError] = useState("")
  let [name, setName] = useState("")
  let [nameerror, setNameError] = useState("")
  let [password, setPassword] = useState("")
  let [passworderror, setPasswordError] = useState("")


const handleeye=()=>{
  setShow(!show)
}

const handleemail=(e)=>{
  setEmail(e.target.value)
}
const handlename=(e)=>{
  setName(e.target.value)
}
const handlepassword=(e)=>{
  setPassword(e.target.value)
}

const handlesignup=()=>{
  console.log(name)
  console.log(email)
  console.log(password)
}


  return (
    <section>
      <div className="flex gap-x-18">
        <div className="w-1/2 flex justify-end items-center h-screen">
          <div className="w-[500px]">
            <Heading text="Get started with easily register" />

            <p className="text-xl font-nunito font-normal text-black/50 mt-3 mb-10">
              Free register and you can enjoy it
            </p>

            <div className="flex flex-col        gap-y-8 w-[380px]">
              <TextField
              value={email}
              onChange={handleemail}
                label="Email Address"
                variant="outlined"
               sx={{
                  
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8.6px",
                  },
                  "& .MuiOutlinedInput-root fieldset": {
                    borderColor: "#11175d4d",
                    
                  },
                  "& .MuiOutlinedInput-root:hover fieldset": {
                    borderColor: "#11175d4d",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#11175d4d",
                  
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                     color:"#11175db3",
                    
                  },
                }}
              />
              <TextField
              value={name}
              onChange={handlename}
                id="outlined-basic"
                label="Full name"
                variant="outlined"
                sx={{
                  
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8.6px",
                  },
                  "& .MuiOutlinedInput-root fieldset": {
                    borderColor: "#11175d4d",
                    
                  },
                  "& .MuiOutlinedInput-root:hover fieldset": {
                    borderColor: "#11175d4d",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#11175d4d",
                  
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                     color:"#11175db3",
                    
                  },
                }}
              />
              <div className="relative w-full">
                <TextField
                value={password}
                onChange={handlepassword}
                type={show? "text" : "password"}
                label="Password"
                variant="outlined"
                sx={{
                  width:"100%",
                  
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "8.6px",
                  },
                  "& .MuiOutlinedInput-root fieldset": {
                    borderColor: "#11175d4d",
                    
                  },
                  "& .MuiOutlinedInput-root:hover fieldset": {
                    borderColor: "#11175d4d",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "#11175d4d",
                  
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                     color:"#11175db3",
                    
                  },
                }}
              />

              <div onClick={handleeye} className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer">

              {
                show ? 
                <VscEye />
                :
                <VscEyeClosed />
                
              }

              </div>
              </div>

              <Button
              onClick={handlesignup}
              
                sx={{
                  background:"#FF6B6B",
                  borderRadius: "86px",
                  fontWeight: "semibold",
                  fontSize: "20px",
                  textTransform: "capitalize",
                  padding: "15px 0 ",
                }}
                variant="contained"
              >
               Sign up
              </Button>

              <p className="text-center font-sans text-sm text-[#03014C]">
                Already have an account ?{" "}
                <Link to="/login">
                  <span className="text-[#EA6C00]">Sign In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <img
            src={RegisterImage}
            alt=""
            className="w-full h-screen object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export default Register;
