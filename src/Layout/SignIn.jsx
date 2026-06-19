import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../assets/login.jpg";
import Heading from "../Component/Heading";
import Button from "@mui/material/Button";
import { FcGoogle } from "react-icons/fc";
import TextField from "@mui/material/TextField";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";

function SignIn() {
  const auth = getAuth();
    const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailerror, setEmailError] = useState("");
  let [passworderror, setPasswordError] = useState("");
  let [loader, setLoader] = useState(false);

  let [show, setShow] = useState(false);
  let emialregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const handleeye = () => {
    setShow(!show);
  };

  const handleemail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };

  const handlepassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handlelogin = (e) => {
    e.preventDefault();

    if (!email) {
      setEmailError("Please fill out this field");
    }else if (!emialregex.test(email)) {
      setEmailError("Invalid Email");
    }
    if (!password) {
      setPasswordError("Please fill out this field");
    }

    if (email && password && emialregex.test(email)) {
      setLoader(true);
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log(userCredential);
          if(userCredential.user.emailVerified){
                      toast.success("Login successfully");

          const user = userCredential.user;

          setEmail("");
          setPassword("");
          navigate("/home");

          setLoader(false);

          }else{
            toast.error("Please verified your email")
            setLoader(false)
          }


        })
        .catch((error) => {
          setLoader(false);
          const errorCode = error.code;
          if (errorCode.includes("auth/invalid-credential")) {
            toast.error("Invalid Credential");
          }
        });
    }
  };

  const handlegoogle=()=>{
    signInWithPopup(auth, provider)
  .then((result) => {
    navigate("/home")
  }).catch((error) => {
   
    const errorCode = error.code;
    const errorMessage = error.message;
    
  });
  }

  return (
    <section>
      <div className="flex gap-x-18">
        <div className="w-1/2 hidden md:block">
          <img
            src={LoginImage}
            alt=""
            className="w-full h-screen object-cover hidden md:block"
          />
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center h-screen">
          <div className="md:w-[500px]">
            <Heading text="Login to your account!" />

            <Button
            onClick={handlegoogle}
              sx={{
                py:{
                  xs:1.5,
                  md:2
                },
                px:{
                  xs:3
                },
                
                color: "#03014C",
                textTransform: "capitalize",
                fontWeight: "semibold",
                fontSize: {
                  xs:"12px",
                  md:"13px"
                },
                padding: "15px 58px",
                marginTop: "32px",
                fontFamily: "sans-serif",
                fontWidth: "600",
                border: "1px solid #11175d4d ",
              }}
              variant="outlined"
              startIcon={<FcGoogle />}
            >
              Login with Google
            </Button>
            <div className="flex flex-col  mt-8      gap-y-8 w-[380px]">
              <div className="">
                <TextField
                  value={email}
                  onChange={handleemail}
                  sx={{
                    width: "100%",
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#03014c80",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#03014c80",
                    },
                  }}
                  id="standard-basic"
                  label="Email Addres"
                  variant="standard"
                />
                {emailerror && (
                  <p className="text-red-400 mt-1">{emailerror}</p>
                )}
              </div>
              <div className=" relative">
                <TextField
                  onChange={handlepassword}
                  value={password}
                  sx={{
                    
                    "& .MuiOutlinedInput-root:hover fieldset": {
                      borderColor: "red",
                    },
                    "& .MuiInput-underline:after": {
                      borderBottomColor: "#03014c80",
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#03014c80",
                    },
                    width: "100%",
                  }}
                  id="standard-basic"
                  label="Password"
                  variant="standard"
                  type={show ? "text" : "password"}
                />

                <div
                  onClick={handleeye}
                  className="absolute top-1/2 cursor-pointer right-4"
                >
                  {show ? <VscEye /> : <VscEyeClosed />}
                </div>
                {passworderror && (
                  <p className="text-red-400 mt-1">{passworderror}</p>
                )}
              </div>
              <p className="text-black/50 mt-1 text-end text-xs md:text-[14px] cursor-pointer">
                Forget Password
              </p>

              {loader ? (
                <RotatingLines
                  visible={true}
                  height="30"
                  width="30"
                  color="grey"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass="flex justify-center "
                />
              ) : (
                <Button
                  sx={{
                    background: "#FF6B6B",
                    borderRadius: "86px",
                    fontWeight: "semibold",
                    fontSize: {
                      xs:"16px",
                      md:"20px"
                    },
                    textTransform: "capitalize",
                    py:{
                      xs:"12px",
                      md:"15px"
                    },
                  }}
                  variant="contained"
                  onClick={handlelogin}
                >
                  Login to Continue
                </Button>
              )}

              <p className="text-center font-sans text-sm text-[#03014C]">
                Don’t have an account ?{" "}
                <Link to="/">
                  {" "}
                  <span className="text-[#EA6C00] cursor-pointer">Sign up</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </section>
  );
}

export default SignIn;
