import React from 'react'
import Sidebar from '../Pages/Sidebar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <section className='flex mt-2 mb-2 ml-2'>
        <div className="w-2/12">
        <Sidebar/>

        </div>
        <div className="w-10/12 pr-10">
        <Outlet/>
        
        </div>

    </section>
  )
}

export default RootLayout