import React from "react";
import { Link } from "react-router-dom";
import RegisterImage from "../assets/registration.jpg"
import Heading from "../Component/Heading";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Register() {
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
                id="outlined-basic"
                label="Email Address"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "gray",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "gray",
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Full name"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "gray",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "gray",
                  },
                }}
              />
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root.Mui-focused fieldset": {
                    borderColor: "gray",
                  },
                  "& .MuiInputLabel-root.Mui-focused": {
                    color: "gray",
                  },
                }}
              />

              <Button
                sx={{
                  borderRadius: "86px",
                  fontWeight: "semibold",
                  fontSize: "20px",
                  textTransform: "capitalize",
                  padding: "15px 0 ",
                }}
                variant="contained"
              >
                Contained
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
