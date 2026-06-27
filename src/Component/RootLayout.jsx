import React from 'react'
import Sidebar from '../Pages/Sidebar'

function RootLayout() {
  return (
    <section className='mt-2 mb-2 ml-2'>
        <div className="w-2/12">
        <Sidebar/>

        </div>
        <div className="10/12">
        </div>

    </section>
  )
}

export default RootLayout