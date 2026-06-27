import React from 'react'
import {createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Message from './Pages/Message';
import Notification from './Pages/Notification';
import Setting from './Pages/Setting';
import Logout from './Pages/Logout';
import Sidebar from './Pages/Sidebar';
import Home from './Pages/Home';
import RootLayout from './Component/RootLayout';







const router = createBrowserRouter(
  createRoutesFromElements(
   <Route>
     
     <Route path='/' element={<RootLayout/>}/>
    <Route path='/' element={ <Registration/> }/>
    <Route path='login' element={ <Login/> }/>
    <Route path='home' element={ <Home/> } />
    <Route path='message' element={ <Message/>} />
    <Route path='notification' element={<Notification/>}/>
    <Route path='setting' element={<Setting/>}/>
    <Route path='logout' element={<Logout/>}/>
   



   </Route>
  )
);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App