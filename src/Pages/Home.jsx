import React from 'react'
import HomeCard from '../Component/HomeCard'
import { FaUserGroup } from "react-icons/fa6";


function Home() {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
      <HomeCard icon={<FaUserGroup  className='text-blue-600'/> 
}  tittle="Friends" number="128" status="Total Friends"/>
      <HomeCard icon={<FaUserGroup  className='text-blue-600'/> 
}  tittle="Friends" number="128" status="Total Friends"/>
      <HomeCard icon={<FaUserGroup  className='text-blue-600'/> 
}  tittle="Friends" number="128" status="Total Friends"/>
      <HomeCard icon={<FaUserGroup  className='text-blue-600'/> 
}  tittle="Friends" number="128" status="Total Friends"/>
      <HomeCard icon={<FaUserGroup  className='text-blue-600'/> 
}  tittle="Friends" number="128" status="Total Friends"/>
    </div>
  )
}

export default Home