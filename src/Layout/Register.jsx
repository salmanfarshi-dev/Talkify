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
import { getDatabase, push, ref, set } from "firebase/database";
import { RotatingLines } from "react-loader-spinner";
import { toast, ToastContainer } from "react-toastify";
import { HiOutlineSparkles } from "react-icons/hi";

function Register() {
  const auth = getAuth();
  const db = getDatabase();
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
            set(ref(db, "userlist/" + userCredential.user.uid), {
              username: name,
              email: email,
              profilepic: "https://i.ibb.co.com/h19t8xhC/avatar.png",
            });

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
    <section className="min-h-screen bg-gradient-to-br from-[#34697B] via-[#7AE2E5] to-[#248E92]">
      <div className="flex flex-col-reverse md:flex-row min-h-screen">
        <div className="w-full md:w-1/2 flex justify-center items-center px-5 py-10">
          <div className="w-full max-w-[450px] md:bg-transparent  rounded-[32px] p-6 md:p-10 md:shadow-none  shadow-[0_20px_60px_rgba(0,0,0,0.28)]">
            <div className="w-16 h-16 md:hidden block rounded-2xl bg-secondary/10 flex justify-center items-center mb-6 mx-auto md:mx-0">
              <HiOutlineSparkles className="text-3xl text-[#248E92]" />
            </div>
            <Heading text="Get started with easily register" />
            <div className="md:hidden h-2"></div>

            <p className=" text-gray-500 text-sm md:text-base md:mt-3 mb-8">
              Free register and you can enjoy it
            </p>

            <div className="flex flex-col gap-y-5 w-full">
              <div className="">
                <TextField
                  value={email}
                  onChange={handleemail}
                  label="Email Address"
                  variant="outlined"
                  sx={{
                    width: "100%",
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "16px",
                      backgroundColor: "",
                      color: "#11175D",
                    },
                  }}
                />
                {emailerror && (
                  <p className="text-red-400 text-sm md:text-[16px] mt-1">
                    {emailerror}
                  </p>
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
                      borderRadius: "16px",
                      backgroundColor: "",
                      color: "#11175D",
                    },
                  }}
                />
                {nameerror && (
                  <p className="text-red-400 text-sm md:text-[16px] mt-1">
                    {nameerror}
                  </p>
                )}
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
                      borderRadius: "16px",
                      backgroundColor: "",
                      color: "#11175D",
                    },
                  }}
                />

                <div
                  onClick={handleeye}
                  className="absolute top-1/2 -translate-y-1/2 right-5 text-lg text-gray-500 cursor-pointer"
                >
                  {show ? <VscEye /> : <VscEyeClosed />}
                </div>
                {passworderror && (
                  <p className="text-red-400 text-sm md:text-[16px] mt-1">
                    {passworderror}
                  </p>
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
                  variant="contained"
                >
                  Sign up
                </Button>
              )}

              <p className="text-center text-gray-500 text-sm">
                Already have an account ?{" "}
                <Link to="/login">
                  <span className="text-[#c55f06]  font-semibold">Sign In</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <div className="hidden md:block md:w-1/2 ">
          <img
            src={RegisterImage}
            alt=""
            className="w-full h-screen object-cover "
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
