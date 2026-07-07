import Button from '@mui/material/Button';
import React from 'react'
import { RiLogoutCircleRLine } from "react-icons/ri";


function Logout() {
  return (
   <section>
    <div className="flex flex-col justify-center items-center  w-full mx-auto h-[97vh]">
      <div className="">
        <RiLogoutCircleRLine className='text-[100px] text-primary'/>
      </div>
      <p className='text-xl mt-4 w-60 text-center text-text-secondary'>Oh no! You're leaving.... Are you sure?</p>
      <div className="flex flex-col md:flex-row mt-8 gap-5">
        <Button sx={{textTransform:"capitalize", fontSize:"16px", borderRadius:"10px"}} variant='outlined'>
          Naah, Just Kidding

        </Button>
        <Button sx={{textTransform:"capitalize", borderRadius:"10px"}} variant='contained'>Yes, Log Me Out</Button>

      </div>
     

    </div>
   </section>
  )
}

export default Logout