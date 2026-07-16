import Button from '@mui/material/Button';
import React from 'react'
import { RiLogoutCircleRLine } from "react-icons/ri";
import { Link, useNavigate } from 'react-router-dom';


function Logout() {
  const navigate = useNavigate()

  const handleLogout=()=>{
      localStorage.removeItem("userinfo")
      navigate("/login")

  }
  return (
   <section>
    <div className="flex flex-col justify-center items-center  w-full mx-auto h-[97vh]">
      <div className="">
        <RiLogoutCircleRLine className='text-[100px] text-primary'/>
      </div>
      <p className='text-xl mt-4 w-60 text-center text-text-secondary'>Oh no! You're leaving.... Are you sure?</p>
      <div className="flex flex-col md:flex-row mt-8 gap-5">
       <Link to="/home">
        <Button sx={{textTransform:"capitalize", fontSize:"16px", borderRadius:"10px"}} variant='outlined'>
          Naah, Just Kidding

        </Button>
       </Link>
        <Button
        onClick={handleLogout}
        sx={{textTransform:"capitalize", borderRadius:"10px"}} variant='contained'>Yes, Log Me Out</Button>

      </div>
     

    </div>
   </section>
  )
}

export default Logout