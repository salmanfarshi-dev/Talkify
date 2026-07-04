import React from 'react'
import Image from '../assets/salman.jpeg'
import { useNavigate } from 'react-router-dom'

function MessageCard({id, setSelectedChat}) {

    const navigate = useNavigate()


    const handleClick=()=>{
        if(window.innerWidth<768){
            navigate(`/message/${id}`)
        }
        else {
    setSelectedChat(id);
  }
    }


  return (
    <div onClick={handleClick} className='hover:bg-secondary duration-300 cursor-pointer rounded-[10px] py-3 px-2'>
        <div className="flex items-center gap-x-2">
            <div className="w-14 h-14 rounded-full overflow-hidden">
                <img src={Image} alt="" className='w-full h-full object-cover'/>
            </div>
            <div className="flex flex-col ">
                <div className="w-70  flex justify-between items-center">
                    <h4 className='text-xl font-medium truncate lg:w-50'>Salman Farshi</h4>
                    <span className='text-xs font-normal font-sans'> 10:30 AM</span>
                </div>
                <p className='font-sans lg:w-60 truncate'>Hey! How are you doing?</p>
            </div>
        </div>


    </div>
  )
}

export default MessageCard