import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterImage from "../assets/registration.jpg";
import Heading from "../Component/Heading";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { RotatingLines } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";

function Register() {
  const auth = getAuth();
  const navigate = useNavigate();

  let [show, setShow] = useState(false);
  let [email, setEmail] = useState("");
  let [emailerror, setEmailError] = useState("");
  let [name, setName] = useState("");
  let [nameerror, setNameError] = useState("");
  let [password, setPassword] = useState("");
  let [passworderror, setPasswordError] = useState("");
  let [loader, setLoader] = useState(false);

  let emialregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let uppercase = /(?=.*?[A-Z])/;
  let lowercase = /(?=.*?[a-z])/;
  let digit = /(?=.*?[0-9])/;
  let spcialcharacter = /(?=.*?[#?!@$%^&*-])/;

  const handleeye = () => {
    setShow(!show);
  };

  const handleemail = (e) => {
    setEmail(e.target.value);
    setEmailError("");
  };
  const handlename = (e) => {
    setName(e.target.value);
    setNameError("");
  };
  const handlepassword = (e) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handlesignup = () => {
    if (!email) {
      setEmailError("Please fill out this field");
    } else if (!emialregex.test(email)) {
      setEmailError("Invalid Email");
    }
    if (!name) {
      setNameError("Please fill out this field");
    }
    if (!password) {
      setPasswordError("Please fill out this field");
    } else if (!uppercase.test(password)) {
      setPasswordError("At least one uppercase letter is required");
    } else if (!lowercase.test(password)) {
      setPasswordError("At least one lowercase letter is required");
    } else if (!digit.test(password)) {
      setPasswordError("At least one digit letter is required");
    } else if (!spcialcharacter.test(password)) {
      setPasswordError("At least one spcial character  is required");
    }

    if (
      name &&
      email &&
      emialregex.test(email) &&
      password &&
      uppercase.test(password) &&
      lowercase.test(password) &&
      digit.test(password) &&
      spcialcharacter.test(password)
    ) {
      setLoader(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          sendEmailVerification(auth.currentUser).then(() => {
            toast.success("Verification email sent!");
          });

          setEmail("");
          setName("");
          setPassword("");
          navigate("/login");
          setLoader(false);
        })
        .catch((error) => {
          setLoader(false);
          const errorCode = error.code;
          if (errorCode.includes("auth/email-already-in-use")) {
            toast.error("Email already used");
          }
        });
    }
  };

  return (
    <section>
      <div className="flex gap-x-18">
        <div className="md:w-1/2 w-full flex justify-end items-center h-screen">
          <div className="flex flex-col  justify-center md:justify-start md:items-start items-center mx-auto md:w-[500px]">
            <Heading text="Get started with easily register" />

            <p className=" text-sm md:text-xl font-nunito font-normal text-black/50 mt-3 mb-10">
              Free register and you can enjoy it
            </p>

            <div className="flex flex-col        gap-y-6 w-[350px]">
              <div className="">
                <TextField
              
                  value={email}
                  onChange={handleemail}
                  label="Email Address"
                  variant="outlined"
                  sx={{
                    width: "100%",

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
                      color: "#11175db3",
                    },
                  }}
                />
                {emailerror && (
                  <p className="text-red-400 text-sm md:text-[16px] mt-1">{emailerror}</p>
                )}
              </div>

              <div className="">
                <TextField
                  value={name}
                  onChange={handlename}
                  id="outlined-basic"
                  label="Full name"
                  variant="outlined"
                  sx={{
                    width: "100%",

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
                      color: "#11175db3",
                    },
                  }}
                />
                {nameerror && <p className="text-red-400 text-sm md:text-[16px] mt-1">{nameerror}</p>}
              </div>
              <div className="relative w-full">
                <TextField
                  value={password}
                  onChange={handlepassword}
                  type={show ? "text" : "password"}
                  label="Password"
                  variant="outlined"
                  sx={{
                    width: "100%",

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
                      color: "#11175db3",
                    },
                  }}
                />

                <div
                  onClick={handleeye}
                  className="absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer"
                >
                  {show ? <VscEye /> : <VscEyeClosed />}
                </div>
                {passworderror && (
                  <p className="text-red-400 text-sm md:text-[16px] mt-1">{passworderror}</p>
                )}
              </div>

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
                  onClick={handlesignup}
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
                      md:"15px"
                    },
                  }}
                  variant="contained"
                >
                  Sign up
                </Button>
              )}

              <p className="text-center font-sans text-sm text-[#03014C]">
                Already have an account ?{" "}
                <Link to="/login">
                  <span className="text-[#EA6C00]">Sign In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="w-1/2 hidden md:block">
          <img
            src={RegisterImage}
            alt=""
            className="w-full h-screen object-cover"
          />
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

export default Register;
