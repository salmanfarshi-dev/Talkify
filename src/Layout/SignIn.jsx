import React, { useState } from "react";
import { Link } from "react-router-dom";
import LoginImage from "../assets/login.jpg";
import Heading from "../Component/Heading";
import Button from "@mui/material/Button";
import { FcGoogle } from "react-icons/fc";
import TextField from "@mui/material/TextField";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";

function SignIn() {
  let [show, setShow] = useState(false);

  const handleeye = () => {
    setShow(!show);
  };

  return (
    <section>
      <div className="flex gap-x-18">
        <div className="w-1/2">
          <img
            src={LoginImage}
            alt=""
            className="w-full h-screen object-cover"
          />
        </div>
        <div className="w-1/2 flex justify-center items-center h-screen">
          <div className="w-[500px]">
            <Heading text="Login to your account!" />

            <Button
              sx={{
                color: "#03014C",
                textTransform: "capitalize",
                fontWeight: "semibold",
                fontSize: "13px",
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
              <TextField
                sx={{
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
              <div className=" relative">
                <TextField
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
              </div>

              <Button
                sx={{
                  background: "#FF6B6B",
                  borderRadius: "86px",
                  fontWeight: "semibold",
                  fontSize: "20px",
                  textTransform: "capitalize",
                  padding: "15px 0 ",
                }}
                variant="contained"
              >
                Login to Continue
              </Button>

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
    </section>
  );
}

export default SignIn;
