import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginImage from "../assets/login.jpg";
import Heading from "../Component/Heading";
import Button from "@mui/material/Button";
import { FcGoogle } from "react-icons/fc";
import TextField from "@mui/material/TextField";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";
import {
  getAuth,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  sendPasswordResetEmail,
} from "firebase/auth";
import { toast, ToastContainer } from "react-toastify";
import { RotatingLines } from "react-loader-spinner";
import { LuKeyRound } from "react-icons/lu";
import { FaFacebook } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import FacebookLoader from "../Component/FacebookLoader";

function SignIn() {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const [loadingScreen, setLoadingScreen] = useState(false);
  let [email, setEmail] = useState("");
  let [emailreset, setEmailReset] = useState("");
  let [password, setPassword] = useState("");
  let [emailerror, setEmailError] = useState("");
  let [passworderror, setPasswordError] = useState("");
  let [loader, setLoader] = useState(false);

  let [show, setShow] = useState(false);
  let emialregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  let [popup, setPopup] = useState(false);

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
    } else if (!emialregex.test(email)) {
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
          if (userCredential.user.emailVerified) {
            toast.success("Login successfully");

            const user = userCredential.user;

            setEmail("");
            setPassword("");
            setLoadingScreen(true);

            setTimeout(() => {
              navigate("/home");
            }, 1500);

            setLoader(false);
          } else {
            toast.error("Please verified your email");
            setLoader(false);
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

  const handlegoogle = async () => {
    try {
      await signInWithPopup(auth, provider);

      setLoadingScreen(true);

      setTimeout(() => {
        navigate("/home");
      }, 1500);
    } catch (error) {
      toast.error(error.code);
    }
  };

  const handleForgot = () => {
    setPopup(true);
  };

  const handleemailreset = (e) => {
    setEmailReset(e.target.value);
    setEmailError("");
  };
  const handleReset = () => {
    if (!emailreset) {
      setEmailError("Enter your email");
      return;
    }

    setLoader(true);
    sendPasswordResetEmail(auth, emailreset)
      .then(() => {
        toast.success("Check your email");
        setPopup(false);
        setLoader(false);
      })
      .catch((error) => {
        setLoader(false);
        const errorCode = error.code;

        toast.error(error.message);
      });
  };

  if (loadingScreen) {
    return <FacebookLoader />;
  }
  return (
    <section className="min-h-screen  bg-gradient-to-br from-[#34697B] via-[#7AE2E5] to-[#248E92]">
      <div className="relative">
        {/* Login Form */}
        <div
          className={`${
            popup ? "blur-sm opacity-60 pointer-events-none" : ""
          } transition-all duration-300`}
        >
          <div className="flex flex-col-reverse md:flex-row min-h-screen">
            <div className="hidden md:block md:w-1/2 h-screen">
              <img
                src={LoginImage}
                alt=""
                className="w-full h-screen object-cover hidden md:block"
              />
            </div>

            <div className="w-full md:w-1/2 flex justify-center items-center px-5 py-10">
              <div className="w-full max-w-[450px] bg-white rounded-[32px] p-6 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,.28)] border-2 border-white/30">
                <div className="w-16 h-16 rounded-2xl bg-[#248E92]/10 flex justify-center items-center mb-6">
                  <span className="text-3xl">🔐</span>
                </div>
                <Heading text="Login to your account!" />

                <div className="flex flex-col mt-8 gap-y-5 w-full">
                  {/* Email */}
                  <div>
                    <TextField
                      value={email}
                      onChange={handleemail}
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "16px",
                          backgroundColor: "#fafafa",
                        },
                      }}
                      label="Email Address"
                      variant="outlined"
                    />
                    {emailerror && (
                      <p className="text-red-400 mt-1">{emailerror}</p>
                    )}
                  </div>

                  {/* Password */}
                  <div className="relative">
                    <TextField
                      onChange={handlepassword}
                      value={password}
                      sx={{
                        width: "100%",
                        "& .MuiOutlinedInput-root": {
                          borderRadius: "16px",
                          backgroundColor: "#fafafa",
                        },
                      }}
                      label="Password"
                      variant="outlined"
                      type={show ? "text" : "password"}
                    />

                    <div
                      onClick={handleeye}
                      className="absolute top-1/2 -translate-y-1/2 right-5 text-lg text-gray-500 cursor-pointer"
                    >
                      {show ? <VscEye /> : <VscEyeClosed />}
                    </div>

                    {passworderror && (
                      <p className="text-red-400 mt-1">{passworderror}</p>
                    )}
                  </div>

                  <p
                    onClick={handleForgot}
                    className="text-black/80 mt-1 text-end text-xs md:text-[14px] cursor-pointer"
                  >
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
                      wrapperClass="flex justify-center"
                    />
                  ) : (
                    <Button
                      sx={{
                        background:
                          "linear-gradient(135deg,#FF6B6B 0%,#FF8E53 100%)",
                        borderRadius: "16px",
                        py: 1.8,
                        textTransform: "none",
                        fontSize: "16px",
                        fontWeight: 700,
                        boxShadow: "0px 15px 40px rgba(255,107,107,.35)",
                        "&:hover": {
                          background:
                            "linear-gradient(135deg,#FF6B6B 0%,#FF8E53 100%)",
                        },
                      }}
                      fullWidth
                      variant="contained"
                      onClick={handlelogin}
                    >
                      Login to Continue
                    </Button>
                  )}

                  <div className="flex justify-center items-center gap-x-5">
                    <Button
                      onClick={handlegoogle}
                      sx={{
                        py: 1.8,
                        width: "100%",
                        borderRadius: "16px",
                        textTransform: "none",
                        fontWeight: 600,
                        backgroundColor: "#34697b66",
                        border: "1px solid #e5e7eb",
                        fontSize: "16px",
                      }}
                      variant="outlined"
                      startIcon={<FcGoogle />}
                    >
                      Continue with Google
                    </Button>
                  </div>

                  <p className="text-center font-sans text-sm text-[#03014C]">
                    Don’t have an account ?
                    <Link to="/">
                      <span className="text-[#EA6C00] cursor-pointer ml-1">
                        Register for free
                      </span>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Popup Modal */}
        {popup && (
          <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
            <div className="bg-white/95 backdrop-blur-xl py-10 w-[90%] max-w-[500px] px-6 rounded-[28px] border border-white/30 shadow-2xl">
              <div className="flex flex-col justify-center items-center">
                <div className="w-[50px] h-[50px] rounded-full flex bg-black/20 justify-center items-center">
                  <LuKeyRound className="text-[#FF6B6B] text-xl" />
                </div>

                <h1 className="text-2xl text-black text-center font-semibold py-4">
                  Forget Password
                </h1>

                <p className="text-center text-[14px] text-gray-500 w-[90%]">
                  We'll send you the updated instructions shortly
                </p>
              </div>

              <div className="mt-5">
                <TextField
                  value={emailreset}
                  onChange={handleemailreset}
                  fullWidth
                  label="Email"
                  variant="standard"
                />

                {emailerror && (
                  <p className="text-red-400 mt-1">{emailerror}</p>
                )}

                <p
                  onClick={() => setPopup(false)}
                  className="mt-4 text-black/70 text-center cursor-pointer text-[15px]"
                >
                  Back to sign in
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
                    wrapperClass="flex justify-center"
                  />
                ) : (
                  <Button
                    sx={{
                      background: "#FF6B6B",
                      borderRadius: "8px",
                      textTransform: "capitalize",
                      py: 1.5,
                      mt: 2,
                    }}
                    fullWidth
                    variant="contained"
                    onClick={handleReset}
                  >
                    Send Reset Password
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
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
